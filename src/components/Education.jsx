import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const Education = () => {
  const { education } = portfolio;

  if (!education || education.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="flex gap-4 p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl">
                  {edu.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-400">
                  {edu.degree}
                </h3>
                <p className="text-dark-200 font-medium">{edu.institute}</p>
              </div>

              {/* Date */}
              <div className="flex-shrink-0 text-right">
                <p className="text-dark-400 text-sm whitespace-nowrap">
                  {edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
