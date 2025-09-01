"use client";
import { motion } from "motion/react";

const HeroWelcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{
        rotate: 2,
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      transition={{
        duration: 0.8,
        type: "easeIn",
      }}
      className="py-32"
    >
      <div className="px-4 text-center text-3xl font-bold text-blue-400">
        Welcome to amrit's portfolio.
      </div>
    </motion.div>
  );
};

export default HeroWelcome;
