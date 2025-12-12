// Navbar.optimized.jsx
import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  memo,
} from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/obsio_white_text.png";

/* ---------------------------------------
   RAW NAV ITEMS (unchanged)
---------------------------------------- */
const RAW_NAV = [
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
        "Restaurant",
        "Real Estate",
        "Transport",
        "Ecommerce",
        "Fintech",
        "EdTech",
        "Logistics",
        "Retail",
        "Healthcare",
        "Manufacturing",
      ],
    },
  },
  {
    label: "Company",
    content: { _: ["About Us", "Careers", "Teams", "Contact Us"] },
  },
];

/* ---------------------------------------
   HELPERS — stable, pure functions
---------------------------------------- */
const slugify = (str = "") =>
  str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

/* Preprocess nav into two shapes:
   - topNav: [{ label, itemsArray }]
   - dropdownMap: { label: [{ section, item, url }] } */
const preprocessNav = (raw) => {
  const topNav = raw.map((n) => {
    const items = [];
    Object.entries(n.content).forEach(([section, arr]) =>
      arr.forEach((item) => items.push({ section, item }))
    );
    return { label: n.label, items };
  });

  const dropdownMap = {};
  topNav.forEach(({ label, items }) => {
    dropdownMap[label] = items.map(({ section, item }) => ({
      section,
      item,
      url: `/${label.toLowerCase()}/${slugify(item)}`,
    }));
  });

  return { topNav, dropdownMap };
};

const { topNav: NAV_ITEMS, dropdownMap: DROPDOWN_MAP } = preprocessNav(RAW_NAV);

/* ---------------------------------------
   Lightweight click-outside hook (stable)
---------------------------------------- */
function useOnClickOutside(ref, handler) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    function listener(e) {
      const el = ref.current;
      if (!el || el.contains(e.target)) return;
      handlerRef.current(e);
    }
    document.addEventListener("mousedown", listener, { passive: true });
    document.addEventListener("touchstart", listener, { passive: true });
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}

/* ---------------------------------------
   MAIN NAVBAR
---------------------------------------- */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((s) => !s), []);
  useOnClickOutside(mobileRef, closeMobile);

  // Close on Escape (stable)
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMobile();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMobile]);

  const bookCallHandler = useCallback(() => {
    window.open(
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0nZXSwTUVw7CiYpB07_1FfNTDrFR8YOountFQNHRvRRYcs03ma7lOcDbI83Pm4ibmlP-HtjI_r?gv=true",
      "_blank"
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/2 text-white p-4 z-50 font-space-grotesk">
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
          {NAV_ITEMS.map((nav) => (
            <FlyoutLink
              key={nav.label}
              label={nav.label}
              items={DROPDOWN_MAP[nav.label]}
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
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu — Framer for main drawer only */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            ref={mobileRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 right-0 h-full w-[85%] bg-neutral-900/70 backdrop-blur-xl border-l border-white/10 shadow-xl z-[60] p-6 md:hidden flex flex-col justify-between"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={closeMobile}
              className="text-3xl absolute top-5 right-5 text-white"
              aria-label="Close menu"
            >
              <FiX />
            </button>

            {/* NAV LIST */}
            <div className="mt-12 flex flex-col gap-6">
              {NAV_ITEMS.map((nav) => (
                <MobileItem
                  key={nav.label}
                  title={nav.label}
                  links={DROPDOWN_MAP[nav.label]}
                  closeMenu={closeMobile}
                />
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-8">
              <button
                onClick={() => {
                  bookCallHandler();
                  closeMobile();
                }}
                className="w-full bg-white text-black font-semibold py-3 rounded-xl text-lg shadow-md"
              >
                Book a Call
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ---------------------------------------
   MOBILE ITEM — memoized, CSS rotations
   (micro animations via Tailwind)
---------------------------------------- */
const MobileItem = memo(function MobileItem({ title, links, closeMenu }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((s) => !s), []);

  return (
    <div className="w-full">
      {/* Title */}
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-3 text-left"
        aria-expanded={open}
      >
        <span className="text-xl font-semibold">{title}</span>

        {/* rotate handled by Tailwind transition on transform */}
        <span
          className={`text-2xl transform transition-transform duration-200 ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>

      {/* Dropdown (use CSS height auto via max-h) */}
      <div
        className={`pl-3 overflow-hidden flex flex-col gap-2 transition-all duration-200 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        {links.map((link) => (
          <Link
            key={link.url}
            to={link.url}
            onClick={closeMenu}
            className="text-sm text-neutral-300 py-1 hover:text-white transition-all"
          >
            {link.item}
          </Link>
        ))}
      </div>

      <div className="h-[1px] bg-white/10 my-3" />
    </div>
  );
});

/* ---------------------------------------
   FLYOUT LINK — Framer for popover only
   Visual underline via CSS (no JS)
---------------------------------------- */
const FlyoutLink = memo(function FlyoutLink({ label, items, children }) {
  const [open, setOpen] = useState(false);
  const openTrue = useCallback(() => setOpen(true), []);
  const openFalse = useCallback(() => setOpen(false), []);

  return (
    <div
      onMouseEnter={openTrue}
      onMouseLeave={openFalse}
      className="relative"
    >
      {/* LABEL — underline uses CSS scale via group hover equivalent */}
      <span className="relative text-white select-none cursor-default">
        {children}
        <span
          className={`absolute -bottom-2 left-0 right-0 h-[2px] bg-indigo-300 origin-left transform transition-transform duration-300 pointer-events-none ${
            open ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transformOrigin: "left center" }}
        />
      </span>

      {/* FLYOUT CONTENT — Framer for big popover transition */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-10 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-md text-white rounded-lg shadow-xl z-40"
            role="menu"
          >
            {/* decorative caret area */}
            <div className="absolute -top-6 left-0 right-0 h-6 pointer-events-none" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-neutral-900/90 pointer-events-none" />

            <DropdownContent links={items} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

/* ---------------------------------------
   DROPDOWN CONTENT — pure render, memoized
   Chunking preserved for original layout
---------------------------------------- */
const DropdownContent = memo(function DropdownContent({ links }) {
  // chunk into columns of 5 (preserve previous behavior)
  const chunks = useMemo(() => {
    const arr = [];
    const chunkSize = 5;
    for (let i = 0; i < links.length; i += chunkSize) {
      arr.push(links.slice(i, i + chunkSize));
    }
    return arr;
  }, [links]);

  return (
    <div className="w-full p-6 text-white flex gap-6">
      {chunks.map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4 min-w-[130px] text-center">
          {column.map((link, i) => (
            <div key={i}>
              {link.section !== "_" && <h3 className="font-semibold mb-1">{link.section}</h3>}
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
});

export default memo(Navbar);
