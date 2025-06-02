'use client';

import { ConnectingDotsBackground, Navbar, Home, AboutSection, ContactSection } from "@/components";

const bio_u = `Dia duit 🌊 Mark Mc Nabola anseo.
Software Engineer @ Cisco working on video conferencing endpoints.

Multidisciplinary software engineer with a passion for building user-friendly products. I have a strong background in C++ and Qt/qml, and I'm exploring Rust and Next.js.
`

export default function PersonPage() {
  return (
    <div className="min-h-screen w-full">
      <section id="home">
      <ConnectingDotsBackground />
      <div>
        <Home 
              name="Mark" 
              title="I'm a human" 
              buttonText="View My Work" 
              buttonLink="#about" 
              themeColor="#50C878" // emereld green
            />
      </div>

      </section>

      <Navbar/>

      <main className="w-full">
        <AboutSection
          bio={bio_u}
          imageSrc="/img/sicp-wizard.png"
          skills={[
            { name: "C++", iconSrc: "/img/c++.png" },
            { name: "Qt/qml", iconSrc: "/img/qt.svg" },
            { name: "Rust", iconSrc: "/img/rust.svg" },
            { name: "CSS", iconSrc: "/img/css.png" },
            { name: "JavaScript", iconSrc: "/img/js.png" },
            { name: "React", iconSrc: "/img/react.png" },
            { name: "Next.js", iconSrc: "/img/nextjs.png" },
            { name: "Jest", iconSrc: "/img/jest.png" },
            { name: "Git", iconSrc: "/img/git.png" },
            { name: "Python", iconSrc: "/img/py.png" },
            { name: "SQL", iconSrc: "/img/SQL_icon.png" },
            { name: "Psychology", iconSrc: "/img/psi.png" },
          ]}
        />

        <ContactSection/>
      </main>
    </div>
  );
}
