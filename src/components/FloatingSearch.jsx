import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingSearch = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 hidden md:flex items-center gap-2 px-3 py-2 text-sm text-dark-400 bg-dark-900/60 backdrop-blur-sm rounded-lg hover:bg-dark-800 transition-colors"
    >
      <Search size={16} />
      Search
      <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border bg-dark-800 px-1.5 font-mono text-[10px] font-medium text-dark-300">
        ⌘<span className="text-xs">K</span>
      </kbd>
    </button>
  );
};

export default FloatingSearch;
