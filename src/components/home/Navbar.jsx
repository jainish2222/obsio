import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
            src="data:image/jpeg;base64,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"
            alt="Obsio Logo"
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
