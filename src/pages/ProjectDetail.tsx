import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCogs,
  FaTasks,
  FaLayerGroup, FaLightbulb,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0a0a0c] via-[#111114] to-[#0d0d11] p-10 cyber-grid">
        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F50] to-[#FFE5B4]">
            Project not found
          </h1>
          <p className="mt-2 text-neutral-500">The project you are looking for does not exist.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-[#FFD700] hover:underline">
            <FaArrowLeft size={14} /> Back to Safety
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0c] via-[#111114] to-[#0d0d11] px-4 py-16 text-white md:px-6 cyber-grid">
      
      <div className="absolute top-0 right-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.02),transparent_45%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,127,80,0.02),transparent_45%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-neutral-400 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:-translate-x-1"
        >
          <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-0.5" />
          <span>Back to Home</span>
        </Link>

        {/* Project Header Card */}
        <div className="mb-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-6 shadow-2xl backdrop-blur-xl sm:p-10">
          <h1 className="mb-8 text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 sm:text-5xl md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            {project.title}
          </h1>

          {project.image && (
            <div className="relative group overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 to-transparent opacity-60 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Content Bento Cluster Structure */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-xl sm:p-8 md:col-span-2">
            <div className="mb-4 flex items-center gap-3 text-[#FFD700]">
              <FaCogs size={20} />
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#FFE5B4]">Overview</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-400">
              {project.overview}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-xl sm:p-8">
            <div className="mb-4 flex items-center gap-3 text-[#FF7F50]">
              <FaLayerGroup size={18} />
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#FFE5B4]">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/5 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-[#FFE5B4] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:bg-[#FF7F50]/10 hover:border-[#FF7F50]/30 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-xl sm:p-8 md:col-span-3">
            <div className="mb-6 flex items-center gap-3 text-[#FFE5B4]">
              <FaTasks size={20} />
              <h2 className="text-xl font-bold uppercase tracking-wider text-white">Key Features</h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.01] p-4 text-neutral-400 transition-all duration-300 hover:bg-white/[0.03]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FF7F50] shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-xl sm:p-8 md:col-span-3">
            <div className="mb-6 flex items-center gap-3 text-[#FFD700]">
              <FaCheckCircle size={18} />
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#FFE5B4]">
                Problem & Solution
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-bold text-white">Problem</h3>
                <p className="leading-relaxed text-neutral-400">{project.problem}</p>
              </div>
              <div>
                <h3 className="mb-3 font-bold text-white">Solution</h3>
                <p className="leading-relaxed text-neutral-400">{project.solution}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-xl sm:p-8">
            <div className="mb-4 flex items-center gap-3 text-amber-500/80">
              <FaExclamationTriangle size={18} />
              <h2 className="text-xl font-bold uppercase tracking-wider text-amber-400">Challenges</h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="text-neutral-400">• {challenge}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-xl sm:p-8">
            <div className="mb-4 flex items-center gap-3 text-emerald-500/80">
              <FaLightbulb size={18} />
              <h2 className="text-xl font-bold uppercase tracking-wider text-emerald-400">Learnings</h2>
            </div>
            <ul className="space-y-3">
              {project.learnings.map((learning) => (
                <li key={learning} className="text-neutral-400">• {learning}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Anchor Bar */}
        <div className="mt-10 flex flex-wrap justify-end gap-4 rounded-[2rem] border border-white/5 bg-white/[0.01] p-4 backdrop-blur-xl">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-neutral-900"
          >
            <FaGithub size={18} />
            <span>View Source</span>
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FF7F50] px-6 py-3.5 font-semibold text-[#0a0a0c] shadow-[0_0_20px_rgba(255,215,0,0.15)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.35)]"
            >
              <FaExternalLinkAlt size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </section>
  );
}

export default ProjectDetail;