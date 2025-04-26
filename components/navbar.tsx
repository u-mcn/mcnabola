'use client';

import './navbar.css'; 

export default function Navbar() {
  return (
    <nav className="navigation-bar">
      <ul className="flex gap-8 text-white text-lg pr-8">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}