const items = [
  {
    text: "Contribute to the entire P-show project, covering frontend, backend, and deployment.",
    img: "./img/backlog.png",
    name: "Jainish Koladiya",
    title: "Full stack developer and DevOps engineer",
  },
  {
    text: "Assist with backend development and styling aspects of the P-show project.",
    img: "./img/backlog.png",
    name: "Mayank Zalavadiya",
    title: "Full stack developer",
  },
  {
    text: "Handle content writing and design contributions for the P-show project.",
    img: "./img/backlog.png",
    name: "Uttam Kheni",
    title: "Python developer, designer and cybersecurity",
  },
  {
    text: "Contribute to the functionality, problem-solving and management for the P-show project.",
    img: "./img/backlog.png",
    name: "Parth Kanani",
    title: "iOS developer and good problem-solver",
  },
  {
    text: "Contribute to the entire P-show project, covering frontend, backend, and deployment.",
    img: "./img/backlog.png",
    name: "Jainish Koladiya",
    title: "Full stack developer and DevOps engineer",
  },
  {
    text: "Assist with backend development and styling aspects of the P-show project.",
    img: "./img/backlog.png",
    name: "Mayank Zalavadiya",
    title: "Full stack developer",
  },
  {
    text: "Handle content writing and design contributions for the P-show project.",
    img: "./img/backlog.png",
    name: "Uttam Kheni",
    title: "Python developer, designer and cybersecurity",
  },
  {
    text: "Contribute to the functionality, problem-solving and management for the P-show project.",
    img: "./img/backlog.png",
    name: "Parth Kanani",
    title: "iOS developer and good problem-solver",
  },
  {
    text: "Contribute to the entire P-show project, covering frontend, backend, and deployment.",
    img: "./img/backlog.png",
    name: "Jainish Koladiya",
    title: "Full stack developer and DevOps engineer",
  },
  {
    text: "Assist with backend development and styling aspects of the P-show project.",
    img: "./img/backlog.png",
    name: "Mayank Zalavadiya",
    title: "Full stack developer",
  },
  {
    text: "Handle content writing and design contributions for the P-show project.",
    img: "./img/backlog.png",
    name: "Uttam Kheni",
    title: "Python developer, designer and cybersecurity",
  },
  {
    text: "Contribute to the functionality, problem-solving and management for the P-show project.",
    img: "./img/backlog.png",
    name: "Parth Kanani",
    title: "iOS developer and good problem-solver",
  },
];("use client");
import React from "react";
import TextType from "./TextType";

const Testimonials = () => {
  return (
    <Container className="py-12">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Our Clients Love What We Do
        </h2>

        <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          <TextType
            text={["Text typing effect", "for your websites", "Happy coding!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>

      {/* Scrolling Testimonials */}
      {/* <div className="relative z-30 overflow-hidden">
        <div className="flex animate-scroll space-x-4 md:space-x-6 whitespace-nowrap will-change-transform">
          {items.concat(items).map((item, index) => (
            <div
              key={index}
              className="inline-block w-72 md:w-80 h-auto md:h-72 flex-shrink-0"
            >
              <div className="flex flex-col justify-between w-full h-full bg-white shadow-md px-5 py-6 rounded-2xl dark:bg-gray-800 dark:text-white hover:shadow-lg transition">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  {item.text}
                </p>

                <Avatar img={item.img} name={item.name} title={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div> */}

    </Container>
  );
};

/* Avatar Component */
function Avatar({ img, name, title }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
        <img
          src={img}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h4 className="text-base md:text-lg font-semibold">{name}</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  );
}

/* Container */
function Container({ children, className }) {
  return (
    <div className={`container mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}

export default Testimonials;
