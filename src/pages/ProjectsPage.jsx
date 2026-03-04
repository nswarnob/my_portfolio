import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { data } from "../data/portfolioData";

const ProjectsPage = () => {
  const { projects } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Home
        </Link>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Projects
        </motion.h1>

        <ul className="space-y-4">
          {projects.map((proj, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex justify-between items-center"
            >
              <a
                href={proj.liveUrl || proj.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {proj.title}
              </a>
              {proj.dates && (
                <span className="text-dark-400 text-sm whitespace-nowrap">
                  {proj.dates}
                </span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
