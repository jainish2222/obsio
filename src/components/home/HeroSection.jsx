import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import {SmoothScrollHero} from "./DetailSection";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})
  `;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center pt-24">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Now Live!
        </span>

        <h1 className="max-w-3xl p-1 my-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl sm:text-3xl md:text-5xl text-transparent font-medium my-3">
          Enterprise Software Development, Cloud Transformation & Digital Engineering
        </h1>

        <p className="my-6 max-w-xl text-center text-base md:text-lg">
          We build scalable digital products — from web and mobile apps to cloud systems and AI automation.
        </p>

        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group flex items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50"
        >
          Contact Us →
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

       <div className="grid place-content-center px-4 py-16 mt-20 text-slate-300">
      <h1 className="max-w-2xl text-center text-4xl leading-snug">
        Shaping a World Powered by{" "}
        <span className="relative">
         Software.
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        
      </h1>
    </div>
    {/* <Industries /> */}
    <SmoothScrollHero/>
    </motion.section>
  );
};

export default HeroSection;
