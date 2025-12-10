import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ApplyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-center px-6 py-30 font-jura">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-2xl">
              <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 text-white bg-white/10 border border-white/20 
                     px-4 py-1.5 rounded-lg text-sm hover:bg-white/20 transition"
        >
          ← Back
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">Apply for a Position</h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-500 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-500 outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block mb-1 font-medium">Position Applying For</label>
            <select
              name="position"
              required
              value={formData.position}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-500 outline-none"
            >
              <option value="">Select position</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Full-Stack Developer">Full-Stack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>

         {/* Resume */}
<div>
  <label className="block mb-1 font-medium">Upload Resume (PDF/DOC)</label>

  <div className="flex items-center gap-3 w-full bg-black/30 border border-gray-500 rounded-lg p-2">
    {/* Custom Upload Button */}
    <label className="bg-white text-black px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-200 transition">
      Upload resume
      <input
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        required
        onChange={handleChange}
        className="hidden"
      />
    </label>

    {/* File Name */}
    <span className="text-gray-300 text-sm truncate">
      {formData.resume ? formData.resume.name : "No file selected"}
    </span>
  </div>
</div>


          {/* Cover Letter */}
          <div>
            <label className="block mb-1 font-medium">Cover Letter</label>
            <textarea
              name="coverLetter"
              rows="4"
              required
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-500 outline-none"
              placeholder="Write a short cover letter..."
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
