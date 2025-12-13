import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/* ---------------------------
   Constants for Typewrite
--------------------------- */
const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

/* ---------------------------
   Main Component
--------------------------- */
const Example = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    phone: "",
    brief: "",
  });
  const [phoneMeta, setPhoneMeta] = useState({ dialCode: "", countryName: "" });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const firstInputRef = useRef(null);

  /* ---------------------------
     Focus first input & Escape to close
  --------------------------- */
  useEffect(() => {
    if (!showPopup) return;

    setTimeout(() => firstInputRef.current?.focus(), 0);
    const onKey = (e) => e.key === "Escape" && setShowPopup(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showPopup]);

  /* ---------------------------
     Handlers
  --------------------------- */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handlePhoneChange = useCallback((phone, country) => {
    setFormData((prev) => ({ ...prev, phone }));
    setPhoneMeta({
      dialCode: country?.dialCode || "",
      countryName: country?.name || "",
    });
  }, []);

  const isValidPhone = (phone, dialCode) => {
    if (!phone) return false;
    const digits = phone.replace(/\D/g, "");
    return digits.length > (dialCode ? dialCode.replace(/\D/g, "").length : 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.brief.trim()) {
      setMessage({ type: "error", text: "Please fill all required fields." });
      return;
    }

    if (!isValidPhone(formData.phone, phoneMeta.dialCode)) {
      setMessage({ type: "error", text: "Please enter a valid phone number." });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.phone.trim(),
        tech_stack: formData.service || null,
        budget: formData.budget || null,
        description: formData.brief || null,
        country_code: phoneMeta.dialCode || null,
        country_name: phoneMeta.countryName || null,
        dial_code: phoneMeta.dialCode || null,
        created_at: new Date().toISOString(),
      };

      const response = await fetch("https://onsio-contact-form-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Failed to submit");

      setMessage({ type: "success", text: "Form submitted successfully!" });
      setFormData({ name: "", email: "", service: "", budget: "", phone: "", brief: "" });
      setPhoneMeta({ dialCode: "", countryName: "" });
      setTimeout(() => setShowPopup(false), 1500);
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: err.message || "Server error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex relative z-30 items-center justify-center px-8 py-24 text-white">
      <BlockInTextCard onOpen={() => setShowPopup(true)} />

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 text-white p-4"
            role="dialog"
            aria-modal="true"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-md bg-black p-4 md:p-6 rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mb-3 text-xl md:text-2xl font-bold">Let's collaborate!</h2>
              <p className="mb-4 text-sm md:text-base">Book a free consultation and take your project forward.</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    ref={firstInputRef}
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="flex-1 px-3 py-2 bg-black border border-[#888] focus:border-white rounded focus:outline-none text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex-1 px-3 py-2 bg-black border border-[#888] focus:border-white rounded focus:outline-none text-sm"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="flex-1 px-3 py-2 bg-black border border-[#888] focus:border-white rounded focus:outline-none text-sm"
                  >
                    <option value="">Select a service *</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="DevOps">DevOps</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Hire Dedicated Developer">Hire Dedicated Developer</option>
                  </select>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="flex-1 px-3 py-2 bg-black border border-[#888] focus:border-white rounded focus:outline-none text-sm"
                  >
                    <option value="">Select Budget</option>
                    <option value="$500-$1000">$500-$1000</option>
                    <option value="$1000-$5000">$1000-$5000</option>
                    <option value="$5000-$10000">$5000-$10000</option>
                    <option value="$10000+">$10000+</option>
                    <option value="Custom budget">Custom budget</option>
                  </select>
                </div>

                <PhoneInput
                  country="us"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{ required: true }}
                  inputStyle={{
                    width: "100%",
                    height: "3rem",
                    borderRadius: "0.5rem",
                    paddingLeft: "3.5rem",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                  containerStyle={{ width: "100%" }}
                />

                <textarea
                  name="brief"
                  placeholder="Describe Product Idea Brief *"
                  value={formData.brief}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-black border border-[#888] focus:border-white rounded focus:outline-none text-sm"
                />

                {message && (
                  <p className={message.type === "success" ? "text-green-400" : "text-red-400"}>
                    {message.text}
                  </p>
                )}

                <p className="text-xs text-gray-400">We sign NDA for all our projects.</p>

                <div className="flex justify-between items-center mt-3">
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600 text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-3 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 text-sm"
                  >
                    {loading ? "Submitting..." : "Send"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------------------
   BlockInTextCard + Typewrite
--------------------------- */
const BlockInTextCard = ({ onOpen }) => (
  <div className="w-full max-w-xl space-y-6 p-6">
    <div>
      <p className="mb-1.5 text-sm font-light uppercase text-gray-400">/ Contact Us</p>
      <hr className="border-neutral-700" />
    </div>

    <p className="max-w-lg text-xl leading-relaxed text-white">
      <strong>Planning your project?</strong> We’re here to guide you! Ask us anything about building your website or app.
    </p>

    <Typewrite
      examples={[
        "Can you help me design a mobile app for my startup?",
        "What tech stack should I choose for a scalable web app?",
        "Can I integrate AI features into my application?",
        "How long does it take to build a minimum viable product?",
      ]}
    />

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

/* ---------------------------
   Typewrite
--------------------------- */
const Typewrite = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setExampleIndex((i) => (i + 1) % examples.length), SWAP_DELAY_IN_MS);
    return () => clearInterval(interval);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-gray-300">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            key={`${exampleIndex}-${i}`}
            className="relative inline-block"
            style={{ whiteSpace: "pre" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: FADE_DELAY, duration: MAIN_FADE_DURATION, ease: "easeInOut" }}
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * LETTER_DELAY, duration: 0 }}>
              {l}
            </motion.span>
            <motion.span
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: i * LETTER_DELAY, times: [0, 0.1, 1], duration: BOX_FADE_DURATION, ease: "easeInOut" }}
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

export default Example;
