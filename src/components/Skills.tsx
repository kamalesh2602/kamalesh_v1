import { skills } from "../data/skills";
import { FaTerminal } from "react-icons/fa";

// 1. Defined an explicit interface for the SkillTag component props
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
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0c20] via-[#151035] to-[#2d124d] py-28 text-white"
    >
      {/* Background ambient lighting fields */}
      <div className="absolute right-[-10%] top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-15%] bottom-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />

      {/* Header Container */}
      <div className="mx-auto max-w-6xl px-6 mb-16">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 shadow-inner backdrop-blur-md">
          <FaTerminal size={12} className="text-cyan-400" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Capabilities
          </p>
        </div>

        <h2 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 sm:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Tech Stack
        </h2>
      </div>

      {/* INFINITE MOTION SCROLL TRACKS ASSEMBLY */}
      <div className="flex flex-col gap-6 w-full overflow-hidden mask-fade-edges">
        
        {/* Track 1: Moving Leftwards */}
        <div className="marquee-container flex overflow-hidden select-none gap-4">
          <div className="marquee-content flex shrink-0 items-center justify-around gap-4 min-w-full animate-marquee-left">
            {[...track1, ...track1, ...track1].map((skill, index) => (
              <SkillTag key={`t1-${skill}-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Track 2: Moving Rightwards */}
        <div className="marquee-container flex overflow-hidden select-none gap-4">
          <div className="marquee-content flex shrink-0 items-center justify-around gap-4 min-w-full animate-marquee-right">
            {[...track2, ...track2, ...track2].map((skill, index) => (
              <SkillTag key={`t2-${skill}-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>

      </div>

      {/* This CSS is fully valid here, keep it! */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 25s linear infinite;
        }
        
        .marquee-container:hover .marquee-content {
          animation-play-state: paused !important;
        }
        
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  );
}

// 2. Attached the explicit TypeScript props definition interface here
function SkillTag({ skill, index }: SkillTagProps) {
  const isEven = index % 2 === 0;
  const glowStyles = isEven 
    ? "hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/60 hover:text-cyan-200 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
    : "hover:from-violet-500/30 hover:to-rose-500/30 hover:border-violet-400/60 hover:text-violet-200 hover:shadow-[0_0_25px_rgba(167,139,250,0.35)]";

  return (
    <span
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-3.5 text-base font-bold tracking-wide text-neutral-200 shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r cursor-pointer whitespace-nowrap ${glowStyles}`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full" />
      <span className="relative z-10">{skill}</span>
    </span>
  );
}

export default Skills;