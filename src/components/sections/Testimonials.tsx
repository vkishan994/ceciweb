"use client";

import React from "react";
import { Carousel, TestimonialItem } from "../ui/Carousel";

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "L'intervention de Céciweb a profondément changé l'approche de nos équipes techniques. Nos développeurs ont enfin compris l'intérêt du code accessible.",
      author: "Julien Dubreuil",
      role: "Directeur de l'Ingénierie",
      organization: "Vente-Unique",
      image: "/images/trainer-1.png", // reusing portraits as mock clients
    },
    {
      quote: "Une formation d'une immense richesse humaine. Avoir un formateur non-voyant nous a permis de comprendre en 5 minutes ce que nous essayions d'expliquer dans des chartes théoriques depuis un an.",
      author: "Hélène Marois",
      role: "Responsable RSE & Diversité",
      organization: "Région Île-de-France",
      image: "/images/trainer-2.png",
    },
    {
      quote: "Nos managers ont adoré les ateliers de mise en situation. Cela a permis de désacraliser le sujet du handicap et de motiver l'intégration de nouvelles recrues.",
      author: "Antoine Rousseau",
      role: "Directeur des Ressources Humaines",
      organization: "Inov-Tech",
      image: "/images/trainer-3.png",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative">
      {/* Decorative quotes background */}
      <div 
        className="absolute top-12 left-12 text-[180px] font-serif text-primary/5 select-none leading-none pointer-events-none"
        aria-hidden="true"
      >
        “
      </div>
      <div 
        className="absolute bottom-12 right-12 text-[180px] font-serif text-primary/5 select-none leading-none pointer-events-none"
        aria-hidden="true"
      >
        ”
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
            Retours d&apos;expérience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Découvrez les témoignages d&apos;entreprises et de collectivités territoriales que nous avons accompagnées dans leur démarche d&apos;inclusion.
          </p>
        </div>

        {/* Carousel Component */}
        <div className="relative z-10">
          <Carousel items={testimonials} />
        </div>

      </div>
    </section>
  );
};
