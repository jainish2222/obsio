import React, { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Orb = React.lazy(() => import("./Orb"));

const OriginalHero = ({ currentTech, colors, techCategories }) => {
  return (
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-4 mt-10 md:mt-0 px-6 mx-auto">
      <div className="order-1 md:order-2 md:w-1/2 w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] relative flex items-center justify-center">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-12 w-12 border border-purple-400 border-t-transparent"></div>
              <p className="text-purple-300 text-sm mt-4">
                Loading animation...
              </p>
            </div>
          }
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </Suspense>

        <div className="absolute flex items-center justify-center text-2xl md:text-4xl font-bold select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTech}
              initial={{ opacity: 0, y: 20, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -90 }}
              transition={{ duration: 0.5 }}
              style={{ color: colors[currentTech] }}
            >
              {techCategories[currentTech]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Text Content */}
      <div className="order-2 md:order-1 md:w-1/2 flex flex-col items-start justify-center text-left space-y-4 gap-3 mt-10 md:mt-0 mx-3">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          We Build <span className="text-purple-400">Digital Magic</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
          We build{" "}
          <span className="text-white font-semibold">
            high-quality, low-maintenance software
          </span>{" "}
          for modern businesses, including{" "}
          <span className="text-white font-semibold">web and mobile apps</span>,{" "}
          <span className="text-white font-semibold">UI/UX designs</span>, and{" "}
          <span className="text-white font-semibold">innovative solutions</span>{" "}
          to help your brand grow.
        </p>

        <a
          href="#contact"
          className="relative inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-300 text-black font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">Get in Touch</span>
        </a>
      </div>
    </div>
  );
};

export default OriginalHero;
