import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useCallback, memo } from "react";
import { Menu, X } from "lucide-react";

/* ------------------ STATIC DATA ------------------ */
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

/* ------------------ NAV ITEM ------------------ */
const NavItem = memo(({ link, isActive, onClick }) => (
  <Link
    to={link.path}
    onClick={onClick}
    className="relative group text-blue-800 hover:text-blue-950 transition duration-300"
  >
    {link.name}

    <span
      className={`absolute left-0 -bottom-2 h-[3px] bg-blue-600 transition-all duration-300 ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </Link>
));

/* ------------------ COMPONENT ------------------ */
export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 bg-blue-100/80 backdrop-blur-xl border-b border-blue-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black tracking-wide text-blue-900"
        >
          YUG <span className="text-blue-600">GUPTA</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-10 text-sm md:text-base font-semibold tracking-wide">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.name}
              link={link}
              isActive={location.pathname === link.path}
            />
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/hireme"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold uppercase tracking-wide hover:bg-blue-700 transition shadow-sm"
        >
          Hire Me
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-blue-900"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-blue-50 border-t border-blue-200"
          >
            <div className="flex flex-col items-center py-8 space-y-6 text-base font-semibold">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.name}
                  link={link}
                  isActive={location.pathname === link.path}
                  onClick={closeMenu}
                />
              ))}

              <Link
                to="/hireme"
                onClick={closeMenu}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}