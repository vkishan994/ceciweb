"use client";

import React from "react";
import { Card } from "../ui/Card";
import { GraduationCap, Landmark, Sparkles, Compass } from "lucide-react";

export const Activities: React.FC = () => {
  const activities = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Formation Professionnelle",
      description: "Des modules certifiants sur l'accessibilité numérique (RGAA), le management de la diversité et l'accueil du public handicapé.",
      accent: "Pour développeurs, designers & RH"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Programmes de Sensibilisation",
      description: "Ateliers immersifs interactifs pour démystifier le handicap, encourager les bons gestes et instaurer une culture d'entraide.",
      accent: "Pour tous les collaborateurs"
    },
    {
      icon: <Landmark className="w-8 h-8 text-primary" />,
      title: "Conseil & Accompagnement",
      description: "Audits de vos outils web et de vos process internes pour assurer une mise en conformité technique et managériale solide.",
      accent: "Pour comités de direction & DSI"
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Activités Culturelles Inclusives",
      description: "Conférences thématiques, ateliers de team-building et événements culturels axés sur l'ouverture et le partage d'expériences.",
      accent: "Pour fédérer vos équipes"
    }
  ];

  return (
    <section id="activities" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
            Nos domaines d&apos;intervention
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Nos Activités Majeures
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Nous proposons un accompagnement global pour ancrer durablement la culture de l&apos;accessibilité et de la bienveillance au cœur de vos structures.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, idx) => (
            <Card
              key={idx}
              className="flex gap-6 items-start border border-primary/5 hover:border-secondary/20 focus-within:ring-2 focus-within:ring-secondary focus-within:ring-offset-2"
            >
              <div className="flex-shrink-0 p-4 rounded-2xl bg-primary/5 text-primary" aria-hidden="true">
                {act.icon}
              </div>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {act.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-base mb-4">
                    {act.description}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-wider font-extrabold text-secondary">
                  {act.accent}
                </span>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
