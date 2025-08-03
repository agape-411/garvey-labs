"use client";

import React from "react";
import Image from "next/image";

const RenewableEnergyPage = () => {
  return (
    <div className="text-white text-[1.15rem] leading-relaxed">
      {/* Header Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/R1.jpg"
          alt="Renewable Energy Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
            Sustainable Renewable Energy Development Community Engagement
          </h1>
          <p className="text-xl mt-4 max-w-2xl">
            Building community support for clean energy projects through innovative engagement
          </p>
        </div>
      </div>

      {/* Renewable Energy Approach */}
      <section className="bg-[#fbfcff] text-[#2D3748] py-20 px-6 md:px-20 transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Renewable Energy Approach
        </h2>
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-400">
          {[
            {
              title: "Project Planning & Strategy",
              desc: "Comprehensive stakeholder mapping and engagement strategy development for sustainable renewable energy projects.",
            },
            {
              title: "Community Relations",
              desc: "Building and maintaining positive relationships with political, business, and local community stakeholders throughout energy project development.",
            },
            {
              title: "Public Involvement",
              desc: "Facilitating dialogue that transforms complex renewable energy projects into accessible community conversations.",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 px-6 py-6 text-center">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Methodologies */}
     {/* Tools & Methodologies */}
<section className="bg-[#EDF2F7] text-[#2D3748] py-10 px-6 md:px-20 transition-all duration-500">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
    Tools & Methodologies
  </h2>

  {[
    {
      title: "Interactive Engagement Tools",
      desc: "We use real-time polling, interactive maps, dedicated web platforms, and mobile surveys to foster active participation and feedback.",
      image: "/images/A5.png",
    },
    {
      title: "Stakeholder Analysis",
      desc: "Detailed community mapping, cultural assessments, and engagement planning ensure inclusive outreach and representation.",
      image: "/images/A5.png",
    },
    {
      title: "Data-Driven Strategy",
      desc: "Using trends and feedback loops, we help refine strategies to meet stakeholder expectations and support long-term project success.",
      image: "/images/A5.png",
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className={`flex flex-col md:flex-row ${
        idx % 2 === 1 ? "md:flex-row-reverse" : ""
      } items-center gap-10 mb-16`}
    >
      <div className="md:w-1/2">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={200}
          className="rounded-xl w-full h-auto object-cover shadow-md hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
        <p className="text-[1.15rem] leading-relaxed font-normal">{item.desc}</p>
      </div>
    </div>
  ))}
</section>


      {/* Project Types Carousel */}
      <section className="bg-[#d8dce2] text-white pb-20 pt-10 px-6 xl:px-16 transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Project Types We Support
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
          {[
            {
              title: "Solar Energy Projects",
              desc: "Community engagement for utility-scale and distributed solar developments.",
              image: "/images/R4.png",
            },
            {
              title: "Wind Energy Projects",
              desc: "Stakeholder relations for onshore and offshore wind farm developments.",
              image: "/images/R6.png",
            },
            {
              title: "Energy Storage",
              desc: "Public involvement for battery storage and grid infrastructure projects.",
              image: "/images/D1.jpg",
            },
            {
              title: "Transmission Lines",
              desc: "Community engagement for renewable energy transmission and distribution infrastructure.",
              image: "/images/R5.jpg",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="min-w-[300px] snap-start bg-white text-[#2D3748] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={400}
                className="rounded-md object-cover w-full h-[180px]"
              />
              <h3 className="text-lg font-bold mt-4 text-center">{project.title}</h3>
              <p className="text-sm mt-2 text-center">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Impact Services */}
      <section className="bg-white text-[#2D3748] py-20 px-6 md:px-20 transition-all duration-500">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Social Impact Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Community Impact Strategy",
              desc: "We design custom strategies to help organizations deliver measurable and lasting social benefits aligned with energy initiatives.",
            },
            {
              title: "Cultural & Social Listening",
              desc: "We use ethnographic tools and community dialogue to understand public sentiment and co-create solutions with residents.",
            },
            {
              title: "Equity-Focused Engagement",
              desc: "We develop targeted outreach campaigns and partnerships with historically underserved communities to promote inclusive participation.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow ">
              <h3 className="text-xl font-semibold mb-3 ">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RenewableEnergyPage;
