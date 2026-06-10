import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { WhyUs } from "@/components/sections/WhyUs";
import { Trainers } from "@/components/sections/Trainers";
import { Activities } from "@/components/sections/Activities";
import { Brochures } from "@/components/sections/Brochures";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Hero />
        <About />
        <Values />
        <WhyUs />
        <Trainers />
        <Activities />
        <Brochures />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

