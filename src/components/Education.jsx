import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { data } from "../data/portfolioData";

const Education = () => {
  const { education } = data;
  const [showAll, setShowAll] = useState(false);

  if (!education || education.length === 0) return null;

  const visibleEducation = showAll ? education : education.slice(0, 2);

  return (
    <section
      id="education"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl font-bold mb-8"
        >
          Education
        </Motion.h2>
        <div className="space-y-4">
          {visibleEducation.map((edu, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-surface glass-card flex items-center justify-between p-4 rounded-lg transition-colors"
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
            </Motion.div>
          ))}
        </div>

        {education.length > 2 && (
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 flex justify-center"
          >
            <Motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-dark-300 transition-colors duration-300 hover:border-white/20 hover:text-dark-100"
            >
              {showAll ? "Show Less" : "More"}
            </Motion.button>
          </Motion.div>
        )}
      </div>
    </section>
  );
};

export default Education;
