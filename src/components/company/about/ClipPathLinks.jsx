import React from "react";
import {
  SiByjus,
  SiShopify,
  SiFacebook,
  SiPersistent,
  SiInfosys,
  SiApple,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

export const Example = () => {
  return (
    <div className="bg-black px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl text-center">
        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8">
          We Worked on MNCs Projects
        </h2>

        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  const gridClasses = [
    { cols: 2, icons: [SiInfosys, SiPersistent] },
    { cols: 2, icons: [SiShopify, SiApple] },
    { cols: 2, icons: [SiByjus, SiFacebook] },
  ];

  return (
    <div className="border border-white/20 divide-y divide-white/20">
      {gridClasses.map((group, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-${group.cols} divide-x divide-white/20`}
        >
          {group.icons.map((Icon, i) => (
            <LinkBox key={i} Icon={Icon} href="#" />
          ))}
        </div>
      ))}
    </div>
  );
};

// ClipPath presets
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const distances = [
      { side: "left", proximity: Math.abs(box.left - e.clientX) },
      { side: "right", proximity: Math.abs(box.right - e.clientX) },
      { side: "top", proximity: Math.abs(box.top - e.clientY) },
      { side: "bottom", proximity: Math.abs(box.bottom - e.clientY) },
    ];
    return distances.sort((a, b) => a.proximity - b.proximity)[0].side;
  };

  const handleHover = (e, keyframes) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: keyframes[side] });
  };

  return (
    <div
      onMouseEnter={(e) => handleHover(e, ENTRANCE_KEYFRAMES)}
      onMouseLeave={(e) => handleHover(e, EXIT_KEYFRAMES)}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 cursor-pointer overflow-hidden"
    >
      <Icon className="text-white text-xl sm:text-3xl lg:text-4xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white/10 text-white border border-white/20"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </div>
  );
};
