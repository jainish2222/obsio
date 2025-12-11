import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Monitor,
  Server,
  Layers,
  PenTool,
  Cpu,
  Smartphone,
  Cloud,
  Rocket,
  Bug,
} from "lucide-react";
import Lottie from "lottie-react";
import TeamAnimation from "../../../data/Astronaut.json";
import TeamSection from "../about/TeamSection";

const founders = [
  { name: "Jainish Koladiya", role: "CTO", img: "/img/jainish.jpg" },
  { name: "Mohil Koladiya", role: "CEO", img: "/img/mohil.jpg" },
  { name: "Raj Sojitra", role: "Sales Head", img: "/img/raj.jpg" },
  { name: "Varshid Patel", role: "Business Head", img: "/img/varshid.jpg" },
];

const teamRoles = [
  { role: "Frontend Developers", count: 5, icon: <Monitor className="w-8 h-8 text-cyan-400" /> },
  { role: "Backend Developers", count: 10, icon: <Server className="w-8 h-8 text-purple-400" /> },
  { role: "Full Stack Developers", count: 3, icon: <Layers className="w-8 h-8 text-green-400" /> },
  { role: "UI/UX Designers", count: 3, icon: <PenTool className="w-8 h-8 text-pink-400" /> },
  { role: "AI/ML Developers", count: 2, icon: <Cpu className="w-8 h-8 text-yellow-400" /> },
  { role: "Mobile App Developers", count: 5, icon: <Smartphone className="w-8 h-8 text-teal-400" /> },
  { role: "DevOps Engineers", count: 3, icon: <Cloud className="w-8 h-8 text-indigo-400" /> },
  { role: "QA Engineers", count: 3, icon: <Bug className="w-8 h-8 text-red-400" /> },
];

const Team = () => {
  return (
    <div className="bg-black text-white font-jura py-20 min-h-screen">
      {/* HERO Section */}
      <section className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 py-16 px-6">
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie animationData={TeamAnimation} loop={true} className="w-full h-64 sm:h-80 md:h-96" />
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full space-y-4 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
          >
            Meet Our Expert Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            A passionate team of 30+ tech experts delivering reliable, zero-bug solutions across domains.
            Creativity, deep technical expertise, and client satisfaction are our core strengths.
          </motion.p>
        </div>
      </section>

      {/* TEAM COMPOSITION */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10">
          Team Composition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 border border-gray-700 p-6 rounded-xl flex flex-col items-center gap-3 shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
            >
              {role.icon}
              <h3 className="text-lg font-semibold text-white">{role.role}</h3>
              <p className="text-gray-400 font-medium">{role.count} Members</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="max-w-7xl mx-auto py-12 px-2">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Our Founders
        </h3>
        <TeamSection founders={founders} />
      </section>
      <section className="max-w-6xl mx-auto py-12 px-6">
  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10">
    Our Team
  </h3>

  <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-700">
    <img
      src="https://kenmarstudio.com/wp-content/uploads/2017/04/KenMar-Studio-Appleton-Family-Value-Woytych-Fam-9257.jpg"   // <-- replace with your image path
      alt="Our Team"
      className="w-full h-auto object-cover"
    />
  </div>
</section>


      {/* EXPERTISE Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
          Our Expertise
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12">
          We have successfully delivered 45+ projects in domains like Banking, WhatsApp Automation, AI Automation Tools, and more.
          Trusted by giants like <span className="text-cyan-400 font-medium">Capital</span>,{" "}
          <span className="text-cyan-400 font-medium">Persistence</span>, and{" "}
          <span className="text-cyan-400 font-medium">Infosys</span>, we provide{" "}
          <span className="text-green-400 font-medium">reliable, zero-bug code</span> for every client.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#1f1f1f" }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl flex flex-col items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Users className="w-8 h-8 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">30+</h3>
            <p className="text-gray-400 text-sm">Expert Team Members</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#1f1f1f" }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl flex flex-col items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Rocket className="w-8 h-8 text-purple-400" />
            <h3 className="text-xl font-bold text-white">45+</h3>
            <p className="text-gray-400 text-sm">Projects Delivered</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#1f1f1f" }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl flex flex-col items-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <Layers className="w-8 h-8 text-green-400" />
            <h3 className="text-xl font-bold text-white">Zero-Bug</h3>
            <p className="text-gray-400 text-sm">Reliable Code</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
