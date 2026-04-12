"use client";

import Image from "next/image";
import Link from "next/link";

export default function FrameworkOverview() {
  return (
    <main className="font-sans text-[#2D2D2D] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] flex items-center text-white">
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

        <div className="relative max-w-5xl mx-auto px-6 py-28">
          <p className="text-sm tracking-widest uppercase text-white/70 mb-4">
            Framework Overview · Garvey Labs
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            The Grid-Positive Deal Standard
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-3xl">
            What historically overlooked markets and communities in the data center corridor are entitled to negotiate — and why developers accept it.
          </p>
        </div>
      </section>

      {/* ================= MARKET SIGNAL ================= */}
      <section className="relative bg-white py-24">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#1B3A5C]/20 to-white" />

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            ["20+", "Projects canceled or delayed in 2025 from suburban market opposition"],
            ["100+", "Projects currently in courts — forcing developers into new markets"],
            ["1–5%", "Cost of the community benefit package vs. a standard $500M project"],
          ].map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-[#1B3A5C] mb-2">{item[0]}</p>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase text-[#0D6E6E] font-semibold mb-4">
            The Problem
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Communities are negotiating blind.
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Data center developers are moving into historically overlooked markets and communities that have been bypassed by a decade of suburban siting — and those communities are negotiating blind. Without a framework, developers define the terms. Communities absorb the costs — ratepayer increases, infrastructure strain, road damage — and capture none of the benefit.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            In three active corridors, Garvey Labs has documented a structural conflict pattern: governance positions in EDOs and Black chambers held by parties whose interests misalign with the community's. Developer terms become community terms without negotiation.
          </p>
        </div>
      </section>

      {/* ================= FOUR STANDARDS ================= */}
      <section className="relative bg-[#E0F2F1] py-24">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#F5F5F5] to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm tracking-widest uppercase text-[#0D6E6E] font-semibold mb-4">
            The Four Standards
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One community wealth architecture.
          </h2>

          <p className="text-lg text-gray-700 mb-12">
            Four non-negotiable standards that define what every historically overlooked markets and communities is entitled to extract from a data center deal.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
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
              <div key={i} className="bg-white p-8 rounded-2xl">
                <p className="text-xs uppercase text-gray-500 mb-2">{item.label}</p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY DEVELOPERS ACCEPT ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Why Developers Accept It
          </h2>

          <p className="text-lg text-gray-700 mb-12">
            The community benefit package costs 1–5% of a standard $500M project. The advantages of building in a prepared traditionally overlooked market and community versus a traditional suburban market are worth significantly more.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "$150M–$550M — Land cost savings",
              "$50M–$250M+ — Opposition risk elimination",
              "$360M–$540M — Transmission queue acceleration",
              "$50M–$130M — Incentive stack access",
              "$2M–$10M — Regulatory legal fee savings",
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F5F5] p-6 rounded-xl">
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-xl font-semibold text-center text-[#1B3A5C]">
            "This is not a community asking a developer for a favor. It is a community offering the best deal in the market."
          </p>

        </div>
      </section>

      {/* ================= MARKET INTELLIGENCE ================= */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Active Market Intelligence
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3">Corridor</th>
                  <th>Proposal</th>
                  <th>Status</th>
                  <th>Window</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td>Rocky Mount / NC</td>
                  <td>$19.2B / 900MW</td>
                  <td>Active opposition</td>
                  <td>No CBA in place</td>
                </tr>
                <tr className="border-b">
                  <td>Petersburg, VA</td>
                  <td>Campus approved</td>
                  <td>Window open</td>
                  <td>Pre-vote stage</td>
                </tr>
                <tr>
                  <td>Danville, VA</td>
                  <td>$73.5B proposal</td>
                  <td>Finalizing</td>
                  <td>Agreement stage</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#1B3A5C] text-white py-32 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build your negotiating position before the developer arrives.
          </h2>

          <p className="text-white/85 mb-8 text-lg">
            We assess your corridor, identify your leverage, and deliver a jurisdiction-specific intelligence package in 7 business days.
          </p>

          <Link
            href="/contact"
            className="bg-white text-[#1B3A5C] px-8 py-3 rounded-lg font-semibold"
          >
            Contact Garvey Labs →
          </Link>

        </div>
      </section>

    </main>
  );
}