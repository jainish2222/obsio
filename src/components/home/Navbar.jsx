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

  const bookCallHandler = () => {
    window.open(
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nZXSwTUVw7CiYpB07_1FfNTDrFR8YOountFQNHRvRRYcs03ma7lOcDbI83Pm4ibmlP-HtjI_r?gv=true",
      "_blank"
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 z-50 font-space-grotesk">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4 md:px-0 relative z-20">
        {/* Logo */}
        <Link to="/" className="flex items-center select-none">
          <img
            src={logo}
            alt="Obsio logo"
            className="h-12 w-16 object-contain relative top-2"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 mr-3 items-center">
          {NAV_ITEMS.map((nav, idx) => (
            <FlyoutLink
              key={idx}
              FlyoutContent={() => (
                <DropdownContent content={nav.content} label={nav.label} />
              )}
            >
              {nav.label}
            </FlyoutLink>
          ))}

          {/* Book Call */}
          <button
            className="bg-white text-gray-900 font-semibold px-3 py-2 border border-gray-300 rounded"
            onClick={bookCallHandler}
          >
            Book a call
          </button>
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden p-5 -m-7 text-2xl flex items-center justify-center"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu - NEW UI */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 right-0 h-full w-[85%] bg-neutral-900/70 backdrop-blur-xl border-l border-white/10 shadow-xl z-[60] p-6 md:hidden flex flex-col justify-between"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="text-3xl absolute top-5 right-5 text-white"
            >
              <FiX />
            </button>

            {/* NAV LIST */}
            <div className="mt-12 flex flex-col gap-6">
              {NAV_ITEMS.map((nav, idx) => (
                <MobileItem
                  key={idx}
                  title={nav.label}
                  content={nav.content}
                  closeMenu={() => setMobileOpen(false)}
                />
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-8">
              <button
                onClick={bookCallHandler}
                className="w-full bg-white text-black font-semibold py-3 rounded-xl text-lg shadow-md"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ---------------------------------------
   MOBILE ITEM - NEW UI
---------------------------------------- */
const MobileItem = ({ title, content, closeMenu }) => {
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
    <div className="w-full">
      {/* Title */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex justify-between items-center py-3 text-left"
      >
        <span className="text-xl font-semibold">{title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl"
        >
          +
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="pl-3 overflow-hidden flex flex-col gap-2"
          >
            {allLinks.map((link, i) => (
              <Link
                key={i}
                to={link.url}
                onClick={closeMenu} // ✅ close menu on click
                className="text-sm text-neutral-300 py-1 hover:text-white transition-all"
              >
                {link.item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[1px] bg-white/10 my-3" />
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
        <div
          key={idx}
          className="flex flex-col gap-4 min-w-[130px] text-center"
        >
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
