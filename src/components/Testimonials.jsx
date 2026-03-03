import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

const Testimonials = () => {
  const { testimonials } = portfolio;

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Thanks for all of your love 💖
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.7 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="p-6 rounded-xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:border-blue-500/30 transition-all space-y-4"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-bold text-blue-400">
                    {testimonial.name}
                  </h3>
                  <p className="text-dark-400 text-sm">{testimonial.handle}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-dark-300 leading-relaxed">
                "{testimonial.message}"
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
