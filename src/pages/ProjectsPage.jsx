import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
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
      <div className="relative h-56 overflow-hidden">
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
          <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
          <span className="text-dark-400 text-sm whitespace-nowrap">
            {project.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-dark-300">{project.description}</p>

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
            className="px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors text-sm font-medium"
          >
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const { projects } = portfolio;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            All Projects
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-dark-300 mb-16 max-w-2xl"
        >
          A collection of all my recent projects showcasing different
          technologies and approaches.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
