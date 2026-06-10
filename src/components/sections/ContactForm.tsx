"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Veuillez entrer au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  organization: z.string().min(2, "Veuillez entrer le nom de votre organisation"),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact Form Submission:", data);
    // Simulate API request
    setIsSent(true);
    reset();
    // Reset success display after some time
    setTimeout(() => {
      setIsSent(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider block mb-3">
              Nous contacter
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 leading-tight">
              Construisons Ensemble Votre Projet Inclusif
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              Que vous soyez une entreprise privée, une administration publique, ou une collectivité locale, nous concevons des programmes adaptés à votre niveau de maturité et vos obligations légales.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-premium flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-text-muted font-bold mb-1">
                    Téléphone
                  </span>
                  <a
                    href="tel:+33100000000"
                    className="text-lg font-bold text-primary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded px-1"
                  >
                    +33 (0)1 00 00 00 00
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-premium flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-text-muted font-bold mb-1">
                    Adresse email
                  </span>
                  <a
                    href="mailto:contact@ceciweb-formation.fr"
                    className="text-lg font-bold text-primary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded px-1"
                  >
                    contact@ceciweb-formation.fr
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-premium flex items-center justify-center text-primary flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-text-muted font-bold mb-1">
                    Localisation
                  </span>
                  <address className="not-italic text-lg font-bold text-primary">
                    75008 Paris, France
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <Card className="shadow-premium border border-primary/5 bg-white">
              {isSent ? (
                <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mb-6" aria-hidden="true">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary mb-3">
                    Votre message a été envoyé !
                  </h3>
                  <p className="text-text-muted leading-relaxed max-w-md">
                    Merci pour votre message. Nos équipes et nos formateurs reviendront vers vous sous un délai de 48 heures ouvrées pour échanger sur vos besoins.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nom complet */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name")}
                        className={`w-full h-[50px] px-4 rounded-button border text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          errors.name ? "border-error focus-visible:ring-error" : "border-primary/20 focus-visible:ring-secondary"
                        }`}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-error text-xs mt-1.5 font-semibold">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-bold text-primary mb-2">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        {...register("email")}
                        className={`w-full h-[50px] px-4 rounded-button border text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          errors.email ? "border-error focus-visible:ring-error" : "border-primary/20 focus-visible:ring-secondary"
                        }`}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-error text-xs mt-1.5 font-semibold">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Organisation */}
                    <div>
                      <label htmlFor="organization" className="block text-sm font-bold text-primary mb-2">
                        Organisation / Entreprise *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        {...register("organization")}
                        className={`w-full h-[50px] px-4 rounded-button border text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                          errors.organization ? "border-error focus-visible:ring-error" : "border-primary/20 focus-visible:ring-secondary"
                        }`}
                        aria-invalid={errors.organization ? "true" : "false"}
                        aria-describedby={errors.organization ? "organization-error" : undefined}
                      />
                      {errors.organization && (
                        <p id="organization-error" className="text-error text-xs mt-1.5 font-semibold">
                          {errors.organization.message}
                        </p>
                      )}
                    </div>

                    {/* Téléphone (facultatif) */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">
                        Téléphone (optionnel)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        className="w-full h-[50px] px-4 rounded-button border border-primary/20 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
                      Votre projet / Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className={`w-full p-4 rounded-button border text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 resize-none ${
                        errors.message ? "border-error focus-visible:ring-error" : "border-primary/20 focus-visible:ring-secondary"
                      }`}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-error text-xs mt-1.5 font-semibold">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full h-[56px] text-base font-bold flex gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  </Button>
                </form>
              )}
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
