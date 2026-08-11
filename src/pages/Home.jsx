import { motion as Motion } from "framer-motion";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import GithubContributions from "../components/GithubContributions";
import Contact from "../components/Contact";
import BlogSection from "../components/BlogSection";
import LatestRepositorySection from "../components/LatestRepositorySection";

const Home = () => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Hero />
      <LatestRepositorySection />
      <GithubContributions />
      <Experience />
      <Projects />
      <Education />
      <BlogSection />
      <Contact />
    </Motion.div>
  );
};

export default Home;
