import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { useState, memo, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  const links = [
    { name: "Home",    path: "/" },
    { name: "Work",    path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ─── NAVBAR ─── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? "h-[62px] bg-black/80 backdrop-blur-2xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "h-[78px] bg-transparent border-b border-transparent"
          }
          px-5 md:px-12 lg:px-20 flex justify-between items-center`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Animated logo mark */}
          <div className="relative w-7 h-7">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-orange-400
                             opacity-20 group-hover:opacity-40 transition-all duration-300 blur-sm scale-150" />
            <span className="relative block w-full h-full rounded-full border border-red-500/60
                             group-hover:border-orange-400 transition-all duration-300
                             flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-400
                               shadow-[0_0_10px_rgba(255,80,0,0.9)]" />
            </span>
          </div>
          <span className="font-display text-white text-sm md:text-base tracking-[0.28em] uppercase
                           group-hover:text-orange-400/90 transition-colors duration-300">
            Jay Sharma
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10 lg:gap-14">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative text-xs tracking-[0.3em] uppercase transition-colors duration-300
                 ${isActive ? "text-white" : "text-white/45 hover:text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <motion.span
                    className="absolute left-0 -bottom-1.5 h-px bg-gradient-to-r from-red-500 to-orange-400"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="relative group px-5 py-2 text-xs uppercase tracking-[0.28em]
                       text-white/75 overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 border border-white/20 group-hover:border-red-500/70
                             transition-colors duration-300" />
            <span className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-orange-500/0
                             group-hover:from-red-600/15 group-hover:to-orange-500/10
                             transition-all duration-400" />
            <span className="relative group-hover:text-white transition-colors duration-300">
              Hire Me
            </span>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-9 h-9 flex items-center justify-center
                     text-white/80 hover:text-white transition-colors"
          aria-label="toggle menu"
        >
          <AnimatePresence mode="wait">
            {open
              ? <motion.span key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
              : <motion.span key="mnu" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.span>
            }
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* ─── MOBILE MENU ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-[62px] left-0 right-0 z-40 bg-[#060606]/98 backdrop-blur-2xl
                       border-b border-white/8 flex flex-col items-center gap-0 pt-6 pb-10
                       divide-y divide-white/5"
          >
            {links.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `w-full text-center py-5 text-sm uppercase tracking-[0.4em] transition-colors duration-300
                   ${isActive ? "text-orange-400" : "text-white/50 hover:text-white"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-8 w-full flex justify-center">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-10 py-3 border border-red-500/50 text-white/80
                           hover:bg-red-600/10 hover:text-white
                           uppercase tracking-[0.3em] text-sm transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);