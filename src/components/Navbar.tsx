function Navbar() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50">
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
            GK
          </div>

          <span className="hidden text-lg font-semibold text-slate-800 md:block">
            Kamalesh G
          </span>
        </div>

        <nav className="hidden items-center gap-10 rounded-full border border-slate-200 bg-white/80 px-8 py-3 text-sm font-medium text-slate-700 shadow-lg backdrop-blur-md md:flex">
          <a href="#about" className="transition hover:text-blue-600">
            About
          </a>

          <a href="#skills" className="transition hover:text-blue-600">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-blue-600">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>
        </nav>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md">
          🌙
        </button>
      </div>
    </header>
  );
}

export default Navbar;