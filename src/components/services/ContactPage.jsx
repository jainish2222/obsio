import React from "react";
import Lottie from "lottie-react";
import AstroFloating from "../../data/Astro_Floating.json";
import Meta_Universe from "../../data/Meta_Universe.json";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();
  const showSpaceAnimation = location.pathname.includes("/company/");
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-5 py-14 font-jura">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-15 text-center"
      >
        Contact Us
      </motion.h2>

      {/* Icon + Form (side by side on large screens) */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
        {/* Big Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[430px] h-[430px] lg:w-[520px] lg:h-[520px] flex items-center justify-center"
        >
          <Lottie
            animationData={showSpaceAnimation ? Meta_Universe : AstroFloating }
            loop
            autoplay
            className="w-full h-full"
          />
        </motion.div>

        {/* Contact Form (no background now) */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl space-y-6 text-white"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-3 rounded-lg bg-transparent border border-white/30 focus:border-white outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-lg bg-transparent border border-white/30 focus:border-white outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div>
            <label className="text-sm font-medium">Budget (USD)</label>
            <select
              className="w-full mt-2 p-3 rounded-lg bg-transparent border border-white/30 
               focus:border-white outline-none text-white"
            >
              <option value="" className="bg-black text-white">
                Select Budget
              </option>
              <option value="500-1000" className="bg-black text-white">
                $500 – $1,000
              </option>
              <option value="1000-3000" className="bg-black text-white">
                $1,000 – $3,000
              </option>
              <option value="3000-8000" className="bg-black text-white">
                $3,000 – $8,000
              </option>
              <option value="8000-15000" className="bg-black text-white">
                $8,000 – $15,000
              </option>
              <option value="custom" className="bg-black text-white">
                Custom Budget
              </option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Tech Stack</label>
            <select
              className="w-full mt-2 p-3 rounded-lg bg-black text-white border border-white/30 
               focus:border-white outline-none"
              style={{ colorScheme: "dark" }} // ensures dark dropdown on all browsers
            >
              <option value="">Select Tech Stack</option>

              {/* Frontend */}
              <option disabled className="bg-black text-white font-semibold">
                ── Frontend ──
              </option>
              <option value="react" className="bg-black text-white">
                React.js
              </option>
              <option value="next" className="bg-black text-white">
                Next.js
              </option>
              <option value="vue" className="bg-black text-white">
                Vue.js
              </option>
              <option value="angular" className="bg-black text-white">
                Angular
              </option>

              {/* Backend */}
              <option disabled className="bg-black text-white font-semibold">
                ── Backend ──
              </option>
              <option value="node" className="bg-black text-white">
                Node.js
              </option>
              <option value="express" className="bg-black text-white">
                Express.js
              </option>
              <option value="django" className="bg-black text-white">
                Django
              </option>
              <option value="spring" className="bg-black text-white">
                Java Spring Boot
              </option>
              <option value="laravel" className="bg-black text-white">
                Laravel (PHP)
              </option>

              {/* App Development */}
              <option disabled className="bg-black text-white font-semibold">
                ── App Development ──
              </option>
              <option value="flutter" className="bg-black text-white">
                Flutter
              </option>
              <option value="react-native" className="bg-black text-white">
                React Native
              </option>
              <option value="ios-swift" className="bg-black text-white">
                iOS (Swift)
              </option>
              <option value="android-kotlin" className="bg-black text-white">
                Android (Kotlin)
              </option>

              {/* UI/UX */}
              <option disabled className="bg-black text-white font-semibold">
                ── UI / UX ──
              </option>
              <option value="figma" className="bg-black text-white">
                Figma
              </option>
              <option value="adobe-xd" className="bg-black text-white">
                Adobe XD
              </option>

              {/* AI & ML */}
              <option disabled className="bg-black text-white font-semibold">
                ── AI / ML ──
              </option>
              <option value="openai" className="bg-black text-white">
                OpenAI Integration
              </option>
              <option value="ml-python" className="bg-black text-white">
                Machine Learning (Python)
              </option>
              <option value="tensor" className="bg-black text-white">
                TensorFlow
              </option>

              {/* E-Commerce */}
              <option disabled className="bg-black text-white font-semibold">
                ── E-Commerce ──
              </option>
              <option value="shopify" className="bg-black text-white">
                Shopify
              </option>
              <option value="woocommerce" className="bg-black text-white">
                WooCommerce
              </option>
              <option value="custom-ecom" className="bg-black text-white">
                Custom E-Commerce
              </option>

              {/* DevOps */}
              <option disabled className="bg-black text-white font-semibold">
                ── DevOps ──
              </option>
              <option value="docker" className="bg-black text-white">
                Docker
              </option>
              <option value="kubernetes" className="bg-black text-white">
                Kubernetes
              </option>
              <option value="aws" className="bg-black text-white">
                AWS Deployment
              </option>
              <option value="ci-cd" className="bg-black text-white">
                CI / CD Pipelines
              </option>

              <option
                value="custom"
                className="bg-black text-white font-semibold"
              >
                Custom Stack
              </option>
            </select>
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm font-medium">Mobile</label>
            <input
              type="tel"
              inputMode="tel"
              pattern="[\+0-9 ]*"
              onInput={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9+ ]/g, "") // allow +, digits, spaces only
                  .replace(/(?!^)\+/g, ""); // allow only 1 "+" at the start
              }}
              className="w-full mt-2 p-3 rounded-lg bg-transparent border border-white/30 
             focus:border-white outline-none text-white"
              placeholder="+1 415 555 2671"
              maxLength={17}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows="4"
              className="w-full mt-2 p-3 rounded-lg bg-transparent border border-white/30 focus:border-white outline-none resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-300 transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactPage;
