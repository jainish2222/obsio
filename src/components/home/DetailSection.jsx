import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";
export const SmoothScrollHero = () => {
  return (
    <div className="bg-transparent">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};


const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 " />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1725455816285-4961b98be1f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXIlMjBwdXJwbGV8ZW58MHx8MHx8fDA%3D"
        alt="And example of a space launch"
         start={-200}
  end={200}
        className="w-1/3 select-none"
      />
      <ParallaxImg
      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWlufGVufDB8fDB8fHww"
        alt="An example of a space launch"
         start={200}
  end={-250}
        className="mx-auto w-2/3 select-none"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1645186296371-0b4efad96bdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpcmFtaWQlMjBwdXJwbGV8ZW58MHx8MHx8fDA%3D"
        alt="Orbiting satellite"
       start={-200}
  end={200}
        className="ml-auto w-1/3 select-none"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1543847036-8e67e0c526f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
        alt="Orbiting satellite"
        start={0}
  end={-500}
        className="ml-24 w-5/12 select-none"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end, delay = 0 }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Our Services
      </motion.h1>
<ScheduleItem 
  title="Web Development" 
  description="With 5+ years of experience, we craft high-quality web solutions across multiple industries. Our expertise spans banking software, automation tools, finance and Web3 platforms, insurance applications, and delivery platforms. We focus on creating scalable, secure, and visually engaging web experiences tailored to your business needs." 
/>

<ScheduleItem 
  title="App Development" 
  description="Our team has 3+ years of experience building robust mobile applications for diverse sectors. We develop medicine apps, delivery platforms, restaurant ordering systems, and educational apps. Each app is designed for performance, usability, and seamless integration, ensuring an exceptional user experience across devices." 
/>

<ScheduleItem 
  title="UX/UI" 
  description="With 5+ years of expertise in UX/UI design, we create intuitive and visually appealing interfaces that delight users. We combine modern design trends with usability best practices, delivering designs for web and mobile applications that drive engagement and enhance customer satisfaction across industries like healthcare, education, and e-commerce." 
/>

<ScheduleItem 
  title="AI Solutions" 
  description="Our AI team has 2+ years of experience building intelligent solutions such as AI chatbots, AI tutors, and AI-powered email template builders. We leverage machine learning and natural language processing to create systems that optimize business workflows, enhance customer interactions, and drive data-driven decision-making." 
/>

<ScheduleItem 
  title="DevOps" 
  description="With 3+ years of experience, our DevOps experts ensure seamless software delivery and infrastructure management. We work with top professionals from leading companies, implementing CI/CD pipelines, cloud deployments, and automation strategies that enhance efficiency, reliability, and scalability for complex enterprise systems." 
/>

<ScheduleItem 
  title="IOT" 
  description="With 1+ year of experience in IoT solutions, we develop smart systems for industries such as textile manufacturing, dining, and industrial automation. Our IoT applications optimize processes, monitor operations in real-time, and provide actionable insights, enabling businesses to operate smarter, safer, and more efficiently." 
/>


    </section>
  );
};

const ScheduleItem = ({ title, description }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-slate-300 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50 font-bold">{title}</p>
        <p className="text-sm  text-zinc-300">{description}</p>
      </div>

    </motion.div>
  );
};