import { motion } from "framer-motion";

const AnimatedBorderCard = ({
  children,
  className = "",
  padding = "p-6",
  rounded = "rounded-xl",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative group ${className}`}
    >
      {/* Animated border wrapper - 1px border with gradient glow */}
      <div className={`relative ${rounded} bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 p-[1px] overflow-hidden ${className}`}>
        {/* Inner background - prevents layout shift */}
        <div
          className={`absolute inset-0 ${rounded} bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-border-move opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Content container */}
        <div
          className={`relative bg-dark-950 ${rounded} ${padding} backdrop-blur-sm`}
        >
          {children}
        </div>
      </div>

      {/* Static border as fallback/base */}
      <div
        className={`absolute inset-0 ${rounded} border border-white/10 pointer-events-none`}
      />

      {/* Soft glow on hover */}
      <div
        className={`absolute inset-0 ${rounded} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        style={{
          boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)",
        }}
      />
    </motion.div>
  );
};

export default AnimatedBorderCard;
