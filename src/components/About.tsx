import { FaUser, FaGraduationCap, FaBrain, FaRocket } from "react-icons/fa";
import { profile } from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0c] via-[#111114] to-[#0d0d11] px-6 py-28 text-white cyber-grid"
    >
      {/* Precision Corner Grids */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.02),transparent_45%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,127,80,0.02),transparent_45%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 shadow-inner backdrop-blur-md">
            <FaUser size={12} className="text-[#FFD700]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFE5B4]">
              Identity
            </p>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 sm:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            About Me
          </h2>
        </div>

        {/* Asymmetric Split Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Left Column: Core Narrative Card */}
          <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-xl sm:p-10 lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6 text-base leading-relaxed text-neutral-400 md:text-lg">
              <p>
                I’m a <span className="text-white font-semibold">Computer Science student</span> at {profile.college} specializing 
                in architecting modern full-stack ecosystems. I thrive on stripping away development complexity, turning raw 
                concepts into production-ready, hands-on digital applications built from the ground up.
              </p>

              <p>
                Driven by curiosity, I regularly bridge the gap between traditional software systems and emerging AI pipelines. 
                My recent technical focus centers on engineering custom <span className="text-[#FFE5B4] font-medium">Retrieval-Augmented Generation (RAG)</span> architectures, 
                integrating foundational LLMs, and spinning up scalable machine learning backends to build apps that think.
              </p>

              <p>
                Right now, I'm looking to bring this energy to an impactful <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF7F50] font-bold">software engineering or AI development internship</span>. 
                My goal is simple: join an ambitious engineering team, ship performance-driven code, and solve real, non-trivial problems at scale.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Profile Highlights Bento Cards */}
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            
            {/* Highlight Card 1: Education */}
            <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFD700]/5 text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Education</h4>
                  <p className="text-sm font-bold text-neutral-200 mt-0.5">{profile.college}</p>
                  <p className="text-xs text-neutral-400">{profile.degree}</p>
                </div>
              </div>
            </div>

            {/* Highlight Card 2: Technical Focus */}
            <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFE5B4]/5 text-[#FFE5B4] group-hover:scale-110 transition-transform duration-300">
                  <FaBrain size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Core Focus</h4>
                  <p className="text-sm font-bold text-neutral-200 mt-0.5">Full Stack Dev + Applied AI</p>
                  <p className="text-xs text-neutral-400">LLMs, RAG, Web Apps</p>
                </div>
              </div>
            </div>

            {/* Highlight Card 3: Current Objective */}
            <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF7F50]/5 text-[#FF7F50] group-hover:scale-110 transition-transform duration-300">
                  <FaRocket size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Seeking</h4>
                  <p className="text-sm font-bold text-neutral-200 mt-0.5">{profile.seeking.position}</p>
                  <p className="text-xs text-neutral-400">{profile.seeking.line}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;