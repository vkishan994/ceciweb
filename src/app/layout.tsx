import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Céciweb Formation | Sensibilisation au Handicap & Accessibilité",
  description: "Organisme de formation spécialisé dans la sensibilisation au handicap et l'accessibilité numérique. Nos formations professionnelles sont dispensées par des experts en situation de handicap.",
  keywords: [
    "Céciweb Formation",
    "Formation handicap",
    "Sensibilisation handicap",
    "Accessibilité numérique",
    "RGAA",
    "Inclusion professionnelle",
    "Formateurs handicapés",
    "France"
  ],
  authors: [{ name: "Céciweb Formation" }],
  openGraph: {
    title: "Céciweb Formation | Sensibilisation au Handicap & Accessibilité",
    description: "Des formations d'excellence animées par des professionnels en situation de handicap pour bâtir une société inclusive.",
    url: "https://ceciweb-formation.fr",
    siteName: "Céciweb Formation",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://ceciweb-formation.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "Céciweb Formation — Formation & Sensibilisation au Handicap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Céciweb Formation | Sensibilisation au Handicap & Accessibilité",
    description: "Des formations d'excellence animées par des professionnels en situation de handicap.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-text-main bg-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Céciweb Formation",
              url: "https://ceciweb-formation.fr",
              logo: "https://ceciweb-formation.fr/og-image.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-1-00-00-00-00",
                contactType: "customer service",
                availableLanguage: "French",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Paris",
                postalCode: "75008",
                addressCountry: "FR",
              },
              description:
                "Organisme de formation spécialisé dans la sensibilisation au handicap et l'accessibilité. Formations dispensées par des experts en situation de handicap.",
            }),
          }}
        />
        {/* Skip to Main Content Link for accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-primary focus:text-white focus:px-6 focus:py-3 focus:rounded-button focus:shadow-premium focus:outline-none"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}

