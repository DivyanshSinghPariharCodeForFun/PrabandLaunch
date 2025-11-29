"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50 -mt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Everything you need to manage <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Your Institution
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/DashboardMain.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

