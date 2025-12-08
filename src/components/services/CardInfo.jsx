import React from "react";

const CardInfo = ({
  cards = [],
  highlightColor = "text-white",
  borderColor = "border-gray-800",
  bgColor = "bg-gray-900/30",
  cardData,
}) => {
  const cardList = cardData.length ? cardData : [];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 font-jura text-center">
      <h1
        className={`font-extrabold mb-16 my-7 font-bold tracking-tight 
  text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${highlightColor}`}
        style={{ lineHeight: 1.2 }}
      >
        Web Technologies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardList.map((card, index) => (
          <div
            key={index}
            className={`group relative block rounded-xl ${borderColor} border p-6 ${bgColor} backdrop-blur-sm hover:scale-105 transform transition-transform duration-300`}
          >
            <span
              className={`inline-block rounded-lg p-3 ${bgColor} transition-colors`}
            >
              <div
                className={`inline-flex items-center justify-center text-white ${card.iconColor}`}
              >
                {card.icon || (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    width="32"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </span>

            <h2 className="mt-4 font-extraybold text-base sm:text-lg text-white">
              {card.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
