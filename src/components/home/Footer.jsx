// Production-ready, white-text Footer Component
import React from "react";
import logo from "../../assets/obsio_white_t.png";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 pt-12 px-6 md:px-12 relative z-20 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-12">
          {/* COMPANY + CONTACT */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Obsio Solutions Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold uppercase text-white">Obsio Solutions</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              {/* Mobile */}
              <div>
                <p className="font-semibold flex items-center gap-2">
                  <FiPhone /> Mobile
                </p>
                <a href="tel:+919876543210" className="hover:underline break-all">
                  +91 98765 43210
                </a>
              </div>

              {/* HR Email */}
              <div>
                <p className="font-semibold flex items-center gap-2">
                  <FiMail /> HR Email
                </p>
                <a href="mailto:hr@obsio.tech" className="hover:underline break-all">
                  hr@obsio.tech
                </a>
              </div>

              {/* Business Email */}
              <div>
                <p className="font-semibold flex items-center gap-2">
                  <FiMail /> Business Email
                </p>
                <a href="mailto:business@obsio.tech" className="hover:underline break-all">
                  business@obsio.tech
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="font-semibold flex items-center gap-2">
                  <FiPhone /> Phone
                </p>
                <a href="tel:+912612224455" className="hover:underline break-all">
                  +91 261 222 4455
                </a>
              </div>

              {/* India Office */}
              <div className="sm:col-span-2">
                <p className="font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt /> India Office
                </p>
                <p className="break-words">Surat, Gujarat, India</p>
              </div>

              {/* Canada Office */}
              <div className="sm:col-span-2">
                <p className="font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt /> Canada Office
                </p>
                <p className="break-words">Toronto, Ontario, Canada</p>
              </div>
            </div>
          </div>

          {/* INDUSTRIES + COMPANY */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Industries
            </h2>
            <ul className="space-y-3 mb-8 text-white/80">
              {[
                "Food & Restaurant",
                "Banking",
                "Real Estate",
                "Transport",
                "Sports",
                "E-Commerce",
                "Automotive",
              ].map((item) => (
                <li key={item} className="overflow-x-auto scrollbar-none">
                  <a href="#" className="hover:underline whitespace-nowrap">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Company
            </h2>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* SUPPORT + SERVICES */}
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Support
            </h2>
            <ul className="space-y-3 text-white/80">
              <li><a href="/e1/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/e1/refund-policy" className="hover:underline">Refund Policy</a></li>
              <li><a href="/e1/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
            </ul>

            <h2 className="mt-8 mb-4 text-sm font-semibold uppercase text-white">
              Services
            </h2>
            <ul className="space-y-3 text-white/80">
              {[
                "Web Development",
                "App Development",
                "Shopify Store Development",
                "UI/UX Design",
                "SEO Optimization",
                "AI Agents & Automation",
              ].map((srv) => (
                <li key={srv}>
                  <a href="#" className="hover:underline">
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-white/60">
          <span className="text-sm text-center sm:text-left">
            © 2025{" "}
            <a className="hover:underline text-white" href="#">
              Obsio Solutions™
            </a>{" "}
            — All rights reserved.
          </span>

          <div className="flex space-x-5 mt-4 sm:mt-0">
            {[
              { icon: "ri-facebook-fill" },
              { icon: "ri-instagram-line" },
              { icon: "ri-linkedin-fill" },
            ].map((s, i) => (
              <a
                key={i}
                href="#"
                className="text-white/60 hover:text-white text-xl"
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
