import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/obsio_white_text.png";

/* ---------------------------------------
   NAV ITEMS (STATIC)
---------------------------------------- */
const NAV_ITEMS = [
  {
    label: "Services",
    content: {
      _: [
        "Web Development",
        "App Development",
        "UI-UX",
        "AI Solutions",
        "DevOps",
      ],
    },
  },
  {
    label: "Work",
    content: { _: ["Case Studies", "Portfolio"] },
  },
  {
    label: "Industry",
    content: {
      _: [
        "Food & Restaurant",
        "Banking",
        "Real Estate",
        "Transport",
        "Sports",
        "Ecommerce",
        "Automotive",
        "Education",
        "Enterprise",
        "Travel",
        "Healthcare",
        "Entertainment",
        "On Demand App",
        "Internet of Things",
      ],
    },
  },
  {
    label: "Company",
    content: { _: ["About Us", "Careers", "Teams"] },
  },
];

/* ---------------------------------------
   CUSTOM HOOK → CLICK OUTSIDE
---------------------------------------- */
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/* ---------------------------------------
   MAIN NAVBAR
---------------------------------------- */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  useOnClickOutside(mobileRef, () => setMobileOpen(false));

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-50 font-space-grotesk">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4 md:px-0 relative z-20">
        {/* Logo */}
        <Link to="/" className="flex items-center select-none">
          <img
            src={logo}
            alt="Obsio logo"
            className="h-12 w-16 object-contain relative top-2"
          />
          {/* <h1 className="text-md md:text-2xl font-jura font-extrabold">Obiso</h1> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 mr-3 items-center">
          {NAV_ITEMS.map((nav, idx) => (
            <FlyoutLink
              FlyoutContent={() => (
                <DropdownContent content={nav.content} label={nav.label} />
              )}
            >
              {nav.label}
            </FlyoutLink>
          ))}

          {/* Book Call */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/book-call"
              className="bg-white text-gray-900 font-semibold px-3 py-2 border border-gray-300 rounded"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-neutral-900/90 backdrop-blur-md border-t border-neutral-700 p-4 md:hidden z-[60] overflow-y-auto"
          >
            {NAV_ITEMS.map((nav, idx) => (
              <MobileItem key={idx} title={nav.label} content={nav.content} />
            ))}

            {/* Book Call Mobile */}
            <Link
              to="/book-call"
              className="block text-center w-full bg-white text-gray-900 font-semibold px-4 py-2 mt-4 border border-gray-300 rounded"
            >
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ---------------------------------------
   MOBILE ITEM
---------------------------------------- */
const MobileItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const allLinks = useMemo(() => {
    const links = [];
    Object.entries(content).forEach(([section, items]) => {
      items.forEach((item) =>
        links.push({
          section,
          item,
          url: `/${title.toLowerCase()}/${item
            .toLowerCase()
            .replace(/\s+/g, "-")}`,
        })
      );
    });
    return links;
  }, [content, title]);

  return (
    <div className="border-b border-neutral-800 py-3">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex justify-between items-center"
      >
        <span className="text-lg">{title}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden pl-2 pt-2 flex flex-col gap-2"
          >
            {allLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.url}
                className="text-sm text-neutral-200 hover:text-blue-400 transition-colors"
              >
                {link.item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------------------------------
   DESKTOP FLYOUT LINK
---------------------------------------- */
const FlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const show = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      {/* LABEL — NOT CLICKABLE */}
      <span className="relative text-white select-none cursor-default">
        {children}
        <span
          className="absolute -bottom-2 left-0 right-0 h-[2px] bg-indigo-300 origin-left transition-transform duration-300 pointer-events-none"
          style={{ transform: show ? "scaleX(1)" : "scaleX(0)" }}
        />
      </span>

      {/* FLYOUT CONTENT */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25 }}
            className="absolute left-1/2 top-10 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-md text-white rounded-lg shadow-xl z-40"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 pointer-events-none" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-neutral-900/90 pointer-events-none" />

            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------------------------------
   DROPDOWN CONTENT
---------------------------------------- */
const DropdownContent = ({ content, label }) => {
  const allLinks = [];

  Object.entries(content).forEach(([section, items]) => {
    items.forEach((item) =>
      allLinks.push({
        section,
        item,
        url: `/${label.toLowerCase()}/${item
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      })
    );
  });

  const chunkSize = 5;
  const chunks = [];
  for (let i = 0; i < allLinks.length; i += chunkSize) {
    chunks.push(allLinks.slice(i, i + chunkSize));
  }

  return (
    <div className="w-full p-6 text-white flex gap-6">
      {chunks.map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4 min-w-[130px] text-center">
          {column.map((link, i) => (
            <div key={i}>
              {link.section !== "_" && (
                <h3 className="font-semibold mb-1">{link.section}</h3>
              )}
              <Link
                to={link.url}
                className="block text-sm hover:text-blue-400 transition-colors select-none"
              >
                {link.item}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
