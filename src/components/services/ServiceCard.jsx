import React from "react";

const ServiceCard = ({ service, highlightColor }) => {
  const isLeftImage = service.imagePosition === "left";
  // console.log(highlightColor)
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mb-20 font-space-grotesk relative z-10">
      <section className="flex flex-col lg:flex-row items-start gap-8 justify-between px-4 lg:px-10 py-10">
        {/* IMAGE (always first on mobile, left/right on desktop) */}
        <div
          className={`
            w-full lg:w-1/2 flex justify-center
            order-1
            ${isLeftImage ? "lg:order-1" : "lg:order-2"}
          `}
        >
          <img
            src={service.image}
            alt={service.title}
            className="object-contain w-full max-w-[380px] h-auto"
          />
        </div>

        {/* INFO */}
        <div
          className={`
            w-full lg:w-1/2 text-left
            order-2
            ${isLeftImage ? "lg:order-2" : "lg:order-1"}
          `}
        >
          <h1
            className={`${highlightColor} text-2xl md:text-3xl lg:text-4xl font-bold mb-4`}
          >
            {service.title}
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            {service.description}
          </p>

          {/* BULLETS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mt-6">
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
              {service.bulletsLeft.map((bullet, i) => (
                <li key={i}>• {bullet}</li>
              ))}
            </ul>

            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base">
              {service.bulletsRight.map((bullet, i) => (
                <li key={i}>• {bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCard;
