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
  // Frontend
  { name: "HTML", category: "Frontend", icon: "/logos/html5.svg" },
  { name: "CSS", category: "Frontend", icon: "/logos/css.svg" },
  { name: "JavaScript", category: "Frontend", icon: "/logos/javascript.svg" },
  { name: "TypeScript", category: "Frontend", icon: "/logos/typescript.svg" },
  { name: "Bootstrap", category: "Frontend", icon: "/logos/bootstrap.svg" },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "/logos/tailwindcss.svg",
  },
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
  {
    name: "Cloudflare Workers",
    category: "Backend",
    icon: "/logos/cloudflareworkers.svg",
  },

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

const categoryColors = {
  All: "bg-blue-600",
  Frontend: "bg-pink-700",
  Backend: "bg-green-700",
  "UI/UX": "bg-purple-700",
  App: "bg-yellow-400", // Light background
  "AI Tools": "bg-indigo-700",
  "E-Commerce": "bg-red-700",
  "Deployment tools": "bg-teal-700",
};

const textColorMap = {
  App: "text-black", // Use black text on yellow
  default: "text-white",
};

export default function TechMenuGrid() {
  const [selected, setSelected] = useState("Frontend");

  const filteredItems =
    selected === "All"
      ? techItems
      : techItems.filter((item) => item.category === selected);

  return (
    <div className="relative z-20 px-4 md:px-10 lg:px-20 py-16 w-[85%] mx-auto text-center mb-32">
      <div className="grid place-content-center py-0 mb-10 ">
        <h2 className="text-center text-5xl font-thin text-white font-bold leading-none">
          {"Technologies We Work With".split("").map((child, idx) => (
            <span className={styles.hoverText} key={idx}>
              {child}
            </span>
          ))}
        </h2>
      </div>
      <p className="text-md my-10 w-[60%] text-gray-300 leading-relaxed mx-auto">
        We evolve with modern technologies to deliver innovative, scalable, and
        future-ready digital solutions.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-24">
        {techCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 
    border border-black dark:bg-gray-900 dark:text-gray-100 
    hover:shadow-md hover:-translate-y-1 hover:border-indigo-500
    active:translate-y-0 active:shadow-none 

    ${
      selected === cat
        ? `${categoryColors[cat]} ${textColorMap[cat] || textColorMap.default} 
            shadow-lg scale-105 border-white text-black`
        : ""
    }
  `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="w-full max-w-5xl grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center select-none mx-auto">
        {filteredItems.map((tech, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] flex items-center justify-center bg-gray-50 rounded-xl shadow hover:scale-105 transition-transform mx-auto"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
