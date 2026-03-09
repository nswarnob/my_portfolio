import { data } from "../data/portfolioData";
import { motion } from "framer-motion";

const Experience = () => {
  const { experience } = data;

  if (!experience || experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-bold mb-8"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors group"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-dark-100 group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-dark-400">
                      {exp.role}{" "}
                      {exp.badge && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-dark-700 rounded-full text-dark-300">
                          {exp.badge}
                        </span>
                      )}
                    </p>
                  </div>
                  <p className="text-sm text-dark-400 whitespace-nowrap">
                    {exp.dates}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
