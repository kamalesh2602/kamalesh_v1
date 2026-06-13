import { skills } from "../data/skills";
import { FaTerminal } from "react-icons/fa";

interface SkillTagProps {
  skill: string;
  index: number;
}

function Skills() {
  const midPoint = Math.ceil(skills.length / 2);
  const track1 = skills.slice(0, midPoint);
  const track2 = skills.slice(midPoint);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0c] via-[#111114] to-[#0d0d11] py-28 text-white cyber-grid"
    >
      {/* Refined Minimalist Light Meshes */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,229,180,0.02),transparent_40%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,127,80,0.02),transparent_40%)] pointer-events-none" />

      {/* Header Container */}
      <div className="mx-auto max-w-6xl px-6 mb-16">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 shadow-inner backdrop-blur-md">
          <FaTerminal size={12} className="text-[#FFD700]" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFE5B4]">
            Capabilities
          </p>
        </div>

        <h2 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 sm:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Tech Stack
        </h2>
      </div>

      {/* INFINITE MOTION SCROLL TRACKS ASSEMBLY */}
      <div className="flex flex-col gap-6 w-full overflow-hidden mask-fade-edges">
        <div className="marquee-container flex overflow-hidden select-none gap-4">
          <div className="marquee-content flex shrink-0 items-center justify-around gap-4 min-w-full animate-marquee-left">
            {[...track1, ...track1, ...track1].map((skill, index) => (
              <SkillTag key={`t1-${skill}-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="marquee-container flex overflow-hidden select-none gap-4">
          <div className="marquee-content flex shrink-0 items-center justify-around gap-4 min-w-full animate-marquee-right">
            {[...track2, ...track2, ...track2].map((skill, index) => (
              <SkillTag key={`t2-${skill}-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left { animation: marqueeLeft 30s linear infinite; }
        .animate-marquee-right { animation: marqueeRight 30s linear infinite; }
        .marquee-container:hover .marquee-content { animation-play-state: paused !important; }
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  );
}

function SkillTag({ skill, index }: SkillTagProps) {
  const isEven = index % 2 === 0;
  const glowStyles = isEven 
    ? "hover:from-[#FFD700]/15 hover:to-[#FF7F50]/15 hover:border-[#FFD700]/40 hover:text-[#FFE5B4] hover:shadow-[0_0_25px_rgba(255,215,0,0.15)]"
    : "hover:from-[#FF7F50]/15 hover:to-[#FFE5B4]/15 hover:border-[#FF7F50]/40 hover:text-white hover:shadow-[0_0_25px_rgba(255,127,80,0.15)]";

  return (
    <span
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] px-7 py-3.5 text-base font-bold tracking-wide text-neutral-300 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r cursor-pointer whitespace-nowrap ${glowStyles}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full" />
      <span className="relative z-10">{skill}</span>
    </span>
  );
}

export default Skills;