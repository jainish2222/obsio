import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Single-file component: displays your original BlockInTextCard (with typewriter)
 * and opens a popup form when the "Contact Support" button is clicked.
 *
 * Notes:
 * - Only the button opens the popup (event.stopPropagation used).
 * - Modal traps focus to first input on open and closes on Escape.
 * - Framer-motion used for the typewriter animation and modal transitions.
 */

 const Example = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    setShowPopup(false);
  };

  return (
    <div className="flex relative z-30 items-center justify-center px-8 py-24 text-white">
      <BlockInTextCard onOpen={() => setShowPopup(true)} />

      <AnimatePresence>
        {showPopup && (
          <PopupForm
            onClose={() => setShowPopup(false)}
            onSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------------------
   BlockInTextCard + Typewrite
   --------------------------- */

const BlockInTextCard = ({ onOpen }) => {
  return (
    <div className="w-full max-w-xl space-y-6 p-6 ">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase text-gray-400">
          / Contact Us
        </p>
        <hr className="border-neutral-700" />
      </div>

      <p className="max-w-lg text-xl leading-relaxed text-white">
        <>
          <strong>Planning your project?</strong> We’re here to guide you! Ask us
          anything about building your website or app.
        </>
      </p>

      <div>
        <Typewrite
          examples={[
            "Can you help me design a mobile app for my startup?",
            "What tech stack should I choose for a scalable web app?",
            "Can I integrate AI features into my application?",
            "How long does it take to build a minimum viable product?",
          ]}
        />
        <hr className="border-neutral-300" />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        className="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors bg-gray-500 hover:bg-slate-100 hover:text-black"
        aria-haspopup="dialog"
      >
        Contact Support
      </button>
    </div>
  );
};

/* ---------------------------
   Typewrite (preserves original behavior)
   --------------------------- */

const LETTER_DELAY = 0.025; // seconds
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-gray-300">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative inline-block"
            style={{ whiteSpace: "pre" }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * LETTER_DELAY, duration: 0 }}
            >
              {l}
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

/* ---------------------------
   PopupForm (modal)
   --------------------------- */

const PopupForm = ({ onClose, onSubmit }) => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    // focus first input when modal opens
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 0);

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 text-white p-4"
  role="dialog"
  aria-modal="true"
  onClick={onClose} // Close popup if clicked outside
>
  <motion.div
    initial={{ scale: 0.85, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.85, opacity: 0 }}
    transition={{ duration: 0.18 }}
    className="w-full max-w-md bg-black p-4 md:p-6 rounded-lg shadow-lg"
    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
  >
    <h2 className="mb-3 text-xl md:text-2xl font-bold">Let's collaborate!</h2>
    <p className="mb-4 text-sm md:text-base">
      Book a free consultation and take your project forward.
    </p>

    <form onSubmit={onSubmit} className="space-y-3">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          ref={firstInputRef}
          type="text"
          name="name"
          placeholder="Name *"
          required
          className="flex-1 px-3 py-2 bg-black border border-white rounded focus:outline-none text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Work Email *"
          required
          className="flex-1 px-3 py-2 bg-black border border-white rounded focus:outline-none text-sm"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <select
          name="service"
          required
          className="flex-1 px-3 py-2 bg-black border border-white rounded focus:outline-none text-sm"
        >
          <option value="">Select a service *</option>
          <option value="Web Development">Web Development</option>
          <option value="App Development">App Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Devops">Devops</option>
          <option value="Ai Solutions">AI Solutions</option>
          <option value="Hire Dedicated Developer">Hire Dedicated Developer</option>
        </select>
        <select
          name="budget"
          required
          className="flex-1 px-3 py-2 bg-black border border-white rounded focus:outline-none text-sm"
        >
          <option value="$1000-$5000"> $1000</option>
          <option value="$1000-$5000">$1000-$5000</option>
          <option value="$5000-$10,000">$5000-$10,000</option>
          <option value="$10,000+">$10,000+</option>
        </select>
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        className="w-full px-3 py-2 bg-black border border-white rounded focus:outline-none text-sm"
      />

      <textarea
        name="brief"
        placeholder="Describe Product Idea Brief *"
        required
        rows={3}
        className="w-full px-3 py-2 bg-black border border-white rounded focus:outline-none text-sm"
      ></textarea>

      <p className="text-xs text-gray-400">We sign NDA for all our projects.</p>

      <div className="flex justify-between items-center mt-3">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 text-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 text-sm"
        >
          Send
        </button>
      </div>
    </form>
  </motion.div>
</motion.div>

  );
};

export default Example;