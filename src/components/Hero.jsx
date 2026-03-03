import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react";
import { portfolio } from "../data/portfolio";
import MeteorBackground from "./MeteorBackground";

const SocialIcon = ({ name, icon: Icon, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.95 }}
    className="w-12 h-12 bg-dark-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
    aria-label={name}
  >
    <Icon size={24} />
  </motion.a>
);

const Hero = () => {
  const { profile } = portfolio;

  const socialIcons = {
    FiGithub: Github,
    FiLinkedin: Linkedin,
    FiMail: Mail,
    FiTwitter: Twitter,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      <MeteorBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 w-full"
        >
          {/* Profile Photo */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-30" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-blue-500/50 relative z-10 object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          {/* Designation */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-dark-300"
          >
            {profile.designation}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-dark-400 text-base sm:text-lg leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {profile.resume ? (
              <a
                href={profile.resume}
                download
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <Download size={20} />
                Download Resume
              </a>
            ) : (
              <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer">
                <Download size={20} />
                Download Resume
              </button>
            )}
            <a
              href="#contact"
              className="px-8 py-3 border border-blue-500/50 rounded-lg font-medium hover:bg-blue-500/10 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            {profile.socials.map((social) => (
              <SocialIcon
                key={social.name}
                {...social}
                icon={socialIcons[social.icon]}
              />
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-dark-400 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
