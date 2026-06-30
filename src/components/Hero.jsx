import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Download,
} from "lucide-react";
import { data } from "../data/portfolioData";

const Hero = () => {
  const { name, dob, about, socials, skills, photo } = data;

  const [age, setAge] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const updateAge = () => {
      const birth = new Date(dob);
      const ageInYears =
        (Date.now() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

      setAge(ageInYears);
      animationFrameId = requestAnimationFrame(updateAge);
    };

    animationFrameId = requestAnimationFrame(updateAge);

    return () => cancelAnimationFrame(animationFrameId);
  }, [dob]);

  const socialIcons = {
    FiGithub: Github,
    FiLinkedin: Linkedin,
    FiTwitter: Twitter,
    FiYoutube: Youtube,
    FiInstagram: Instagram,
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const photoContainer = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative  pt-12 sm:pt-16 lg:pt-24 pb-2 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 px-4 sm:px-6 flex flex-row items-start justify-center gap-3 sm:gap-4 md:gap-8 my-8">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex-1 space-y-4 sm:space-y-6 text-left"
        >
          <div>
            <Motion.h1
              variants={item}
              className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight"
            >
              Hey, {name.split(" ")[0]} here
            </Motion.h1>
            <Motion.p
              variants={item}
              className="text-sm sm:text-base md:text-lg text-dark-400"
            >
              been on earth for {age.toFixed(9)} years
            </Motion.p>
          </div>

          <Motion.div variants={item}>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">
              About me
            </h4>
            <div className="prose prose-sm text-dark-300 text-xs sm:text-sm">
              {about.map((line, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>
          </Motion.div>

          <Motion.div
            variants={item}
            className="flex gap-3 sm:gap-4"
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <Motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-dark-300 transition-colors duration-300 hover:text-dark-100"
                >
                  {Icon && <Icon size={24} />}
                </Motion.a>
              );
            })}
          </Motion.div>

          <Motion.div variants={item}>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3">
              Skills
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 bg-dark-800 rounded-full text-[10px] sm:text-xs md:text-sm text-dark-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Motion.div>
        </Motion.div>
        {photo && (
          <Motion.div
            variants={photoContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2 shrink-0"
          >
            <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-36 md:w-36">
              <div className="avatar-border">
                <div className="h-full w-full overflow-hidden rounded-full bg-dark-950">
                  <img
                    src={photo}
                    alt={name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <Motion.a
              href="/resume.pdf"
              download="Sharif_Uddin_Arnob_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium text-dark-100 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-transparent resume-button-border"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Resume</span>
            </Motion.a>
          </Motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
