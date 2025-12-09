import React, { useEffect, useState } from "react";
import OriginalHero from "./OriginalHero";
import AlternativeHero from "./AlternativeHero";
import ProjectList from "./ProjectList"

const techCategories = [
  "Web Development",
  "App Development",
  "UI-UX",
  "AI Solutions",
  "DevOps",
  "Internet of Things",
  "E-Commerce",
  "Deployment tools",
];

const colors = [
  "#F87171",
  "#FBBF24",
  "#34D399",
  "#60A5FA",
  "#A78BFA",
  "#F472B6",
  "#22D3EE",
  "#FCD34D",
];

const WorkCommon = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techCategories.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="min-h-screen w-full relative bg-black">
    {/* Prismatic Aurora Burst - Multi-layered Gradient */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }}
    />
    {/* Your Content/Components */}
  
      <div className="min-h-screen w-full  relative overflow-hidden font-space-grotesk">
        <OriginalHero
          currentTech={currentTech}
          colors={colors}
          techCategories={techCategories}
        />
        <ProjectList/>
        <AlternativeHero />
      </div>
    </div>
  );
};

export default WorkCommon;
