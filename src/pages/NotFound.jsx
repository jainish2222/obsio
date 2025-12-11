import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import NotFoundAnimation from "../data/ERRRO.json";

const NotFound = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-6 bg-black text-white">
      {/* LEFT — UFO Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <div className="w-64 md:w-80">
          <Lottie animationData={NotFoundAnimation} loop={true} />
        </div>
      </div>

      {/* RIGHT — Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
        <h1 className="text-6xl font-extrabold text-lime-400">404</h1>

        <p className="text-2xl text-lime-500 font-semibold">
          Error Occurred in the Spaceship
        </p>

        <p className="text-lg text-gray-300 max-w-md">
          Looks like the page you're trying to reach drifted out of the galaxy.
          Don't worry, cadet — let's navigate you back home.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-lime-500 text-black font-semibold rounded-lg hover:bg-lime-400 transition duration-200"
        >
          Return to Home Base
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
