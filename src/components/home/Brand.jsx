"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";

const logos = [
  "/assets/about-image.jpg",
  "/assets/about-image.jpg",
  "/assets/about-image.jpg",
  "/assets/about-image.jpg",
  "/assets/about-image.jpg",
  "/assets/about-image.jpg",
];

const Brand = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  // Start animation immediately (for mobile + desktop)
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 20, ease: "linear" },
    });
  }, [controls]);

  const pauseAnimation = () => {
    setIsPaused(true);
    controls.stop();
  };

  const resumeAnimation = () => {
    setIsPaused(false);
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 20, ease: "linear" },
    });
  };

  const toggleMobilePause = () => {
    isPaused ? resumeAnimation() : pauseAnimation();
  };

  return (
    <section id="brands" className="bg-black pb-12 pt-8 overflow-hidden">
      <h2 className="text-3xl font-bold mb-10 text-white text-center">
        Our Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Scrolling track */}
        <motion.div
          className="flex gap-16 w-max"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={index}
              onMouseEnter={pauseAnimation}   // desktop hover
              onMouseLeave={resumeAnimation}  // desktop hover out
              onClick={toggleMobilePause}     // mobile tap to pause/resume
              whileHover={{
                scale: 1.6,
                rotateY: 25,
                z: 100,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
              style={{ perspective: 1000 }}
            >
              <motion.img
                src={logo}
                alt={`Brand logo ${index}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
