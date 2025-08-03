"use client";

import React from "react";
import Practice from "./Practice"
import Services from "./Services";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div id="home" className="font-sans text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-top h-full text-center px-6 pt-15 md:pt-20">
          <h1 className="text-4xl lg:text-6xl md:text-5xl font-semibold tracking-tight mb-6">
            Garvey Labs
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            Strategic Communications & Community Engagement for Social Impact Organizations & Sustainable Renewable Energy Developments
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 bg-white text-gray-900">
        <Practice />
        <Services />
      </section>
    </div>
  );
};

export default HomeSection;
