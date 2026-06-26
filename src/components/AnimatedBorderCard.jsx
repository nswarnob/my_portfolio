import { motion } from "framer-motion";

const AnimatedBorderCard = ({
  children,
  className = "",
  padding = "p-6",
  rounded = "rounded-[20px]",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01, rotate: 0.2 }}
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.8 }}
      className={`relative will-change-transform ${rounded} ${className}`}
    >
      <div className={`animated-border absolute inset-0 ${rounded}`} />

      <div
        className={`relative z-10 m-[2px] ${rounded} ${padding} bg-dark-950 border border-white/10`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedBorderCard;
