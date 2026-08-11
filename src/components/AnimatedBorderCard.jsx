import { motion as Motion } from "framer-motion";

const AnimatedBorderCard = ({
  children,
  className = "",
  padding = "p-6",
  rounded = "rounded-[20px]",
  animatedBorder = true,
}) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -3, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.8 }}
      className={`relative will-change-transform ${rounded} ${className}`}
    >
      {animatedBorder && (
        <div className={`animated-border absolute inset-0 ${rounded}`} />
      )}

      <div
        className={`glass-surface glass-card relative z-10 ${animatedBorder ? "m-[2px]" : ""} ${rounded} ${padding}`}
      >
        {children}
      </div>
    </Motion.div>
  );
};

export default AnimatedBorderCard;
