"use client";

import Image from "next/image";
import Link from "next/link";

export default function FrameworkOverview() {
  return (
    <main className="font-sans text-[#2D2D2D] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen sm:min-h-[75vh] flex items-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/DC2.png"
            alt="Infrastructure corridor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/85" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-28">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-white/70 mb-4">
            Framework Overview · Garvey Labs
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            The Grid-Positive Deal Standard
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl">
            What historically overlooked markets and communities in the data center corridor are entitled to negotiate — and why developers accept it.
          </p>
        </div>
      </section>

      {/* ================= MARKET SIGNAL ================= */}
      <section className="relative bg-white py-12 sm:py-24">
        <div className="absolute top-0 left-0 w-full h-8 sm:h-16 bg-gradient-to-b from-[#1B3A5C]/20 to-white" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
          {[
            ["20+", "Projects canceled or delayed in 2025 from suburban market opposition"],
            ["100+", "Projects currently in courts — forcing developers into new markets"],
            ["1–5%", "Cost of the community benefit package vs. a standard $500M project"],
          ].map((item, i) => (
            <div key={i}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B3A5C] mb-2">{item[0]}</p>
              <p className="text-sm sm:text-base text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="bg-[#F5F5F5] py-12 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-[#0D6E6E] font-semibold mb-4">
            The Problem
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Communities are negotiating blind.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            Data center developers are moving into historically overlooked markets and communities that have been bypassed by a decade of suburban siting — and those communities are negotiating blind. Without a framework, developers define the terms. Communities absorb the costs — ratepayer increases, infrastructure strain, road damage — and capture none of the benefit.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            In three active corridors, Garvey Labs has documented a structural conflict pattern: governance positions in EDOs and Black chambers held by parties whose interests misalign with the community's. Developer terms become community terms without negotiation.
          </p>
        </div>
      </section>

      {/* ================= FOUR STANDARDS ================= */}
      <section className="relative bg-[#E0F2F1] py-12 sm:py-24">
        <div className="absolute top-0 left-0 w-full h-8 sm:h-12 bg-gradient-to-b from-[#F5F5F5] to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-[#0D6E6E] font-semibold mb-4">
            The Four Standards
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            One community wealth architecture.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12">
            Four non-negotiable standards that define what every historically overlooked markets and communities is entitled to extract from a data center deal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                label: "The Floor",
                title: "Developer Cost Accountability Standard",
                desc: "Developer pays 100% of all infrastructure costs. No cost transfer to ratepayers or municipal budgets.",
              },
              {
                label: "Infrastructure Ceiling",
                title: "Grid-Positive Community Integration Standard",
                desc: "All developer energy assets structured as community assets with dispatch rights, microgrid access, and governance.",
              },
              {
                label: "Human Capital Ceiling",
                title: "Community Workforce Investment Standard",
                desc: "30–40% local hire, developer-funded IBEW pre-apprenticeship, and apprenticeship completion fund.",
              },
              {
                label: "The Floor",
                title: "Environmental Accountability Standard",
                desc: "Annual CUE, WUE, and lifecycle disclosure to Community Advisory Board.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl">
                <p className="text-xs uppercase text-gray-500 mb-2">{item.label}</p>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY DEVELOPERS ACCEPT ================= */}
      <section className="bg-white py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
            Why Developers Accept It
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12">
            The community benefit package costs 1–5% of a standard $500M project. The advantages of building in a prepared traditionally overlooked market and community versus a traditional suburban market are worth significantly more.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {[
              "$150M–$550M — Land cost savings",
              "$50M–$250M+ — Opposition risk elimination",
              "$360M–$540M — Transmission queue acceleration",
              "$50M–$130M — Incentive stack access",
              "$2M–$10M — Regulatory legal fee savings",
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F5F5] p-4 sm:p-6 rounded-lg sm:rounded-xl">
                <p className="text-base sm:text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-16 text-lg sm:text-xl font-semibold text-center text-[#1B3A5C]">
            "This is not a community asking a developer for a favor. It is a community offering the best deal in the market."
          </p>

        </div>
      </section>

      {/* ================= MARKET INTELLIGENCE ================= */}
      <section className="bg-[#F5F5F5] py-12 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
            Active Market Intelligence
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="border-b">
                  <th className="py-2 sm:py-3 px-2 sm:px-0">Corridor</th>
                  <th className="px-2 sm:px-0">Proposal</th>
                  <th className="px-2 sm:px-0">Status</th>
                  <th className="px-2 sm:px-0">Window</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 sm:py-3 px-2 sm:px-0">Rocky Mount / NC</td>
                  <td className="px-2 sm:px-0">$19.2B / 900MW</td>
                  <td className="px-2 sm:px-0">Active opposition</td>
                  <td className="px-2 sm:px-0">No CBA in place</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 sm:py-3 px-2 sm:px-0">Petersburg, VA</td>
                  <td className="px-2 sm:px-0">Campus approved</td>
                  <td className="px-2 sm:px-0">Window open</td>
                  <td className="px-2 sm:px-0">Pre-vote stage</td>
                </tr>
                <tr>
                  <td className="py-2 sm:py-3 px-2 sm:px-0">Danville, VA</td>
                  <td className="px-2 sm:px-0">$73.5B proposal</td>
                  <td className="px-2 sm:px-0">Finalizing</td>
                  <td className="px-2 sm:px-0">Agreement stage</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#1B3A5C] text-white py-16 sm:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Build your negotiating position before the developer arrives.
          </h2>

          <p className="text-white/85 mb-6 sm:mb-8 text-base sm:text-lg">
            We assess your corridor, identify your leverage, and deliver a jurisdiction-specific intelligence package in 7 business days.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-[#1B3A5C] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-100 transition"
          >
            Contact Garvey Labs →
          </Link>

        </div>
      </section>

    </main>
  );
}