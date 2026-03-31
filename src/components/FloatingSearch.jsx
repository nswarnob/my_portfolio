import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingSearch = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 160);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border px-3 py-2 text-sm shadow-lg backdrop-blur-md transition-all duration-300 md:flex ${
        show
          ? "translate-y-0 opacity-100 border-slate-200 bg-white/85 text-slate-700 dark:border-white/10 dark:bg-dark-900/70 dark:text-dark-300"
          : "pointer-events-none translate-y-3 opacity-0 border-transparent bg-transparent text-transparent shadow-none"
      }`}
    >
      <ArrowUp size={16} />
      Top
    </button>
  );
};

export default FloatingSearch;
