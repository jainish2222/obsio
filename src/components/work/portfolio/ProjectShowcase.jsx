"use client";
import React, { useRef, useEffect, useState } from "react";
import { projects } from "../../../data/Portfolios";
import defaultImage from "../../../assets/obsio_white_text.png";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");

const ProjectShowcase = () => {
  const projectCanvasRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  // Stars for each project card
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

      function drawStar(s) {
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "white";
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      function animate() {
        ctx.clearRect(0, 0, w, h);
        stars.forEach((s) => {
          drawStar(s);
          s.y += s.speed;
          if (s.y > h) {
            s.y = -5;
            s.x = Math.random() * w;
          }
        });
        requestAnimationFrame(animate);
      }

      animate();
    });
  }, [projects]);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div className="relative flex flex-col gap-12 max-w-7xl my-16 px-4 lg:px-8 mx-auto z-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative flex flex-col md:flex-row-reverse items-center gap-8 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-white overflow-hidden"
          >
            {/* Canvas for stars inside this card */}
            <canvas
              ref={(el) => (projectCanvasRefs.current[idx] = el)}
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
            />

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center z-10">
              <div
                className="relative w-full sm:w-4/5 h-64 sm:h-72 md:h-80 rounded-3xl bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(project.image || defaultImage)}
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
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {project.projectName}
              </h2>

              <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                {project.projectBrief}
              </p>

              {project.keyFeatures?.length > 0 && (
                <ul className="mt-3 list-disc list-inside text-gray-400 text-sm sm:text-base">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
              <div className="mt-6">
                {/* Buttons Row */}
                <div className="flex flex-wrap gap-3">
                  {/* Visit Button */}
                  <button
                    onClick={() =>
                      window.open(project.liveLink || "#", "_blank")
                    }
                    className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg shadow-gray-300/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    Visit Web App
                  </button>

                  {/* View Project Button */}
                  {project.morePic && (
                    <button
                      onClick={() =>
                        navigate(`/work/portfolio/${project.slug}`)
                      }
                      className="flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-2xl"
                    >
                      View Project
                    </button>
                  )}
                </div>

                {/* Category Tags Row */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.category?.map((cat, i) => (
                    <span
                      key={i}
                      className="bg-[#1d1d1d] text-white text-xs sm:text-sm px-3 py-1 rounded-full border border-gray-700"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Fullscreen Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-24 right-7 text-white text-3xl sm:text-4xl font-bold hover:text-red-500 "
            >
              &times;
            </button>

            <img
              src={selectedImage}
              alt="Fullscreen Project"
              className="max-h-full max-w-full rounded-3xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
