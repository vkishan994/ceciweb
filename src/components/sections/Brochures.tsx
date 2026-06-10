"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Download, BookOpen, X, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const downloadSchema = z.object({
  fullName: z.string().min(2, "Veuillez entrer au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  company: z.string().min(2, "Veuillez indiquer le nom de votre organisation"),
});

type DownloadFormData = z.infer<typeof downloadSchema>;

export const Brochures: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const programs = [
    {
      id: "sensi",
      title: "Sensibilisation et Accueil du Handicap",
      duration: "1 jour (7h)",
      audience: "Tous collaborateurs, RH, Managers",
      description: "Apprenez à identifier les situations de handicap, déconstruire les préjugés et adopter une communication respectueuse au quotidien.",
    },
    {
      id: "web-dev",
      title: "Accessibilité Numérique & Conformité RGAA",
      duration: "3 jours (21h)",
      audience: "Développeurs, Designers, Product Owners",
      description: "Maîtrisez les critères du RGAA 4.1. Structurez vos pages, gérez le clavier et configurez les lecteurs d'écran pour assurer l'accès universel.",
    },
    {
      id: "management",
      title: "Management Inclusif & Recrutement",
      duration: "2 jours (14h)",
      audience: "Dirigeants, Managers, Chargés de Recrutement",
      description: "Intégrez le handicap dans vos processus d'embauche. Aménagez les postes et pilotez la diversité avec efficacité.",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DownloadFormData>({
    resolver: zodResolver(downloadSchema),
  });

  // Handle Modal escape key & focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (selectedProgram) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling of background page
      document.body.style.overflow = "hidden";
      // Focus the close button
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProgram]);

  const closeModal = () => {
    setSelectedProgram(null);
    setIsSuccess(false);
    reset();
  };

  // Generate a valid minimal PDF programmatically
  const triggerMockDownload = (programTitle: string) => {
    const pdfContent = `%PDF-1.4
%âãÏÓ
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 595.275 841.889] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 200 >>
stream
BT
/F1 20 Tf
50 750 Td
(CECIWEB FORMATION - BROCHURE PEDAGOGIQUE) Tj
/F1 14 Tf
0 -40 Td
(Programme : ${programTitle}) Tj
0 -30 Td
(Duree et Public : Conforme aux standards Qualiopi.) Tj
0 -20 Td
(Ce PDF valide simule le telechargement de la brochure.) Tj
0 -30 Td
(Contact : contact@ceciweb-formation.fr) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000056 00000 n 
0000000111 00000 n 
0000000223 00000 n 
0000000290 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
458
%%EOF`;
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const formattedName = programTitle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");
    link.download = `programme-ceciweb-${formattedName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const onSubmit = (data: DownloadFormData) => {
    console.log("Brochure Download Request:", {
      program: selectedProgram,
      user: data,
    });
    if (selectedProgram) {
      triggerMockDownload(selectedProgram);
    }
    setIsSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 2500);
  };

  return (
    <section id="brochures" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
            Programmes téléchargeables
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
            Nos Programmes de Formation
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Téléchargez nos fiches pédagogiques détaillées contenant les objectifs opérationnels, les prérequis techniques, les méthodes et les modalités d&apos;évaluation.
          </p>
        </div>

        {/* Brochure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <Card
              key={prog.id}
              className="flex flex-col justify-between border border-primary/5 hover:border-secondary/20 bg-white"
            >
              <div>
                <div className="flex items-center gap-3 text-secondary mb-6" aria-hidden="true">
                  <BookOpen className="w-6 h-6" />
                  <span className="text-sm uppercase tracking-wider font-extrabold text-primary">
                    Brochure
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mb-4 leading-snug">
                  {prog.title}
                </h3>
                <div className="space-y-2 mb-6 text-sm text-text-muted">
                  <p><strong>Durée :</strong> {prog.duration}</p>
                  <p><strong>Public :</strong> {prog.audience}</p>
                </div>
                <p className="text-text-muted leading-relaxed text-base mb-8">
                  {prog.description}
                </p>
              </div>

              <Button
                variant="secondary"
                onClick={() => setSelectedProgram(prog.title)}
                className="w-full text-base font-bold flex gap-2 cursor-pointer"
                aria-label={`Télécharger la brochure pour ${prog.title}`}
              >
                <Download className="w-5 h-5" />
                Télécharger le programme
              </Button>
            </Card>
          ))}
        </div>

      </div>

      {/* Accessible Dialog Backdrop */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-[#07132B]/80 backdrop-blur-sm flex items-center justify-center p-4">
          
          {/* Modal Container */}
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-white rounded-card w-full max-w-lg p-8 shadow-premium relative animate-in fade-in zoom-in-95 duration-200"
          >
            
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 text-text-muted hover:text-primary rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary cursor-pointer"
              aria-label="Fermer la boîte de dialogue"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSuccess ? (
              <>
                <h3 id="modal-title" className="text-2xl font-extrabold text-primary mb-2">
                  Téléchargement du programme
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Vous allez télécharger la fiche pédagogique de : <br />
                  <strong className="text-primary">{selectedProgram}</strong>.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-bold text-primary mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      {...register("fullName")}
                      className={`w-full h-[50px] px-4 rounded-button border text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        errors.fullName ? "border-error focus-visible:ring-error" : "border-primary/20 focus-visible:ring-secondary"
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-error text-xs mt-1.5 font-semibold">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                      Adresse email professionnelle *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={`w-full h-[50px] px-4 rounded-button border text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        errors.email ? "border-error focus-visible:ring-error" : "border-primary/20 focus-visible:ring-secondary"
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-error text-xs mt-1.5 font-semibold">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-primary mb-2">
                      Nom de votre organisation *
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register("company")}
                      className={`w-full h-[50px] px-4 rounded-button border text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        errors.company ? "border-error focus-visible:ring-error" : "border-primary/20 focus-visible:ring-secondary"
                      }`}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "company-error" : undefined}
                    />
                    {errors.company && (
                      <p id="company-error" className="text-error text-xs mt-1.5 font-semibold">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" variant="primary" className="w-full mt-4 h-[56px] text-base font-bold">
                    Valider et télécharger
                  </Button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-success mb-4" />
                <h3 className="text-2xl font-extrabold text-primary mb-2">
                  Téléchargement réussi !
                </h3>
                <p className="text-text-muted leading-relaxed max-w-sm">
                  Le programme va se télécharger automatiquement. Merci pour votre intérêt.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
