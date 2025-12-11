const teamMembers = [
  {
    name: "Jainish Koladiya",
    role: "Full Stack Developer",
    img: "/img/user1.jpg",
    alt: "Portrait of Jainish Koladiya",
    quote:
      "Leads the full-stack development of P-show, covering frontend, backend, and deployment.",
  },
  {
    name: "Mohil Koladiya",
    role: "Web Developer",
    img: "/img/user2.jpg",
    alt: "Portrait of Mohil Koladiya",
    quote:
      "Focuses on building the web frontend and responsive UI components for P-show.",
  },
  {
    name: "Raj Koladiya",
    role: "Backend Developer & DevOps",
    img: "/img/user3.png",
    alt: "Portrait of Raj Koladiya",
    quote:
      "Handles backend architecture, APIs, and deployment pipelines for smooth operations.",
  },
  {
    name: "Varishd Patel",
    role: "Full Stack Developer",
    img: "/img/user4.jpg",
    alt: "Portrait of Varishd Patel",
    quote:
      "Works on both frontend and backend, ensuring seamless integration and functionality.",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black py-20 px-6 sm:px-10 lg:px-20">
      {/* <h2 className="text-center text-4xl font-bold text-white mb-14 tracking-wide">
        Our Team
      </h2> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamMembers.map((member, idx) => (
          <article
            key={idx}
            className="
              bg-zinc-900/50 
              border border-zinc-700 
              rounded-xl 
              p-6 
              text-center 
              shadow-[0_0_20px_rgba(0,0,0,0.5)]
              transition-transform 
              hover:scale-105 
              hover:shadow-blue-400
            "
          >
            {/* Avatar */}
            <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-2 border-blue-400/40 shadow-lg shadow-blue-400/20">
              <img
                src={member.img}
                alt={member.alt}
                className="object-cover w-full h-full grayscale"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-blue-300">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-gray-100 text-sm mt-1">{member.role}</p>

            {/* Quote */}
            <p className="mt-3 text-gray-200 text-sm italic">
              "{member.quote}"
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
