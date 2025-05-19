'use client';

import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  themeColor: string;
}

export default function Button({ text, href, themeColor }: ButtonProps) {
  return (
    <Link href={href}>
      <div
      style={{
        color: themeColor,
        borderColor: themeColor,
        backgroundColor: 'rgba(26, 26, 26, 0.6)',
        fontFamily: 'Montserrat, sans-serif',
      }}
      className="w-[275px] h-[48px] mt-10 border-2 rounded-sm text-[24px] font-medium flex items-center justify-center gap-2 cursor-pointer transition hover:opacity-80"
    >
      {text}
      {/* <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
      </svg> */}
    </div>
  </Link>
);
}
      {/* style={{
        borderColor: themeColor,
        color: themeColor,
      }} */}
      {/* className="px-6 py-2 border-2 font-medium transition-colors duration-200 hover:bg-opacity-10" */}
    {/* >
      {text}
    </Link>
  );
} */}
