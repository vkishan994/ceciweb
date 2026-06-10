"use client";

import React from "react";
import Image from "next/image";
import { Eye, Target, Compass } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Intro Grid: Section Title + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
              Qui sommes-nous ?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Une autre vision de la sensibilisation au handicap.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              Fondé sur la conviction que l&apos;inclusion ne s&apos;apprend pas seulement dans les manuels, <strong>Céciweb Formation</strong> est un organisme de formation unique. Notre force réside dans la transmission directe : tous nos modules sont animés par des formateurs professionnels eux-mêmes en situation de handicap.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              En partageant leur expertise et leur vécu quotidien, ils transforment la sensibilisation théorique en une expérience humaine marquante et concrète, permettant de déconstruire les stéréotypes et de bâtir une culture d&apos;entreprise réellement inclusive.
            </p>
          </div>
        </div>

        {/* Editorial Layout: Alternating Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[480px] w-full rounded-card overflow-hidden shadow-premium">
              <Image
                src="/images/about-training.png"
                alt="Un formateur de Céciweb Formation anime un atelier interactif sur l'accessibilité avec des participants"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Visual Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-xl -z-10" />
          </div>

          {/* Right: Editorial items (Mission, Vision, Engagements) */}
          <div className="lg:col-span-6 space-y-10">
            {/* Mission */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary" aria-hidden="true">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-primary mb-2">Notre Mission</h3>
                <p className="text-text-muted leading-relaxed text-base">
                  Accompagner les organisations privées et publiques dans leur transition inclusive par le biais de formations impactantes, favorisant l&apos;autonomie et le respect mutuel.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary" aria-hidden="true">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-primary mb-2">Notre Vision</h3>
                <p className="text-text-muted leading-relaxed text-base">
                  Une société où le handicap n&apos;est plus perçu comme une limite, mais comme une perspective enrichissante qui stimule la créativité, l&apos;innovation et l&apos;empathie collective.
                </p>
              </div>
            </div>

            {/* Engagements */}
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary" aria-hidden="true">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-primary mb-2">Nos Engagements</h3>
                <p className="text-text-muted leading-relaxed text-base">
                  Garantir une rigueur pédagogique maximale, assurer l&apos;accessibilité universelle de nos supports et encourager l&apos;égalité des chances dans le milieu professionnel.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
