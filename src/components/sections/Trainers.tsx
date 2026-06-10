"use client";

import React from "react";
import Image from "next/image";
import { Card } from "../ui/Card";
import { Sparkles, BrainCircuit, Accessibility, Award } from "lucide-react";

export const Trainers: React.FC = () => {
  const trainers = [
    {
      name: "Marie",
      role: "Experte en Accessibilité Numérique",
      description:
        "Spécialiste de la conformité RGAA et des technologies d'assistance. Marie accompagne les équipes de développement dans la conception d'interfaces universelles.",
      tags: ["RGAA", "Lecteurs d'écran", "UX Inclusive"],
      image: "/images/trainer-1.png",
      badge: "Consultante Senior"
    },
    {
      name: "Thomas",
      role: "Consultant en Management Inclusif",
      description:
        "Ancien DRH en entreprise, Thomas intervient auprès des comités de direction pour structurer des politiques de recrutement et d'intégration durables.",
      tags: ["Politique Handicap", "Ressources Humaines", "Leadership"],
      image: "/images/trainer-2.png",
      badge: "Expert Métier"
    },
    {
      name: "Sophie",
      role: "Animatrice Sensibilisation & Ergonomie",
      description:
        "Ergonome de formation, Sophie conçoit des ateliers de mise en situation pour aider les collaborateurs à appréhender concrètement les barrières physiques et cognitives.",
      tags: ["Ergonomie", "Sensibilisation", "Ateliers Live"],
      image: "/images/trainer-3.png",
      badge: "Formatrice Certifiée"
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Editorial Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-6">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
              Notre force humaine
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Des Experts Guidés par le Vécu
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-lg text-text-muted leading-relaxed">
              La force unique de nos formations repose sur l&apos;expertise et la légitimité de nos formateurs en situation de handicap. Au-delà de leurs certifications pédagogiques, ils partagent un regard authentique sur les barrières réelles du monde professionnel. Ce partage d&apos;expérience est notre atout majeur pour susciter l&apos;empathie active.
            </p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trainers.map((trainer, idx) => (
            <Card
              key={idx}
              className="flex flex-col h-full overflow-hidden p-0 bg-white shadow-premium hover:shadow-premium-hover border border-primary/5 group"
            >
              {/* Image Header with Badge */}
              <div className="relative h-[340px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={`Portrait professionnel de ${trainer.name}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Custom Label overlay */}
                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs uppercase tracking-wider font-bold py-1.5 px-3.5 rounded-full backdrop-blur-sm shadow-premium">
                  {trainer.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-primary mb-1">
                  {trainer.name}
                </h3>
                <p className="text-secondary font-bold text-sm mb-4">
                  {trainer.role}
                </p>
                <p className="text-text-muted leading-relaxed text-base flex-grow mb-6">
                  {trainer.description}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mt-auto" aria-label={`Compétences de ${trainer.name}`}>
                  {trainer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/5 text-primary text-xs font-semibold py-1.5 px-3 rounded-full border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
