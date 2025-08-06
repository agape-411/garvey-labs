"use client";

import React from "react";
import Image from "next/image";

const RenewableEnergyPage = () => {
  return (
    <div className="text-[#2D3748] bg-white leading-relaxed text-[1.1rem]">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/R1.jpg"
          alt="Renewable Energy Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-5xl">
            Sustainable Renewable Energy Development Community Engagement
          </h1>
          <p className="text-xl md:text-lg mt-4 max-w-3xl text-green-100">
            Building community support for clean energy projects through innovative engagement
          </p>
        </div>
      </div>

      {/* Renewable Energy Approach */}
      <section className="bg-[#fbfcff] text-[#2D3748] py-20 px-6 md:px-20 transition-all duration-500">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-16">
          Our Renewable Energy Approach
        </h2>
        {[
          {
            title: "Project Planning & Strategy",
            desc: "Comprehensive stakeholder mapping and engagement strategy development for sustainable renewable energy projects.",
            image: "/images/RE5.png",
          },
          {
            title: "Community Relations",
            desc: "Building and maintaining positive relationships with political, business, and local community stakeholders throughout energy project development.",
            image: "/images/RE1.png",
          },
          {
            title: "Public Involvement",
            desc: "Facilitating dialogue that transforms complex renewable energy projects into accessible community conversations.",
            image: "/images/RE4.png",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10 mb-16`}
          >
            <div className="md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={100}
                className="rounded-xl w-full h-90 object-cover shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-green-700 mb-4">{item.title}</h3>
              <p className="text-lg leading-relaxed font-normal">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Tools & Methodologies */}
      <section className="bg-[#d2fcd5] text-[#2D3748] py-20 px-6 md:px-20 transition-all duration-500">
        <h2 className="text-3xl md:text-5xl sm:text-lg font-bold text-center text-green-800 mb-12">
          Tools & Methodologies
        </h2>
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-green-500">
          {[
            {
              title: "Interactive Engagement Tools",
              desc: "We use real-time polling, interactive maps, dedicated web platforms, and mobile surveys to foster active participation and feedback.",
            },
            {
              title: "Stakeholder Analysis",
              desc: "Detailed community mapping, cultural assessments, and engagement planning ensure inclusive outreach and representation.",
            },
            {
              title: "Data-Driven Strategy",
              desc: "Using trends and feedback loops, we help refine strategies to meet stakeholder expectations and support long-term project success.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 px-6 py-6 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-3">{item.title}</h3>
              <p className="sm:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>

        
      </section>

      {/* Social Impact Services */}
      <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-16">
        Project Types We Support
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Solar Energy Projects",
            desc: "Community Engagement for utility-scale and distributed solar developments.",
            image: "/images/R4.png",
          },
          {
            title: "Wind Energy Projects",
            desc: "Stakeholder relations for onshore and offshore wind farm developments.",
            image: "/images/RE6.png",
          },
          {
            title: "Energy Storage",
            desc: "Public involvement for battery storage and grid infrastructure projects.",
            image: "/images/D2.jpg",
          },
          {
            title: "Transmission Lines",
            desc: "Community engagement for renewable energy transmission and distribution infrastructure.",
            image: "/images/R1.jpg",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 sm:text-lg text-lg mb-4">{item.desc}</p>
            <div className="w-full h-45 relative rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default RenewableEnergyPage;
