import { FaChevronUp } from "react-icons/fa";
import { profile } from "../data/profile";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0a0c] via-[#111114] to-[#0d0d11] px-6 pb-16 pt-8 text-white">
      
      {/* Immersive Inner Floating Card Container */}
      <div className="relative mx-auto max-w-6xl rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-8 backdrop-blur-xl shadow-2xl text-center">
        
        {/* Scroll to Top Button */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111114] text-neutral-500 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:text-[#FFD700] shadow-lg shadow-black/60"
          >
            <FaChevronUp size={12} />
          </button>
        </div>

        {/* Brand Information */}
        <h3 className="mt-4 text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
          {profile.name}
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm font-medium leading-relaxed text-neutral-500">
          Building full-stack web applications and AI-powered solutions designed for the modern web.
        </p>

        {/* Elegant divider asset */}
        <div className="mx-auto my-6 h-px w-16 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Metadata Layer */}
        <div className="flex flex-col items-center justify-center gap-2 text-xs font-semibold text-neutral-600 sm:flex-row sm:gap-4">
          <p>© 2026 {profile.copyrightName}. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;