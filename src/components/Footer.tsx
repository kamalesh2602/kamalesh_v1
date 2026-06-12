import {  FaChevronUp } from "react-icons/fa";
import { profile } from "../data/profile";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0f0c20] via-[#151035] to-[#2d124d] px-6 pb-16 pt-8 text-white">
      
      {/* Immersive Inner Floating Card Container to tie the design together */}
      <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl shadow-2xl text-center">
        
        {/* Scroll to Top Button perfectly seated inside the layout border loop */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#151035] text-neutral-400 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30 hover:text-cyan-400 hover:-translate-y-0.5 shadow-lg shadow-black/40"
          >
            <FaChevronUp size={12} />
          </button>
        </div>

        {/* Brand Information */}
        <h3 className="mt-4 text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
          {profile.name}
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm font-medium leading-relaxed text-neutral-400">
          Building full-stack web applications and AI-powered solutions designed for the modern web.
        </p>

        {/* Elegant divider asset */}
        <div className="mx-auto my-6 h-px w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Metadata Layer */}
        <div className="flex flex-col items-center justify-center gap-2 text-xs font-semibold text-neutral-500 sm:flex-row sm:gap-4">
          <p>© 2026 {profile.copyrightName}. All Rights Reserved.</p>
          {/* <span className="hidden h-3 w-px bg-neutral-800 sm:block" />
          <p className="flex items-center gap-1.5 transition-colors duration-300 hover:text-rose-400">
            <span>Crafted with</span>
            <FaHeart size={10} className="text-rose-500/80 animate-pulse" />
            <span>in India</span>
          </p> */}
        </div>

      </div>
    </footer>
  );
}

export default Footer;