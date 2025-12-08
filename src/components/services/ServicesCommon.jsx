import React, { Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import ServiceCard from "./ServiceCard";
import AnimatedTitle from "./AnimatedTitle";
import CardInfo from "./CardInfo";
import Footer from "../home/Footer";
import WhyChooseObsio from "./WhyChooseObsio"
import ContactSection from "./ContactPage"
import {
  servicesData,
  gradientMap,
  titleCardColorMap,
  titleContentMap,
  buttonColorMap,
  serviceCardData,
} from "../../data/servicesData";

const toKebabCase = (str) =>
  str?.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const ServicesCommon = () => {
  const { tech } = useParams();

  const fieldKey = useMemo(
    () => Object.keys(servicesData).find((key) => toKebabCase(key) === tech),
    [tech]
  );

  const { fieldServices, backgroundGradient, cardData, colorSet, contentSet, buttonBg } =
    useMemo(() => {
      const fieldServices = fieldKey ? servicesData[fieldKey] : [];
      const backgroundGradient =
        gradientMap[tech] ||
        gradientMap.default ||
        "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)";
      const cardData = serviceCardData[fieldKey] || serviceCardData.default;
      const colorSet = titleCardColorMap[tech] || titleCardColorMap.default;
      const contentSet = titleContentMap[tech] || titleContentMap.default;
      const buttonBg = buttonColorMap[tech] || buttonColorMap.default;

      return { fieldServices, backgroundGradient, cardData, colorSet, contentSet, buttonBg };
    }, [fieldKey, tech]);

  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* HERO TITLE */}
      <AnimatedTitle
        titleBefore={contentSet.titleBefore}
        highlight={contentSet.highlight}
        titleAfter={contentSet.titleAfter}
        description={contentSet.description}
        buttonText={contentSet.buttonText}
        buttonLink={contentSet.buttonLink}
        highlightColor={colorSet.highlight}
        underlineColor={colorSet.underline}
        buttonBg={buttonBg}
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20" style={{ background: backgroundGradient }} />

      {/* STAR CANVAS */}
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
          <Suspense fallback={null}>
            <Stars radius={50} count={20000} factor={5} fade speed={2} />
          </Suspense>
        </Canvas>
      </div>

      {/* SERVICE CARDS */}
      <div className="relative z-10 pb-20">
        {fieldServices.length ? (
          fieldServices.map((service) => <ServiceCard key={service.id} service={service} highlightColor={colorSet.highlight}/>)
        ) : (
          <p className="text-white text-center text-xl mt-20">
            No services found for "{tech}"
          </p>
        )}
      </div>

      {/* CARD INFO - SAME LOGIC */}
      <CardInfo
        highlightColor={colorSet.highlight} // text-green-300, text-blue-300 etc.
        borderColor={`border-${colorSet.highlight.split('-')[3]}-700`} // e.g., border-green-700
        bgColor={`bg-${colorSet.highlight.split('-')[1]}-900/30`} // e.g., bg-green-900/30
        cardData={cardData}
      />
      <WhyChooseObsio/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default ServicesCommon;
