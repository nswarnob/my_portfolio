import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]">
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900/80">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-dark-100 transition-colors group-hover:text-blue-400">
            {project.title}
          </h3>
          {project.dates && (
            <p className="mt-1 text-sm text-dark-400">{project.dates}</p>
          )}
        </div>

        {project.description && (
          <p className="mt-4 line-clamp-3 text-sm text-dark-300">
            {project.description}
          </p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 transition-colors hover:text-slate-900 dark:bg-dark-800 dark:text-dark-300 dark:hover:text-dark-100"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-5 pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
