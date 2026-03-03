import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      style={{ width: `${progress}%` }}
      className="fixed top-20 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-40"
      initial={{ width: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ScrollProgress;
