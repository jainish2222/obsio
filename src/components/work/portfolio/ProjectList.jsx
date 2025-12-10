import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectShowcase from "./ProjectShowcase";

const ProjectList = () => {
  return (
    <div className="py-20">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabs = [
    { full: "Web Development", short: "Web Dev" },
    { full: "App Development", short: "App Dev" },
    { full: "UI-UX", short: "UI-UX" },
    { full: "Devops", short: "Devops" },
    { full: "AI Solutions", short: "AI" },
  ];

  return (
   <>
  {/* Heading */}
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent my-12">
  Portfolio
</h1>

  {/* Tabs */}
  <ul
    onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-slate-50 p-1 mb-12 flex-wrap select-none"
  >
    {tabs.map((tab, idx) => (
      <Tab
        key={idx}
        setPosition={setPosition}
        full={tab.full}
        short={tab.short}
      />
    ))}
    <Cursor position={position} />
  </ul>

  {/* Projects */}
  <ProjectShowcase />

</>

  );
};

const Tab = ({ full, short, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base whitespace-nowrap"
    >
      {/* Short version on small screens */}
      <span className="inline md:hidden">{short}</span>
      {/* Full version on medium+ screens */}
      <span className="hidden md:inline">{full}</span>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default ProjectList;
