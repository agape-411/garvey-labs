'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="font-sans text-[#2D2D2D]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center text-white">
        
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.png"
            alt="Transmission infrastructure"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A5C]/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <div className="max-w-3xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Data Center and Renewable Energy Economies Are Reshaping American Communities.
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
              Garvey Labs helps communities and the organizations that serve them navigate that transformation — capturing lasting wealth, stronger infrastructure, and real career pathways.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/data-center-economy" className="bg-white text-[#1B3A5C] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Explore Our Industries →
              </Link>

              <Link href="/contact" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1B3A5C] transition">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="relative bg-white pt-20 pb-24 -mt-16 z-20 rounded-t-3xl">

        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#1B3A5C]/30 to-white pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">

          <p className="text-sm tracking-widest text-[#0D6E6E] font-semibold mb-4">
            OUR ADVISORY PRACTICE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Two Economies. One Advisory Firm.
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-3xl mb-16 leading-relaxed">
            Garvey Labs works at the intersection of infrastructure development and community economic strategy — helping communities, economic development organizations, and civic institutions navigate the data center and renewable energy economies with expertise, proprietary methodology, and a commitment to community-side interests.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-[#E0F2F1] p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Data Center Economy
                </h3>

                <p className="text-lg font-semibold text-[#1B3A5C] mb-4">
                  Community Wealth Strategy for the Data Center Economy
                </p>

                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  The data center economy is generating unprecedented private investment in infrastructure. Garvey Labs helps under-capitalized markets and the economic development institutions that serve them compete for that investment on terms that build lasting local wealth — before developers define the terms.
                </p>
              </div>

              <Link href="/data-center-economy" className="text-[#0D6E6E] font-semibold hover:underline">
                Explore Data Center Advisory →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E0F2F1] p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Renewable Energy
                </h3>

                <p className="text-lg font-semibold text-[#1B3A5C] mb-4">
                  Infrastructure Stakeholder Strategy for Clean Energy Development
                </p>

                <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                  Renewable energy development succeeds or stalls based on community relationships. Garvey Labs brings stakeholder engagement expertise developed over a decade of clean energy infrastructure work — including large-scale BESS projects — to developers and communities navigating contested approvals.
                </p>
              </div>

              <Link href="/renewable-energy" className="text-[#0D6E6E] font-semibold hover:underline">
                Explore Renewable Energy Advisory →
              </Link>
            </div>

          </div>

        </div>
      </section>

       {/* ================= CALLOUT (ANCHOR) ================= */}
      <section className="relative bg-[#0D6E6E] text-white py-24 overflow-hidden -mt-16 z-20 rounded-t-4xl -mb-16 rounded-b-3xl">

        {/* depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0D6E6E] to-[#084c4c]" />

         <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Defined Products. Fixed Prices. Delivered on Schedule.
          </h3>

          <p className="text-base md:text-lg text-white/85 mb-6 leading-relaxed">
            Garvey Labs is a productized advisory firm. Every engagement has a defined scope, a transparent price, and a documented delivery timeline.
          </p>

          <Link href="/grid-positive-framework" className="bg-white text-[#0D6E6E] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            See Our Services →
          </Link>
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Insights
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl">
        Perspectives on the data center and renewable energy economies from Garvey Labs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

        {[
          {
            tag: "DATA CENTER ECONOMY",
            title: "How I Would Elect a Data Center in 2026: A Community Readiness Framework",
            image: "/images/T2.png"
          },
          {
            tag: "COMMUNITY WEALTH",
            title: "The $4 Million Per Home Question: What the Ashburn Buyout Tells Us About Where Data Centers Are Going",
            image: "/images/T1.png"
          },
          {
            tag: "RENEWABLE ENERGY",
            title: "From Opposition to 6-0: The Red Egret BESS Case Study in Community Stakeholder Engagement",
            image: "/images/case.jpg"
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden">
            <div className="relative w-full h-40">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
            </div>

            <div className="p-6">
          <span className="text-sm font-semibold text-[#0D6E6E]">
            {item.tag}
          </span>

          <h3 className="text-xl md:text-2xl font-semibold mt-3 mb-3 leading-snug">
            {item.title}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Coming Soon — Q2 2026
          </p>

          <Link href="/insights" className="text-[#0D6E6E] font-semibold hover:underline">
            Read More →
          </Link>
            </div>
          </div>
        ))}

          </div>

          <div className="mt-12">
        <Link href="/insights" className="text-[#0D6E6E] font-semibold hover:underline">
          View All Insights →
        </Link>
          </div>

        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
<section className="bg-white py-24 -mt-16 z-20 rounded-t-3xl">
  <div className="max-w-6xl mx-auto px-6">

    <p className="text-sm tracking-widest text-[#0D6E6E] font-semibold mb-4">
      WHO WE SERVE
    </p>

    <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-3xl">
      Advisory Services for Communities and the Organizations That Serve Them.
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Card 1 */}
      <div className="flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Community Development Corporations
        </h3>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          CDCs with community wealth building mandates and CDFI relationships — the institutions best positioned to capture infrastructure investment as lasting neighborhood assets.
        </p>

        <div className="relative w-full h-40 mt-auto">
          <Image
            src="/images/U1.png"
            alt="Community Development Corporations"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Economic Development Organizations
        </h3>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Independent EDCs, regional development bodies, and Industrial Development Authorities with proactive positioning mandates and PILOT authority.
        </p>

        <div className="relative w-full h-40 mt-auto">
          <Image
            src="/images/U4.png"
            alt="Economic Development Organizations"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Black Chambers of Commerce
        </h3>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Chambers with member businesses in data center and energy corridor markets and economic development mandates that extend beyond individual business support.
        </p>

        <div className="relative w-full h-40 mt-auto">
          <Image
            src="/images/U3.png"
            alt="Black Chambers of Commerce"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Civic and Community Leaders
        </h3>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Mayors, county commissioners, and community leaders navigating infrastructure investment decisions for the first time and needing expert community-side counsel.
        </p>

        <div className="relative w-full h-40 mt-auto">
          <Image
            src="/images/U2.png"
            alt="Civic and Community Leaders"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

    </div>

  </div>
</section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#121d29] text-white py-24 -mt-16 z-20 rounded-t-3xl">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Explore Your Community's Opportunity?
          </h2>

          <p className="text-base md:text-lg text-white/85 mb-8 leading-relaxed">
            The Grid-Positive Community Intelligence Brief is the starting point — a jurisdiction-specific intelligence product delivered in 7 business days. Contact us to discuss what it would show for your community.
          </p>

          <button className="bg-white text-[#1B3A5C] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Contact Us →
          </button>

        </div>
      </section>

    </main>
  )
}

export default HomePage