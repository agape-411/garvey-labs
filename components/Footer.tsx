"use client";

import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Garvey Labs</h3>
          <p className="text-md leading-relaxed text-gray-300">
            Strategic Communications & Community Engagement for social impact and renewable energy organizations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold uppercase mb-4">Quick Links</h4>
          <ul className="space-y-2 text-md text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold uppercase mb-4">Connect</h4>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@garveylabs.com"
              aria-label="Email"
              className="hover:text-blue-400 text-gray-300 transition"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 text-gray-300 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Garvey Labs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
