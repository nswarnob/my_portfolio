import { motion } from "framer-motion";
import { data } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4 text-dark-300 leading-relaxed"
        >
          {data.about.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              dangerouslySetInnerHTML={{ __html: line }}
              className="text-base"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
