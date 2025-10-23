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
    { href: "#vorteile", label: "Vorteile" },
    { href: "#gallery", label: "Galerie" },
    { href: "#ausstattung", label: "Ausstattung" },
    { href: "#umgebung", label: "Umgebung" },
    { href: "#location", label: "Lage" },
    { href: "#restaurants", label: "Restaurants" },
    { href: "#preise", label: "Preise" },
    { href: "#contact", label: "Kontakt" },
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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "bg-vineyard-50/95 border-wine-200 shadow-md" : "bg-vineyard-50/80 border-transparent shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-wine-700 transition-colors hover:text-wine-800">
            Ferienwohnung Unterm Schloß
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-vineyard-800 transition-colors hover:text-wine-700"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/impressum"
              className="text-sm font-medium text-vineyard-800 transition-colors hover:text-wine-700"
            >
              Impressum
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-vineyard-800 hover:bg-wine-50"
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
          <div className="md:hidden pb-4 bg-vineyard-50/95 backdrop-blur-sm rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 text-sm font-medium text-vineyard-800 hover:text-wine-700 hover:bg-wine-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/impressum"
                className="px-4 py-2 text-sm font-medium text-vineyard-800 hover:text-wine-700 hover:bg-wine-50 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="px-4 py-2 text-sm font-medium text-vineyard-800 hover:text-wine-700 hover:bg-wine-50 transition-colors"
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
