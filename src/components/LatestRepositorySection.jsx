import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Github,
  Globe,
  Loader,
} from "lucide-react";
import { data } from "../data/portfolioData";
import { fetchLatestRepository } from "../services/githubService";
import AnimatedBorderCard from "./AnimatedBorderCard";

const LatestRepositorySection = () => {
  const [latestRepository, setLatestRepository] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRepository = async () => {
      setIsLoading(true);
      // Extract GitHub username from socials
      const githubUrl = data.socials?.find((s) => s.name === "GitHub")?.url;
      const username = githubUrl?.split("/").pop();

      if (username) {
        const repo = await fetchLatestRepository(username);
        setLatestRepository(repo);
      }
      setIsLoading(false);
    };

    loadRepository();
  }, []);

  if (isLoading) {
    return (
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                What I'm building now
              </h2>
            </div>
            <p className="text-sm text-dark-400">
              A quick look at my latest project and current focus.
            </p>
          </motion.div>

          <AnimatedBorderCard className="group overflow-hidden">
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-3">
                <Loader size={24} className="animate-spin text-blue-400" />
                <p className="text-sm text-dark-300">
                  Loading latest project...
                </p>
              </div>
            </div>
          </AnimatedBorderCard>
        </div>
      </section>
    );
  }

  if (!latestRepository) return null;

  const {
    name,
    description,
    techStack,
    repoUrl,
    liveUrl,
    updatedAt,
    highlight,
  } = latestRepository;

  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              What I’m building now
            </h2>
          </div>
          <p className="text-sm text-dark-400">
            A quick look at my latest project and current focus.
          </p>
        </motion.div>

        <AnimatedBorderCard className="group overflow-hidden">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-dark-100 transition-colors group-hover:text-blue-400">
                    {name}
                  </h3>
                  {updatedAt && (
                    <div className="mt-1 flex items-center gap-2 text-sm text-dark-400">
                      <CalendarDays size={14} />
                      <span>{updatedAt}</span>
                    </div>
                  )}
                </div>
              </div>

              {description && (
                <p className="mt-4 text-sm leading-relaxed text-dark-300">
                  {description}
                </p>
              )}

              {highlight && (
                <p className="mt-3 text-sm text-dark-400">{highlight}</p>
              )}

              {techStack && techStack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-white/10 bg-dark-800/70 px-2.5 py-1 text-xs text-dark-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 sm:min-w-[180px]">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100 dark:border-white/10 dark:bg-dark-800/80 dark:text-dark-100 dark:hover:border-white/20 dark:hover:text-blue-400"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}

              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 dark:border-white/10 dark:bg-transparent dark:text-dark-300 dark:hover:border-white/20 dark:hover:text-dark-100"
                >
                  <Globe size={16} />
                  Live Demo
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </AnimatedBorderCard>
      </div>
    </section>
  );
};

export default LatestRepositorySection;
