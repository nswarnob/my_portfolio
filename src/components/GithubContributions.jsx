import { AnimatePresence, motion as Motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";
import { data } from "../data/portfolioData";
import AnimatedBorderCard from "./AnimatedBorderCard";
import LeetCodeContributions from "./LeetCodeContributions";

const VIEWS = [
  { id: "github", label: "GitHub" },
  { id: "leetcode", label: "LeetCode" },
];

const GITHUB_COLOR_LEVELS = [
  "bg-slate-200 dark:bg-[#1f1f1f]",
  "bg-emerald-200 dark:bg-[#14532d]",
  "bg-emerald-400 dark:bg-[#15803d]",
  "bg-emerald-500 dark:bg-[#22c55e]",
  "bg-emerald-600 dark:bg-[#4ade80]",
];

const GitHubActivity = ({ Calendar, username }) => {
  const calendar = React.createElement(Calendar, {
    username,
    blockSize: 13,
    blockMargin: 4,
    blockRadius: 3,
    fontSize: 12,
    colorScheme: "dark",
    showColorLegend: false,
    showMonthLabels: false,
    showTotalCount: false,
    showWeekdayLabels: false,
    theme: {
      light: ["#e2e8f0", "#bbf7d0", "#4ade80", "#16a34a", "#15803d"],
      dark: ["#1f1f1f", "#14532d", "#15803d", "#22c55e", "#4ade80"],
    },
    tooltips: {
      activity: {
        text: ({ count, date }) =>
          `${date}: ${count === 1 ? "1 contribution" : `${count} contributions`}`,
      },
    },
  });

  return (
    <div>
      <div className="overflow-x-auto pb-3">
        <div className="min-w-[900px]">
          {calendar}

          <div className="mt-3 flex items-center justify-between text-xs text-dark-500">
            <span>GitHub activity · last 12 months</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {GITHUB_COLOR_LEVELS.map((color, index) => (
                <span
                  key={color}
                  className={`h-[11px] w-[11px] rounded-[3px] border border-black/5 dark:border-white/5 ${color}`}
                  aria-label={`Contribution level ${index}`}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-500 dark:text-[#39d353] dark:hover:text-[#6ee7a0]"
      >
        @{username}
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

const ContributionSection = () => {
  const [GitHubCalendar, setGitHubCalendar] = React.useState(null);
  const [currentView, setCurrentView] = React.useState(VIEWS[0].id);

  React.useEffect(() => {
    import("react-github-calendar").then((module) => {
      setGitHubCalendar(() => module.default || module.GitHubCalendar);
    });
  }, []);

  const githubUrl = data.socials.find((social) => social.name === "GitHub")?.url;
  const githubUsername = githubUrl?.split("/").pop();
  const leetUrl = data.socials.find((social) => social.name === "LeetCode")?.url;
  const leetUsername = leetUrl?.split("/").pop();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentView((view) =>
        view === VIEWS[0].id ? VIEWS[1].id : VIEWS[0].id,
      );
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  if (!GitHubCalendar && !leetUsername) return null;

  const currentViewLabel = VIEWS.find((view) => view.id === currentView)?.label;

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <AnimatedBorderCard padding="p-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-dark-100"
              >
                {currentViewLabel} Contributions
              </Motion.h3>
              <p className="mt-1 text-sm text-dark-500">
                Your activity over the last 12 months
              </p>
            </div>

            <div
              className="inline-flex w-fit rounded-lg border border-white/10 bg-white/[0.03] p-1"
              aria-label="Contribution source"
            >
              {VIEWS.map((view) => (
                <button
                  key={view.id}
                  type="button"
                  onClick={() => setCurrentView(view.id)}
                  aria-pressed={view.id === currentView}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                    view.id === currentView
                      ? "bg-white/10 text-dark-100 shadow-sm"
                      : "text-dark-500 hover:text-dark-300"
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[176px] overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <Motion.div
                key={currentView}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="will-change-transform"
              >
                {currentView === "github" && GitHubCalendar && githubUsername ? (
                  <GitHubActivity
                    Calendar={GitHubCalendar}
                    username={githubUsername}
                  />
                ) : currentView === "leetcode" && leetUsername ? (
                  <LeetCodeContributions username={leetUsername} />
                ) : null}
              </Motion.div>
            </AnimatePresence>
          </div>
        </AnimatedBorderCard>
      </div>
    </section>
  );
};

export default ContributionSection;
