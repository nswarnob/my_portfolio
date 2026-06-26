import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projects } = data;

  if (!projects || projects.length === 0) return null;

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl font-bold mb-8"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.slice(0, 2).map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/projects"
            className="flex w-full items-center justify-center rounded-lg border border-white/10 py-3 text-dark-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-dark-100"
          >
            VIEW ALL PROJECTS →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
