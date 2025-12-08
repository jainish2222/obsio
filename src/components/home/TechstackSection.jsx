// Production-Ready TechMenuGrid Component
"use client";
import { useState } from "react";
import styles from "./text.module.css";

const techCategories = [
  "All",
  "Frontend",
  "Backend",
  "UI/UX",
  "App",
  "AI Tools",
  "E-Commerce",
  "Deployment tools",
];

const techItems = [
  { name: "HTML", category: "Frontend", icon: "/logos/html5.svg" },
  { name: "CSS", category: "Frontend", icon: "/logos/css.svg" },
  { name: "JavaScript", category: "Frontend", icon: "/logos/javascript.svg" },
  { name: "TypeScript", category: "Frontend", icon: "/logos/typescript.svg" },
  { name: "Bootstrap", category: "Frontend", icon: "/logos/bootstrap.svg" },
  { name: "Tailwind CSS", category: "Frontend", icon: "/logos/tailwindcss.svg" },
  { name: "React.js", category: "Frontend", icon: "/logos/react.svg" },
  { name: "Next.js", category: "Frontend", icon: "/logos/nextdotjs.svg" },

  // Backend
  { name: "Node.js", category: "Backend", icon: "/logos/nodedotjs.svg" },
  { name: "Express.js", category: "Backend", icon: "/logos/express.svg" },
  { name: "Nest.js", category: "Backend", icon: "/logos/nestjs.svg" },
  { name: "GraphQL", category: "Backend", icon: "/logos/graphql.svg" },
  { name: "MongoDB", category: "Backend", icon: "/logos/mongodb.svg" },
  { name: "PostgreSQL", category: "Backend", icon: "/logos/postgresql.svg" },
  { name: "Redis", category: "Backend", icon: "/logos/redis.svg" },
  { name: "Firebase", category: "Backend", icon: "/logos/firebase.svg" },
  { name: "Supabase", category: "Backend", icon: "/logos/supabase.svg" },
  { name: "Cloudflare Workers", category: "Backend", icon: "/logos/cloudflareworkers.svg" },

  // UI/UX
  { name: "Figma", category: "UI/UX", icon: "/logos/figma.svg" },
  { name: "Canva", category: "UI/UX", icon: "/logos/canva.svg" },
  { name: "Adobe XD", category: "UI/UX", icon: "/logos/adobe.svg" },

  // App
  { name: "iOS (native)", category: "App", icon: "/logos/ios.svg" },
  { name: "Flutter", category: "App", icon: "/logos/flutter.svg" },
  { name: "Swift", category: "App", icon: "/logos/swift.svg" },
  { name: "Dart", category: "App", icon: "/logos/dart.svg" },
  { name: "React Native", category: "App", icon: "/logos/react.svg" },

  // AI Tools
  { name: "Claude", category: "AI Tools", icon: "/logos/claude.svg" },
  { name: "Gemini", category: "AI Tools", icon: "/logos/googlegemini.svg" },
  { name: "OpenAI", category: "AI Tools", icon: "/logos/openai.svg" },
  { name: "Replit AI", category: "AI Tools", icon: "/logos/replit.svg" },
  { name: "V0", category: "AI Tools", icon: "/logos/v0.svg" },

  // E-Commerce
  { name: "Shopify", category: "E-Commerce", icon: "/logos/shopify.svg" },

  // Deployment tools
  { name: "Vercel", category: "Deployment tools", icon: "/logos/vercel.svg" },
  { name: "Render", category: "Deployment tools", icon: "/logos/render.svg" },
  { name: "Netlify", category: "Deployment tools", icon: "/logos/netlify.svg" },
  { name: "AWS", category: "Deployment tools", icon: "/logos/aws.jpg" },
];

// const categoryColors = {
//   All: "bg-blue-600",
//   Frontend: "bg-pink-700",
//   Backend: "bg-green-700",
//   "UI/UX": "bg-purple-700",
//   App: "bg-yellow-400",
//   "AI Tools": "bg-indigo-700",
//   "E-Commerce": "bg-red-700",
//   "Deployment tools": "bg-teal-700",
// };

const textColorMap = {
  App: "text-black",
  default: "text-white",
};

export default function TechMenuGrid() {
  const [selected, setSelected] = useState("Frontend");

  const filteredItems =
    selected === "All"
      ? techItems
      : techItems.filter((item) => item.category === selected);

  return (
    <div className="relative z-20 px-4 md:px-10 lg:px-20 py-12 w-full max-w-[95%] mx-auto text-center m-20">
      {/* Title */}
      <div className="grid place-content-center mb-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          {"Technologies We Work With".split("").map((char, idx) => (
            <span key={idx} className={styles.hoverText}>
              {char}
            </span>
          ))}
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-sm sm:text-base my-6 w-[90%] sm:w-[70%] md:w-[60%] text-gray-300 leading-relaxed mx-auto">
        We evolve with modern technologies to deliver innovative, scalable, and
        future-ready digital solutions.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16">
        {techCategories.map((cat) => {
          const isActive = selected === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border border-black dark:bg-gray-900 dark:text-gray-100 hover:shadow-md hover:-translate-y-1 active:translate-y-0 active:shadow-none
                ${
                  isActive
                    ? ` ${textColorMap[cat] ||
                        textColorMap.default} shadow-lg scale-105 border-white`
                    : ""
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Tech Grid */}
      <div className="w-full max-w-5xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 justify-center items-center mx-auto select-none">
        {filteredItems.map((tech) => (
          <div
            key={tech.name}
            className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] flex items-center justify-center bg-gray-50 rounded-xl shadow hover:scale-105 transition-transform mx-auto"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              width={36}
              height={36}
              className="object-contain sm:w-[40px] sm:h-[40px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}