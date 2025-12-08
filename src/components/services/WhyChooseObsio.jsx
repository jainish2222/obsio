import React from "react";
import {
  Target,
  Eye,
  Users,
  Clock,
  Headphones,
  ShieldCheck,
} from "lucide-react"; // icons

const cards = [
  {
    title: "Flexible Engagement Models",
    description:
      "Total customized and customer-centric engagement models facilitating hourly or fixed-rate hiring.",
    icon: <Target size={40} />,
    bg: "bg-green-500/10",
  },
  {
    title: "100% Transparency",
    description:
      "A complete transparency policy to keep our clients and team aligned throughout the entire process.",
    icon: <Eye size={40} />,
    bg: "bg-indigo-500/10",
  },
  {
    title: "Experienced Developers",
    description:
      "A capable and experienced team that efficiently handles unique business needs across versatile domains.",
    icon: <Users size={40} />,
    bg: "bg-yellow-500/10",
  },
  {
    title: "Timely Delivery",
    description:
      "We value time and strictly follow high-quality standards to deliver projects on schedule.",
    icon: <Clock size={40} />,
    bg: "bg-red-500/10",
  },
  {
    title: "Technical Support",
    description:
      "Our expert technical support staff helps solve queries with proper guidance and reliable solutions.",
    icon: <Headphones size={40} />,
    bg: "bg-pink-500/10",
  },
  {
    title: "Great Place to Work",
    description:
      "We embrace diversity of thought, culture, and people — creating an inspiring workplace.",
    icon: <ShieldCheck size={40} />,
    bg: "bg-cyan-500/10",
  },
];

export default function WhyChooseObsio({highlightColor}) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20 font-jura text-center my-10">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-20 text-white">
        Why You Choose <span className={highlightColor}>Obsio Solutions?</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group relative block rounded-xl border border-gray-700 ${card.bg}
              p-8 backdrop-blur-sm shadow-md hover:shadow-xl 
              hover:scale-105 transition-all duration-300`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-4 text-indigo-300 group-hover:text-indigo-400 transition">
              {card.icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {card.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
