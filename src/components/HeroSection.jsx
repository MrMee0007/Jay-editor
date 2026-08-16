import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">

      {/* ══ BACKGROUND VIDEO — parallax ══ */}
      <motion.div style={{ y, scale }} className="absolute inset-0 origin-center">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/gpypzfsh/video/upload/v1786912930/lv_0_20260425195346_1.mp4" type="video/mp4" />
        </video>

        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/25 via-orange-900/10 to-transparent mix-blend-screen" />

        {/* Vignette */}
        <div className="absolute inset-0"
             style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />

        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                      backgroundSize: "200px 200px" }} />
      </motion.div>

      {/* ══ SCROLLABLE CONTENT ══ */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 lg:px-20 py-8">

        {/* ─── MAIN COPY ─── */}
        <div className="flex-1 flex items-center">
          <div className="max-w-5xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-gradient-to-r from-red-500 to-orange-400" />
              <span className="text-orange-400 uppercase tracking-[0.45em] text-xs md:text-sm">
                Creative Cinematographer
              </span>
            </motion.div>

            {/* VISUAL */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-heading-giant text-white"
              >
                VISUAL
              </motion.h1>
            </div>

            {/* STORYTELLER */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-heading-giant"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400
                                 drop-shadow-[0_0_40px_rgba(239,68,68,0.4)]">
                  STORY
                </span>
                <span className="text-white ml-2">TELLER</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.55 }}
              className="mt-7 text-white/55 max-w-md text-base md:text-lg leading-relaxed"
            >
              Crafting cinematic experiences through lens and light.
              Where emotion meets precision, and every frame tells a story.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.75 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio"
                className="group relative px-8 py-4 overflow-hidden text-sm uppercase tracking-[0.25em] text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500
                                 transition-all duration-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600
                                 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <span className="absolute inset-0 shadow-[0_0_30px_rgba(239,68,68,0.5)] opacity-60 group-hover:opacity-100 transition" />
                <span className="relative flex items-center gap-2">
                  Explore Works
                  <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                </span>
              </a>

              <Link
                to="/works"
                className="group px-8 py-4 text-sm uppercase tracking-[0.25em]
                           text-white/60 border border-white/20
                           hover:text-white hover:border-white/50 transition-all duration-300"
              >
                View Full Portfolio
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ─── BOTTOM ROW ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-2"
        >
          {/* Scroll indicator */}
          <div className="flex items-center gap-3 text-white/30">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30 relative overflow-hidden">
              <motion.div
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-orange-400 to-transparent"
                animate={{ y: ["0%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
          </div>

          {/* Stats mini-bar */}
          <div className="flex gap-8 md:gap-10">
            {[["3+", "Years"], ["136+", "Projects"], ["8+", "Clients"]].map(([v, l]) => (
              <div key={l} className="text-right">
                <div className="font-display text-lg text-white/80 leading-none">{v}</div>
                <div className="text-xs text-white/30 uppercase tracking-[0.2em] mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;