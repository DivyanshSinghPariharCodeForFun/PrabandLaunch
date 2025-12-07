import { NextRequest, NextResponse } from "next/server";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn("⚠️ RECAPTCHA_SECRET_KEY is not set");
    return false;
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();
    
    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // Typically, scores above 0.5 are considered legitimate
    // You can adjust this threshold based on your needs
    const scoreThreshold = 0.5;
    
    if (data.success && data.score >= scoreThreshold) {
      console.log(`✅ reCAPTCHA verified with score: ${data.score}`);
      return true;
    } else {
      console.warn(`❌ reCAPTCHA verification failed. Success: ${data.success}, Score: ${data.score}`);
      return false;
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // reCAPTCHA token is MANDATORY for all submissions
    if (!formData.captchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA token is required." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token with Google
    const isValid = await verifyRecaptcha(formData.captchaToken);
    if (!isValid) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Identify submission type and format message for Slack
    let slackMessage: string;
    
    if (formData.email && !formData.phone) {
      // Hero section email submission
      console.log("📧 Hero section email submission");
      slackMessage = `New Demo Request!\n\nEmail: ${formData.email}\nMessage: ${formData.message || "This person wants to reach"}\nInquiry Type: ${formData.inquiryType?.join(', ') || 'Demo'}`;
    } else if (formData.email && formData.phone) {
      // Contact form submission
      console.log("📝 Contact form submission");
      slackMessage = `New Contact Form Submission!\n\nName: ${formData.name || 'N/A'}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInstitute: ${formData.instituteName || 'N/A'}\nInquiry Types: ${formData.inquiryType?.join(', ') || 'N/A'}\nMessage: ${formData.message || 'N/A'}`;
    } else {
      // Generic submission
      slackMessage = JSON.stringify(formData, null, 2);
    }
    
    // Log the incoming request
    console.log("📥 Received submission:", JSON.stringify(formData, null, 2));

    // Forward the request to the external Slack API with properly formatted text
    // Include the origin header so the Express API's origin validation passes
    const response = await fetch("https://slack-hook.praband.com/api/slack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Origin": "https://praband.com",
        "Referer": "https://praband.com/",
      },
      body: JSON.stringify({
        text: slackMessage
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ External API error:", errorText);
      return NextResponse.json(
        { error: "Failed to send message to Slack" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("✅ Successfully forwarded to external API");
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

