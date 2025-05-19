'use client';

import { ConnectingDotsBackground, Section, Navbar, Home, ContactSection, AboutSection } from "@/components";

export default function PersonPage() {
  return (
    <div className="min-h-screen w-full">
      <section id="home">
      <ConnectingDotsBackground />
      <div>
        <Home 
              name="Ultan" 
              title="I'm a Developer" 
              buttonText="View My Work" 
              buttonLink="#about" 
              themeColor="#ff5555" // red
            />
      </div>

      </section>

      <Navbar/>

      <main className="w-full">
        {/* <Section id="about">About Me Section</Section> */}
        <AboutSection
          bio="This is a paragraph about me, paragraph test test test test mcparagraphface alythough i still wan to test lines, paragraph mcparagraphface, paragraph mcparagraphface, paragraph mcparagraphface, paragraph mcparagraphface, paragraph mcparagraphface"
          imageSrc="/img/Shrek.png"
          skills={[
            { name: "HTML", iconSrc: "/img/html.png" },
            { name: "CSS", iconSrc: "/img/css.png" },
            { name: "JavaScript", iconSrc: "/img/js.png" },
            { name: "React", iconSrc: "/img/react.png" },
            { name: "Next.js", iconSrc: "/img/nextjs.png" },
            { name: "Jest", iconSrc: "/img/jest.png" },
            { name: "Git", iconSrc: "/img/git.png" },
            { name: "Python", iconSrc: "/img/py.png" },
            { name: "SQL", iconSrc: "/img/sql.png" },
            { name: "Psychology", iconSrc: "/img/psi.png" },
          ]}
        />
        <Section id="projects">Projects Section</Section>
        {/* <Section id="contact">Contact Section</Section> */}
        <ContactSection/>
      </main>
    </div>
  );
}
