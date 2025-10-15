"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#galerie", label: "Galerie" },
    { href: "#vorteile", label: "Vorteile" },
    { href: "#bewertungen", label: "Bewertungen" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-rose-600" : "text-white"
            }`}
          >
            Ferienwohnung Unterm Schloß
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/impressum"
              className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Impressum
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
            aria-label="Menü öffnen"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/impressum"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
