import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the incoming request
    console.log("📥 Received submission:", JSON.stringify(body, null, 2));
    
    // Identify submission type
    if (body.email && !body.phone) {
      console.log("📧 Hero section email submission");
    } else if (body.email && body.phone) {
      console.log("📝 Contact form submission");
    }

    // Forward the request to the external Slack API
    const response = await fetch("https://slack-hook.praband.com/api/slack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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

