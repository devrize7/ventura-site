"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#featured-project" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-lg py-3" : "bg-transparent py-5"
      }`}
      style={{ backgroundColor: scrolled ? "#0d1b2a" : undefined }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <Image
            src="/vbg-white.png"
            alt="Ventura Builders Group"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-[#c9a84c] text-sm tracking-wide transition-colors duration-200 bg-transparent border-0 cursor-pointer"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="bg-[#c9a84c] hover:bg-[#a8842e] text-[#0d1b2a] font-semibold text-sm px-5 py-2.5 rounded transition-colors duration-200 tracking-wide cursor-pointer"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#0d1b2a" }}
      >
        <div className="px-4 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-[#c9a84c] text-sm tracking-wide text-left bg-transparent border-0 cursor-pointer py-1"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="bg-[#c9a84c] hover:bg-[#a8842e] text-[#0d1b2a] font-semibold text-sm px-5 py-3 rounded transition-colors duration-200 tracking-wide w-full mt-2 cursor-pointer"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
