import React, { useEffect, useMemo, useState, useRef, memo, useCallback } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { industryContent } from "../../data/Industries";

const INDUSTRY_THEME = {
  restaurant: "#FF6B00",
  "real-estate": "#B8860B",
  transport: "#1E90FF",
  ecommerce: "#FF1493",
  manufacturing: "#3B82F6",
  fintech: "#4CAF50",
  edtech: "#9333EA",
  logistics: "#F59E0B",
  retail: "#EF4444",
  healthcare: "#FBBF24",
};

const slugify = (s = "") =>
  s.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

// -------------------- Reusable Components --------------------
const GridCard = memo(({ children, className = "", ...rest }) => (
  <article
    {...rest}
    className={`border border-gray-700 p-5 rounded-xl text-gray-300 bg-transparent ${className}`}
    tabIndex={0}
  >
    {children}
  </article>
));

const ThemedTitle = memo(({ children, themeColor, className = "" }) => (
  <h2 className={`font-bold mb-8 ${className}`} style={{ color: themeColor }}>
    {children}
  </h2>
));

const TechStack = memo(({ techStack, themeColor }) => {
  const entries = useMemo(() => Object.entries(techStack || {}), [techStack]);
  return (
    <section className="py-16 md:py-24 px-6 bg-black" aria-labelledby="techstack-heading">
      <div className="max-w-6xl mx-auto">
        <ThemedTitle themeColor={themeColor} className="text-2xl md:text-4xl text-center" >
          Tech Stack
        </ThemedTitle>
        <p className="text-gray-300 text-lg text-center mb-10">
          Technologies we use to deliver stable solutions.
        </p>
        {entries.map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-4" role="list">
              {items.map((t) => {
                const item = typeof t === "string" ? { name: t, icon: `/icons/${slugify(t)}.webp` } : { name: t.name, icon: t.icon || `/icons/${slugify(t.name)}.webp` };
                return (
                  <div key={item.name} role="listitem" className="flex items-center gap-3 border border-gray-700 bg-black px-4 py-3 rounded-md">
                    <span className="text-white text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="border-b border-gray-700 mt-6" />
          </div>
        ))}
      </div>
    </section>
  );
});

const HeroSection = memo(({ data, themeColor }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const heroRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const navigate = useNavigate();
  useEffect(() => {
    if (!data?.hero?.img) return;
    let observer;
    const load = () => {
      const img = new Image();
      img.src = data.hero.img;
      img.onload = () => setBgLoaded(true);
    };
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            load();
            observer.disconnect();
          }
        },
        { rootMargin: "200px" }
      );
      observer.observe(heroRef.current);
    } else load();
    return () => observer && observer.disconnect();
  }, [data]);

  const headingAnim = prefersReduced ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };
  const paraAnim = prefersReduced ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 } };

  return (
    <section
      ref={heroRef}
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black relative"
      style={{
        backgroundImage: bgLoaded
          ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${data.hero.img})`
          : undefined,
        backgroundColor: "#000",
      }}
      aria-label={`${data.hero.title} hero`}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1 {...headingAnim} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {data.hero.title}
        </motion.h1>
        <motion.p {...paraAnim} transition={{ duration: 0.6, delay: 0.15 }} className="text-gray-300 text-base md:text-lg mb-6">
          {data.hero.desc}
        </motion.p>
        <motion.button
         onClick={()=>{navigate("/company/contact-us")}}
          whileHover={{ scale: prefersReduced ? 1 : 1.03 }}
          className="px-6 py-3 rounded-lg font-semibold shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2"
          style={{ backgroundColor: themeColor, color: "#000" }}
          aria-label={data.hero.ctaBtn}
        >
          {data.hero.ctaBtn}
        </motion.button>
      </div>
    </section>
  );
});

// -------------------- Main Page --------------------
export default function IndustryPageOptimized() {
  const { field } = useParams();
  const key = field || "healthcare";
  const data = useMemo(() => industryContent[key] || industryContent["healthcare"], [key]);
  const themeColor = useMemo(() => INDUSTRY_THEME[key] || "#111827", [key]);
  const reducedMotion = useReducedMotion();

  const renderService = useCallback(
    (s, i) => {
      const id = typeof s === "string" ? s : s.title || `service-${i}`;
      return (
        <GridCard key={id} className="text-left" aria-label={typeof s === "string" ? s : s.title || "service item"}>
          {typeof s === "string" ? s : s.title}
        </GridCard>
      );
    },
    []
  );

  const Section = ({ title, items, delayStep = 0.04, children }) => (
    <section className="py-20 px-6 text-center">
      <ThemedTitle themeColor={themeColor} className="text-2xl md:text-4xl">
        {title}
      </ThemedTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={typeof item === "string" ? item : item.title || i}
            initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * delayStep, duration: 0.45 }}
          >
            {children(item, i)}
          </motion.div>
        ))}
      </div>
    </section>
  );
  const navigate = useNavigate();
  return (
    <main className="bg-black text-white w-full overflow-x-hidden font-jura">
      <HeroSection data={data} themeColor={themeColor} />

      <Section title={data.digitalTransformation.title} items={data.digitalTransformation.services} delayStep={0.05}>
        {(s, i) => renderService(s, i)}
      </Section>

      <Section title={data.challenges.title} items={data.challenges.items} delayStep={0.04}>
        {(c) => <GridCard>{c}</GridCard>}
      </Section>

      <Section title={data.solutions.title} items={data.solutions.items} delayStep={0.05}>
        {(s) => (
          <div className="border border-gray-700 p-6 rounded-xl bg-gray-900/30 text-left">
            <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
            <ul className="text-gray-300 text-sm space-y-2 pl-4 list-disc">
              {s.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      <TechStack techStack={data.techStack.stack} themeColor={themeColor} />

      <section className="py-16 text-center" style={{ backgroundColor: themeColor }}>
        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold mb-4 text-black"
        >
          {data.cta.title}
        </motion.h2>
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={reducedMotion ? {} : { opacity: 1 }}
          className="max-w-3xl mx-auto font-bold text-lg mb-6 text-black"
        >
          {data.cta.desc}
        </motion.p>
        <motion.button
          onClick={() => { navigate("/company/about-us");}}
          whileHover={{ scale: reducedMotion ? 1 : 1.02 }}
          className="px-8 py-3 rounded-lg font-bold text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-offset-2"
          style={{ backgroundColor: "#000", color: "#fff" }}
          aria-label={data.cta.btnText}
        >
          {data.cta.btnText}
        </motion.button>
      </section>
    </main>
  );
}
