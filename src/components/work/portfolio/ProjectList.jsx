"use client";
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../../data/Portfolios";
import defaultImage from "../../../assets/obsio_white_text.png";

const tabs = [
  { full: "Web Development", short: "Web Dev", value: "web" },
  { full: "App Development", short: "App Dev", value: "app" },
  { full: "UI-UX", short: "UI-UX", value: "ui-ux" },
  { full: "AI Solutions", short: "AI", value: "ai" },
];

const PortfolioSection = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activeTab, setActiveTab] = useState("web");
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  /** 🔥 CREATE STABLE REFS FOR CANVAS (NOT INSIDE MAP!) */
  const projectCanvasRefs = useRef([]);

  /** ------------------------------------------------------------------
   *  ⭐ CANVAS ANIMATION (RUNS ONCE)
   *  ------------------------------------------------------------------ */
  useEffect(() => {
    projectCanvasRefs.current.forEach((canvas) => {
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      const ratio = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      canvas.width = w * ratio;
      canvas.height = h * ratio;
      ctx.scale(ratio, ratio);

      const stars = Array.from({ length: 20 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 0.8 + Math.random() * 1.6,
        speed: 0.7 + Math.random() * 1.3,
        opacity: 0.5 + Math.random() * 0.5,
      }));

      const drawStar = (s) => {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      let animationId;

      const animate = () => {
        ctx.clearRect(0, 0, w, h);
        stars.forEach((s) => {
          drawStar(s);
          s.y += s.speed;
          if (s.y > h) {
            s.y = -5;
            s.x = Math.random() * w;
          }
        });
        animationId = requestAnimationFrame(animate);
      };

      animate();

      return () => cancelAnimationFrame(animationId);
    });
  }, []);

  /** 🔥 MEMOIZED FILTERING - re-run only if activeTab changes */
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => p.category?.includes(activeTab));
  }, [activeTab]);

  /** 🔥 MEMOIZED HANDLERS */
  const handleTabClick = useCallback((val) => setActiveTab(val), []);
  const handleOpenImage = useCallback((img) => setSelectedImage(img), []);
  const closeImage = useCallback(() => setSelectedImage(null), []);
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <div className="py-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent my-12">
        Portfolio
      </h1>

      {/* Tabs */}
      <ul
        onMouseLeave={() => setPosition((p) => ({ ...p, opacity: 0 }))}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-slate-50 p-1 mb-12 flex-wrap select-none"
      >
        {tabs.map((tab, idx) => {
          const ref = useRef(null);

          return (
            <li
              key={tab.value}
              ref={ref}
              onClick={() => handleTabClick(tab.value)}
              onMouseEnter={() => {
                if (!ref.current) return;
                const { width, left } = ref.current.getBoundingClientRect();
                const parentLeft =
                  ref.current.parentElement.getBoundingClientRect().left;

                setPosition({
                  left: left - parentLeft,
                  width,
                  opacity: 1,
                });
              }}
              className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase 
                mix-blend-difference md:px-5 md:py-3 md:text-base whitespace-nowrap hover:text-white
                ${
                  activeTab === tab.value
                    ? "text-white font-bold"
                    : "text-gray-300"
                }`}
            >
              <span className="inline md:hidden">{tab.short}</span>
              <span className="hidden md:inline">{tab.full}</span>
            </li>
          );
        })}

        <motion.li
          animate={{ ...position }}
          className="absolute z-0 h-7 rounded-full bg-black md:h-12"
        />
      </ul>
      {/* 📌 CONTACT POPUP */}
      {openPopUp && (
        <div
          className="fixed inset-0 z-[3000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenPopUp(false)} // CLOSE ON OUTSIDE CLICK
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-[#111] text-white p-8 rounded-3xl max-w-sm w-full shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} // PREVENT CLOSE WHEN CLICKING INSIDE
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenPopUp(false)}
              className="absolute top-5 right-5 text-white text-2xl hover:text-red-500"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-3 text-center">
              Need More Details?
            </h2>
            <p className="text-gray-300 text-center mb-6">
              If you want complete project details, pricing, or custom
              solutions, feel free to contact us.
            </p>

            <button
              onClick={() => navigate("/company/contact-us")}
              className="w-full bg-white text-black py-3 rounded-xl font-semibold text-lg hover:scale-105 transition"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      )}

      {/* Projects List */}
      <div className="relative w-screen min-h-screen overflow-hidden">
        <div className="relative flex flex-col gap-12 max-w-7xl my-16 px-4 lg:px-8 mx-auto z-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.slug || idx}
              className="relative flex flex-col md:flex-row-reverse items-center gap-8 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-white overflow-hidden"
            >
              {/* Canvas */}
              <canvas
                ref={(el) => (projectCanvasRefs.current[idx] = el)}
                className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              />

              {/* Project Image */}
              <div className="w-full md:w-1/2 flex justify-center z-10">
                <div
                  className="relative w-full sm:w-4/5 h-64 sm:h-72 md:h-80 rounded-3xl bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleOpenImage(project.image || defaultImage)}
                >
                  <div className="absolute inset-0 rounded-3xl sm:bg-white/5 backdrop-blur-[2px]"></div>
                  <img
                    src={project.image || defaultImage}
                    alt={project.projectName}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-inner"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="w-full md:w-1/2 z-10 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {project.projectName}
                </h2>

                <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                  {project.projectBrief}
                </p>

                {project.keyFeatures?.length > 0 && (
                  <ul className="mt-3 list-disc list-inside text-gray-400 text-sm sm:text-base">
                    {project.keyFeatures.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-6">
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        setOpenPopUp(true);
                      }}
                      className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl shadow-lg transition-all hover:scale-105"
                    >
                      <Globe className="w-4 h-4" /> Visit Web App
                    </button>

                    {project.morePic && (
                      <button
                        onClick={() =>
                          navigate(
                            `/work/portfolio/${project.category}/${project.slug}`
                          )
                        }
                        className="px-5 py-2.5 bg-blue-600 text-white rounded-xl shadow-lg transition-all hover:scale-105 hover:bg-blue-700"
                      >
                        View Project
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.category?.map((cat) => (
                      <span
                        key={cat}
                        className="bg-[#1d1d1d] text-white text-xs px-3 py-1 rounded-full border border-gray-700"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* FULLSCREEN IMAGE MODAL */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => closeImage()} // Close when clicking outside
            >
              <div
                className="relative"
                onClick={(e) => e.stopPropagation()} // Prevent close when clicking the image
              >
                {/* Close Button */}
                <button
                  onClick={closeImage}
                  className="absolute -top-12 -right-7 text-white text-3xl font-bold hover:text-red-500"
                >
                  &times;
                </button>

                <img
                  src={selectedImage}
                  alt="Fullscreen Project"
                  className="max-h-full max-w-full rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(PortfolioSection);
