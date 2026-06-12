import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between">
        
        {/* Left Side: Protected Brand Block inside its own custom glass shell */}
        <div 
          className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 border transition-all duration-300 group cursor-pointer select-none ${
            scrolled 
              ? "bg-[#0c0822] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
              : "bg-[#1d1749]/60 border-white/10 backdrop-blur-md"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 text-[10px] font-black tracking-wider text-white shadow-[0_4px_12px_rgba(34,211,238,0.3)] transition-all duration-500 group-hover:rotate-6">
            GK
          </div>
          <span className="hidden text-sm font-bold tracking-tight text-white sm:block group-hover:text-cyan-400 transition-colors duration-300">
            Kamalesh G
          </span>
        </div>

        {/* Right Side: Independent Navigation Dock Menu inside its own matching shell */}
        <nav 
          className={`flex items-center gap-6 md:gap-8 rounded-full border px-6 md:px-8 py-3.5 text-xs md:text-sm font-bold tracking-wide text-neutral-200 transition-all duration-300 ${
            scrolled 
              ? "bg-[#0c0822] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(99,102,241,0.15)] text-white" 
              : "bg-[#1d1749]/80 border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          }`}
        >
          <a href="#about" className="relative py-1 transition-colors duration-300 hover:text-white group">
            <span>About</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a href="#skills" className="relative py-1 transition-colors duration-300 hover:text-white group">
            <span>Skills</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a href="#projects" className="relative py-1 transition-colors duration-300 hover:text-white group">
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a href="#contact" className="relative py-1 transition-colors duration-300 hover:text-white group">
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-rose-400 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;