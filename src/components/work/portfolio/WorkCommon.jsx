import React, { useEffect, useState, useMemo, lazy, Suspense } from "react";

const OriginalHero = lazy(() => import("./OriginalHero"));
const AlternativeHero = lazy(() => import("./AlternativeHero"));
const ProjectList = lazy(() => import("./ProjectList"));

const WorkCommon = () => {
  // Memoized to avoid recreation on every render
  const techCategories = useMemo(
    () => [
      "Web Development",
      "App Development",
      "UI-UX",
      "AI Solutions",
      "DevOps",
      "Internet of Things",
      "E-Commerce",
      "Deployment tools",
    ],
    []
  );

  const colors = useMemo(
    () => [
      "#F87171",
      "#FBBF24",
      "#34D399",
      "#60A5FA",
      "#A78BFA",
      "#F472B6",
      "#22D3EE",
      "#FCD34D",
    ],
    []
  );

  const [currentTech, setCurrentTech] = useState(0);

  // requestAnimationFrame version of rotating tech (lighter than setInterval)
  useEffect(() => {
    let frameId;
    let lastTime = 0;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const updateTech = (time) => {
      if (time - lastTime > 2500) {
        setCurrentTech((prev) => (prev + 1) % techCategories.length);
        lastTime = time;
      }
      frameId = requestAnimationFrame(updateTech);
    };

    frameId = requestAnimationFrame(updateTech);

    return () => cancelAnimationFrame(frameId);
  }, [techCategories.length]);

  return (
    <main
      role="main"
      className="min-h-screen w-full relative bg-black overflow-hidden font-space-grotesk"
    >
      {/* KEEPING YOUR EXACT GRADIENT THEME */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000
          `,
        }}
      />

      <Suspense fallback={<div className="text-white p-6">Loading…</div>}>
        <OriginalHero
          currentTech={currentTech}
          colors={colors}
          techCategories={techCategories}
        />

        <ProjectList />

        <AlternativeHero />
      </Suspense>
    </main>
  );
};

export default React.memo(WorkCommon);
