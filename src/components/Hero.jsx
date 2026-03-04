import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Download,
  Youtube,
} from "lucide-react";
import { data } from "../data/portfolioData";
import MeteorBackground from "./MeteorBackground";

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
    <section id="home" className="relative min-h-screen pt-16">
      <MeteorBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-left flex-1 relative"
        >
          {photo && (
            <div className="hidden lg:block absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40">
              <img
                src={photo}
                alt={name}
                className="w-full h-full rounded-full border-4 border-yellow-400 object-cover"
              />
            </div>
          )}

          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-tight"
          >
            hey, {name.split(" ")[0]} here
          </motion.h1>
          <motion.p variants={item} className="text-lg text-dark-400">
            been on earth for {age} years
          </motion.p>
          <motion.div variants={item}>
            <h4 className="text-sm uppercase text-dark-500 mb-2">about me</h4>
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
                  <Icon size={24} />
                </a>
              );
            })}
          </motion.div>
          <motion.div variants={item}>
            <h4 className="text-sm uppercase text-dark-500 mb-2">skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-dark-800 rounded-full text-sm text-dark-200"
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
