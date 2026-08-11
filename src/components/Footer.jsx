import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { data } from "../data/portfolioData";
import { useState, useEffect } from "react";
import { fetchLocation } from "../services/locationService";

const Footer = () => {
  const year = new Date().getFullYear();
  const [currentLocation, setCurrentLocation] = useState(null);
  const githubUsername =
    data.socials
      .find((s) => s.name === "GitHub")
      ?.url.split("/")
      .pop() || "";

  useEffect(() => {
    let isMounted = true;

    const loadLocation = async () => {
      const location = await fetchLocation();
      if (!isMounted) return;
      setCurrentLocation(location);
    };

    loadLocation();
    const locationIntervalId = window.setInterval(loadLocation, 15000);

    return () => {
      isMounted = false;
      window.clearInterval(locationIntervalId);
    };
  }, []);

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-sm text-dark-400"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-surface flex flex-col items-center gap-2 rounded-2xl px-3 py-2.5 text-center"
          >
            <span className="text-[10px] font-medium text-dark-300">
              Currently I'm here
            </span>
            <span className="flex items-center justify-center gap-2 text-[12px] text-dark-200">
              <MapPin
                size={12}
                className="shrink-0 text-[#737373] dark:text-[#d4d4d4]"
              />
              <span>
                {currentLocation?.displayText || "Habiganj, Sylhet, Bangladesh"}
              </span>
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full text-sm text-dark-400">
            <div className="text-center md:text-left">
              <p>
                © {year} {data.name}. All rights reserved.
              </p>
              <p className="text-xs text-dark-500 mt-2">
                Open source under MIT License · Available on{" "}
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-dark-100 transition-colors"
                >
                  GitHub
                </a>
              </p>
            </div>

            <div className="flex gap-6 text-xs display-none">
              <a
                href="#"
                className="text-dark-400 hover:text-dark-100 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-dark-100 transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-dark-100 transition-colors"
              >
                RSS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
