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
      <div className="mx-auto w-[92%] max-w-7xl">
        
        {/* Unified Minimalist Console Shell */}
        <div 
          className={`flex items-center justify-between rounded-full border px-4 md:px-8 py-3 transition-all duration-300 ${
            scrolled 
              ? "bg-[#0a0a0c] border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(255,215,0,0.03)]" 
              : "bg-[#141416]/60 border-white/5 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          }`}
        >
          
          {/* Left Side: Identity Block */}
          <div className="flex items-center gap-3 group cursor-pointer select-none">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FF7F50] text-[11px] font-black tracking-wider text-[#0a0a0c] shadow-[0_4px_15px_rgba(255,215,0,0.2)] transition-all duration-500 group-hover:rotate-6">
              GK
            </div>
            <span className="hidden text-base font-bold tracking-tight text-white drop-shadow-md sm:block group-hover:text-[#FFE5B4] transition-colors duration-300">
              Kamalesh G
            </span>
          </div>

          {/* Right Side: Navigation Menu Links with Custom Warm Hairline Sweeps */}
          <nav className="flex items-center gap-6 md:gap-8 text-sm font-bold tracking-wide text-neutral-300">
            <a href="#about" className="relative py-1 transition-colors duration-300 hover:text-white group">
              <span>About</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
            </a>

            <a href="#skills" className="relative py-1 transition-colors duration-300 hover:text-white group">
              <span>Skills</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFE5B4] transition-all duration-300 group-hover:w-full" />
            </a>

            <a href="#projects" className="relative py-1 transition-colors duration-300 hover:text-white group">
              <span>Projects</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FF7F50] transition-all duration-300 group-hover:w-full" />
            </a>

            <a href="#contact" className="relative py-1 transition-colors duration-300 hover:text-white group">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Navbar;