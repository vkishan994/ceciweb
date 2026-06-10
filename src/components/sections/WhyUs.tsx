"use client";

import React from "react";
import { Award, HeartHandshake, UserCheck, Flame, Cpu, ShieldCheck } from "lucide-react";
import { Card } from "../ui/Card";

export const WhyUs: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-secondary" />,
      title: "Expertise par le vécu",
      description: "Des formateurs qui transmettent leur propre quotidien face aux barrières environnementales, créant un impact émotionnel incomparable."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-secondary" />,
      title: "Pédagogie active et pratique",
      description: "Mises en situation concrètes, ateliers immersifs (utilisation de lecteurs d'écran, navigation au clavier, simulations de handicaps cognitifs)."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-secondary" />,
      title: "Accompagnement personnalisé",
      description: "Une équipe à l'écoute pour auditer vos besoins réels et concevoir des parcours qui répondent à vos enjeux organisationnels spécifiques."
    },
    {
      icon: <Flame className="w-6 h-6 text-secondary" />,
      title: "Méthodologie centrée sur l'humain",
      description: "Au-delà de la conformité légale, nous visons l'épanouissement mutuel des collaborateurs à travers le respect des singularités de chacun."
    },
    {
      icon: <Cpu className="w-6 h-6 text-secondary" />,
      title: "Formations sur-mesure",
      description: "Des modules adaptables en durée, format (présentiel ou distanciel) et contenus pour correspondre à la maturité inclusive de vos équipes."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
      title: "Inclusion durable",
      description: "Nous vous donnons les clés méthodologiques et les réflexes quotidiens pour pérenniser l'accessibilité dans votre organisation."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
            Notre différence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Pourquoi Choisir Céciweb Formation ?
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Nous ne nous contentons pas de transmettre de la théorie. Nous créons des déclics humains durables pour instaurer une culture d&apos;inclusion pérenne au sein de votre structure.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <Card
              key={idx}
              className="group border border-primary/5 hover:border-secondary/20 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
