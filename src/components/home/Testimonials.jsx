import React, { useState, useMemo } from "react";
import TextType from "./TextType";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    clientName: "Sarah Anderson",
    clientPosition: "Chief Marketing Officer",
    company: "TechVision Solutions",
    clientAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    testimonialText:
      "Working with this team has been an absolute game-changer for our business.",
  },
  {
    clientName: "Rahul Verma",
    clientPosition: "Product Manager",
    company: "Innova Labs",
    clientAvatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    testimonialText:
      "The way they understood our product vision was remarkable.",
  },
  {
    clientName: "Emily Clark",
    clientPosition: "Founder",
    company: "CreativeHive",
    clientAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    testimonialText:
      "Amazing experience! They delivered beyond expectations.",
  },
  {
    clientName: "Michael Rodriguez",
    clientPosition: "CTO",
    company: "BlueWave Systems",
    clientAvatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    testimonialText:
      "Their approach is modern, efficient, and incredibly reliable.",
  },
  {
    clientName: "Aisha Khan",
    clientPosition: "Marketing Head",
    company: "BrandSpark",
    clientAvatar:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    testimonialText:
      "Great communication and fast delivery. The UI/UX results were exceptional!",
  },
  {
    clientName: "Daniel Evans",
    clientPosition: "CEO",
    company: "NextGen Retail",
    clientAvatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
    testimonialText:
      "Our e-commerce sales skyrocketed after their redesign. Brilliant team!",
  },
];// keep same

const TestimonialItem = React.memo(
  ({ data, isExpanded, onToggle }) => {
    const truncated = useMemo(
      () => data.testimonialText.slice(0, 150) + "...",
      [data.testimonialText]
    );

    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-7 transition-all duration-300 hover:shadow-xl hover:bg-white/10 border border-white/20">
        <div className="relative">
          <FaQuoteLeft className="text-4xl text-indigo-400/30 absolute -top-2 -left-2" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-5">
            <div className="flex-shrink-0">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white/10">
                <img
                  src={data.clientAvatar}
                  alt={data.clientName}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
                  }}
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{data.clientName}</h3>
              <p className="text-sm text-gray-300">{data.clientPosition}</p>
              <p className="text-sm text-indigo-300 font-medium">{data.company}</p>

              <p className="mt-4 text-gray-200 leading-relaxed">
                {isExpanded ? data.testimonialText : truncated}
              </p>

              <div className="mt-4 flex gap-4 items-center">
                <button
                  onClick={onToggle}
                  className="text-indigo-300 hover:text-indigo-200 font-medium text-sm"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  (prev, next) =>
    prev.isExpanded === next.isExpanded &&
    prev.data.clientName === next.data.clientName
);

const TestimonialCard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-14 py-16 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Our Clients Love What We Do
        </h2>

        <div className="text-lg md:text-xl text-gray-200">
         
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <TestimonialItem
            key={index}
            data={t}
            isExpanded={expandedIndex === index}
            onToggle={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCard;
