import React, { useState, useEffect, memo } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import avatar from "../../assets/avatar.png";

// Data
const testimonials = [
  {
    clientName: "Sarah Anderson",
    clientPosition: "Chief Marketing Officer",
    company: "TechVision Solutions",
    clientAvatar: avatar,
    testimonialText:
      "Working with this team has been an absolute game-changer for our business.",
  },
  {
    clientName: "Rahul Verma",
    clientPosition: "Product Manager",
    company: "Innova Labs",
    clientAvatar: avatar,
    testimonialText:
      "The way they understood our product vision was remarkable.",
  },
  {
    clientName: "Emily Clark",
    clientPosition: "Founder",
    company: "CreativeHive",
    clientAvatar: avatar,
    testimonialText: "Amazing experience! They delivered beyond expectations.",
  },
  {
    clientName: "Michael Rodriguez",
    clientPosition: "CTO",
    company: "BlueWave Systems",
    clientAvatar: avatar,
    testimonialText:
      "Their approach is modern, efficient, and incredibly reliable.",
  },
  {
    clientName: "Aisha Khan",
    clientPosition: "Marketing Head",
    company: "BrandSpark",
    clientAvatar: avatar,
    testimonialText:
      "Great communication and fast delivery. The UI/UX results were exceptional!",
  },
  {
    clientName: "Daniel Evans",
    clientPosition: "CEO",
    company: "NextGen Retail",
    clientAvatar: avatar,
    testimonialText:
      "Our e-commerce sales skyrocketed after their redesign. Brilliant team!",
  },
];

// Skeleton Loader
const TestimonialSkeleton = memo(() => (
  <div className="bg-white/5 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-7 border border-white/20 animate-pulse">
    <div className="flex flex-col md:flex-row gap-6 md:gap-5">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20"></div>
      <div className="flex-1 space-y-3">
        <div className="h-4 w-40 bg-white/20 rounded"></div>
        <div className="h-3 w-28 bg-white/20 rounded"></div>
        <div className="h-3 w-32 bg-white/20 rounded"></div>
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full bg-white/20 rounded"></div>
          <div className="h-3 w-4/5 bg-white/20 rounded"></div>
        </div>
        <div className="mt-4 h-4 w-24 bg-white/20 rounded"></div>
      </div>
    </div>
  </div>
));

const TestimonialItem = memo(({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? data.testimonialText
    : data.testimonialText.length > 150
    ? data.testimonialText.slice(0,150) + "..."
    : data.testimonialText;

  return (
    <div className="bg-white/10 rounded-xl shadow-md p-6 md:p-7 transition-all duration-200 hover:shadow-lg">
      <div className="relative">
        <FaQuoteLeft className="text-4xl text-indigo-400/30 absolute -top-2 -left-2" />

        <div className="flex flex-col md:flex-row gap-6 md:gap-5">

          <div className="flex-shrink-0">
            <img
              src={data.clientAvatar}
              alt={data.clientName}
              loading="lazy"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-2 ring-white/10"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{data.clientName}</h3>
            <p className="text-sm text-gray-300">{data.clientPosition}</p>
            <p className="text-sm text-indigo-300 font-medium">{data.company}</p>

            <p className="mt-4 text-gray-200 leading-relaxed">{displayText}</p>

            {data.testimonialText.length > 150 && (
              <button
                className="mt-4 text-indigo-300 hover:text-indigo-100 text-sm"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

// Main Component
const TestimonialCard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // faster loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-14 py-16 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Our Clients Love What We Do
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))
          : testimonials.map((t, index) => (
              <TestimonialItem
                key={t.clientName} // stable key
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
