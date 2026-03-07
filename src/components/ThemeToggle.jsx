import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ isDark, setIsDark, className = "" }) => {
  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white ${className}`}
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
