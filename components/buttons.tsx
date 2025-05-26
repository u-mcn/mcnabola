'use client';

import Link from 'next/link';
import clsx from 'clsx';
import './button.css';

interface ButtonProps {
  text: string;
  href: string;
  themeColor?: string;
  variant?: 'home' | 'select' | 'action';
}

export default function Button({
  text,
  href,
  themeColor = '#ff4d5a',
  variant = 'home',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center border-2 font-medium cursor-pointer transition duration-200';

  const stylesByVariant = {
    home: clsx(
      baseStyles,
      'w-[275px] h-[48px] text-[24px] rounded-sm hover:opacity-80',
      'bg-[rgba(26,26,26,0.6)]'
    ),
    select: clsx(
      baseStyles,
      'w-[300px] h-[60px] text-xl rounded-md hover:scale-105'
    ),
    action: 'btn btn-background-slide text-sm px-4 py-2'
  };

  return (
    <Link href={href}>
      <div
        className={stylesByVariant[variant]}
        style={{
          color: 'white',
          borderColor: themeColor,
          fontFamily: 'Montserrat, sans-serif',
          ...(variant === 'action' && { borderBottom: `2px solid ${themeColor}` }),
          ...(variant === 'action' && { '--accent-color': themeColor } as React.CSSProperties),
        }}
      >
        {text}
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
