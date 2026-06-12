import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { FaFolderOpen, FaArrowRight } from "react-icons/fa";

function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f0c20] via-[#120e2e] to-[#1a0b36] px-6 py-28 text-white cyber-grid"
    >
      {/* Precision grid ray-trace lights */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_75%_30%,rgba(139,92,246,0.06),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_25%_80%,rgba(34,211,238,0.04),transparent_45%)] pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 shadow-inner backdrop-blur-md">
            <FaFolderOpen size={12} className="text-cyan-400" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Projects
            </p>
          </div>

          <h2 className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-4xl font-black tracking-tight text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] sm:text-5xl">
            Featured Work
          </h2>
        </div>

        {featured && (
          <Link
            to={`/projects/${featured.slug}`}
            className="group mb-12 block overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="relative h-72 overflow-hidden lg:h-auto lg:w-1/2">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                ) : (
                  <div className="h-full w-full bg-white/[0.02]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c20]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#151035]/40" />
              </div>

              <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                <div>
                  <span className="mb-4 inline-block rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                    Featured Project
                  </span>
                </div>

                <h3 className="mb-4 text-3xl font-black text-neutral-100 transition-colors duration-300 group-hover:text-cyan-300 md:text-4xl">
                  {featured.title}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-neutral-400 md:text-lg">
                  {featured.shortDescription}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {featured.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:text-cyan-300">
                  <span>View Details</span>
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          </Link>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {others.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-52 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                  />
                ) : (
                  <div className="h-full w-full bg-white/[0.02]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c20]/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-neutral-100 transition-colors duration-300 group-hover:text-violet-300">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-400">
                  {project.shortDescription}
                </p>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 border-t border-white/5 pt-4 text-xs font-bold text-violet-400 group-hover:text-violet-300">
                  <span>Explore Details</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;