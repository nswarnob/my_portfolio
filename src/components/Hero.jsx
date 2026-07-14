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
  const [greeting, setGreeting] = useState("");
  const [greetingIcon, setGreetingIcon] = useState("☀️");

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

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 22 || hour < 5) {
        setGreeting("Good Night");
        setGreetingIcon("🌙");
      } else if (hour < 12) {
        setGreeting("Good Morning");
        setGreetingIcon("🌅");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
        setGreetingIcon("☀️");
      } else {
        setGreeting("Good Evening");
        setGreetingIcon("🌇");
      }
    };

    updateGreeting();
    const intervalId = window.setInterval(updateGreeting, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

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
      className="relative pt-12 sm:pt-16 lg:pt-24 pb-2 px-4 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 px-4 sm:px-6 my-8">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 text-left"
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:gap-4 lg:gap-8">
            <div className="min-w-0">
              <Motion.h1
                variants={item}
                className="mt-4 text-xl sm:text-3xl md:text-4xl font-bold leading-tight"
              >
                Hey, {name.split(" ")[0]} here
              </Motion.h1>

              <Motion.p
                variants={item}
                className="text-sm sm:text-base md:text-lg text-dark-400"
              >
                been on earth for {age.toFixed(9)} years
              </Motion.p>

              <Motion.div variants={item} className="mt-4 sm:mt-5 md:mt-6">
                <h4 className="text-lg sm:text-xl md:text-2xl font-medium">
                  About me
                </h4>
              </Motion.div>

              {/* Desktop about text */}
              <Motion.div
                variants={item}
                className="hidden lg:block mt-3 text-dark-300 text-xs sm:text-sm leading-relaxed"
              >
                {about.map((line, idx) => (
                  <p
                    key={idx}
                    className="mb-2 last:mb-0"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </Motion.div>
            </div>

            {photo && (
              <Motion.div
                variants={photoContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="absolute right-0 top-0 flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0 w-max max-w-[72px] sm:max-w-[140px] md:max-w-none self-start lg:static lg:top-auto lg:right-auto"
              >
                <div className="relative">
                  <Motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: [0, -3, 0], scale: 1 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    className="absolute left-[-0.25rem] top-[-0.25rem] z-20 sm:left-[-0.75rem] sm:top-[-0.5rem] lg:left-1/2 lg:top-[-1.2rem] lg:-translate-x-1/2 lg:-translate-y-0"
                  >
                    <div className="absolute bottom-[-0.35rem] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] bg-gradient-to-br from-sky-500 to-blue-600" />
                    <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 px-2 py-1.5 text-[10px] font-semibold text-white shadow-[0_10px_24px_rgba(59,130,246,0.24)] sm:px-2.5 sm:py-2 sm:text-xs whitespace-nowrap">
                      {greeting || "Hello"}
                    </div>
                  </Motion.div>

                  <div className="h-[clamp(56px,16vw,72px)] w-[clamp(56px,16vw,72px)] sm:h-[clamp(80px,24vw,140px)] sm:w-[clamp(72px,22vw,120px)] md:h-36 md:w-36">
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
                </div>

                <Motion.a
                  href="/resume.pdf"
                  download="Sharif_Uddin_Arnob_Resume.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full px-2.5 py-1.5 text-[10px] sm:px-3 sm:py-2 sm:text-xs md:px-4 md:py-2 md:text-sm font-medium text-dark-100 backdrop-blur-sm transition-all duration-300 cursor-pointer border border-transparent resume-button-border light:text-slate-900"
                >
                  <Download className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span>Resume</span>
                </Motion.a>
              </Motion.div>
            )}
          </div>

          {/* Mobile/tablet about text */}
          <Motion.div
            variants={item}
            className="lg:hidden text-dark-300 text-xs sm:text-sm leading-relaxed"
          >
            {about.map((line, idx) => (
              <p
                key={idx}
                className="mb-2 last:mb-0"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
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
                  className="text-dark-300 transition-colors duration-300 hover:text-dark-100 light:text-slate-600 light:hover:text-slate-900"
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
      </div>
    </section>
  );
};

export default Hero;
