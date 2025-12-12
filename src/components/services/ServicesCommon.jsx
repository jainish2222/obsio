import React, { Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import ServiceCard from "./ServiceCard";
import AnimatedTitle from "./AnimatedTitle";
import CardInfo from "./CardInfo";
import WhyChooseObsio from "./WhyChooseObsio";
import ContactSection from "./ContactPage";
import {
  servicesData,
  gradientMap,
  titleCardColorMap,
  titleContentMap,
  buttonColorMap,
  serviceCardData,
} from "../../data/servicesData";

/* --------------------------------------------------------
   🔥 Memoized Stars Canvas (heavy component)
-------------------------------------------------------- */
const BackgroundStars = React.memo(() => (
  <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
      <Suspense fallback={null}>
        <Stars radius={50} count={5000} factor={5} fade speed={2} />
      </Suspense>
    </Canvas>
  </div>
));

/* --------------------------------------------------------
   🚀 Main Page
-------------------------------------------------------- */
const ServicesCommon = () => {
  const { tech } = useParams();

  /* Small util */
  const toKebab = (str) =>
    str?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  /* Find matching field key */
  const fieldKey = useMemo(
    () => Object.keys(servicesData).find((key) => toKebab(key) === tech),
    [tech]
  );

  /* Build data once */
  const pageData = useMemo(() => {
    return {
      services: fieldKey ? servicesData[fieldKey] : [],
      gradient:
        gradientMap[tech] ||
        gradientMap.default ||
        "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
      cards: serviceCardData[fieldKey] || serviceCardData.default,
      color: titleCardColorMap[tech] || titleCardColorMap.default,
      content: titleContentMap[tech] || titleContentMap.default,
      button: buttonColorMap[tech] || buttonColorMap.default,
    };
  }, [fieldKey, tech]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ "--bg-grad": pageData.gradient }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{ background: "var(--bg-grad)" }}
      />

      {/* Optimized Canvas Stars */}
      <BackgroundStars />

      {/* Animated Hero Title */}
      <AnimatedTitle
        titleBefore={pageData.content.titleBefore}
        highlight={pageData.content.highlight}
        titleAfter={pageData.content.titleAfter}
        description={pageData.content.description}
        buttonText={pageData.content.buttonText}
        buttonLink={pageData.content.buttonLink}
        highlightColor={pageData.color.highlight}
        underlineColor={pageData.color.underline}
        buttonBg={pageData.button}
      />

      {/* Services */}
      <div className="relative z-10 pb-20">
        {pageData.services.length ? (
          pageData.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              highlightColor={pageData.color.highlight}
            />
          ))
        ) : (
          <p className="text-white text-center text-xl mt-20">
            No services found for "{tech}"
          </p>
        )}
      </div>

      {/* Card Info */}
      <CardInfo
        highlightColor={pageData.color.highlight}
        cardData={pageData.cards}
      />

      <WhyChooseObsio />
      <ContactSection />
    </div>
  );
};

export default React.memo(ServicesCommon);
