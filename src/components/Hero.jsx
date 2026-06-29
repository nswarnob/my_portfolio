import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { data } from "../data/portfolioData";

const Hero = () => {
  const { name, dob, about, socials, skills, photo } = data;

  const [age, setAge] = useState(0);

  useEffect(() => {
    const updateAge = () => {
      const birth = new Date(dob);
      const ageInYears =
        (Date.now() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

      setAge(ageInYears);
    };

    updateAge();

    const interval = setInterval(updateAge, 1000);

    return () => clearInterval(interval);
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

  return (
    <section
      id="home"
      className="relative  pt-12 sm:pt-16 lg:pt-24 pb-2 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 px-4 sm:px-6 flex items-center justify-center my-8">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative w-full flex-1 space-y-6 text-left pr-0 sm:pr-24"
        >
          {photo && (
            <div className="mb-4 flex flex-row items-center justify-start gap-3 sm:absolute sm:right-0 sm:top-0 sm:mb-0 sm:flex-col sm:items-center sm:gap-2">
              <div className="h-20 w-20 shrink-0 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36">
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
              <a
                href="/resume.pdf"
                download="Sharif_Uddin_Arnob_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1.5 text-[10px] font-medium text-dark-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/15 sm:px-3 sm:py-2 sm:text-xs"
              >
                Download Resume
              </a>
            </div>
          )}

          <div>
            <Motion.h1
              variants={item}
              className="text-2xl sm:text-4xl font-bold leading-tight"
            >
              Hey, {name.split(" ")[0]} here
            </Motion.h1>
            <Motion.p
              variants={item}
              className="text-base sm:text-lg text-dark-400"
            >
              been on earth for {age.toFixed(9)} years
            </Motion.p>
          </div>

          <Motion.div variants={item}>
            <h4 className="text-xl sm:text-2xl font-medium mb-3">About me</h4>
            <div className="prose prose-sm text-dark-300">
              {about.map((line, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </div>
          </Motion.div>

          <Motion.div
            variants={item}
            className="flex gap-4"
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
            <h4 className="text-xl sm:text-2xl font-medium mb-3">Skills</h4>
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
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
