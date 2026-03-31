import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { data } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const { projects } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 pb-20 pt-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        <Link
          to="/"
          className="mb-2 inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Selected Work
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Projects I’ve built and shipped
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-dark-400 sm:text-base">
            A detailed look at some of my recent work, including previews,
            project summaries, tech stack, and live/source links.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 dark:border-white/10 dark:bg-dark-800 dark:text-dark-300">
              {projects.length} featured projects
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 dark:border-white/10 dark:bg-dark-800 dark:text-dark-300">
              Live demo + source code
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
