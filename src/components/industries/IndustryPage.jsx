import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { industryContent } from "../../data/Industries"; // adjust path if needed

// ---------------- INDUSTRY THEMES ----------------
const industryTheme = {
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

export default function IndustryPage() {
  const { field } = useParams(); // expects route like /industry/:field
  const data = industryContent[field] || industryContent["healthcare"]; // fallback
  const btnColor = industryTheme[field] || "#111827"; // fallback dark gray

  // helper: get name/icon regardless of whether item is string or object
  const normalizeTechItem = (t) => {
    if (typeof t === "string") {
      const name = t;
      // generate a sane icon path if you don't have one
      const slug = name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");
      return { name, icon: `/icons/${slug}.png` };
    }
    // already object
    return { name: t.name || "Unknown", icon: t.icon || `/icons/${t.name?.toLowerCase()?.replace(/\s+/g,'-') || "unknown"}.png` };
  };

  return (
    <div className="bg-black text-white w-full overflow-x-hidden font-jura">
      {/* HERO */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.hero.img})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {data.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-8"
          >
            {data.hero.desc}
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            style={{ backgroundColor: btnColor }}
            className="px-7 py-3 rounded-lg font-semibold text-black shadow-xl"
          >
            {data.hero.ctaBtn}
          </motion.button>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {data.digitalTransformation.title}
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          {data.digitalTransformation.desc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.digitalTransformation.services.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-gray-700 p-5 rounded-xl text-gray-300"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {data.challenges.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.challenges.items.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-gray-700 p-6 rounded-xl text-gray-300"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {data.solutions.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {data.solutions.items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-gray-700 p-8 rounded-xl bg-gray-900/30"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{s.title}</h3>
              <ul className="text-left text-gray-300 text-sm space-y-2">
                {s.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-16 md:py-24 px-10 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {data.techStack.title}
          </h2>
          <p className="text-lg text-gray-300 text-center mb-14">
            {data.techStack.desc}
          </p>

          <div className="space-y-12">
            {Object.entries(data.techStack.stack).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                <div className="flex flex-wrap gap-4">
                  {items.map((tRaw) => {
                    const t = normalizeTechItem(tRaw);
                    return (
                      <div
                        key={t.name}
                        className="flex items-center gap-3 border border-gray-700 bg-black px-4 py-3 rounded-md"
                      >
                        {/* show icon if file exists in your public folder */}
                        <img
                          src={t.icon}
                          alt={t.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            // fallback small colored circle if image missing
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <span className="text-white">{t.name}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="border-b border-gray-700 mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: btnColor }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-black"
        >
          {data.cta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-lg mb-8 text-black"
        >
          {data.cta.desc}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          style={{ backgroundColor: "black", color: "white" }}
          className="px-10 py-4 rounded-lg font-semibold text-lg shadow-lg"
        >
          {data.cta.btnText}
        </motion.button>
      </section>
    </div>
  );
}
