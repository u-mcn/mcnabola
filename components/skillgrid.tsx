import { SkillCard } from "@/components";

interface Skill {
    name: string;
    iconSrc: string;
  }
  
  export default function SkillGrid({ skills }: { skills: Skill[] }) {
    // const columns = [
    const col1 =skills.slice(0, 3);
    const col2 =skills.slice(3, 7);
    const col3 =skills.slice(7, 10);
    // ];
  
    return (
        <div className="flex justify-center gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 mt-6">
          {col1.map((skill, i) => (
            <SkillCard key={i} {...skill} />
          ))}
        </div>
  
        {/* Column 2 */}
        <div className="flex flex-col gap-6 -mt-6">
          {col2.map((skill, i) => (
            <SkillCard key={i + 3} {...skill} />
          ))}
        </div>
  
        {/* Column 3 */}
        <div className="flex flex-col gap-6 mt-6">
          {col3.map((skill, i) => (
            <SkillCard key={i + 7} {...skill} />
          ))}
        </div>
      </div>
    );
  }