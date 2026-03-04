import { motion } from "framer-motion";
import { data } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projects } = data;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} index={idx} />
          ))}
        </div>

        <motion.a
          href="/projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center w-full py-3 rounded-lg border border-white/10 text-dark-300 hover:text-dark-100 hover:border-white/20 transition-colors"
        >
          VIEW ALL PROJECTS →
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
