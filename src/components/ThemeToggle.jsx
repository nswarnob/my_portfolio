import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ isDark, setIsDark, className = "" }) => {
  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-slate-300 hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white ${className}`}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <Sun
          className={`absolute h-5 w-5 transition-all duration-300 ${
            isDark
              ? "scale-75 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <Moon
          className={`absolute h-5 w-5 transition-all duration-300 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-75 -rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
