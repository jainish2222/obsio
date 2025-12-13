import React, { memo, useMemo, useCallback, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    techStack: "",
    mobile: "",
    description: "",
  });

  const [phoneMeta, setPhoneMeta] = useState({
    countryName: null,
    countryCode: null,
    dialCode: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

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
      {
        label: "Backend",
        options: ["Node.js", "Express.js", "Django", "Java Spring Boot", "Laravel (PHP)"],
      },
      { label: "App Development", options: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)"] },
      { label: "UI/UX", options: ["Figma", "Adobe XD"] },
      { label: "AI / ML", options: ["OpenAI Integration", "Machine Learning (Python)", "TensorFlow"] },
      { label: "E-Commerce", options: ["Shopify", "WooCommerce", "Custom E-Commerce"] },
      { label: "DevOps", options: ["Docker", "Kubernetes", "AWS Deployment", "CI / CD Pipelines"] },
    ],
    []
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handlePhoneChange = useCallback((phone, country) => {
    setFormData((prev) => ({ ...prev, mobile: phone }));
    setPhoneMeta({
      countryName: country?.name || null,
      countryCode: country?.countryCode || null,
      dialCode: country?.dialCode || null,
    });
  }, []);

  // Validates if phone number is more than just the country code
  const isValidPhoneNumber = (phone, dialCode) => {
    if (!phone) return false;
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length > (dialCode ? dialCode.replace(/\D/g, "").length : 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.name.trim()) {
      setMessage({ type: "error", text: "Name is required." });
      return;
    }

    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "Email is required." });
      return;
    }

    if (!isValidPhoneNumber(formData.mobile, phoneMeta.dialCode)) {
      setMessage({ type: "error", text: "Please enter a valid mobile number (not just country code)." });
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      mobile: formData.mobile,
      budget: formData.budget || null,
      tech_stack: formData.techStack || null,
      country_name: phoneMeta.countryName,
      country_code: phoneMeta.countryCode,
      dial_code: phoneMeta.dialCode,
      description: formData.description?.trim() || null,
      created_at: new Date().toISOString(),
    };

    setLoading(true);
    try {
      const res = await fetch("https://onsio-contact-form-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      setMessage({ type: "success", text: "Contact submitted successfully!" });

      setFormData({
        name: "",
        email: "",
        budget: "",
        techStack: "",
        mobile: "",
        description: "",
      });
    } catch {
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
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[430px] h-[430px] lg:w-[520px] lg:h-[520px]"
        >
          <Lottie
            animationData={showSpaceAnimation ? Meta_Universe : AstroFloating}
            loop
            autoplay
            className="w-full h-full"
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl space-y-6 text-white"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <TextInput label="Name" name="name" value={formData.name} onChange={handleChange} required />
            <TextInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <SelectInput label="Budget (USD)" name="budget" value={formData.budget} onChange={handleChange}>
            {budgetOptions.map((b) => (
              <option key={b.value} value={b.value} className="bg-black">
                {b.label}
              </option>
            ))}
          </SelectInput>

          <SelectInput label="Tech Stack" name="techStack" value={formData.techStack} onChange={handleChange}>
            <option value="">Select Tech Stack</option>
            {techOptions.map((group) => (
              <optgroup key={group.label} label={`── ${group.label} ──`}>
                {group.options.map((opt) => (
                  <option key={opt} value={opt.toLowerCase()} className="bg-black">
                    {opt}
                  </option>
                ))}
              </optgroup>
            ))}
          </SelectInput>

          <div>
            <label className="text-sm font-medium">Mobile</label>
            <PhoneInput
              country="us"
              value={formData.mobile}
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
            />
          </div>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-transparent border border-white/30"
            placeholder="Tell us about your project (optional)"
          />

          {message && (
            <p className={message.type === "success" ? "text-green-400" : "text-red-400"}>
              {message.text}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-white text-black font-bold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default memo(ContactPage);
