import { ProjectCard } from "@/components";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  viewLink: string;
  githubLink: string;
}

export default function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[100rem] mx-auto px-4">
        <h2 className="text-4xl text-white font-bold text-center mb-16">Projects</h2>

        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}