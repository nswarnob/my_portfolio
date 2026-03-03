import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { portfolio } from "../data/portfolio";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-xl overflow-hidden bg-dark-800/30 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Date */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
          <span className="text-dark-400 text-sm whitespace-nowrap">
            {project.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-dark-300 text-sm">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center justify-center text-sm font-medium"
          >
            <ExternalLink size={16} />
            Website
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-1 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors text-center justify-center text-sm font-medium"
          >
            <Github size={16} />
            Source
          </a>
          <Link
            to={`/projects/${project.slug}`}
            className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors text-sm font-medium"
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = portfolio;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            to="/projects"
            className="px-8 py-3 border border-blue-500/50 rounded-lg font-medium hover:bg-blue-500/10 transition-all flex items-center gap-2 group"
          >
            View All Projects
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
