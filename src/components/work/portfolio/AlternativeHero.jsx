import React, { memo } from "react";
import { Link } from "react-router-dom";

// Static text outside component (prevents reallocation on each render)
const TITLE = "Transform Your Ideas";
const HIGHLIGHT = "Into Reality";
const DESCRIPTION =
  "We craft stunning digital experiences with modern technologies. From web and mobile apps to AI and IoT solutions, your business is in expert hands.";

const AlternativeHero = () => {
  return (
    <div
      className="
        relative z-10 flex flex-col items-center justify-center 
        text-center mt-20 px-6 py-20 
        bg-gradient-to-b from-purple-800 via-purple-900 to-black 
        rounded-3xl shadow-2xl max-w-5xl mx-auto
      "
    >
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
        {TITLE} <span className="text-pink-500">{HIGHLIGHT}</span>
      </h1>

      <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl">
        {DESCRIPTION}
      </p>

      <Link
        to="/company/about-us"
        className="
          inline-block px-8 py-4 bg-white text-black 
          font-semibold rounded-full shadow-lg 
          transition-all duration-300 transform 
          motion-safe:hover:-translate-y-1 motion-safe:hover:scale-105 
          motion-safe:hover:shadow-2xl
        "
      >
        About Us
      </Link>
    </div>
  );
};

export default memo(AlternativeHero);
