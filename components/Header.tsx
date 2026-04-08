"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Button } from "./ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const industriesTimeout = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (setOpen: Function, timeoutRef: any) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = (setOpen: Function, timeoutRef: any, delay = 300) => {
    timeoutRef.current = setTimeout(() => setOpen(false), delay);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-200 h-23">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-0 h-full flex items-center justify-between w-full">
        {/* Left - Logo */}
        <div className="flex items-center h-full">
      <Link href="/" className="flex items-center h-full">
       <Image
      src="/images/logo1.png"
      alt="Garvey Labs Logo"
      width={70}
      height={30}
      className="h-full w-auto object-contain"
      priority
        />
        </Link>
       </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center space-x-8 text-lg font-semibold">
          <Link href="/" className="hover:text-[#319795] transition">
            Home
          </Link>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setIndustriesOpen, industriesTimeout)}
            onMouseLeave={() => handleMouseLeave(setIndustriesOpen, industriesTimeout)}
          >
            <button className="hover:text-[#319795] transition flex items-center gap-1">
              Industries ▾
            </button>
            {industriesOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-52 z-50">
                <Link
                  href="/data-center-economy"
                  className="block px-6 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Data Center Economy
                </Link>
                <Link
                  href="/renewable-energy"
                  className="block px-6 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Renewable Energy
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setServicesOpen, servicesTimeout)}
            onMouseLeave={() => handleMouseLeave(setServicesOpen, servicesTimeout)}
          >
            <button className="hover:text-[#319795] transition flex items-center gap-1">
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-72 z-50">
                <Link
                  href="/grid-positive-framework"
                  className="block px-6 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Grid-Positive Framework
                </Link>
                
                <Link
                  href="/community-intelligence-brief"
                  className="block px-6 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Community Intelligence Brief
                </Link>
                <Link
                  href="/strategic-advisory"
                  className="block px-6 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Strategic Advisory
                </Link>
              </div>
            )}
          </div>

          <Link href="/insights" className="hover:text-[#319795] transition">
            Insights
          </Link>
          <Link href="/about" className="hover:text-[#319795] transition">
            About
          </Link>
          <Link href="/connect" className="hover:text-[#319795] transition">
            Connect
          </Link>
        </nav>

        {/* Right - Contact & Mobile */}
        <div className="flex items-center space-x-4">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-[#319795] text-white text-lg px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Contact Us
            </Button>
          </Link>

          <button
            className="md:hidden text-[3rem] text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-6 border-t border-gray-200">
          <nav className="flex flex-col space-y-4 text-lg font-medium text-gray-800 pt-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#319795]">
              Home
            </Link>

            {/* Mobile Industries */}
            <div className="flex flex-col">
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex justify-between items-center font-semibold text-gray-800 hover:text-[#319795]"
              >
                Industries ▾
              </button>
              {industriesOpen && (
                <div className="flex flex-col ml-4 mt-2">
                  <Link href="/data-center-economy" onClick={() => setMenuOpen(false)} className="py-3 hover:text-[#319795]">
                    Data Center Economy
                  </Link>
                  <Link href="/renewable-energy" onClick={() => setMenuOpen(false)} className="py-3 hover:text-[#319795]">
                    Renewable Energy
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div className="flex flex-col">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between items-center font-semibold text-gray-800 hover:text-[#319795]"
              >
                Services ▾
              </button>
              {servicesOpen && (
                <div className="flex flex-col ml-4 mt-2">
                  <Link href="/grid-positive-framework" onClick={() => setMenuOpen(false)} className="py-3 hover:text-[#319795]">
                    Grid-Positive Framework
                  </Link>
                  <Link href="/grid-positive-framework/subpage" onClick={() => setMenuOpen(false)} className="py-3 ml-4 hover:text-[#319795]">
                    Subpage Example
                  </Link>
                  <Link href="/community-intelligence-brief" onClick={() => setMenuOpen(false)} className="py-3 hover:text-[#319795]">
                    Community Intelligence Brief
                  </Link>
                  <Link href="/strategic-advisory" onClick={() => setMenuOpen(false)} className="py-3 hover:text-[#319795]">
                    Strategic Advisory
                  </Link>
                </div>
              )}
            </div>

            <Link href="/insights" onClick={() => setMenuOpen(false)} className="hover:text-[#319795]">
              Insights
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#319795]">
              About
            </Link>
            <Link href="/connect" onClick={() => setMenuOpen(false)} className="hover:text-[#319795]">
              Connect
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#319795]">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;