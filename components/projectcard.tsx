import { Button } from "@/components";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    viewLink: string;
    githubLink: string;
    reverse?: boolean;
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    viewLink,
    githubLink,
    reverse = false,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center gap-8 mb-16`}
    >
      {/* Image */}
      <div className={`w-full md:w-[70%] ${reverse ? 'md:pl-8' : 'md:pr-8'}`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full border-12 border-white shadow-md"
        />
      </div>

      {/* Info */}
      <div
        className={`w-full md:w-1/2 text-white flex flex-col ${
          reverse ? 'items-end text-right' : 'items-start text-left'
        }`}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex gap-4">
          <Button text="View" href={viewLink} variant="action" />
          <Button text="GitHub" href={githubLink} variant="action" />
        </div>
      </div>
    </div>
  );
}