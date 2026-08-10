const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rxfatalslash",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/asanmen/",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="
        border-t border-slate-200 bg-white
        px-5 pb-8 pt-20
        dark:border-slate-800 dark:bg-[#0b0f14]
        md:px-10 lg:px-20
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            rounded-3xl border border-slate-200
            bg-slate-50 px-6 py-12
            dark:border-slate-800 dark:bg-slate-900
            md:px-10 lg:flex lg:items-end lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-sm font-semibold uppercase tracking-[0.22em]
                text-teal-700 dark:text-teal-400
              "
            >
              Let&apos;s connect
            </p>

            <h2
              className="
                mt-3 text-3xl font-bold tracking-tight
                text-slate-950 dark:text-white
                md:text-4xl
              "
            >
              Interested in cybersecurity, security tooling or
              collaboration?
            </h2>

            <p
              className="
                mt-5 max-w-xl leading-7
                text-slate-600 dark:text-slate-400
              "
            >
              I&apos;m always open to discussing security projects,
              technical challenges and new professional opportunities.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-0">
            <a
              href="mailto:aaronsanchezmenendez@gmail.com"
              className="
                inline-flex items-center gap-2 rounded-lg
                bg-slate-950 px-5 py-3
                font-semibold text-white transition
                hover:bg-teal-700
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-teal-500
                dark:bg-teal-400 dark:text-slate-950
                dark:hover:bg-teal-300
              "
            >
              Send me an email
              <span aria-hidden="true">→</span>
            </a>

            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} — opens in a new tab`}
                className="
                  inline-flex items-center gap-1 rounded-lg
                  border border-slate-300 px-4 py-3
                  font-semibold text-slate-800 transition
                  hover:border-teal-600 hover:text-teal-700
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-teal-500
                  dark:border-slate-700 dark:text-slate-200
                  dark:hover:border-teal-400
                  dark:hover:text-teal-400
                "
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div
          className="
            mt-12 flex flex-col gap-8
            md:flex-row md:items-end md:justify-between
          "
        >
          <div>
            <a
              href="#about-me"
              className="
                text-lg font-bold tracking-wide
                text-slate-950 dark:text-white
              "
            >
              Aarón Sánchez
            </a>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Cybersecurity Analyst · Security Operations
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li>
                <a
                  href="#about-me"
                  className="
                    text-slate-600 transition hover:text-teal-700
                    dark:text-slate-400 dark:hover:text-teal-400
                  "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="
                    text-slate-600 transition hover:text-teal-700
                    dark:text-slate-400 dark:hover:text-teal-400
                  "
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/rxfatalslash"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-slate-600 transition hover:text-teal-700
                    dark:text-slate-400 dark:hover:text-teal-400
                  "
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="
            mt-8 flex flex-col gap-4
            border-t border-slate-200 pt-6
            text-sm text-slate-500
            dark:border-slate-800 dark:text-slate-500
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p>© {currentYear} Aarón Sánchez. All rights reserved.</p>

          <a
            href="#about-me"
            className="
              inline-flex w-fit items-center gap-2
              transition hover:text-teal-700
              dark:hover:text-teal-400
            "
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;