'use client';

import { Button } from "@/components";

interface HomeProps {
  name: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  themeColor: string;
}

export default function Home({ name, title, buttonText, buttonLink, themeColor }: HomeProps) {
  return (
    <section id="home" className="w-full h-screen flex flex-col items-center justify-center text-center text-white relative z-10 ">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hello, I'm <span style={{ color: themeColor }}>{name}</span>
      </h1>
      <h2 className="text-2xl font-light mb-8">{title}</h2>

      <Button 
      text={buttonText} 
      href={buttonLink} 
      themeColor={themeColor}
      variant="home"
      />
    </section>
  );
}