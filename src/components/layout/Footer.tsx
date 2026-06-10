import React from "react";
import { Landmark, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-primary/20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Vision */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="flex items-center gap-3 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-lg p-1 w-fit mb-6"
              aria-label="Céciweb Formation - Retour en haut"
            >
              <div className="bg-secondary text-primary p-2 rounded-xl">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight uppercase">
                Céciweb <span className="text-secondary font-medium lowercase">Formation</span>
              </span>
            </a>
            <p className="text-white/80 max-w-sm leading-relaxed text-base">
              Organisme de formation inclusive d&apos;excellence. Des compétences professionnelles et des parcours de formation animés par des experts en situation de handicap.
            </p>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-secondary mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+33100000000"
                  className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded px-1"
                >
                  +33 (0)1 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contact@ceciweb-formation.fr"
                  className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded px-1"
                >
                  contact@ceciweb-formation.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" aria-hidden="true" />
                <span>
                  75008 Paris, France
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-secondary mb-6">
              Liens utiles
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href="#about"
                  className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
                >
                  À propos de nous
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
                >
                  Nos formations
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
                >
                  Nos formateurs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
                >
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Céciweb Formation. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="#legal"
              className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Mentions Légales
            </a>
            <a
              href="#privacy"
              className="hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
            >
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
