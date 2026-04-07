"use client";

import { FaChartLine, FaLightbulb, FaHandshake, FaCogs, FaCheckCircle } from "react-icons/fa";
import { FiCalendar, FiTarget, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function CaseStudy() {
  // Timeline data
  const timeline = [
    { date: "January 2023", title: "Discovery & Research", description: "Conducted stakeholder interviews, market analysis, and competitor benchmarking to identify opportunities." },
    { date: "February 2023", title: "Strategy Development", description: "Created an integrated communication and outreach plan aligning with client’s business objectives." },
    { date: "March 2023", title: "Implementation", description: "Launched targeted campaigns, developed creative assets, and executed media outreach." },
    { date: "May 2023", title: "Optimization", description: "Monitored KPIs, gathered feedback, and refined approach for better engagement." },
  ];

  // Results data
  const results = [
    { icon: <FaChartLine className="text-black text-4xl" />, title: "Unanimous City Commission Approval", description: "6-0 vote on development agreement and zoning change" },
    { icon: <FiUsers className="text-black text-4xl" />, title: "Economic Development", description: "Secured $47M in property tax revenue over 20 years for Texas City" },
    { icon: <FiTarget className="text-black text-4xl" />, title: "Grid Reliability", description: "300MW facility provides critical energy storage for growing Houston-Galveston region" },
    { icon: <FiTrendingUp className="text-black text-4xl" />, title: "Project Timeline", description: "Construction beginning late 2025, operational by 2026-2027" },
  ];

  // Impact data
  const impacts = [
    { icon: <FaLightbulb className="text-purple-600 text-4xl" />, title: "Environmental Justice", description: "Successfully navigated civic engagement in diverse population (1/3 White, Black, Hispanic)" },
    { icon: <FaHandshake className="text-purple-600 text-4xl" />, title: "Partnership Growth", description: "Forged strategic collaborations expanding market reach." },
    { icon: <FaCogs className="text-purple-600 text-4xl" />, title: "Operational Efficiency", description: "Streamlined processes for faster campaign execution." },
    { icon: <FaCheckCircle className="text-purple-600 text-4xl" />, title: "Long-term Impact", description: "Positioned the brand as a leader in its niche." },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-[#2D3A8C] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">From No to Yes: Texas City BESS Success</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Strategic Civic Engagement Transforms Opposition into Unanimous Approval
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-3xl font-bold">300MW</p>
              <p className="text-sm">Battery Storage Capacity</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-3xl font-bold">$47M</p>
              <p className="text-sm">Property Tax Revenue</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Commission Approval</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-3xl font-bold">9 Months</p>
              <p className="text-sm">Engagement Campaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Project Overview</h2>
        <p className="text-left max-w-3xl mb-8">
          Spearmint Energy’s Red Egret Battery Energy Storage System (BESS) faced significant regulatory and community challenges in Texas City, 
          a diverse community where 1/3 of residents are Black, Hispanic, and White respectively. Through strategic civic engagement, Garvey Labs 
          transformed initial skepticism into unanimous city commission approval.
        </p>

        {/* Challenge & Garvey Labs Approach */}
        <div className="grid md:grid-cols-1 gap-6">
          <div className="bg-red-400 border-l-4 border-red-500 p-6 rounded-lg text-white">
            <h3 className="font-bold mb-3 ">The Challenge</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Proposed restrictive BESS ordinance threatening project viability</li>
              <li>Limited community awareness of battery storage benefits</li>
              <li>Diverse stakeholder groups with varying concerns</li>
              <li>Complex regulatory environment requiring multi-agency coordination</li>
              <li>Safety concerns from residents about new technology</li>
            </ul>
          </div>
          <div className="bg-green-500 border-l-4 border-green-500 p-6 rounded-lg text-white">
            <h3 className="font-bold mb-3">Garvey Labs Approach</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Community stakeholder mapping and engagement strategy</li>
              <li>Facilitated partnerships with local business owners</li>
              <li>Chamber of Commerce introductions and business forums</li>
              <li>Project-based education and community meetings</li>
              <li>Safety-focused presentations for emergency responders</li>
            </ul>
          </div>
        </div>
      </section>

          {/* Timeline */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">9-Month Engagement Timeline</h2>
        <div className="max-w-3xl mx-auto relative border-l-2 border-purple-800">
          {[
            ["November 2024", "Foundation Building", "Initial meetings with Texas City officials, fire chief, and emergency management leaders, establishing project approval pathways."],
            ["December 2024", "Stakeholder Expansion", "Engaged local City Commissioners, expanded educational partnerships with Galveston ND, and Chamber of Commerce leaders."],
            ["January 2025", "Community Council Engagement", "Presented project benefits at community advisory council meetings with 45+ local businesses. Built key relationships on planning."],
            ["February 2025", "Crisis Response", "Addressed restrictive BESS ordinance proposal. Delivered 60-day 'PROTECT TEXAS GRID RELIABILITY' campaign with community rallies."],
            ["March–August 2025", "Strategic Campaign Execution", "Championed partnerships, Executive Development Committee engagement, and unified community outreach leading to unanimous approval."],
          ].map(([date, title, desc], i) => (
            <div key={i} className="mb-8 ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-purple-800 rounded-full border-4 border-white"></div>
              <p className="text-md text-blue-400 font-semibold">{date}</p>
              <h3 className="font-bold">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Measurable Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((res, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-3">{res.icon}</div>
                <h3 className="font-semibold">{res.title}</h3>
                <p className="text-md mt-2">{res.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-12 px-6 bg-pink-100 m-10">
        <blockquote className="max-w-3xl mx-auto text-center italic text-gray-700 text-xl">
          “I’ve lived through hurricane after hurricane in Texas City; sitting in the dark for days and weeks when it was too hot to breathe... The Red Egret project would give us something we desperately need, reliable backup power, while benefiting our community.”
        </blockquote>
        <p className="text-center mt-4 font-bold">Barbara White</p>
        <p className="text-center text-md text-gray-500">Texas City Resident, Public Meeting Testimony</p>
      </section>

      {/* Strategic Impact */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Strategic Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="flex justify-center mb-3">{impact.icon}</div>
                <h3 className="font-bold">{impact.title}</h3>
                <p className="text-md mt-2 text-gray-700">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* CTA */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-12 px-6 text-center">
        <h3 className="text-xl font-bold mb-4">
          Ready to Navigate Complex Civic Engagement?
        </h3>
        <p className="text-gray-300 mb-6">
          Garvey Labs provides strategic civic engagement for renewable energy projects in diverse communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-purple-300 hover:bg-blue-600 px-6 py-3 rounded-full font-bold">
            Start Your Project
          </button>
          <button className="text-white bg-purple-300 hover:bg-blue-600 px-6 py-3 rounded-full font-bold">
            View More Case Studies
          </button>
        </div>
      </section>
    </div>
  );
}
