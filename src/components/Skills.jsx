import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const SkillBar = ({ name, level }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-dark-200 font-medium">{name}</span>
        <span className="text-blue-400 text-sm">{level}%</span>
      </div>
      <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = portfolio;

  const categories = [
    { title: "Frontend", skills: skills.frontend },
    { title: "Backend", skills: skills.backend },
    { title: "Tools & Platforms", skills: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              whileHover={{ translateY: -5, transition: { duration: 0.3 } }}
              className="p-8 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.05 }}
                  >
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
