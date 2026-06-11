function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <div className="text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Contact
        </p>

        <h2 className="mb-4 text-4xl font-bold text-slate-900">
          Let's Connect
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-600">
          I'm currently looking for internship opportunities and
          exciting projects. Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kamaleshg2602@gmail.com"
            className="rounded-full bg-blue-600 px-6 py-3 text-white"
          >
            Email Me
          </a>

          <a
            href="https://github.com/kamalesh2602"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-6 py-3"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kamalesh-g-4593633a1/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border px-6 py-3"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;