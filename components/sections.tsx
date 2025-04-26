'use client';

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-blue-950 bg-opacity-80 text-white text-3xl font-semibold">
      {children}
    </section>
  );
}