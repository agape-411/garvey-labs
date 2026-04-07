"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Garvey Labs
            </h2>

            <p className="text-base text-gray-300 mb-4">
              Strategic Infrastructure Stakeholder and Civic Engagement Advisory
            </p>

            <p className="text-base text-gray-300 leading-relaxed">
              Washington, DC-based advisory firm helping communities compete for and shape participation in the data center and renewable energy economies on terms that build long-term local value.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm md:text-base font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-base">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/industries/data-center-economy" className="hover:text-white transition">Data Center Economy</Link></li>
              <li><Link href="/industries/renewable-energy" className="hover:text-white transition">Renewable Energy</Link></li>
              <li><Link href="/services/grid-positive-framework" className="hover:text-white transition">The Grid-Positive Framework</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/insights" className="hover:text-white transition">Insights</Link></li>
              <li><Link href="/connect" className="hover:text-white transition">Connect</Link></li>
            </ul>
          </div>

          {/* CONTACT CTA */}
          <div>
            <h3 className="text-sm md:text-base font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>

            <p className="text-base text-gray-300 mb-6">
              Engage with a Garvey Labs advisor to discuss your community’s opportunity.
            </p>

            <Link
              href="/connect"
              className="inline-block px-6 py-3 text-base font-medium bg-white text-[#1B3A5C] hover:bg-gray-100 transition"
            >
              Contact Us →
            </Link>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2026 Garvey Labs. All rights reserved.
      </div>

    </footer>
  );
}