import React, { memo } from "react";
import { motion } from "framer-motion";
import { caseData } from "../../../data/CasestudiesData";

// Minimal fade animation
const fadeSimple = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Static colors
const sectionColors = [
  "bg-black",
  "bg-lime-900",
  "bg-black",
  "bg-blue-900",
  "bg-black",
  "bg-purple-900",
];

const resultColors = [
  "text-teal-400",
  "text-lime-400",
  "text-yellow-400",
  "text-blue-400",
  "text-red-400",
  "text-purple-400",
];

// ----------------------------
// Micro Components
// ----------------------------

const ProblemPoints = memo(({ list }) => (
  <div className="grid md:grid-cols-3 gap-6 mb-12">
    {list.map((point, i) => (
      <div
        key={i}
        className="p-6 bg-gray-900 border border-gray-800 rounded-xl shadow"
      >
        <p className="text-gray-300 text-base">{point}</p>
      </div>
    ))}
  </div>
));

const Solutions = memo(({ list }) => (
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    {list.map((item, i) => (
      <div
        key={i}
        className="p-6 bg-gray-900 rounded-xl border border-gray-800 shadow hover:scale-[1.02] transition-all"
      >
        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
        <p className="text-gray-400">{item.desc}</p>
      </div>
    ))}
  </div>
));

const Results = memo(({ list, color }) => (
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    {list.map((item, i) => (
      <div
        key={i}
        className="p-8 bg-gray-900 rounded-xl border border-gray-800 text-center shadow"
      >
        <h3 className={`text-4xl md:text-5xl font-bold ${color}`}>
          {item.value}
        </h3>
        <p className="text-gray-400 mt-2 text-lg">{item.label}</p>
      </div>
    ))}
  </div>
));

// ----------------------------
// MAIN COMPONENT
// ----------------------------

const CaseStudies = () => {
  return (
    <main className="w-full text-white overflow-x-hidden font-jura">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
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

      {/* PROJECTS */}
      {caseData.projects.map((project, index) => {
        const bgColor = sectionColors[index % sectionColors.length];
        const resultColor = resultColors[index % resultColors.length];

        return (
          <section
            key={project.id}
            className={`py-20 px-6 ${bgColor}`}
            aria-labelledby={`project-${project.id}`}
          >
            <div className="max-w-6xl mx-auto">

              <h2 id={`project-${project.id}`} className="text-4xl md:text-5xl font-bold mb-6">
                {project.name}
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl">
                {project.description}
              </p>

              <ProblemPoints list={project.problemPoints} />

              <div className="space-y-3 text-gray-300 text-lg mb-12">
                {project.analysis.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

              <div className="mb-12 p-8 rounded-2xl bg-black border border-gray-700 shadow-xl">
                <h3 className="text-2xl mb-4 font-semibold">Key Findings</h3>
                <ul className="space-y-2 text-gray-300 text-lg list-disc pl-6">
                  {project.keyFindings.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <Solutions list={project.solution} />

              <div className="flex flex-wrap gap-3 mb-12">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-black border border-gray-700 rounded-full text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Results list={project.results} color={resultColor} />

            </div>
          </section>
        );
      })}
    </main>
  );
};

export default memo(CaseStudies);
