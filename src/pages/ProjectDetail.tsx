import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <Link
        to="/"
        className="mb-8 inline-block text-blue-600"
      >
        ← Back to Home
      </Link>

      <h1 className="mb-6 text-5xl font-bold">
        {project.title}
      </h1>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="mb-10 w-full rounded-3xl"
        />
      )}

      <div className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Overview
        </h2>

        <p className="text-slate-600">
          {project.overview}
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Features
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-4 py-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-900 px-6 py-3 text-white"
        >
          GitHub
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-blue-600 px-6 py-3 text-white"
          >
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;