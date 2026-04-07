'use client'

import React from 'react'
import Link from 'next/link'

const IndustriesSection = () => {
  return (
    <section className="bg-white text-[#2D2D2D] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Eyebrow */}
        <p className="text-sm tracking-widest text-[#0D6E6E] font-semibold mb-4">
          OUR ADVISORY PRACTICE
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Two Economies. One Advisory Firm.
        </h2>

        {/* Body */}
        <p className="text-lg text-gray-600 max-w-3xl mb-16 leading-relaxed">
          Garvey Labs works at the intersection of infrastructure development and community economic strategy — helping communities, economic development organizations, and civic institutions navigate the data center and renewable energy economies with expertise, proprietary methodology, and a commitment to community-side interests.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-[#E0F2F1] p-8 rounded-2xl flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Data Center Economy
              </h3>

              <p className="text-md font-medium text-[#1B3A5C] mb-4">
                Community Wealth Strategy for the Data Center Economy
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The data center economy is generating unprecedented private investment in infrastructure. Garvey Labs helps majority-Black communities and the economic development institutions that serve them compete for that investment on terms that build lasting local wealth — before developers define the terms.
              </p>
            </div>

            <Link
              href="/industries/data-center"
              className="text-[#0D6E6E] font-semibold hover:underline"
            >
              Explore Data Center Advisory →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E0F2F1] p-8 rounded-2xl flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Renewable Energy
              </h3>

              <p className="text-md font-medium text-[#1B3A5C] mb-4">
                Infrastructure Stakeholder Strategy for Clean Energy Development
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Renewable energy development succeeds or stalls based on community relationships. Garvey Labs brings stakeholder engagement expertise developed over a decade of clean energy infrastructure work — including large-scale BESS projects — to developers and communities navigating contested approvals.
              </p>
            </div>

            <Link
              href="/industries/renewable-energy"
              className="text-[#0D6E6E] font-semibold hover:underline"
            >
              Explore Renewable Energy Advisory →
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default IndustriesSection