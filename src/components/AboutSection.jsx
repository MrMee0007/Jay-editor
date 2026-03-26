import React, { memo } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ================= DATA ================= */
const stats = [
  { value: "4+", label: "Years Behind the Lens" },
  { value: "32+", label: "Films & Projects" },
  { value: "8+", label: "Awards & Selections" },
];

const socials = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/yug-gupta-a65663281/", // 🔗 ADD YOUR LINK
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/cinematicyug/", // 🔗 ADD YOUR LINK
  },
];

/* ================= COMPONENT ================= */
const AboutSection = () => {
  return (
    <section className="py-20 sm:py-24 px-4 md:px-12 lg:px-24 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Availability Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 bg-white border border-blue-100 shadow-sm rounded-full px-4 py-1.5">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">Y</span>
            </div>
            <span className="text-xs text-gray-600">
              Available for projects
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[1.2fr_auto] gap-10 md:gap-12 items-center"
        >

          {/* LEFT */}
          <div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent">
                ABOUT ME
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg mb-8 leading-relaxed"
            >
              I'm Yug — a cinematographer focused on crafting immersive
              visual stories through light, motion, and composition. My work
              blends cinematic depth with modern aesthetics to create powerful
              visual experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 sm:gap-10 mb-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-6 text-sm"
            >
              <div>
                <p className="text-gray-500 text-xs">Representation :</p>
                <p className="text-gray-900 font-medium">
                  Pratibha - Cinematography Club
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Email :</p>
                <p className="text-gray-900 font-medium">
                  yuggupta9236@gmail.com
                </p>
              </div>
            </motion.div>

            {/* 🔗 SOCIALS (FIXED) */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 mb-6"
            >
              {socials.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0px 0px 15px rgba(59,130,246,0.4)",
                  }}
                  className="w-10 h-10 rounded-full bg-white shadow-md border border-blue-100 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-400 transition"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(59,130,246,0.4)",
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-blue-600 text-white text-sm sm:text-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              View Page
            </motion.button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center items-center relative mt-8 md:mt-0 group">

            {/* Glow */}
            <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-blue-200/40 blur-3xl" />

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl z-10"
            >
              <img
                src={"https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774567144/Story_eh2xik.jpg"}
                alt="Yug Gupta"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default memo(AboutSection);