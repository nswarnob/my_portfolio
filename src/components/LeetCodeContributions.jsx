import { ExternalLink } from "lucide-react";
import React from "react";
import { fetchLeetCodeActivity } from "../services/leetcodeService";

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const WEEKS_TO_SHOW = 53;

const COLOR_LEVELS = [
  "bg-slate-200 dark:bg-[#1f1f1f]",
  "bg-[#ffe0a3] dark:bg-[#5c3b00]",
  "bg-[#ffc45c] dark:bg-[#8a5900]",
  "bg-[#ffa116] dark:bg-[#c77d00]",
  "bg-[#d97706] dark:bg-[#ffa116]",
];

const getDateKey = (date) => date.toISOString().slice(0, 10);

const getColorLevel = (count) => {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);

const buildCalendarWeeks = (submissionCalendar = {}) => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const endDate = new Date(
    today.getTime() + (6 - today.getUTCDay()) * DAY_IN_MS,
  );
  const startDate = new Date(
    endDate.getTime() - (WEEKS_TO_SHOW * 7 - 1) * DAY_IN_MS,
  );

  const countsByDate = Object.entries(submissionCalendar).reduce(
    (calendar, [timestamp, count]) => {
      const date = new Date(Number(timestamp) * 1000);
      calendar[getDateKey(date)] = Number(count) || 0;
      return calendar;
    },
    {},
  );

  return Array.from({ length: WEEKS_TO_SHOW }, (_, weekIndex) =>
    Array.from({ length: 7 }, (_, dayIndex) => {
      const date = new Date(
        startDate.getTime() + (weekIndex * 7 + dayIndex) * DAY_IN_MS,
      );
      const isFuture = date > today;

      return {
        count: isFuture ? null : countsByDate[getDateKey(date)] || 0,
        date,
        isFuture,
      };
    }),
  );
};

const CalendarSkeleton = () => (
  <div
    className="animate-pulse overflow-hidden"
    aria-label="Loading LeetCode activity"
  >
    <div className="h-32 min-w-[760px] rounded-xl bg-slate-200 dark:bg-white/5" />
  </div>
);

const LeetCodeContributions = ({ username }) => {
  const [activity, setActivity] = React.useState(null);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const controller = new AbortController();

    setActivity(null);
    setError("");

    fetchLeetCodeActivity(username, { signal: controller.signal })
      .then(setActivity)
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          setError(requestError.message);
        }
      });

    return () => controller.abort();
  }, [username]);

  const weeks = React.useMemo(
    () => buildCalendarWeeks(activity?.calendar?.submissionCalendar || {}),
    [activity],
  );

  if (error) {
    return (
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <p className="text-sm text-dark-300">{error}</p>
        <a
          href={`https://leetcode.com/u/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#ffa116] transition-colors hover:text-[#ffb84d]"
        >
          View LeetCode profile
          <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  if (!activity) {
    return <CalendarSkeleton />;
  }

  const solved =
    activity.submissions.find((item) => item.difficulty === "All")?.count || 0;
  const activeDays = weeks.flat().filter(({ count }) => count > 0).length;

  return (
    <div>
      <div className="overflow-x-auto pb-3">
        <div className="min-w-[900px]">
          <div
            className="flex gap-1"
            role="img"
            aria-label="LeetCode submission activity over the last 12 months"
          >
            {weeks.map((week) => (
              <div
                key={getDateKey(week[0].date)}
                className="flex flex-col gap-1"
              >
                {week.map(({ count, date, isFuture }) => {
                  const contributionText =
                    count === 1 ? "1 submission" : `${count || 0} submissions`;
                  const label = `${formatDate(date)}: ${contributionText}`;

                  return (
                    <span
                      key={getDateKey(date)}
                      aria-hidden="true"
                      title={isFuture ? undefined : label}
                      className={`h-[13px] w-[13px] rounded-[3px] border border-black/5 dark:border-white/5 ${
                        isFuture
                          ? "bg-transparent"
                          : COLOR_LEVELS[getColorLevel(count)]
                      }`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-dark-500">
            <span>
              {solved} problems solved · {activeDays} active days
            </span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {COLOR_LEVELS.map((color, index) => (
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
        href={`https://leetcode.com/u/${username}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#ffa116] transition-colors hover:text-[#ffb84d]"
      >
        @{activity.username}
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default LeetCodeContributions;
