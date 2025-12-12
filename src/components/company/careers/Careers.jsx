import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Space_shuttle from "../../../data/Space_shuttle.json";

// Careers Data with Experience & Openings
const careersData = {
  title: "Join Our Team",
  subtitle:
    "We’re building innovative IT solutions. Explore opportunities to grow with us!",
  jobs: [
    {
      id: "job1",
      title: "Frontend Developer",
      location: "Surat, India",
      type: "Full-Time",
      experience: "2-4 years",
      openings: 2,
      description:
        "We are looking for a skilled React developer to create responsive and high-performance web applications.",
    },
    {
      id: "job2",
      title: "Backend Developer",
      location: "Remote",
      type: "Full-Time",
      experience: "3-5 years",
      openings: 1,
      description:
        "Join our backend team to design and implement scalable APIs using Node.js and Express.",
    },
    {
      id: "job3",
      title: "UI/UX Designer",
      location: "Surat, India",
      type: "Part-Time",
      experience: "1-3 years",
      openings: 1,
      description:
        "Design intuitive user interfaces and engaging experiences for our digital products.",
    },
    {
      id: "job4",
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-Time",
      experience: "3-6 years",
      openings: 1,
      description:
        "Implement CI/CD pipelines, manage cloud infrastructure, and ensure high system reliability.",
    },
  ],
};

// Animation Variants
const heroText = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const heroLottie = {
  hidden: { opacity: 0, x: 50, scale: 0.8 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const jobList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const jobCard = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  hover: { scale: 1.03, rotate: 1, boxShadow: "0px 15px 30px rgba(0,0,0,0.3)" },
};

const cta = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 10 } },
};

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-black text-white font-jura overflow-x-hidden px-10">
      {/* HERO SECTION */}
      <section className="w-[95%] lg:w-[85%] mx-auto min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:text-left px-6 py-12 gap-12 lg:gap-20">
        {/* TEXT */}
        <motion.div
          variants={heroText}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center lg:items-start"
        >
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold mb-4 lg:mb-6 leading-[1.1]">
            {careersData.title}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-xl">{careersData.subtitle}</p>
        </motion.div>

        {/* LOTTIE */}
        <motion.div
          variants={heroLottie}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-[300px] sm:w-[300px] md:w-[380px] lg:w-[550px]">
            <Lottie animationData={Space_shuttle} loop autoplay />
          </div>
        </motion.div>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-28 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={heroText}
            initial="hidden"
            whileInView="visible"
            className="text-4xl font-bold mb-12 text-center"
          >
            Open Positions
          </motion.h2>

          <motion.div
            variants={jobList}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-10"
          >
            {careersData.jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={jobCard}
                whileHover="hover"
                className="p-8 bg-black border border-gray-700 rounded-xl "
              >
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-400 text-lg mb-1">{job.location}</p>
                <p className="text-gray-500 font-medium mb-1">{job.type}</p>
                <p className="text-gray-500 font-medium mb-4">Experience: {job.experience}</p>
                <p className="text-gray-500 font-medium mb-4">Openings: {job.openings}</p>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <button
                  onClick={() => navigate("/company/careers/apply")}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-300 transition-all cursor-pointer"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 px-6 bg-black text-center">
        <motion.h2
          variants={cta}
          initial="hidden"
          whileInView="visible"
          className="text-5xl font-bold mb-6"
        >
          Can’t find your role?
        </motion.h2>
        <motion.p
          variants={cta}
          initial="hidden"
          whileInView="visible"
          className="text-gray-300 text-xl mb-8"
        >
          We’re always looking for talented individuals. Reach out to us and let’s connect!
        </motion.p>
        <motion.a
          href="#contact"
          variants={cta}
          initial="hidden"
          whileInView="visible"
          className="px-12 py-4 bg-white text-black font-semibold rounded-xl text-lg hover:bg-gray-300 transition-all"
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
};

export default Careers;
