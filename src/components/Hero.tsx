import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";
import { socials } from "../data/socials";
import { profile } from "../data/profile";

function Hero() {
    return (
        // The main canvas now spans the entire width and height organically
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c20] via-[#151035] to-[#2d124d] px-4 py-24 md:px-6">

            {/* High-definition, organic ambient glowing blobs directly behind your content */}
            <div className="absolute left-[-10%] top-[-10%] -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-30 blur-[130px] md:h-[600px] md:w-[600px] animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="absolute bottom-[-10%] right-[-5%] -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-rose-500 to-violet-600 opacity-30 blur-[150px] md:h-[700px] md:w-[700px] animate-pulse" style={{ animationDuration: '14s' }} />
            <div className="absolute left-[25%] top-[30%] -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500 opacity-20 blur-[110px]" />

            {/* Clean content wrapper replacing the heavy, awkward background box */}
            <div className="relative z-10 mx-auto max-w-5xl text-center">

                {/* Sub-badge Header */}
                <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 shadow-inner backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                        Computer Science Student
                    </p>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                        PSG Tech
                    </p>
                </div>

                {/* Name: Immersive Display Typography */}
                <h1 className="relative z-10 mb-6 text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[1.1] drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                    {profile.name}
                </h1>

                {/* Identity Grid Chips */}
                <div className="mx-auto mb-10 flex flex-wrap justify-center items-center gap-3.5 max-w-2xl">
                    <span className="rounded-2xl border border-white/10 bg-[#1d1749]/60 px-6 py-2.5 text-base font-bold tracking-wide text-indigo-200 shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transform -rotate-1">
                        Builder.
                    </span>
                    <span className="rounded-2xl border border-dashed border-purple-400/30 bg-purple-500/10 px-6 py-2.5 text-base font-bold tracking-wide text-purple-200 backdrop-blur-sm">
                        Developer.
                    </span>
                    <span className="rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-2.5 text-base font-bold tracking-wide text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.15)] transform rotate-2">
                        Problem Solver.
                    </span>
                </div>

                {/* Bio Copy with high structural line height */}
                <p className="mx-auto mb-12 max-w-2xl text-base font-medium leading-relaxed text-neutral-300 sm:text-lg md:text-xl px-4">
                    {profile.shortBio}      </p>

                {/* CTA Buttons Layout */}
                <div className="mb-16 flex flex-col sm:flex-row justify-center items-center gap-4 px-6">
                    <a
                        href={socials.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 active:scale-95"
                    >
                        <span>View Resume</span>
                        <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <a
                        href={socials.resume}
                        download
                        className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-4 font-bold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/[0.15] hover:border-white/20 hover:-translate-y-0.5 active:scale-95 shadow-black/20"
                    >
                        <FaFileDownload className="text-cyan-300" />
                        <span>Download PDF</span>
                    </a>
                </div>

                {/* Social Dock Panel */}
                <div className="inline-flex items-center gap-5 rounded-2xl border border-white/10 bg-[#1d1749]/40 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                    <a
                        href={socials.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Profile"
                        className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-200 transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-110 hover:rotate-[-6deg]"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn Profile"
                        className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-200 transition-all duration-300 hover:bg-[#0077b5] hover:text-white hover:scale-110"
                    >
                        <FaLinkedin size={22} />
                    </a>

                    <a
                        href={`mailto:${socials.email}`}
                        aria-label="Email Contact"
                        className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-200 transition-all duration-300 hover:bg-rose-500 hover:text-white hover:scale-110 hover:rotate-[6deg]"
                    >
                        <FaEnvelope size={22} />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;