import { motion } from "framer-motion";
import { data } from "../data/portfolioData";

const Education = () => {
  const { education } = data;

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
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Education
        </motion.h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={edu.logo}
                  alt={edu.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-dark-100">{edu.name}</p>
                  <p className="text-sm text-dark-400">{edu.degree}</p>
                </div>
              </div>
              <p className="text-sm text-dark-400 whitespace-nowrap">
                {edu.years}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
