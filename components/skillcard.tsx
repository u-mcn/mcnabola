interface SkillCardProps {
    name: string;
    iconSrc: string;
  }
  
  export default function SkillCard({ name, iconSrc }: SkillCardProps) {
    return (
      <div
        className="flex flex-col items-center justify-evenly w-[160px] h-[100px]
          bg-gradient-to-br from-[#0a0a0a] to-[#0a0a0a] rounded-lg border-[3px]
          border-transparent bg-origin-border bg-clip-content
          hover:scale-105 transition-transform duration-200"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a, #0a0a0a), radial-gradient(circle at top left, #0070f3, #ff4d5a)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box',
        }}
      >
        <img src={iconSrc} alt={name} className="h-[60px] w-auto mb-2" />
        <div className="text-sm font-semibold tracking-wide">{name}</div>
      </div>
    );
  }