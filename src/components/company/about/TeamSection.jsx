import React, { memo } from "react";
import image1 from "../../../assets/avatar.png";
import image2 from "../../../assets/avatar.png";
import image3 from "../../../assets/avatar.png";
import image4 from "../../../assets/avatar.png";

const teamMembers = [
  {
    name: "Jainish Koladiya",
    role: "Full Stack Developer",
    img: image1,
    alt: "Portrait of Jainish Koladiya",
    quote:
      "Leads the full-stack development of P-show, covering frontend, backend, and deployment.",
  },
  {
    name: "Mohil Koladiya",
    role: "Web Developer",
    img: image2,
    alt: "Portrait of Mohil Koladiya",
    quote:
      "Focuses on building the web frontend and responsive UI components for P-show.",
  },
  {
    name: "Raj Koladiya",
    role: "Backend Developer & DevOps",
    img: image3,
    alt: "Portrait of Raj Koladiya",
    quote:
      "Handles backend architecture, APIs, and deployment pipelines for smooth operations.",
  },
  {
    name: "Varishd Patel",
    role: "Full Stack Developer",
    img: image4,
    alt: "Portrait of Varishd Patel",
    quote:
      "Works on both frontend and backend, ensuring seamless integration and functionality.",
  },
];

function TeamCard({ member }) {
  return (
    <figure className="bg-zinc-900/50 border border-zinc-700 rounded-xl p-6 text-center transition-transform hover:scale-105">
      <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-2 border-blue-400/40 shadow-md">
        <img
          src={member.img}
          alt={member.alt}
          className="object-cover w-full h-full grayscale"
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption>
        <h3 className="text-xl font-bold text-blue-300">{member.name}</h3>
        <p className="text-gray-100 text-sm mt-1">{member.role}</p>
        <p className="mt-2 text-gray-200 text-sm italic">"{member.quote}"</p>
      </figcaption>
    </figure>
  );
}

const MemoizedTeamCard = memo(TeamCard);

export default function TeamSection() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <MemoizedTeamCard key={idx} member={member} />
        ))}
      </div>
    </section>
  );
}
