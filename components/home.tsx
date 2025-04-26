'use client';

import Link from "next/link";

interface HomeProps {
  name: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

export default function Home({ name, title, buttonText, buttonLink }: HomeProps) {
  return (
    <section id="home" className="w-full h-screen flex flex-col items-center justify-center text-center text-white relative z-10 ">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I'm {name}</h1>
      <h2 className="text-2xl font-light mb-8">{title}</h2>

      <Link href={buttonLink}>
        <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-xl font-semibold transition-all duration-500 ease-in-out
          hover:shadow-[0_0_10px_2px_white] hover:bg-transparent hover:text-white">
          {buttonText}
        </button>
      </Link>
    </section>
  );
}