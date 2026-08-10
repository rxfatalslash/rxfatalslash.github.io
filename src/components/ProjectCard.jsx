const GitHubIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-current"
  >
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.3-5.27-1.29-5.27-5.72 0-1.27.45-2.3 1.19-3.11-.12-.3-.52-1.48.11-3.07 0 0 .97-.31 3.16 1.19a10.9 10.9 0 0 1 5.76 0c2.2-1.5 3.16-1.19 3.16-1.19.63 1.59.23 2.77.11 3.07.74.81 1.19 1.84 1.19 3.11 0 4.45-2.71 5.42-5.29 5.71.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const { title, category, description, image, technologies, repository } =
    project;

  return (
    <article
      className="
        group overflow-hidden rounded-2xl border border-slate-200
        bg-white shadow-sm transition duration-300
        hover:-translate-y-1 hover:border-teal-500/60
        hover:shadow-xl hover:shadow-slate-900/10
        dark:border-slate-800 dark:bg-slate-900
        dark:hover:border-teal-400/60
        dark:hover:shadow-black/30
      "
    >
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={`Preview of ${title}`}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition duration-500
            group-hover:scale-[1.03]
          "
        />
      </div>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
          {category}
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <ul
          aria-label={`${title} technologies`}
          className="mt-5 flex flex-wrap gap-2"
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="
                rounded-full border border-slate-200 bg-slate-50
                px-3 py-1 text-xs font-medium text-slate-700
                dark:border-slate-700 dark:bg-slate-800
                dark:text-slate-300
              "
            >
              {technology}
            </li>
          ))}
        </ul>

        <a
          href={repository}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} repository on GitHub`}
          className="
            mt-6 inline-flex items-center gap-2 font-semibold
            text-slate-900 transition-colors
            hover:text-teal-700
            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-4 focus-visible:outline-teal-500
            dark:text-white dark:hover:text-teal-400
          "
        >
          <GitHubIcon />
          View repository
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;