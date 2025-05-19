'use client';

import { ParticlesBackground } from "@/components";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children}: SectionProps) {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center text-white text-3xl font-semibold overflow-hidden">
      <ParticlesBackground/>
      <div className="relative z-10">
        {children}
      </div>

    </section>
  );
}