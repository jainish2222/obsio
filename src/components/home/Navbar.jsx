import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/obsio_black.png'
// FIXED NAV DATA
const NAV_ITEMS = [
  {
    label: "Services",
    content: {
      _: ["Web Development", "App Development", "UX/UI", "AI Solutions", "DevOps"],
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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-50 mb-18">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4 md:px-0 relative z-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo} alt="Obsio Logo"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 mr-3 items-center">
          {NAV_ITEMS.map((nav, idx) => (
            <FlyoutLink
              key={idx}
              href="#"
              FlyoutContent={() => <DropdownContent content={nav.content} />}
            >
              {nav.label}
            </FlyoutLink>
          ))}

          {/* Book Call Button */}
          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 font-semibold px-3 py-2 rounded-none border border-gray-300 transition-all duration-300"
          >
            Book a Call
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen((p) => !p)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-neutral-900/90 backdrop-blur-md border-t border-neutral-700 p-4 md:hidden z-[60] overflow-y-auto"
          >
            {NAV_ITEMS.map((nav, idx) => (
              <MobileItem key={idx} title={nav.label} content={nav.content} />
            ))}

            {/* Mobile CTA */}
            <div className="mt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block text-center w-full bg-white text-gray-900 font-semibold px-4 py-2 rounded border border-gray-300"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ---------------------------------------------------
   MOBILE ITEM
------------------------------------------------------*/
const MobileItem = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-800 py-3">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg">{title}</span>
        <span className="text-xl leading-none">{open ? "−" : "+"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <DropdownContent content={content} mobile />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------------------------------------------
   DESKTOP FLYOUT LINK
------------------------------------------------------*/
const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 left-0 right-0 h-[2px] origin-left rounded-full bg-indigo-300 transition-transform duration-300"
        />
      </a>

     <AnimatePresence>
  {showFlyout && (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.3 }}
      className="absolute left-1/2 top-10 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-md
                 text-white rounded-lg shadow-xl z-40"
    >
      {/* Invisible hover buffer so it doesn’t disappear when cursor moves down */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

      {/* Small diamond pointer */}
      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2
                      rotate-45 bg-neutral-900/90 backdrop-blur-md" />

      <FlyoutContent />
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

/* ---------------------------------------------------
   DROPDOWN CONTENT
------------------------------------------------------*/
const DropdownContent = ({ content, mobile }) => {
  const allLinks = [];

  // Convert sections → links
  Object.entries(content).forEach(([section, items]) => {
    items.forEach((item) => {
      allLinks.push({ section, item });
    });
  });

  // Chunk for columns (desktop)
  const chunkSize = 5;
  const chunks = [];
  for (let i = 0; i < allLinks.length; i += chunkSize) {
    chunks.push(allLinks.slice(i, i + chunkSize));
  }

  // Mobile: simple stacked list
  if (mobile) {
    return (
      <div className="pt-2 pl-2 flex flex-col gap-2">
        {allLinks.map(({ section, item }, idx) => (
          <a
            key={idx}
            href="#"
            className="block text-sm text-neutral-200 hover:text-blue-400 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    );
  }

  // Desktop: multi-column flyout
  return (
    <div className="w-full p-6 text-white flex gap-6">
      {chunks.map((chunk, idx) => (
        <div key={idx} className="flex flex-col gap-4 min-w-[120px]">
          {chunk.map(({ section, item }, i) => (
            <div key={i}>
              {section !== "_" && <h3 className="font-semibold mb-1">{section}</h3>}
              <a
                href="#"
                className="block text-sm hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
