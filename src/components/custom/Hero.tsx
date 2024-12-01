"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {

  Star,

  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Hero = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8 sm:gap-10 py-12 px-4 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 relative overflow-hidden font-Granville"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6416c]/10 to-blue-100/10 dark:from-[#f6416c]/20 dark:to-blue-900/20 -z-10"></div>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
        <img
          src="/victor.jpeg"
          alt="Victor Ndemo"
          className="rounded-full border-4 border-[#f6416c]/40 shadow-2xl w-24 h-24 sm:w-24 sm:h-24 object-cover transition-all duration-300 hover:shadow-xl"
        />
      </motion.div>

      <div className="space-y-6 max-w-3xl font-Neue">
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-xl font-bold text-gray-800 dark:text-white tracking-tight"
        >
          Hi there, I&apos;m <span className="text-[#f6416c]">Victor</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center space-x-2 sm:space-x-1 text-amber-500"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          ))}
          <span className="text-gray-600 dark:text-gray-300 ml-2 text-sm sm:text-base font-medium">
            4.8/5 — Trusted by Innovative Founders
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-3xl text-gray-200 dark:text-gray-100 leading-relaxed"
        >
          I design{" "}
          <span className="font-semibold text-[#f6416c]">
            high-converting landing pages
          </span>{" "}
          that help startups and creators launch faster, convert better, and
          stand out in a crowded digital landscape.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
        >
          <div className="relative group">
            <button
              onClick={() => setIsSubscribed(!isSubscribed)}
              className="bg-[#f6416c] text-white px-5 sm:px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-[#ff5a8c] transition-colors group-hover:pr-10"
            >
              <span>Get Lifetime Templates</span>
              <AnimatePresence>
                {!isSubscribed ? (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-1 group-hover:opacity-100"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute right-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
