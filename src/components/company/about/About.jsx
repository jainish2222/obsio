import React, { memo } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import TeamSection from "./TeamSection";
import Space_shuttle from "../../../data/Obsio_title.json";
import Tech_animation from "../../../data/Rocket_launched.json";
import Team_animation from "../../../data/Nice_astronaut.json";
import { CustomKanban } from "../../home/ProcessFlow";
import { Example } from "../about/ClipPathLinks";

// Static Data (outside component to prevent re-creation)
const services = [
  {
    title: "Web Development",
    desc: "High-performance, responsive websites and web applications built using React, Next.js, and modern UI frameworks. Optimized for speed, scalability, and a seamless user experience.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps built with React Native & Flutter. When required, we also deliver fully native iOS solutions for maximum performance and UX refinement.",
  },
  {
    title: "Shopify Stores & Custom Apps",
    desc: "From custom Shopify themes to headless storefronts and private app integrations—our team builds fast, conversion-optimized eCommerce experiences.",
  },
  {
    title: "Custom Business Software",
    desc: "Tailored business systems including dashboards, automation tools, CRMs, and workflow applications with rock-solid backend architecture.",
  },
];

const stats = [
  { label: "30+ Developers", sub: "Top college engineers" },
  { label: "1-7", sub: "Experience range" },
  { label: "45+ Projects", sub: "Web, Mobile & Shopify" },
  { label: "Post-Launch Support", sub: "SLA-backed maintenance" },
];

  export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-jura px-5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* HERO */}
        <section className="grid gap-8 lg:grid-cols-2 items-center bg-gradient-to-tr from-indigo-900/40 to-black/40 rounded-3xl p-8 shadow-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-1"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              High-quality, low-maintenance software for growing businesses
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Obsio Solutions builds modern web & mobile apps, Shopify stores,
              and custom business systems.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary">
                Work with us
              </a>
              <a href="#cases" className="btn-secondary">
                See case studies
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Stat key={i} label={s.label} sub={s.sub} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center"
          >
            <div className="w-[280px] sm:w-[340px] md:w-[500px] lg:w-[730px] p-6 bg-black/30 backdrop-blur-md rounded-xl border border-white/10 shadow-xl">
              <Lottie
                animationData={Space_shuttle}
                loop
                autoplay
                className="w-full"
              />
            </div>
          </motion.div>
        </section>

        {/* MISSION + VISION */}
        <section className="mt-12 grid gap-6 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Lottie
              animationData={Tech_animation}
              loop
              autoplay
              className="w-[300px] sm:w-[360px] md:w-[400px]"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card dark>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="mt-3 text-gray-300">
                  Enable small and mid-sized businesses to leverage modern
                  software to reduce costs, automate workflows, and deliver
                  better customer experiences.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <Card dark>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="mt-3 text-gray-300">
                  To be the go-to technical partner for ambitious businesses who
                  want reliable, maintainable, and future-ready software.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <motion.section
          className="mt-12 grid gap-6 lg:grid-cols-2 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col gap-6">
            <SectionTitle number={4} title="What We Do" />
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:scale-[1.02] transition-transform"
                >
                  <h4 className="font-semibold text-white">{s.title}</h4>
                  <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Lottie
              animationData={Team_animation}
              loop
              autoplay
              className="w-[280px] sm:w-[340px] md:w-[400px]"
            />
          </div>
        </motion.section>

        {/* TEAM */}
        <h2 id="team-heading" className="text-3xl font-bold text-center pt-16">
          Meet Our Team
        </h2>
        <TeamSection />

        <div className="hidden px-2 md:block">
          <CustomKanban />
        </div>
        <Example />
      </div>

    </div>
  );
}

// ===== Reusable Components =====
const Stat = memo(({ label, sub }) => (
  <div className="p-3 bg-gray-900/30 border border-gray-800 rounded-lg text-sm">
    <div className="font-semibold text-white">{label}</div>
    <div className="text-xs text-gray-400 mt-1">{sub}</div>
  </div>
));

const Card = memo(({ children, dark = false }) => (
  <div
    className={`p-6 rounded-lg ${
      dark ? "bg-gray-900/40 border border-gray-800" : "bg-white"
    }`}
  >
    {children}
  </div>
));

const SectionTitle = memo(({ number, title }) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full font-semibold text-black">
      {number}
    </div>
    <h2 className="text-xl font-semibold">{title}</h2>
  </div>
));
