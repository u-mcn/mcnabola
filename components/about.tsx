'use client';

import { ParticlesBackground } from "@/components";
import { SkillGrid } from "@/components";
import React from "react";

interface Skill {
  name: string;
  iconSrc: string;
}

interface AboutSectionProps {
  bio: string;
  imageSrc: string;
  skills: Skill[];
}

export default function AboutSection({ bio, imageSrc, skills }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-6 text-white relative overflow-hidden">
      <ParticlesBackground />

      {/* Section Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold tracking-wide">About</h2>
      </div>

      <div className="max-w-none mx-auto flex flex-col md:flex-row gap-12 items-start relative z-10">

        {/* Left: Skills */}
        <div className="w-full md:w-[38%] flex justify-end pr-4">
          <SkillGrid skills={skills} />
        </div>


        <div className="flex justify-center items-start gap-12 py-12 "> 
          {/* Center: Image */}
          <div className="flex justify-center">
            <img
              src={imageSrc}
              alt="Profile"
              className="w-auto max-h-[320px] object-contain rounded-md shadow-lg"
            />
          </div>

          {/* Right: Bio */}
          <div className="max-w-2xl text-lg leading-relaxed text-gray-300 mb-6">
            {bio.split(/\r?\n/).map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}