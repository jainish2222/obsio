// Ultra-Optimized Footer Component
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/obsio_white_t.png";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    title: "Mobile",
    icon: <FiPhone />,
    value: "+91 87992 10169",
    link: "tel:+918799210169",
  },
  {
    title: "HR Email",
    icon: <FiMail />,
    value: "hr@obsio.tech",
    link: "mailto:hr@obsio.tech",
  },
  {
    title: "India Office",
    icon: <FaMapMarkerAlt />,
    value: " 310-311, Raj Imperia, Sarthana Jakatnaka, Surat, Gujarat 395013",
  },
];

const contactInfo2 = [
  {
    title: "Phone",
    icon: <FiPhone />,
    value: "+91 261 222 4455",
    link: "tel:+912612224455",
  },
  {
    title: "Business Email",
    icon: <FiMail />,
    value: "business@obsio.tech",
    link: "mailto:business@obsio.tech",
  },
  {
    title: "Canada Office",
    icon: <FaMapMarkerAlt />,
    value: "Toronto, Ontario, Canada",
  },
];

const industries = [
  { name: "Food & Restaurant", link: "/industry/restaurant" },
  { name: "Healthcare", link: "/industry/healthcare" },
  { name: "Real Estate", link: "/industry/real-estate" },
  { name: "Transport", link: "/industry/transport" },
  { name: "Fintech", link: "/industry/fintech" },
  { name: "E-Commerce", link: "/industry/ecommerce" },
  { name: "Retail", link: "/industry/retail" },
];

const services = [
  { name: "Web Development", link: "/services/web-development" },
  { name: "App Development", link: "/services/app-development" },
  { name: "UI/UX Design", link: "/services/ui-ux" },
  { name: "AI Agents & Automation", link: "/services/ai-solutions" },
  { name: "DevOps", link: "/services/devops" },
];

const socialIcons = [
  {
    icon: <Linkedin size={20} />,
    link: "https://www.linkedin.com/company/obsio-solutions",
  },
  { icon: <Twitter size={20} />, link: "https://x.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-700 pt-12 px-4 md:px-12 relative z-20 font-space-grotesk">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-12">
          {/* COMPANY INFO */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Obsio Solutions Logo"
                className="h-20 w-20"
              />
              <span className="text-2xl font-bold uppercase">
                Obsio Solutions
              </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* LEFT GROUP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 text-sm w-full">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className={
                      item.title.includes("Office") ? "sm:col-span-2" : ""
                    }
                  >
                    <p className="font-semibold flex items-center gap-2">
                      {item.icon} {item.title}
                    </p>
                    {item.link ? (
                      <Link
                        href={item.link}
                        className="hover:underline break-all"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="break-words">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* RIGHT GROUP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 text-sm w-full">
                {contactInfo2.map((item) => (
                  <div
                    key={item.title}
                    className={
                      item.title.includes("Office") ? "sm:col-span-2 -mt-5" : ""
                    }
                  >
                    <p className="font-semibold flex items-center gap-2">
                      {item.icon} {item.title}
                    </p>
                    {item.link ? (
                      <Link
                        href={item.link}
                        className="hover:underline break-all"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="break-words">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INDUSTRIES + COMPANY */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Industries</h2>
            <ul className="space-y-3 mb-8 text-white/80">
              {industries.map((item, link) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="hover:underline whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/company/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/company/teams" className="hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/company/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT + SERVICES */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Support</h2>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link to="/support/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/support/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/support/terms-and-conditions"
                  className="hover:underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-sm font-semibold uppercase">
              Services
            </h2>
            <ul className="space-y-3 text-white/80">
              {services.map((srv) => (
                <li key={srv.name}>
                  <Link to={srv.link} className="hover:underline">
                    {srv.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-white/60">
          <p className="text-sm text-center sm:text-left">
            © 2018{" "}
            <span className="text-white hover:underline">Obsio Solutions™</span>{" "}
            — All rights reserved.
          </p>

          <div className="flex space-x-5 mt-4 sm:mt-0">
            {socialIcons.map((s, i) => (
              <Link
                key={i}
                to={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
