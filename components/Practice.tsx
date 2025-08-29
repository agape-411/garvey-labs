"use client";

import Image from "next/image";
import React from "react";

const practiceAreas = [
  {
    title: "Sustainable Renewable Energy Developments",
    description:
      "We help renewable energy developers engage with local communities, ensuring long-term success and social license to operate.",
    subtext: "Civic engagement for clean energy projects",
    image: "/images/R1.jpg",
  },
  {
    title: "Green Data Centers & Sustainable Digital Infrastructure",
    description:
      "We support organizations building resilient digital infrastructure through sustainability positioning and localized engagement strategies.",
    subtext: "Sustainability positioning for digital infrastructure",
    image: "/images/D1.jpg",
  },
  {
    title: "Labor Unions",
    description:
      "We support unions in advancing worker-centric agendas through compelling storytelling and strategic communications.",
    subtext: "Worker-centered communications and organizing support",
    image: "/images/L1.jpg",
  },
  {
    title: "Social Impact Organizations",
    description:
      "We partner with organizations shaping public narratives to amplify their missions and drive community-centered change.",
    subtext:
      "Strategic messaging for social justice and voting rights advocates",
    image: "/images/S1.png",
  },
];

const Practice = () => {
  return (
    <section className="bg-[#bccbd4] text-black py-16 px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto space-y-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A365D] mb-8">
          Our Practice Areas
        </h2>

        {practiceAreas.map((area, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 !== 0 ? "md:flex md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full h-72 md:h-96 rounded overflow-hidden shadow-lg">
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A365D]">
                {area.title}
              </h3>
              <p className="text-lg md:text-lg font-medium text-[#345d96]">
                {area.subtext}
              </p>
              <p className="text-gray-800 text-lg md:text-lg leading-relaxed">
                {area.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Practice;
