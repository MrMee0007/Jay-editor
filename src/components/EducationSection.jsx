import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "GLA University",
    year: "2022 – 2026",
    grade: "GPA: 6.5 / 10",
  },
  {
    degree: "Higher Secondary Education",
    field: "",
    institution: "Senior Secondary School",
    year: "2020 – 2022",
    grade: "",
  },
];

export default function EducationSection() {
  return (
    <section className="bg-black text-stone-100 overflow-hidden">

      {/* Section Header */}
      <div className="py-32 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          EDUCATION
        </motion.h2>
        <p className="text-red-500 tracking-[0.4em] text-xs mt-6 uppercase">
          Academic Foundation
        </p>
      </div>

      {/* Showcase Panels */}
      {educationData.map((item, index) => (
        <div
          key={index}
          className="relative min-h-[80vh] flex items-center border-t border-stone-800"
        >
          {/* Giant Background Year */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[20vw] font-black text-stone-900 opacity-30 select-none">
              {item.year.split("–")[0]}
            </span>
          </div>

          <div className="max-w-7xl mx-auto w-full px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center relative z-10">

            {/* LEFT SIDE - TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                {item.degree}
              </h3>

              {item.field && (
                <p className="text-red-500 text-lg mb-4">
                  {item.field}
                </p>
              )}

              <p className="text-stone-400 text-lg mb-3">
                {item.institution}
              </p>

              {item.grade && (
                <p className="text-stone-500 text-md mb-6">
                  {item.grade}
                </p>
              )}

              {/* Decorative Divider */}
              <div className="w-20 h-[2px] bg-red-500"></div>
            </motion.div>

            {/* RIGHT SIDE - VISUAL BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="h-[350px] md:h-[450px] rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 border border-stone-700 shadow-2xl relative overflow-hidden">

                {/* Floating Red Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-3xl rounded-full"></div>

                {/* Minimal Academic Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Center Label */}
                <div className="flex items-center justify-center h-full text-stone-500 text-lg tracking-widest uppercase">
                  Academic Milestone
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      ))}
    </section>
  );
}
