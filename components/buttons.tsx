'use client';

import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
}

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="px-8 py-4 border-2 border-white text-white rounded-lg text-xl font-semibold transition-all duration-300
        hover:shadow-[0_0_10px_2px_white] hover:bg-transparent hover:text-white">
        {text}
      </button>
    </Link>
  );
}