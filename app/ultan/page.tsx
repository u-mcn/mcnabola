'use client';

import { ConnectingDotsBackground } from "@/components";
import { Home } from "@/components";
import { Navbar } from "@/components";
import { Section } from "@/components";

export default function PersonPage() {
  return (
    <div className="min-h-screen w-full">
      <ConnectingDotsBackground />
      <section>
        <Home 
            name="Ultan" 
            title="I'm a Developer" 
            buttonText="View My Work" 
            buttonLink="#about" 
          />
      </section>

      <Navbar/>

      <main className="w-full">
        <Section id="about">About Me Section</Section>
        <Section id="projects">Projects Section</Section>
        <Section id="contact">Contact Section</Section>
      </main>
    </div>
  );
}
