"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedProgressBar = ({ progress, skill }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${progress}%`,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    } else {
      controls.start({
        width: "0",
      });
    }
  }, [isInView, controls, progress]);
  return (
    <div className="w-full max-w-md mx-auto p-3 ">
      <label className="text-lg font-semibold mb-2">{skill}</label>
      <div className="relative h-3 bg-gray-300 rounded-md overflow-hidden">
        <motion.div
          ref={ref}
          className="h-full bg-dark"
          initial={{ width: "0%" }}
          animate={controls}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
