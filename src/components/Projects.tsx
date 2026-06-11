import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Projects
        </p>

        <h2 className="text-4xl font-bold text-slate-900">
          Featured Work
        </h2>
      </div>

      {featured && (
        <Link
          to={`/projects/${featured.slug}`}
          className="mb-10 block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
        >
          {featured.image ? (
            <img
              src={featured.image}
              alt={featured.title}
              className="h-72 w-full object-cover"
            />
          ) : (
            <div className="h-72 bg-slate-100" />
          )}

          <div className="p-8">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Featured Project
            </span>

            <h3 className="mb-3 text-3xl font-bold">
              {featured.title}
            </h3>

            <p className="mb-5 text-slate-600">
              {featured.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {featured.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-sm font-medium text-blue-600">
              View Details →
            </div>
          </div>
        </Link>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {others.map((project) => (
          <Link
            to={`/projects/${project.slug}`}
            key={project.slug}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="h-48 bg-slate-100" />
            )}

            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mb-4 text-slate-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sm font-medium text-blue-600">
                View Details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;