"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

export default function SimpleParallaxTest() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={ref} className="h-[200vh] bg-gradient-to-b from-blue-50 to-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Scroll to See Animation
          </h1>
          <p className="text-xl text-gray-600">
            This text should move and fade as you scroll
          </p>
        </motion.div>
        
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full"
        />
        
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-red-500 rounded-full"
        />
      </div>
      
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Keep scrolling to see the full effect
        </h2>
      </div>
    </div>
  );
}