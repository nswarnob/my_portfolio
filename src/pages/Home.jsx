import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import GithubContributions from "../components/GithubContributions";
import Contact from "../components/Contact";
import MeteorBackground from "../components/MeteorBackground";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <MeteorBackground />
      <Hero />
      <Experience />
      <GithubContributions />
      <Projects />
      <Education />
      <Contact />
    </motion.div>
  );
};

export default Home;
