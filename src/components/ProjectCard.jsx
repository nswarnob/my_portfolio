import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedBorderCard from "./AnimatedBorderCard";

const ProjectCard = ({ project }) => {
  return (
    <AnimatedBorderCard className="group h-full overflow-hidden">
      <div className="flex h-full flex-col">
        {/* Image */}
        {project.image && (
          <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-dark-800">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent dark:from-dark-950" />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-grow flex-col p-6">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-dark-100 transition-colors group-hover:text-blue-400">
                {project.title}
              </h3>
              {project.dates && (
                <p className="mt-1 text-sm text-dark-400">{project.dates}</p>
              )}
            </div>
          </div>

          {/* Description */}
          {project.description && (
            <p className="mb-4 line-clamp-3 text-sm text-dark-300">
              {project.description}
            </p>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700 transition-colors hover:text-slate-900 dark:bg-dark-800 dark:text-dark-300 dark:hover:text-dark-100"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 text-xs text-dark-400">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Links */}
          <div className="mt-auto flex flex-wrap gap-4 pt-2">
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
      </div>
    </AnimatedBorderCard>
  );
};

export default ProjectCard;
