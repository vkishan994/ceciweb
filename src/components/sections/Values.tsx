"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Users, Accessibility, Heart, Share2, Scale, ShieldAlert } from "lucide-react";

export const Values: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Inclusion",
      description: "Construire des environnements où chaque individu est valorisé et intégré sans distinction."
    },
    {
      icon: <Accessibility className="w-8 h-8 text-primary" />,
      title: "Accessibilité",
      description: "Garantir un accès universel à l'information, aux outils numériques et à l'espace physique."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Respect",
      description: "Valoriser la dignité, écouter avec empathie et promouvoir une communication bienveillante."
    },
    {
      icon: <Share2 className="w-8 h-8 text-primary" />,
      title: "Partage des Connaissances",
      description: "Transmettre les compétences numériques et sociales pour stimuler l'apprentissage collectif."
    },
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      title: "Égalité des Chances",
      description: "Donner à chacun les ressources adaptées pour libérer son plein potentiel professionnel."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-primary" />,
      title: "Expertise Terrain",
      description: "S'appuyer sur le vécu authentique de nos formateurs pour concevoir des formations concrètes."
    }
  ];

  return (
    <section id="values" className="py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
            Nos piliers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Nos Valeurs Fondatrices
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Chacun de nos programmes et chacune de nos interventions s&apos;articulent autour de principes éthiques forts pour un impact social durable.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <Card
              key={index}
              className="flex flex-col items-start focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2"
            >
              <div className="mb-6 p-4 rounded-2xl bg-primary/5 flex items-center justify-center" aria-hidden="true">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {val.title}
              </h3>
              <p className="text-text-muted leading-relaxed text-base">
                {val.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
