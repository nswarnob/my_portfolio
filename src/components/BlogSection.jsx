import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import { blogs } from "../data/blog";

import "swiper/css";
import AnimatedBorderCard from "./AnimatedBorderCard";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogSection() {
  return (
    <section id="writing" className="px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div className="space-y-2 mx-auto ">
              <h2 className="text-xl sm:text-gray-200xl font-semibold text-dark-100 ">
                Articles I’ve published on DEV Community and Medium
                <hr className="mt-6 opacity-15" />
              </h2>
            </div>
          </motion.div>

          {/* Blog Slider */}
          <motion.div variants={itemVariants}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-dark-800 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20">
                    {blog.coverImage && (
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-48 w-full object-cover"
                        loading="lazy"
                      />
                    )}

                    <div className="space-y-4 p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-dark-100">
                          {blog.platform}
                        </span>

                        <span className="text-xs text-dark-400">
                          {formatDate(blog.publishDate)}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-dark-100 group-hover:text-blue-400 transition">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-dark-300 leading-relaxed">
                        {blog.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-white/5 rounded-full text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Read Article
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
