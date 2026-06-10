"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
  image: string;
}

interface CarouselProps {
  items: TestimonialItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  // Auto play but respect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto focus:outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="Témoignages des clients"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Slides Container */}
      <div 
        ref={slideContainerRef}
        className="overflow-hidden relative min-h-[340px] md:min-h-[280px]"
        aria-live="polite"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} sur ${items.length}`}
              className={`absolute inset-0 w-full transition-opacity duration-500 flex flex-col items-center justify-center text-center p-4 ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <blockquote className="max-w-3xl">
                <p className="text-xl md:text-2xl italic font-medium text-primary leading-relaxed mb-6">
                  « {item.quote} »
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
                  <Image
                    src={item.image}
                    alt=""
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-2 border-secondary"
                  />
                  <div className="text-left">
                    <cite className="not-italic font-bold text-lg text-text-main block">
                      {item.author}
                    </cite>
                    <span className="text-sm text-text-muted">
                      {item.role}, <span className="font-semibold text-primary">{item.organization}</span>
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
          );
        })}
      </div>

      {/* Manual Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Indicator dots */}
        <div className="flex gap-2" role="group" aria-label="Sélectionner le témoignage">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                index === activeIndex ? "bg-secondary scale-125" : "bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary/5 hover:border-primary transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
