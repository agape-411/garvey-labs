"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "./ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-200 h-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-0 h-full flex items-center justify-between w-full">
        {/* Left - Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/images/logo.jpg"
              alt="Garvey Labs Logo"
              width={280}
              height={80}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex justify-center space-x-6 items-center text-base font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/renewable-energy" className="hover:text-blue-600 transition">Renewable Energy</Link>
          <Link href="/green-data" className="hover:text-blue-600 transition">Green Energy Data</Link>
          <Link href="/labor-unions" className="hover:text-blue-600 transition">Labor Unions</Link>
          <Link href="/social-impact" className="hover:text-blue-600 transition">Social Impact</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/news" className="hover:text-blue-600 transition">News</Link>
          <Link href="/connect" className="hover:text-blue-600 transition">Connect</Link>
        </nav>

        {/* Right - Contact Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-blue-600 text-white text-base px-6 py-2.5 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[4rem] text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 px-4 pb-6">
          <nav className="flex flex-col space-y-4 text-lg font-medium text-white border-t pt-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Home</Link>
            <Link href="/renewable-energy" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Renewable Energy</Link>
            <Link href="/green-data" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Green Data</Link>
            <Link href="/labor-unions" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Labor Unions</Link>
            <Link href="/social-impact" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Social Impact</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">About</Link>
            <Link href="/news" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">News</Link>
            <Link href="/connect" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Connect</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-300">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
