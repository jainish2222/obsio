import React from "react";
import { animatedContent } from "../../data/servicesData";
import { useParams } from "react-router-dom";

const keyMap = {
  "web-development": "Web Development",
  "app-development": "App Development",
  "ui-ux": "UI-UX",
  devops: "DevOps",
  "ai-solutions": "AI Solutions",
};

const CardInfo = ({
  cardData = [],
  highlightColor = "text-white",
  borderColor = "border-gray-800",
  bgColor = "bg-gray-900/30",
}) => {
  const { tech } = useParams();

  const mappedKey = keyMap[tech];
  const data = animatedContent[mappedKey];

  if (!data) return null;

  // Stable card list
  const cards = Array.isArray(cardData) ? cardData : [];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 font-jura text-center">
      {/* TITLE */}
      <h1
        className={`font-extrabold my-7 tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${data.highlightColor}`}
      >
        {data.title}
      </h1>

      {/* DESCRIPTION */}
      <p className="my-7 mx-auto max-w-xl text-sm sm:text-base text-white">
        {data.description}
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`group relative block rounded-xl ${borderColor} border p-6 ${bgColor} backdrop-blur-sm transform transition-transform duration-300 hover:scale-105`}
          >
            {/* ICON WRAPPER */}
            <div
              className={`inline-flex items-center justify-center rounded-lg p-3 ${bgColor}`}
            >
              <div className={`text-white ${card.iconColor}`}>
                {card.icon ? (
                  card.icon
                ) : (
                  // FALLBACK ICON
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white`}
                  >
                    <span className="text-xl font-extrabold">{i + 1}</span>
                  </div>
                )}
              </div>
            </div>

            {/* TITLE */}
            <h2 className="mt-4 font-bold text-base sm:text-lg text-white">
              {card.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CardInfo);
