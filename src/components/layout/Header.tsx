"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Landmark } from "lucide-react";
import { Button } from "../ui/Button";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Présentation", href: "#about" },
    { label: "Valeurs", href: "#values" },
    { label: "Pourquoi Nous", href: "#why-choose-us" },
    { label: "Formateurs", href: "#trainers" },
    { label: "Activités", href: "#activities" },
    { label: "Programmes", href: "#brochures" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-premium border-b border-primary/10 py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-lg p-1"
          aria-label="Céciweb Formation - Accueil"
        >
          <div className="bg-primary text-white p-2 rounded-xl">
            <Landmark className="w-6 h-6" />
          </div>
          <span className={`${isScrolled ? "text-primary ": "text-white"} font-extrabold text-xl md:text-2xl tracking-tight uppercase`}>
            Céciweb <span className="text-secondary font-medium lowercase">Formation</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${isScrolled ? 'text-text-main': 'text-white'} font-medium hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded px-2 py-1 transition-colors duration-200`}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="secondary"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${isScrolled ? "" : "border-white text-white" } h-[44px] px-6 text-sm font-bold border-[2px]`}
          >
            Nous Contacter
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${isScrolled ? "text-primary ": "text-white"} md:hidden p-2 hover:text-secondary rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 cursor-pointer`}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed top-[68px] left-0 right-0 bg-white border-b border-primary/10 shadow-premium transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
      >
        <nav className="flex flex-col p-6 gap-4" aria-label="Menu principal mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-main font-medium text-lg hover:text-secondary p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            onClick={() => {
              setIsOpen(false);
              const contactSection = document.getElementById("contact");
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full mt-2 h-[50px] text-base"
          >
            Nous Contacter
          </Button>
        </nav>
      </div>
    </header>
  );
};
