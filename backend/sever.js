import React, { useState } from "react";
import { motion } from "framer-motion";

export const ContactFormOnly = () => {
  const [isOpen, setIsOpen] = useState(true); // open by default

  return (
    <>
      {isOpen && <ContactPopup onClose={() => setIsOpen(false)} />}
    </>
  );
};

// ---------------- ContactPopup ----------------

const ContactPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data JSON:", formData);
    alert("Form submitted! Check console for JSON.");
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-lg w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Let's collaborate!</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email *"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            className="w-full border p-2 rounded"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service *</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          <select
            name="budget"
            className="w-full border p-2 rounded"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select a Budget Range *</option>
            <option value="<$1000">{"<$1000"}</option>
            <option value="$1000-$5000">$1000-$5000</option>
            <option value=">$5000">{">$5000"}</option>
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full border p-2 rounded"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Describe Product Idea Brief *"
            className="w-full border p-2 rounded"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 py-2 rounded text-white font-medium"
          >
            Send
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};
