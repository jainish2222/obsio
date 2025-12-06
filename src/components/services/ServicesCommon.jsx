import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData, gradientMap } from "../../data/servicesData";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// Helper: convert string to kebab-case
const toKebabCase = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const ServicesCommon = () => {
  const { id } = useParams(); // e.g., "web-development"

  // Find matching key in servicesData
  const fieldKey = Object.keys(servicesData).find(
    (key) => toKebabCase(key) === id
  );

  const fieldServices = fieldKey ? servicesData[fieldKey] : [];

  // Dynamic gradient based on URL id
  const backgroundGradient =
    gradientMap[id] ||
    gradientMap["default"] ||
    "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)";

  return (
    <div className="min-h-screen w-full relative py-40 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 -z-20"
        style={{ background: backgroundGradient }}
      />

      {/* STAR FIELD LAYER */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
        <Canvas
          gl={{ antialias: true, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 1], fov: 75 }}
        >
          <Stars
            radius={80}
            count={4000}
            factor={4}
            fade
            speed={1.5}
          />
        </Canvas>
      </div>

      {/* SERVICE CARDS */}
      <div className="relative z-10">
        {fieldServices.length > 0 ? (
          fieldServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-white text-center mt-20 text-xl">
            No services found for "{id}"
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesCommon;
