import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+",   label: "Years Experience" },
  { value: "136+", label: "Projects Completed" },
  { value: "8+",   label: "Happy Clients" },
  { value: "∞",    label: "Frames Crafted" },
];

const AboutSection = () => {
  const ref   = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[#060606] text-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ─── Ambient backgrounds ─── */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 55% 50% at 35% 60%, rgba(239,68,68,0.07) 0%, transparent 65%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Vertical side labels */}
      <div className="hidden lg:block absolute left-5 top-1/2 -translate-y-1/2 text-vertical select-none">
        <span className="text-white/15 text-xs tracking-[0.6em] uppercase">About • Story • Craft</span>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-vertical select-none">
        <span className="text-red-500/25 text-xs tracking-[0.6em] uppercase">Visual • Post • Edit</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ─── HEADING ROW ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-red-400
                           border-l-2 border-red-500 pl-3 mb-5">
            The Craft
          </span>
          <h2 className="editorial-heading-large leading-[0.88]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              ABOUT
            </span>
            <br />
            <span className="text-white">ME</span>
          </h2>
        </motion.div>

        {/* ─── MAIN GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4 relative group"
          >
            <div className="aspect-[3/4] relative">
              {/* Offset frame */}
              <div className="absolute -top-4 -right-4 w-full h-full
                              border border-red-500/30 group-hover:border-red-500/60
                              transition-all duration-700 z-0" />

              <div className="relative w-full h-full overflow-hidden border border-white/8
                              group-hover:border-red-400/40 transition-all duration-700 z-10">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 to-orange-400/15
                                opacity-0 group-hover:opacity-100 blur-2xl transition duration-700 z-10" />

                <img
                  src="https://res.cloudinary.com/gpypzfsh/image/upload/v1786913036/WhatsApp_Image_2026-04-23_at_8.31.53_PM.jpg"
                  alt="Jay Sharma — Video Editor"
                  className="w-full h-full object-cover grayscale
                             group-hover:grayscale-0 group-hover:scale-105
                             transition-all duration-700"
                />

                {/* Bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20" />

                {/* Name tag at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-30 translate-y-2
                                group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Visual Editor
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 flex flex-col justify-center gap-6"
          >
            <p className="text-lg leading-relaxed text-white/65">
              I am a visual editor specializing in transforming raw footage into compelling,
              emotionally engaging stories. My work spans commercials, music videos, short films,
              and digital content — where rhythm, pacing, and precision define impact.
            </p>
            <p className="text-base leading-relaxed text-white/45">
              Editing is where stories truly come alive. I focus on seamless transitions,
              dynamic pacing, and narrative flow to create visuals that not only look stunning
              but feel unforgettable. Every cut is intentional. Every frame matters.
            </p>

            {/* Horizontal divider */}
            <div className="w-full h-px bg-gradient-to-r from-red-500/30 via-white/10 to-transparent mt-2" />

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="group"
                >
                  <div className="font-display text-3xl md:text-4xl text-transparent bg-clip-text
                                  bg-gradient-to-r from-red-400 to-orange-400
                                  group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]
                                  transition-all duration-300">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] mt-1
                                  text-white/30 group-hover:text-white/55 transition-colors duration-300">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {["Adobe Premiere", "After Effects", "DaVinci Resolve", "Color Grading", "Motion Graphics", "AI Video"].map((tag) => (
                <span key={tag}
                      className="text-xs uppercase tracking-[0.15em] px-3 py-1.5
                                 border border-white/10 text-white/35
                                 hover:border-red-500/40 hover:text-white/70
                                 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;