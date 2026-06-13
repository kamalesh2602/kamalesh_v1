import { FaEnvelope, FaGithub, FaLinkedin, FaHandshake, FaArrowRight } from "react-icons/fa";
import { socials } from "../data/socials";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0c] via-[#111114] to-[#0d0d11] px-6 py-32 text-white cyber-grid"
    >
      {/* Precision Micro-mesh Lights */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,127,80,0.02),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_90%_90%,rgba(255,215,0,0.01),transparent_40%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl">
        
        {/* Central Frosted Showcase Box */}
        <div className="relative z-10 rounded-[3rem] border border-white/5 bg-white/[0.01] p-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-14 lg:p-20">
          
          {/* Top shimmer hairline */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />

          {/* Sub-badge Header */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 shadow-inner backdrop-blur-md">
            <FaHandshake size={14} className="text-[#FF7F50]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFE5B4]">
              Get In Touch
            </p>
          </div>

          {/* Main Display Headline */}
          <h2 className="mb-6 text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 sm:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Let's Create Something Great
          </h2>

          {/* Explanatory Bio Core */}
          <p className="mx-auto mb-12 max-w-xl text-base font-medium leading-relaxed text-neutral-400 sm:text-lg">
            I'm currently seeking <span className="text-[#FFE5B4] font-semibold">internship opportunities</span> and 
            collaborative full-stack or AI-driven challenges. My digital inbox is always open.
          </p>

          {/* Expressive Action Triggers Flex Grid */}
          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-3">
            
            {/* Primary Action Button: Email Me */}
            <a
              href={`mailto:${socials.email}`}
              className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#FFD700] to-[#FF7F50] px-7 py-4 font-bold text-[#0a0a0c] shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] hover:-translate-y-0.5 active:scale-95"
            >
              <FaEnvelope size={15} />
              <span>Email Me</span>
              <FaArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Option: GitHub */}
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/5 bg-white/[0.03] px-7 py-4 font-semibold text-neutral-300 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-white/10 hover:text-white hover:-translate-y-0.5 active:scale-95"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>

            {/* Tertiary Option: LinkedIn */}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/5 bg-white/[0.03] px-7 py-4 font-semibold text-neutral-300 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-white/10 hover:text-white hover:-translate-y-0.5 active:scale-95"
            >
              <FaLinkedin size={16} />
              <span>LinkedIn</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;