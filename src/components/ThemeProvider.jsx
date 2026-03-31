import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return true;

  const stored = window.localStorage.getItem("theme");
  if (stored) return stored === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return children({ isDark, setIsDark });
};

export default ThemeProvider;
