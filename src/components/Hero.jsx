import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Download,
  Search,
} from "lucide-react";
import { data } from "../data/portfolioData";

const Hero = () => {
  const { name, dob, about, socials, skills, photo } = data;

  const [age, setAge] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateAge = () => {
      const birth = new Date(dob);
      const ageInYears =
        (Date.now() - birth.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

      setAge(ageInYears);
    };

    updateAge();
    const intervalId = window.setInterval(updateAge, 100);

    return () => window.clearInterval(intervalId);
  }, [dob]);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 22 || hour < 5) {
        setGreeting("Good Night");
      } else if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
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
      className="relative isolate px-4 pb-2 pt-20 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24"
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
                className="-mt-2 text-xl font-bold leading-tight sm:mt-4 sm:text-3xl md:text-4xl"
              >
                Hey, {name.split(" ")[0]} here
              </Motion.h1>

              <Motion.p
                variants={item}
                className="text-sm sm:text-base md:text-lg text-dark-400"
              >
                been on earth for {age.toFixed(9)} years
              </Motion.p>

              <Motion.div
                variants={item}
                className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 md:mt-6"
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-medium">
                  About me
                </h4>
                <span
                  aria-hidden="true"
                  className="h-4 w-px rounded-full bg-[#737373]/50 dark:bg-white/25 sm:h-5"
                />
                <Motion.a
                  href="https://www.google.com/search?q=Who+is+Sharif+Uddin+Arnob&udm=50"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="See what the internet says about me."
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-transparent py-1 text-[10px] font-medium text-dark-100 backdrop-blur-sm transition-all duration-300 light:text-slate-900 sm:py-1.5 sm:text-xs md:py-2 md:text-sm"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-transparent resume-button-border transition-all duration-300 sm:h-6 sm:w-6">
                    <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <span>Google Me</span>
                </Motion.a>
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
                    className="absolute sm:left-1/2 left-[-0.2rem] top-[-2rem] z-20 -translate-x-1/2 sm:top-[-1.4rem]"
                  >
                    <div className="absolute bottom-[-0.30rem] right-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] bg-[#111111] dark:bg-[#d4d4d4]" />
                    <div className="rounded-2xl border border-[#737373]/30 bg-[#111111]/80 px-2 py-1.5 text-[10px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur-md dark:bg-[#111111]/75 sm:px-2.5 sm:py-2 sm:text-xs whitespace-nowrap">
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

                <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center">
                  <Motion.a
                    href="/resume.pdf"
                    download="Sharif_Uddin_Arnob_Resume.pdf"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="resume-button-border resume-glass inline-flex w-full cursor-pointer items-center justify-center gap-1 rounded-full border border-transparent px-2 py-1 text-[9px] font-medium text-dark-100 transition-all duration-300 light:text-slate-900 sm:w-auto sm:gap-2 sm:px-3 sm:py-2 sm:text-xs md:px-4 md:py-2 md:text-sm"
                  >
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    <span>Resume</span>
                  </Motion.a>
                </div>
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
            className="flex w-fit items-center gap-2 sm:gap-3"
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {socials.filter((s) => socialIcons[s.icon]).map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <Motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex size-9 items-center justify-center text-dark-300 transition-colors duration-300 hover:text-dark-100 light:text-slate-600 light:hover:text-slate-900 sm:size-10"
                >
                  <Icon size={24} />
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
                  className="glass-chip px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm text-dark-200"
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
