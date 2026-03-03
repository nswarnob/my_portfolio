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

const SocialIcon = ({ name, icon: Icon, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 bg-dark-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
    aria-label={name}
  >
    <Icon size={24} />
  </motion.a>
);

const Hero = () => {
  const { name, dob, about, socials, skills, photo } = data;

  const birth = new Date(dob);
  const age = Math.floor(
    (Date.now() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
  );

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
    <section id="home" className="relative min-h-screen pt-20">
      <MeteorBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-left"
        >
          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-tight"
          >
            hey, {name.split(" ")[0]} here
          </motion.h1>
          <motion.p variants={item} className="text-lg text-dark-400">
            been on earth for {age} years
          </motion.p>
          <motion.div variants={item} className="prose prose-sm text-dark-300">
            {about.map((line, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
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
        <div className="hidden lg:block absolute right-0 top-1/4">
          <img
            src={photo}
            alt={name}
            className="w-40 h-40 rounded-full border-4 border-yellow-400 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
