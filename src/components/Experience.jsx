import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const Experience = () => {
  const { experience } = portfolio;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="flex gap-4 p-6 rounded-xl bg-dark-900/50 backdrop-blur-sm border border-dark-800/50 hover:border-blue-500/30 transition-all group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl">
                  {exp.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-400">
                  {exp.company}
                </h3>
                <p className="text-dark-200 font-medium">{exp.role}</p>
                <p className="text-dark-400 text-sm mt-1">{exp.description}</p>
              </div>

              {/* Date */}
              <div className="flex-shrink-0 text-right">
                <p className="text-dark-400 text-sm whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
