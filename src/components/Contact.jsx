import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { data } from "../data/portfolioData";
import AnimatedBorderCard from "./AnimatedBorderCard";

const Contact = () => {
  const { contact, socials } = data;

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${contact.email}`,
      color: "hover:text-red-400",
    },
  ];

  // Add social links
  const socialIcons = {
    GitHub: { icon: Github, color: "hover:text-gray-400" },
    X: { icon: Twitter, color: "hover:text-blue-400" },
    LinkedIn: { icon: Linkedin, color: "hover:text-blue-600" },
  };

  socials.forEach((social) => {
    if (socialIcons[social.name]) {
      contactLinks.push({
        icon: socialIcons[social.name].icon,
        label: social.name,
        href: social.url,
        color: socialIcons[social.name].color,
      });
    }
  });

  return (
    <section
      id="contact"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedBorderCard padding="p-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold mb-4 text-center"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-dark-300 mb-8 max-w-2xl mx-auto text-center"
          >
            {contact.message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={
                    link.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-dark-300 transition-colors ${link.color}`}
                >
                  <Icon size={18} />
                  {link.label}
                </motion.a>
              );
            })}
          </motion.div>
        </AnimatedBorderCard>
      </div>
    </section>
  );
};

export default Contact;
