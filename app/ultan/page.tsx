'use client';

import { ConnectingDotsBackground, Navbar, Home, AboutSection, ContactSection, ProjectSection } from "@/components";

const projects = [
  {
    title: 'Speakfake',
    description: 'Deepfake app built using Python, TKinter, Whisper',
    imageSrc: '/img/speakfakeV2.png',
    viewLink: 'https://www.youtube.com/',
    githubLink: 'https://www.google.com/',
  },  
  // {
  //   title: 'Test',
  //   description: 'This is a Test to test things, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST, TEST',
  //   imageSrc: '/img/speakfakeV1.png',
  //   viewLink: 'https://www.youtube.com/',
  //   githubLink: 'https://www.google.com/',
  // },
]
const bio_u = `Hi! I am a Psychology and Computer Science student in University College Cork, My passion lies at the connection between technology and human behavior — I'm just as fascinated by how software works as I am by how people interact with it. I am eager and quick to learn different new computer technologies and languages. Recently I have been interested in different types of AI and their applications as first outlined by Issac Asimov, I have been doing this through my own personal projects or through university such as my Final Year Project which looked at developing and using Deepfake technology to investigate the relationship between accent and credibility. 
          
Outside of of coding, I'm a member of Netsoc at UCC, play rugby and enjoy reading, learning about history and staying connected to the Irish language. Whether it's building software or exploring new ideas, I'm always curious, creative and eager to learn.`

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
          bio={bio_u}
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
            { name: "SQL", iconSrc: "/img/SQL_icon.png" },
            { name: "Psychology", iconSrc: "/img/psi.png" },
          ]}
        />
        <ProjectSection projects={projects} />
        {/* <Section id="projects">Projects Section</Section> */}
        {/* <Section id="contact">Contact Section</Section> */}
        <ContactSection/>
      </main>
    </div>
  );
}
