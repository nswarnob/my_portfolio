import { useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { data } from "../data/portfolioData";

const Hero = () => {
  const { name, dob, about, socials, skills, photo } = data;

  const age = useMemo(() => {
    const birth = new Date(dob);
    return Math.floor(
      (Date.now() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
    );
  }, [dob]);

  const socialIcons = {
    FiGithub: Github,
    FiLinkedin: Linkedin,
    FiTwitter: Twitter,
    FiYoutube: Youtube,
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative  pt-12 sm:pt-16 lg:pt-24 pb-2 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 space-y-7 px-4 sm:px-6 lg:px-8 flex items-center justify-center my-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-left flex-1 relative w-full"
        >
          {photo && (
            <div className="absolute top-4 right-4 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40">
              <img
                src={photo}
                alt={name}
                className="w-full h-full rounded-full border-4 border-dark-500 object-cover"
              />
            </div>
          )}

          <div>
            <motion.h1
              variants={item}
              className="text-2xl sm:text-4xl font-bold leading-tight"
            >
              Hey, {name.split(" ")[0]} here
            </motion.h1>
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-dark-400"
            >
              been on earth for {age} years
            </motion.p>
          </div>

          <motion.div variants={item}>
            <h4 className="text-xs sm:text-sm uppercase text-dark-500 mb-2">
              About me
            </h4>
            <div className="prose prose-sm text-dark-300">
              {about.map((line, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>
          </motion.div>
          <motion.div variants={item} className="flex gap-4">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-dark-100 transition-colors"
                >
                  {Icon && <Icon size={24} />}
                </a>
              );
            })}
          </motion.div>

          <motion.div variants={item}>
            <h4 className="text-xs sm:text-sm uppercase text-dark-500 mb-2">
              skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-dark-800 rounded-full text-xs sm:text-sm text-dark-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
