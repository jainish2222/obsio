// components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
  const isLeftImage = service.imagePosition === "left";

  return (
    <div className="px-4 md:px-10 lg:px-16 w-full mx-auto mb-16 font-space-grotesk relative z-10">
      <section className="flex flex-col lg:flex-row items-start gap-8 justify-between px-4 lg:px-10 py-10">
        
        {/* IMAGE */}
        {isLeftImage && (
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="object-contain w-full max-w-[380px] h-auto"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
            {service.title}
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            {service.description}
          </p>

          {/* BULLET LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mt-6">
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
              {service.bulletsLeft.map((bullet, index) => (
                <li key={index}>• {bullet}</li>
              ))}
            </ul>

            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
              {service.bulletsRight.map((bullet, index) => (
                <li key={index}>• {bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* IMAGE ON RIGHT */}
        {!isLeftImage && (
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="object-contain w-full max-w-[380px] h-auto"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default ServiceCard;
