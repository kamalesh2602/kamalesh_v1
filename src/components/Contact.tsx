import { FaEnvelope, FaGithub, FaLinkedin, FaHandshake, FaArrowRight } from "react-icons/fa";
import { socials } from "../data/socials";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0c20] via-[#120e2e] to-[#1a0b36] px-6 py-32 text-white cyber-grid"
    >
      {/* Precision engineered vector light fields */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.04),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_90%_90%,rgba(34,211,238,0.03),transparent_40%)] pointer-events-none" />

      <div className="mx-auto max-w-4xl">
        
        {/* Central Frosted Showcase Box */}
        <div className="relative z-10 rounded-[3rem] border border-white/10 bg-white/[0.03] p-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-14 lg:p-20">
          
          {/* Subtle top shimmer accent strip */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

          {/* Sub-badge Header */}
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 shadow-inner backdrop-blur-md">
            <FaHandshake size={14} className="text-rose-400" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-300">
              Get In Touch
            </p>
          </div>

          {/* Main Display Headline */}
          <h2 className="mb-6 text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 sm:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Let's Create Something Great
          </h2>

          {/* Explanatory Bio Core */}
          <p className="mx-auto mb-12 max-w-xl text-base font-medium leading-relaxed text-neutral-400 sm:text-lg">
            I'm currently seeking <span className="text-cyan-300 font-semibold">internship opportunities</span> and 
            collaborative full-stack or AI-driven challenges. My digital inbox is always open.
          </p>

          {/* Expressive Action Triggers Flex Grid */}
          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-3">
            
            {/* Primary Action Button: Email Me */}
            <a
              href={`mailto:${socials.email}`}
              className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:-translate-y-0.5 active:scale-95"
            >
              <FaEnvelope size={15} className="transition-transform duration-300 group-hover:rotate-12" />
              <span>Email Me</span>
              <FaArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Option: GitHub */}
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 font-semibold text-neutral-200 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.14] hover:border-white/20 hover:text-white hover:-translate-y-0.5 active:scale-95"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>

            {/* Tertiary Option: LinkedIn */}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.06] px-7 py-4 font-semibold text-neutral-200 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.14] hover:border-white/20 hover:text-white hover:-translate-y-0.5 active:scale-95"
            >
              <FaLinkedin size={16} className="text-neutral-300" />
              <span>LinkedIn</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;