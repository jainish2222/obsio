import React, { memo, useMemo, useCallback, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import AstroFloating from "../../data/Astro_Floating.json";
import Meta_Universe from "../../data/Meta_Universe.json";

// ---------------------------
// REUSABLE INPUT COMPONENTS
// ---------------------------
const TextInput = memo(({ label, ...props }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      className="w-full mt-2 p-3 rounded-lg bg-transparent border border-white/30 
      focus:border-white outline-none text-white"
    />
  </div>
));

const SelectInput = memo(({ label, name, value, onChange, children }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full mt-2 p-3 rounded-lg bg-black text-white border border-white/30 
      focus:border-white outline-none"
      style={{ colorScheme: "dark" }}
    >
      {children}
    </select>
  </div>
));

// ---------------------------
// MAIN COMPONENT
// ---------------------------
function ContactPage() {
  const location = useLocation();
  const showSpaceAnimation = location.pathname.includes("/company/");

  // ---------------------------
  // STATE
  // ---------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    techStack: "",
    mobile: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // ---------------------------
  // MEMOIZED OPTIONS
  // ---------------------------
  const budgetOptions = useMemo(
    () => [
      { value: "", label: "Select Budget" },
      { value: "500-1000", label: "$500 – $1,000" },
      { value: "1000-3000", label: "$1,000 – $3,000" },
      { value: "3000-8000", label: "$3,000 – $8,000" },
      { value: "8000-15000", label: "$8,000 – $15,000" },
      { value: "custom", label: "Custom Budget" },
    ],
    []
  );

  const techOptions = useMemo(
    () => [
      { label: "Frontend", options: ["React.js", "Next.js", "Vue.js", "Angular"] },
      { label: "Backend", options: ["Node.js", "Express.js", "Django", "Java Spring Boot", "Laravel (PHP)"] },
      { label: "App Development", options: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"] },
      { label: "UI/UX", options: ["Figma", "Adobe XD"] },
      { label: "AI / ML", options: ["OpenAI Integration", "Machine Learning (Python)", "TensorFlow"] },
      { label: "E-Commerce", options: ["Shopify", "WooCommerce", "Custom E-Commerce"] },
      { label: "DevOps", options: ["Docker", "Kubernetes", "AWS Deployment", "CI / CD Pipelines"] },
    ],
    []
  );

  // ---------------------------
  // HANDLERS
  // ---------------------------
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handlePhoneInput = useCallback((e) => {
    const sanitized = e.target.value.replace(/[^0-9+ ]/g, "").replace(/(?!^)\+/g, "");
    setFormData((prev) => ({ ...prev, mobile: sanitized }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.name || !formData.email) {
      setMessage({ type: "error", text: "Name and Email are required." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://onsio-contact-form-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Contact submitted successfully!" });
        setFormData({ name: "", email: "", budget: "", techStack: "", mobile: "", description: "" });
      } else {
        setMessage({ type: "error", text: data.error || "Something went wrong." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Server error. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start px-5 py-14 font-jura">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-14 text-center"
      >
        Contact Us
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
        {/* Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[430px] h-[430px] lg:w-[520px] lg:h-[520px] flex items-center justify-center"
        >
          <Lottie
            animationData={showSpaceAnimation ? Meta_Universe : AstroFloating}
            loop
            autoplay
            className="w-full h-full"
          />
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl space-y-6 text-white"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <TextInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <TextInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {/* Budget */}
          <SelectInput
            label="Budget (USD)"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            {budgetOptions.map((b, idx) => (
              <option key={idx} value={b.value} className="bg-black text-white">
                {b.label}
              </option>
            ))}
          </SelectInput>

          {/* Tech Stack */}
          <SelectInput
            label="Tech Stack"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
          >
            <option value="">Select Tech Stack</option>
            {techOptions.map((group, idx) => (
              <optgroup key={idx} label={`── ${group.label} ──`}>
                {group.options.map((opt, i) => (
                  <option key={i} value={opt.toLowerCase()} className="bg-black">
                    {opt}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="custom" className="bg-black font-semibold">
              Custom Stack
            </option>
          </SelectInput>

          {/* Mobile */}
          <TextInput
            label="Mobile"
            type="tel"
            name="mobile"
            placeholder="+1 415 555 2671"
            maxLength={17}
            value={formData.mobile}
            onChange={handlePhoneInput}
          />

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-transparent border border-white/30 
                focus:border-white outline-none resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Message */}
          {message && (
            <p className={`text-sm font-bold ${message.type === "success" ? "text-green-400" : "text-red-400"}`}>
              {message.text}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-300 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default memo(ContactPage);
