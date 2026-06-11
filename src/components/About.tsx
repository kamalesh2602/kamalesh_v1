function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          About
        </p>

        <h2 className="text-4xl font-bold text-slate-900">
          About Me
        </h2>
      </div>

      <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-slate-600">
        <p>
          I'm a Computer Science student at PSG College of Technology,
          focused on full-stack web development with hands-on experience
          building and deploying end-to-end applications.
        </p>

        <p>
          Beyond web development, I've explored applied AI through projects
          involving LLMs, Retrieval-Augmented Generation (RAG), and machine
          learning systems. I enjoy taking projects from idea to deployment
          and solving problems with practical, real-world applications.
        </p>

        <p>
          Currently, I'm seeking internship opportunities in software
          engineering, web development, and AI where I can contribute,
          learn, and grow alongside a strong team.
        </p>
      </div>
    </section>
  );
}

export default About;