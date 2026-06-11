
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
    return (
        <section className="relative flex min-h-[100vh] pt-20 items-center justify-center overflow-hidden px-6">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />

            <div className="mx-auto max-w-5xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                    Full Stack Developer • AI Enthusiast
                </p>

                <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
                    Kamalesh G
                </h1>

                <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">
                    Building Web Applications and{" "}
                    <span className="font-semibold text-blue-600">
                        AI-Powered Solutions
                    </span>
                </p>

                <div className="mb-10 flex flex-wrap justify-center gap-4">
                    <a
                        href="/resume/Kamalesh.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105"
                    >
                        View Resume
                    </a>

                    <a
                        href="/resume/Kamalesh.pdf"
                        download
                        className="rounded-full border border-slate-300 px-8 py-4 font-medium text-slate-800 transition hover:bg-slate-100"
                    >
                        Download PDF
                    </a>
                </div>

                <div className="flex justify-center gap-5">
                    <a
                        href="#"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:text-blue-600"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="#"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:text-blue-600"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="#"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:text-blue-600"
                    >
                        <FaEnvelope size={20} />
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;