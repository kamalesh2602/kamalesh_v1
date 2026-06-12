import { FaUser, FaGraduationCap, FaBrain, FaRocket } from "react-icons/fa";
import { profile } from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0c20] via-[#120e2e] to-[#1a0b36] px-6 py-28 text-white cyber-grid"
    >
      {/* Structural Horizon Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      {/* Structured mathematical corner lighting meshes */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.04),transparent_45%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.03),transparent_45%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 shadow-inner backdrop-blur-md">
            <FaUser size={12} className="text-cyan-400" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Identity
            </p>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 sm:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            About Me
          </h2>
        </div>

        {/* Asymmetric Split Layout Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Left Column: Core Narrative Card */}
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl sm:p-10 lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-6 text-base leading-relaxed text-neutral-300 md:text-lg">
              <p>
                I’m a <span className="text-white font-semibold">Computer Science student</span> at {profile.college} specializing 
                in architecting modern full-stack ecosystems. I thrive on stripping away development complexity, turning raw 
                concepts into production-ready, hands-on digital applications built from the ground up.
              </p>

              <p>
                Driven by curiosity, I regularly bridge the gap between traditional software systems and emerging AI pipelines. 
                My recent technical focus centers on engineering custom <span className="text-cyan-300 font-medium">Retrieval-Augmented Generation (RAG)</span> architectures, 
                integrating foundational LLMs, and spinning up scalable machine learning backends to build apps that think.
              </p>

              <p>
                Right now, I'm looking to bring this energy to an impactful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300 font-bold">software engineering or AI development internship</span>. 
                My goal is simple: join an ambitious engineering team, ship performance-driven code, and solve real, non-trivial problems at scale.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Profile Highlights Bento Cards */}
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            
            {/* Highlight Card 1: Education */}
            <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <FaGraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Education</h4>
                  <p className="text-sm font-bold text-neutral-200 mt-0.5">{profile.college}</p>
                  <p className="text-xs text-neutral-400">{profile.degree}</p>
                </div>
              </div>
            </div>

            {/* Highlight Card 2: Technical Focus */}
            <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 group-hover:scale-110 transition-transform duration-300">
                  <FaBrain size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Core Focus</h4>
                  <p className="text-sm font-bold text-neutral-200 mt-0.5">Full Stack Dev + Applied AI</p>
                  <p className="text-xs text-neutral-400">LLMs, RAG, Web Apps</p>
                </div>
              </div>
            </div>

            {/* Highlight Card 3: Current Objective */}
            <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 group-hover:scale-110 transition-transform duration-300">
                  <FaRocket size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Seeking</h4>
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