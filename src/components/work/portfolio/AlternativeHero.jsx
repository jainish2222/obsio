import React from "react";

const AlternativeHero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-6 py-20 bg-gradient-to-b from-purple-800 via-purple-900 to-black rounded-3xl shadow-2xl max-w-5xl mx-auto">
      <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
        Transform Your Ideas <span className="text-pink-500">Into Reality</span>
      </h2>
      <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl">
        We craft stunning digital experiences with modern technologies. From web and mobile apps to AI and IoT solutions, your business is in expert hands.
      </p>
      <a
        href="#contact"
        className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
      >
        Start Your Project
      </a>
    </div>
  );
};

export default AlternativeHero;
