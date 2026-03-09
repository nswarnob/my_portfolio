import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedBorderCard from "./AnimatedBorderCard";

const ProjectCard = ({ project }) => {
  return (
    <AnimatedBorderCard >
      <div className="flex flex-col h-full">
        {/* Image */}
        {project.image && (
          <div className="relative h-48 overflow-hidden bg-dark-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="flex-grow p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-dark-100 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              {project.dates && (
                <p className="text-sm text-dark-400 mt-1">{project.dates}</p>
              )}
            </div>
          </div>

          {/* Description */}
          {project.description && (
            <p className="text-sm text-dark-300 mb-4 line-clamp-2">
              {project.description}
            </p>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-dark-800 rounded-full text-dark-300 hover:text-dark-100 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs text-dark-400">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={16} />
                Live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github size={16} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedBorderCard>
  );
};

export default ProjectCard;
