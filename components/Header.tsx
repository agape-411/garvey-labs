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

  const handleMouseEnter = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
    delay = 300
  ) => {
    timeoutRef.current = setTimeout(() => setOpen(false), delay);
  };

  return (
    <header className="sticky top-0 z-50 h-auto border-b border-gray-200 bg-white text-gray-800 shadow-md">
      <div className="mx-auto flex min-h-[92px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Logo */}
        <div className="flex h-full shrink-0 items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="Garvey Labs Logo"
              width={70}
              height={30}
              className="h-auto w-[58px] object-contain sm:w-[64px] lg:w-[70px]"
              priority
              sizes="(max-width: 640px) 58px, (max-width: 1024px) 64px, 70px"
            />
          </Link>
        </div>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden xl:flex items-center justify-center gap-5 2xl:gap-7 text-base 2xl:text-lg font-semibold">
          
          <Link
            href="/"
            className="whitespace-nowrap transition hover:text-[#319795]"
          >
            Home
          </Link>

          {/* Industries */}
          <div
            className="relative"
            onMouseEnter={() =>
              handleMouseEnter(setIndustriesOpen, industriesTimeout)
            }
            onMouseLeave={() =>
              handleMouseLeave(setIndustriesOpen, industriesTimeout)
            }
          >
            <button className="flex items-center gap-1 whitespace-nowrap transition hover:text-[#319795]">
              Industries <span className="text-sm">▾</span>
            </button>

            {industriesOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-56 rounded-md border border-gray-200 bg-white shadow-lg">
                <Link
                  href="/data-center-economy"
                  className="block px-5 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Data Center Economy
                </Link>

                <Link
                  href="/renewable-energy"
                  className="block px-5 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Renewable Energy
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() =>
              handleMouseEnter(setServicesOpen, servicesTimeout)
            }
            onMouseLeave={() =>
              handleMouseLeave(setServicesOpen, servicesTimeout)
            }
          >
            <button className="flex items-center gap-1 whitespace-nowrap transition hover:text-[#319795]">
              Services <span className="text-sm">▾</span>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-72 rounded-md border border-gray-200 bg-white shadow-lg">
                <Link
                  href="/grid-positive-framework"
                  className="block px-5 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Grid-Positive Framework
                </Link>

                <Link
                  href="/community-intelligence-brief"
                  className="block px-5 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Community Intelligence Brief
                </Link>

                <Link
                  href="/strategic-advisory"
                  className="block px-5 py-3 text-base text-gray-800 hover:bg-green-50"
                >
                  Strategic Advisory
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/insights"
            className="whitespace-nowrap transition hover:text-[#319795]"
          >
            Insights
          </Link>

          <Link
            href="/about"
            className="whitespace-nowrap transition hover:text-[#319795]"
          >
            About
          </Link>

          <Link
            href="/where-we-are"
            className="whitespace-nowrap transition hover:text-[#319795]"
          >
            Where we are
          </Link>

          <Link
            href="/connect"
            className="whitespace-nowrap transition hover:text-[#319795]"
          >
            Connect
          </Link>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex shrink-0 items-center">
          
          {/* Desktop Contact */}
          <Link href="/contact" className="ml-5 hidden xl:block 2xl:ml-7">
            <Button className="rounded-lg bg-[#319795] px-5 py-2.5 text-base text-white transition hover:bg-green-700 2xl:px-6 2xl:py-3 2xl:text-lg">
              Contact Us
            </Button>
          </Link>

          {/* Tablet + Mobile Menu */}
          <button
            className="ml-3 flex items-center justify-center text-[2.5rem] text-gray-500 xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* ================= TABLET / MOBILE MENU ================= */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-5 pb-6 xl:hidden">
          <nav className="mx-auto flex max-w-3xl flex-col space-y-4 pt-5 text-lg font-medium text-gray-800">
            
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#319795]"
            >
              Home
            </Link>

            {/* Industries */}
            <div className="flex flex-col">
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex items-center justify-between font-semibold text-gray-800 transition hover:text-[#319795]"
              >
                <span>Industries</span>
                <span
                  className={`transition-transform ${
                    industriesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {industriesOpen && (
                <div className="ml-4 mt-2 flex flex-col border-l border-gray-200 pl-4">
                  <Link
                    href="/data-center-economy"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 transition hover:text-[#319795]"
                  >
                    Data Center Economy
                  </Link>

                  <Link
                    href="/renewable-energy"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 transition hover:text-[#319795]"
                  >
                    Renewable Energy
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <div className="flex flex-col">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between font-semibold text-gray-800 transition hover:text-[#319795]"
              >
                <span>Services</span>
                <span
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-2 flex flex-col border-l border-gray-200 pl-4">
                  <Link
                    href="/grid-positive-framework"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 transition hover:text-[#319795]"
                  >
                    Grid-Positive Framework
                  </Link>

                  <Link
                    href="/community-intelligence-brief"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 transition hover:text-[#319795]"
                  >
                    Community Intelligence Brief
                  </Link>

                  <Link
                    href="/strategic-advisory"
                    onClick={() => setMenuOpen(false)}
                    className="py-2 transition hover:text-[#319795]"
                  >
                    Strategic Advisory
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/insights"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#319795]"
            >
              Insights
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#319795]"
            >
              About
            </Link>

            <Link
              href="/where-we-are"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#319795]"
            >
              Where we are
            </Link>

            <Link
              href="/connect"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#319795]"
            >
              Connect
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="pt-1 font-semibold text-[#319795]"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

