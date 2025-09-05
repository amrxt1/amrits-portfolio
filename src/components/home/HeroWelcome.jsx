"use client";
import { motion } from "motion/react";
import Link from "next/link";

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
      className="py-18"
    >
      <div className="px-4 text-center text-3xl font-bold text-blue-400">
        amritveer's portfolio
      </div>
      <p className="mt-2 text-center">
        For a simpler layout, you can visit{" "}
        <Link
          href={"https://simple.amritv.space"}
          className="hover:text-green-500"
        >
          [<span className="underline">{" here "}</span>]
        </Link>
      </p>
    </motion.div>
  );
};

export default HeroWelcome;
