import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { useState } from "react";

const Contact = () => {
  const { contact } = portfolio;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to EmailJS or Formspree
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! Email setup coming soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-dark-300 mb-16 max-w-2xl mx-auto"
        >
          {contact.message}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email */}
            <div className="flex gap-4 items-start p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-blue-400 mb-1">Email</h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-dark-300 hover:text-blue-400 transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-blue-400 mb-1">Phone</h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-dark-300 hover:text-blue-400 transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4 items-start p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all group">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-blue-400 mb-1">WhatsApp</h3>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-blue-400 transition-colors"
                >
                  {contact.whatsapp}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-dark-900 border border-dark-700 rounded-lg focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Send Message
            </motion.button>

            {/* TODO Note */}
            <p className="text-xs text-dark-500 text-center">
              * Form is connected to EmailJS/Formspree TODO
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
