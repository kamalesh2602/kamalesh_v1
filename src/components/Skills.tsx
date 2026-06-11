import { skills } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Skills
        </p>

        <h2 className="text-4xl font-bold text-slate-900">
          Technologies I Work With
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="mb-4 text-xl font-semibold text-slate-900">
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;