import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Import JSON data
const  caseData  = {
  "title": "Case Studies",
  "subtitle": "Transforming digital products with innovative IT solutions.",
  "projects": [
    {
      "id": "project1",
      "name": "Enterprise CRM System",
      "description": "Legacy CRM with poor performance and outdated UI.",
      "problemPoints": [
        "Slow data retrieval",
        "Outdated user interface",
        "High support tickets"
      ],
      "analysis": [
        "Backend queries were inefficient.",
        "UI lacked consistency and intuitive navigation."
      ],
      "keyFindings": [
        "Multiple-step workflows caused user friction",
        "Poor mobile responsiveness",
        "Low productivity due to slow features"
      ],
      "solution": [
        { "title": "Modern UI/UX", "desc": "Redesigned dashboard, simplified workflows, consistent design." },
        { "title": "Performance Optimization", "desc": "Optimized database queries, implemented caching & lazy loading." },
        { "title": "Enhanced Productivity", "desc": "Automated repetitive tasks and added analytics dashboards." }
      ],
      "techStack": ["React", "Tailwind", "Node.js", "Express", "PostgreSQL", "Redis", "AWS"],
      "results": [
        { "value": "+65%", "label": "User Productivity" },
        { "value": "-50%", "label": "Support Tickets" },
        { "value": "2.2x", "label": "Feature Adoption" }
      ]
    },
    {
      "id": "project2",
      "name": "AI-powered Chatbot Platform",
      "description": "Chatbot with slow responses and inaccurate NLP.",
      "problemPoints": [
        "Low response accuracy",
        "Delayed replies",
        "Limited language support"
      ],
      "analysis": [
        "NLP model lacked sufficient training data.",
        "Server latency caused slow responses."
      ],
      "keyFindings": [
        "Low user satisfaction",
        "High abandonment during chat sessions",
        "Inaccurate responses for complex queries"
      ],
      "solution": [
        { "title": "NLP Optimization", "desc": "Fine-tuned models for accuracy and speed." },
        { "title": "Multi-Language Support", "desc": "Added support for 5 new languages with context retention." },
        { "title": "Infrastructure Upgrade", "desc": "Deployed scalable cloud servers for faster response." }
      ],
      "techStack": ["Python", "TensorFlow", "PyTorch", "Node.js", "React", "AWS"],
      "results": [
        { "value": "+80%", "label": "Response Accuracy" },
        { "value": "-60%", "label": "Delayed Responses" },
        { "value": "+50%", "label": "User Satisfaction" }
      ]
    },
    {
      "id": "project3",
      "name": "E-commerce Platform Upgrade",
      "description": "Outdated platform with slow load times and high cart abandonment.",
      "problemPoints": [
        "High page load time (6s avg)",
        "Low mobile conversion rate",
        "Inefficient checkout flow"
      ],
      "analysis": [
        "Monolithic backend caused slow API responses.",
        "Checkout UX was confusing for users."
      ],
      "keyFindings": [
        "Abandoned carts were >40%",
        "Users struggled with multi-step checkout",
        "Search functionality was inefficient"
      ],
      "solution": [
        { "title": "Frontend Optimization", "desc": "Redesigned UI with PWA and lazy-loading images." },
        { "title": "Backend Refactor", "desc": "Implemented microservices and optimized APIs." },
        { "title": "Checkout Redesign", "desc": "Simplified checkout to 2 steps with auto-fill features." }
      ],
      "techStack": ["React", "Next.js", "Node.js", "Express", "MongoDB", "Redis", "AWS"],
      "results": [
        { "value": "+50%", "label": "Mobile Conversions" },
        { "value": "-35%", "label": "Cart Abandonment" },
        { "value": "-40%", "label": "Page Load Time" }
      ]
    },
    {
      "id": "project4",
      "name": "Healthcare Management System",
      "description": "Legacy HMS with fragmented data and poor patient tracking.",
      "problemPoints": [
        "Data silos across departments",
        "Manual record-keeping",
        "Poor reporting features"
      ],
      "analysis": [
        "Multiple disconnected databases slowed reporting.",
        "UI was not intuitive for hospital staff."
      ],
      "keyFindings": [
        "Doctors spent excessive time on admin tasks",
        "Patient follow-ups were inconsistent",
        "Reports lacked accuracy and timeliness"
      ],
      "solution": [
        { "title": "Unified Database", "desc": "Integrated patient data across departments." },
        { "title": "Automated Workflows", "desc": "Digitized admin tasks and follow-ups." },
        { "title": "Reporting Dashboard", "desc": "Created real-time analytics for staff." }
      ],
      "techStack": ["React", "Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
      "results": [
        { "value": "+70%", "label": "Operational Efficiency" },
        { "value": "-60%", "label": "Manual Errors" },
        { "value": "+40%", "label": "Patient Satisfaction" }
      ]
    },
    {
      "id": "project5",
      "name": "Fintech Payment Gateway",
      "description": "Slow transaction processing with low security and poor UI.",
      "problemPoints": [
        "Delayed transaction approvals",
        "Frequent transaction failures",
        "Complex user interface"
      ],
      "analysis": [
        "Payment APIs were outdated and slow.",
        "UI lacked clarity and mobile responsiveness."
      ],
      "keyFindings": [
        "High transaction abandonment rate",
        "Low user trust due to failures",
        "Users reported poor app usability"
      ],
      "solution": [
        { "title": "API Upgrade", "desc": "Implemented fast and secure payment APIs." },
        { "title": "UI/UX Overhaul", "desc": "Redesigned interface for simplicity and clarity." },
        { "title": "Enhanced Security", "desc": "Added 2FA, encryption, and fraud detection." }
      ],
      "techStack": ["React Native", "Node.js", "Express", "MongoDB", "AWS", "Stripe"],
      "results": [
        { "value": "+55%", "label": "Successful Transactions" },
        { "value": "-50%", "label": "Transaction Failures" },
        { "value": "+60%", "label": "User Trust" }
      ]
    },
    {
      "id": "project6",
      "name": "IoT Device Monitoring Platform",
      "description": "Devices were offline frequently with delayed alerts and poor analytics.",
      "problemPoints": [
        "Delayed alerts for device failure",
        "Limited analytics for device usage",
        "Complex onboarding for new devices"
      ],
      "analysis": [
        "Event processing pipeline was slow.",
        "UI dashboard lacked clarity for device metrics."
      ],
      "keyFindings": [
        "High downtime due to delayed alerts",
        "Low adoption by field technicians",
        "Difficulty in tracking multiple devices"
      ],
      "solution": [
        { "title": "Real-time Alerts", "desc": "Implemented WebSockets for instant device notifications." },
        { "title": "Analytics Dashboard", "desc": "Created intuitive charts and KPI tracking." },
        { "title": "Simplified Onboarding", "desc": "Automated device registration and setup." }
      ],
      "techStack": ["React", "Node.js", "Express", "PostgreSQL", "Redis", "AWS IoT"],
      "results": [
        { "value": "-70%", "label": "Device Downtime" },
        { "value": "+45%", "label": "Technician Adoption" },
        { "value": "+60%", "label": "Alert Response Speed" }
      ]
    }
  ]
};

const sectionColors = ["bg-black", "bg-lime-900", "bg-black", "bg-blue-900", "bg-black", "bg-purple-900"];
const resultColors = ["text-purple-400", "text-lime-400", "text-blue-400", "text-yellow-400", "text-red-400", "text-teal-400"];

const CaseStudies = () => {
  return (
    <div className="w-full text-white overflow-x-hidden font-jura">

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold mb-6"
        >
          {caseData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl"
        >
          {caseData.subtitle}
        </motion.p>
      </section>

      {/* DYNAMIC PROJECT SECTIONS */}
      {caseData.projects.map((project, index) => (
        <section key={project.id} className={`py-28 px-6 ${sectionColors[index % sectionColors.length]}`}>
          <div className="max-w-6xl mx-auto">

            {/* Project Name */}
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" className="text-5xl font-bold mb-6">
              {project.name}
            </motion.h2>

            {/* Description */}
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" className="text-gray-300 text-xl leading-relaxed mb-10">
              {project.description}
            </motion.p>

            {/* Problem Points */}
            <div className="grid md:grid-cols-3 gap-8 mb-14">
              {project.problemPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2 * i }}
                  className="p-8 bg-gray-900 border border-gray-800 rounded-xl shadow-xl"
                >
                  <p className="text-gray-300 text-lg">{point}</p>
                </motion.div>
              ))}
            </div>

            {/* Analysis */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="space-y-4 text-gray-300 text-xl mb-14">
              {project.analysis.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </motion.div>

            {/* Key Findings */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="mb-14 p-10 rounded-2xl bg-black border border-gray-700 shadow-xl">
              <h3 className="text-3xl mb-4 font-semibold">Key Findings:</h3>
              <ul className="space-y-3 text-gray-300 text-xl">
                {project.keyFindings.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions */}
            <motion.div className="grid md:grid-cols-3 gap-10 mb-14">
              {project.solution.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: i * 0.2 }}
                  className="p-8 bg-gray-900 rounded-xl border border-gray-800 shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-4 mb-14">
              {project.techStack.map((tech, i) => (
                <motion.span key={tech} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} className="px-8 py-4 bg-black border border-gray-700 text-lg rounded-full">
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-10 mb-14">
              {project.results.map((item, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.2 }} className="p-10 bg-gray-900 rounded-xl border border-gray-800 text-center shadow-xl">
                  <h3 className={`text-5xl font-bold ${resultColors[index % resultColors.length]}`}>{item.value}</h3>
                  <p className="text-gray-400 mt-3 text-xl">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default CaseStudies;
