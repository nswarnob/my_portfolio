import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { data } from "../data/portfolioData";

const Navbar = ({ isDark, setIsDark }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  const navLinks = [
    { name: "Work", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-dark-800/50 dark:bg-dark-950/95 dark:shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-xl text-slate-900 sm:text-2xl dark:text-dark-100"
          >
            {data.name.split(" ")[0]}
          </Link>

          {/* Desktop Navigation */}
          {isHomePage && (
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-dark-300 dark:hover:text-dark-100"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <Link
              to="/cli"
              className="rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-dark-800 dark:text-dark-100 dark:hover:bg-dark-700"
              aria-label="CLI mode"
              title="Open CLI"
            >
              <Terminal size={20} />
            </Link>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

            {/* Mobile menu button */}
            {isHomePage && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg bg-slate-100 p-2 text-slate-700 hover:bg-slate-200 dark:bg-dark-800 dark:text-dark-100 dark:hover:bg-dark-700 md:hidden"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isHomePage && isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-200 bg-white/90 backdrop-blur-md dark:border-dark-800/50 dark:bg-dark-900/50 md:hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.name.toLowerCase())}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      activeSection === link.name.toLowerCase()
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-dark-300 dark:hover:bg-dark-800 dark:hover:text-dark-100"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
