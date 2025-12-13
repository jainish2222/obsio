import React, { useState, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";

// Memoized file display component
const FileDisplay = memo(({ file }) => (
  <span className="text-gray-300 text-sm truncate">
    {file ? file.name : "No file selected"}
  </span>
));

// Memoized select options
const positionOptions = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "UI/UX Designer",
  "Project Manager",
];

const ApplyForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = useCallback((e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      // Frontend validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.position.trim() ||
        !formData.coverLetter.trim() ||
        !formData.resume
      ) {
        setError("Please fill out all fields and upload your resume.");
        return;
      }

      setIsSubmitting(true);
      setError("");
      setSuccessMessage("");

      try {
        const payload = new FormData();
        payload.append("name", formData.name);
        payload.append("email", formData.email);
        payload.append("phone", formData.phone);
        payload.append("position", formData.position);
        payload.append("coverLetter", formData.coverLetter);
        payload.append("resume", formData.resume);

        const res = await fetch(
          "https://obsio-backend-resume.onrender.com/api/apply",
          {
            method: "POST",
            body: payload,
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Submission failed");
        }

        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          coverLetter: "",
          resume: null,
        });

        setSuccessMessage(
          "Your resume has been submitted! We will get in touch with you soon."
        );
      } catch (error) {
        console.error(error);
        setError("Error submitting the form. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting]
  );

  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-center px-6 py-30 font-jura">
      <div className="relative bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-xl w-full max-w-2xl">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 text-white bg-white/10 border border-white/20 px-4 py-1.5 rounded-lg text-sm hover:bg-white/20 transition"
        >
          ← Back
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">
          Apply for a Position
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          {/* Email */}
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          {/* Phone */}
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          {/* Position */}
          <div>
            <label className="block mb-1 font-medium">
              Position Applying For
            </label>
            <select
              name="position"
              required
              value={formData.position}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-gray-500 outline-none"
            >
              <option value="">Select position</option>
              {positionOptions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block mb-1 font-medium">
              Upload Resume (PDF/DOC)
            </label>
            <div className="flex items-center gap-3 w-full bg-black/30 border border-gray-500 rounded-lg p-2">
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
              <FileDisplay file={formData.resume} />
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
          {successMessage && (
            <p className="text-green-500 font-medium text-center mb-2">
              {successMessage}
            </p>
          )}
          {error && (
            <p className="text-red-500 font-medium text-center mb-2">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 font-bold rounded-lg transition flex items-center justify-center gap-2
    ${
      isSubmitting
        ? "bg-gray-400 text-black cursor-not-allowed"
        : "bg-white text-black hover:bg-gray-200"
    }`}
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Reusable input field
const InputField = memo(
  ({ label, name, type, value, onChange, placeholder }) => (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg bg-black/30 border border-gray-500 outline-none"
        placeholder={placeholder}
      />
    </div>
  )
);

export default ApplyForm;
