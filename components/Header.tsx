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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-start h-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center h-full mr-6">
          <Image
            src="/images/logo.jpg"
            alt="Garvey Labs Logo"
            width={280}
            height={80}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

        {/* Right-side content (nav + button + menu) */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center text-base font-medium">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/renewable-energy" className="hover:text-blue-600 transition">Renewable Energy</Link>
            <Link href="/green-data" className="hover:text-blue-600 transition">Green Energy Data</Link>
            <Link href="/labor-unions" className="hover:text-blue-600 transition">Labor Unions</Link>
            <Link href="/social-impact" className="hover:text-blue-600 transition">Social Impact</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          </nav>

          {/* Contact Button */}
          <Link href="/contact" className="hidden md:block pl-6">
            <Button className="bg-blue-600 text-white text-base px-6 py-2.5 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[2.2rem] text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6">
          <nav className="flex flex-col space-y-4 text-base font-medium text-gray-800 border-t pt-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</Link>
            <Link href="/renewable-energy" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Renewable Energy</Link>
            <Link href="/green-data" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Green Data</Link>
            <Link href="/labor-unions" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Labor Unions</Link>
            <Link href="/social-impact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Social Impact</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
