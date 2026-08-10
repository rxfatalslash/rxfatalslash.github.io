import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import profileImage from "./img/foto.webp";

const skillGroups = [
  {
    title: "Security Operations",
    description:
      "Professional experience in security monitoring, alert triage and endpoint investigation.",
    skills: ["CrowdStrike Falcon", "Alert Triage", "Endpoint Investigation"],
  },
  {
    title: "Offensive Security",
    description:
      "Hands-on training in reconnaissance, service analysis and web application security.",
    skills: ["Nmap", "Burp Suite", "Web Security", "Reconnaissance"],
  },
  {
    title: "Systems & Networking",
    description:
      "Experience with system administration, networking and home-lab environments.",
    skills: ["Linux", "Windows", "TCP/IP", "Docker"],
  },
  {
    title: "Scripting & Development",
    description:
      "Development of security tools, automation scripts and web applications.",
    skills: ["Python", "Bash", "JavaScript", "Node.js"],
  },
];

function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-[#0b0f14] dark:text-white">
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <header>
        <section
          id="about-me"
          aria-labelledby="intro-title"
          className="scroll-mt-20 px-5 pb-24 pt-32 md:px-10 lg:px-20 lg:pb-28 lg:pt-40"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div className="mx-auto w-full max-w-sm lg:sticky lg:top-32">
              <img
                src={profileImage}
                alt="Aarón Sánchez"
                width="480"
                height="600"
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl shadow-slate-900/15 dark:shadow-black/40"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                Cybersecurity Analyst · Security Operations
              </p>

              <h1
                id="intro-title"
                className="mt-3 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              >
                Aarón Sánchez
              </h1>

              <p className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-slate-800 dark:text-slate-200 md:text-2xl">
                Security Operations experience with a growing focus on
                Offensive Security
              </p>

              <div className="mt-6 max-w-2xl space-y-4 leading-7 text-slate-600 dark:text-slate-400">
                <p>
                  I&apos;m a Cybersecurity Analyst working in Security
                  Operations and currently studying Computer Engineering. My
                  background includes systems administration, networking and
                  cybersecurity, with practical experience across Windows and
                  Linux environments.
                </p>
                <p>
                  I&apos;m currently developing my skills in Offensive
                  Security, Red Teaming and web application security.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
                >
                  View security projects
                </a>
                <a
                  href="https://github.com/rxfatalslash"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-teal-600 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-400"
                >
                  View GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>

              <section aria-labelledby="skills-title" className="mt-14">
                <h2 id="skills-title" className="text-2xl font-bold">
                  Skills & Focus
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {skillGroups.map((group) => (
                    <article
                      key={group.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        {group.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {group.description}
                      </p>
                      <ul
                        aria-label={`${group.title} skills`}
                        className="mt-4 flex flex-wrap gap-2"
                      >
                        {group.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </header>

      <main>
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
