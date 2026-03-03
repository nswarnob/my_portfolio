import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { portfolio } from "../data/portfolio";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = portfolio.projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/projects"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex justify-between items-start gap-4">
              <h1 className="text-4xl sm:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>
              <span className="text-dark-400">{project.date}</span>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Overview</h2>
            <p className="text-dark-300 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Challenges</h2>
            <p className="text-dark-300 text-lg leading-relaxed">
              {project.challenges}
            </p>
          </motion.div>

          {/* Improvements */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">
              Future Improvements
            </h2>
            <p className="text-dark-300 text-lg leading-relaxed">
              {project.improvements}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-700"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <ExternalLink size={20} />
              View Live Project
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-dark-800 hover:bg-dark-700 rounded-lg font-medium transition-all border border-dark-700"
            >
              <Github size={20} />
              View Source Code
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-8 border-t border-dark-700"
          >
            {portfolio.projects.find((p) => p.id === project.id - 1) && (
              <Link
                to={`/projects/${portfolio.projects.find((p) => p.id === project.id - 1)?.slug}`}
                className="flex items-center gap-2 px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                ← Previous
              </Link>
            )}
            {portfolio.projects.find((p) => p.id === project.id + 1) && (
              <Link
                to={`/projects/${portfolio.projects.find((p) => p.id === project.id + 1)?.slug}`}
                className="flex items-center gap-2 ml-auto px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Next →
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
