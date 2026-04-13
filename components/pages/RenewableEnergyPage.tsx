"use client";

import Image from "next/image";
import Link from "next/link";

export default function RenewableEnergyPage() {
  return (
    <div className="bg-white text-[#1B3A5C] leading-relaxed">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/R1.jpg"
          alt="Renewable Energy Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white leading-tight mb-6">
            Renewable Energy Advisory and Stakeholder Engagement
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200">
            Infrastructure stakeholder expertise built over a decade of clean energy development — from utility-scale BESS to transmission and grid modernization projects.
          </p>
        </div>
      </section>

      {/* ================= THE CREDENTIAL ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-8">
              The Foundation of the Garvey Labs Approach
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8">
              Garvey Labs' advisory practice in the data center economy is built on direct experience with the hardest problem in infrastructure development: turning community opposition into durable partnership. That experience was developed in the renewable energy sector, where contested approvals, multi-stakeholder negotiations, and community benefit structuring are the daily work.
            </p>

            <div className="border-l-4 border-[#0D6E6E] pl-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                Red Egret Battery Energy Storage System, Texas City
              </h3>

              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                A 300-megawatt battery energy storage facility that moved from unanimous community opposition to a unanimous 6-0 regulatory approval. The stakeholder engagement methodology developed on that project — infrastructure benefit framing, community advisory structure, workforce commitment design — is the foundation of the Garvey Labs framework now applied to the data center economy.
              </p>
            </div>
          </div>

          {/* RIGHT: IMAGE + STATS */}
          <div>
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-10">
              <Image
                src="/images/D2.jpg"
                alt="Battery Energy Storage System"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">300MW</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Facility Capacity</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">6–0</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Unanimous Approval</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">$47M</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Projected Tax Revenue</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW WE HELP ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-12">
            How We Help in the Renewable Energy Economy
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                Community Stakeholder Engagement
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Building and maintaining community support for utility-scale renewable energy projects through structured engagement, benefit framing, and advisory board design.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                Contested Approval Strategy
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Navigating complex multi-stakeholder environments where community opposition, regulatory proceedings, and developer timelines must be managed simultaneously.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                Community Benefit Agreement Structuring
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Designing and negotiating CBAs for renewable energy projects that create genuine local benefit — workforce pathways, infrastructure improvements, and long-term revenue sharing — not performative commitments.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                Infrastructure Stakeholder Intelligence
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Mapping the stakeholder landscape before a project enters the public process. Identifying opposition, building institutional support, and designing the engagement strategy that maximizes approval probability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONNECTION SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-8">
            From Renewable Energy to the Data Center Economy
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8">
            The data center economy and the renewable energy economy share the same underlying stakeholder challenge: private capital building large infrastructure in communities that need to know what they're getting and what it costs them. Garvey Labs brings renewable energy stakeholder methodology to the data center economy — where the investment is larger, the community benefit opportunity is greater, and the frameworks for capturing it have been largely absent. Until now.
          </p>

          <Link
            href="/data-center-economy"
            className="text-[#0D6E6E] font-medium hover:underline"
          >
            Learn about our Data Center Economy advisory practice →
          </Link>

        </div>
      </section>

    </div>
  );
}