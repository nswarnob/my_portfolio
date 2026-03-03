import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50 bg-dark-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-dark-400 mb-2">
              © {year} Sharifur Rahman. All rights reserved.
            </p>
            <p className="text-dark-500 text-sm">
              Built with <Heart size={14} className="inline text-red-500" />{" "}
              using React, Vite & Tailwind CSS
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-dark-400 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">Open Source</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-400 hover:text-blue-400 transition-colors text-sm"
            >
              MIT License
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dark-800/50 mt-8 pt-8 text-center">
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-dark-500 text-sm"
          >
            Made by Sharifur Rahman with passion ✨
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
