import { motion } from "framer-motion";

const AnimatedBorderCard = ({
  children,
  className = "",
  padding = "p-6",
  rounded = "rounded-[20px]",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
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
