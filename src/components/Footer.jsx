import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/jayshrma._/",              label: "Instagram" },
  { icon: FaWhatsapp,  href: "https://wa.me/8532917086",                           label: "WhatsApp" },
  { icon: FaLinkedinIn,href: "https://www.linkedin.com/in/jay-sharma-200382289/",  label: "LinkedIn" },
];

const navLinks = ["About", "Works", "Services", "Contact"];

const Footer = () => (
  <footer className="relative bg-[#050505] overflow-hidden border-t border-white/6">

    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none"
         style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 70%)" }} />

    {/* ─── BIG MARQUEE NAME ─── */}
    <div className="overflow-hidden border-b border-white/5 py-6 select-none">
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-16"
        style={{ width: "max-content" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="font-display text-[clamp(3rem,10vw,7rem)] uppercase
                                   leading-none tracking-tight
                                   text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}>
            Jay Sharma &nbsp;·&nbsp; Visual Editor &nbsp;·&nbsp;&nbsp;
          </span>
        ))}
      </motion.div>
    </div>

    {/* ─── MAIN FOOTER GRID ─── */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Col 1 — Brand */}
        <div>
          <Link to="/" className="group flex items-center gap-3 mb-6 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-500 to-orange-400
                             shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
            <span className="font-display text-white text-base tracking-[0.25em] uppercase
                             group-hover:text-orange-400 transition duration-300">
              Jay Sharma
            </span>
          </Link>
          <p className="text-white/35 text-sm leading-relaxed max-w-[260px]">
            Visual editor crafting cinematic stories through precision, rhythm, and emotion.
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 aria-label={label}
                 className="group w-10 h-10 flex items-center justify-center
                            border border-white/10 text-white/40
                            hover:border-red-500/50 hover:text-white hover:bg-red-500/10
                            transition-all duration-300">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Nav */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-6">Navigation</p>
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                 className="group flex items-center gap-2 text-sm text-white/45
                            hover:text-white transition-colors duration-300 w-fit">
                <span className="w-0 group-hover:w-4 h-px bg-red-500 transition-all duration-300" />
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Col 3 — CTA */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/25 mb-4">Let's work together</p>
            <h3 className="font-display text-2xl md:text-3xl uppercase text-white leading-tight mb-6">
              Have a project<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">in mind?</span>
            </h3>
            <Link to="/contact"
                  className="group inline-flex items-center gap-3 px-6 py-3
                             border border-white/15 text-white/70 text-xs uppercase tracking-[0.25em]
                             hover:border-red-500/50 hover:text-white hover:bg-red-500/8
                             transition-all duration-300">
              Get In Touch
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <p className="text-white/20 text-xs mt-10">
            jaysharma1882005@gmail.com
          </p>
        </div>
      </div>
    </div>

    {/* ─── BOTTOM BAR ─── */}
    <div className="border-t border-white/5 py-5 px-6 md:px-12 lg:px-20
                    flex flex-col sm:flex-row items-center justify-between gap-3
                    text-xs text-white/20 tracking-wide">
      <span>© {new Date().getFullYear()} Jay Sharma. All rights reserved.</span>
      <span className="flex items-center gap-1">
        Crafted with <span className="text-red-500 mx-0.5">♥</span> &amp; cinematic precision
      </span>
    </div>
  </footer>
);

export default Footer;