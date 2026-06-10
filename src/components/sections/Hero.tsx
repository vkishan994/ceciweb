"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center bg-[#07132B] overflow-hidden pt-24">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/hero-workspace.png"
          alt="Professionnels en réunion de travail inclusive dans un bureau moderne"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Sleek radial overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#050D1D] via-[#07132B]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-16 w-full text-white">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-4 py-2 text-secondary font-bold text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>L&apos;excellence par la diversité</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
          >
            L&apos;inclusion par <br />
            <span className="text-secondary">le partage d&apos;expérience.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/85 font-normal leading-relaxed mb-10 max-w-2xl"
          >
            Des formations professionnelles d&apos;excellence dispensées par des experts qui vivent le handicap au quotidien. Valorisez la diversité, transformez les perceptions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <Button
              variant="primary"
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-secondary/95 text-primary border-none font-bold"
            >
              Nous Contacter
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection("activities")}
              className="border-white/20 text-white hover:bg-white/10 hover:border-white font-bold group"
            >
              Découvrir nos activités
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Dynamic bottom transition scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full"
          onClick={() => scrollToSection("about")}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") scrollToSection("about"); }}
          role="button"
          tabIndex={0}
          aria-label="Faire défiler vers la section suivante"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
