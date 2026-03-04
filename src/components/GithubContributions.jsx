import { motion } from "framer-motion";
import React from "react";
import { data } from "../data/portfolioData";
import AnimatedBorderCard from "./AnimatedBorderCard";

const GithubContributions = () => {
  const [GitHubCalendar, setGitHubCalendar] = React.useState(null);

  React.useEffect(() => {
    import("react-github-calendar").then((module) => {
      setGitHubCalendar(() => module.default || module.GitHubCalendar);
    });
  }, []);

  // Extract GitHub username from socials
  const githubUrl = data.socials.find((s) => s.name === "GitHub")?.url;
  const username = githubUrl?.split("/").pop();

  if (!username || !GitHubCalendar) return null;

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedBorderCard padding="p-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-dark-100 mb-6"
          >
            GitHub Contributions
          </motion.h3>

          <div className="flex justify-center md:justify-start overflow-x-auto pb-4">
            <GitHubCalendar
              username={username}
              blockSize={13}
              blockMargin={4}
              fontSize={14}
              colorScheme="dark"
              theme={{
                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
              }}
            />
          </div>
        </AnimatedBorderCard>
      </div>
    </section>
  );
};

export default GithubContributions;
