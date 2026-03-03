import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const About = () => {
  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto p-8 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-dark-300 leading-relaxed mb-6"
          >
            {portfolio.about}
          </motion.p>

          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-dark-700"
          >
            <motion.div
              variants={statItemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 rounded-lg bg-dark-900/50 cursor-pointer"
            >
              <motion.h3
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold text-blue-400"
              >
                5+
              </motion.h3>
              <p className="text-dark-400 text-sm mt-1">Years Experience</p>
            </motion.div>
            <motion.div
              variants={statItemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 rounded-lg bg-dark-900/50 cursor-pointer"
            >
              <motion.h3
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                className="text-2xl font-bold text-blue-400"
              >
                50+
              </motion.h3>
              <p className="text-dark-400 text-sm mt-1">Projects Completed</p>
            </motion.div>
            <motion.div
              variants={statItemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 rounded-lg bg-dark-900/50 cursor-pointer"
            >
              <motion.h3
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                className="text-2xl font-bold text-blue-400"
              >
                30+
              </motion.h3>
              <p className="text-dark-400 text-sm mt-1">Happy Clients</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
