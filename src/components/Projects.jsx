import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="
        scroll-mt-24 bg-slate-50 px-5 py-24
        dark:bg-[#0b0f14]
        md:px-10 lg:px-20
      "
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
            Selected work
          </p>

          <h2
            id="projects-title"
            className="
              mt-3 text-4xl font-bold tracking-tight text-slate-950
              dark:text-white md:text-5xl
            "
          >
            Featured Security Projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Hands on projects focused on security tooling, networking
            and automation, built to turn technical learning into
            practical experience.
          </p>
        </header>

        <div className="mt-12">
          <article
            className="
              group grid overflow-hidden rounded-3xl
              border border-slate-200 bg-white shadow-sm
              transition duration-300
              hover:border-teal-500/60 hover:shadow-xl
              dark:border-slate-800 dark:bg-slate-900
              dark:hover:border-teal-400/60
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            <div className="min-h-[280px] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={featuredProject.image}
                alt={`Preview of ${featuredProject.title}`}
                className="
                  h-full w-full object-cover
                  transition duration-500
                  group-hover:scale-[1.02]
                "
              />
            </div>

            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                {featuredProject.category}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {featuredProject.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                {featuredProject.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="
                      rounded-full border border-slate-200 bg-slate-50
                      px-3 py-1 text-sm font-medium text-slate-700
                      dark:border-slate-700 dark:bg-slate-800
                      dark:text-slate-300
                    "
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <a
                href={featuredProject.repository}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8 inline-flex w-fit items-center gap-2
                  rounded-lg bg-slate-950 px-5 py-3
                  font-semibold text-white transition
                  hover:bg-teal-700
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-teal-500
                  dark:bg-teal-400 dark:text-slate-950
                  dark:hover:bg-teal-300
                "
              >
                View repository
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/rxfatalslash?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 rounded-lg
              border border-slate-300 px-5 py-3
              font-semibold text-slate-800 transition
              hover:border-teal-600 hover:text-teal-700
              dark:border-slate-700 dark:text-slate-200
              dark:hover:border-teal-400 dark:hover:text-teal-400
            "
          >
            Explore all projects
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;