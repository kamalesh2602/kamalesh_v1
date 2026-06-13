import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";
import { socials } from "../data/socials";
import {profile} from "../data/profile";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0c] via-[#111114] to-[#0d0d11] px-4 py-24 md:px-6 cyber-grid">
      
      {/* Editorial Ray-Trace Backdrop Lights */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full max-w-7xl bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.04),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full max-w-7xl bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,127,80,0.03),transparent_50%)]" />
      
      {/* Minimal Structural Grid Line */}
      <div className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        
        {/* Sub-badge Header */}
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 shadow-inner backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFE5B4]">
            Computer Science Student • PSG Tech
          </p>
        </div>

        {/* Name: Immersive Display Typography */}
        <h1 className="relative z-10 mb-6 text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[1.1] drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
          {profile.name}
        </h1>

        {/* Identity Grid Chips */}
        <div className="mx-auto mb-10 flex flex-wrap justify-center items-center gap-3.5 max-w-2xl">
          <span className="rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-2.5 text-base font-bold tracking-wide text-neutral-200 shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transform -rotate-1">
            Builder.
          </span>
          <span className="rounded-2xl border border-dashed border-[#FF7F50]/20 bg-[#FF7F50]/5 px-6 py-2.5 text-base font-bold tracking-wide text-[#FFE5B4] backdrop-blur-sm">
            Developer.
          </span>
          <span className="rounded-2xl border border-[#FFD700]/20 bg-gradient-to-r from-[#FFD700]/10 to-[#FF7F50]/10 px-6 py-2.5 text-base font-bold tracking-wide text-[#FFE5B4] shadow-[0_0_20px_rgba(255,215,0,0.05)] transform rotate-2">
            Problem Solver.
          </span>
        </div>

        {/* Bio Copy */}
        <p className="mx-auto mb-12 max-w-2xl text-base font-medium leading-relaxed text-neutral-400 sm:text-lg md:text-xl px-4">
          Building full-stack web applications, AI-powered systems, 
          and products designed to balance crisp utility with rich human experiences.
        </p>

        {/* CTA Buttons Layout */}
        <div className="mb-16 flex flex-col sm:flex-row justify-center items-center gap-4 px-6">
          <a
            href={socials.resume}
            target="_blank"
            rel="noreferrer"
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFD700] to-[#FF7F50] px-8 py-4 font-bold text-[#0a0a0c] shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] hover:-translate-y-0.5 active:scale-95"
          >
            <span>View Resume</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>

          <a
            href={socials.resume}
            download
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/[0.03] px-8 py-4 font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-0.5 active:scale-95 shadow-black/40"
          >
            <FaFileDownload className="text-[#FFE5B4]" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Social Dock Panel */}
        <div className="inline-flex items-center gap-5 rounded-2xl border border-white/5 bg-white/[0.02] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-neutral-300 transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-110 hover:rotate-[-6deg]"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-neutral-300 transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href={`mailto:${socials.email}`}
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-neutral-300 transition-all duration-300 hover:bg-[#FF7F50] hover:text-[#0a0a0c] hover:scale-110 hover:rotate-[6deg]">
            <FaEnvelope size={22} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;