import { motion } from "framer-motion";
import { data } from "../data/portfolioData";

const Footer = () => {
  const year = new Date().getFullYear();
  const githubUsername =
    data.socials.find((s) => s.name === "GitHub")?.url.split("/").pop() || "";

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-dark-400"
        >
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

          <div className="flex gap-6 text-xs">
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
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
