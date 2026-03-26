// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";
// import { Link } from "react-router-dom";
// import { herovideo } from "../assets/assets";
// import { useState } from "react";

// const HeroSection = () => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black/20">

//       {/* ================= Background Video ================= */}
//       <motion.div
//         initial={{ scale: 1.25 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 5, ease: "easeOut" }}
//         className="absolute inset-0"
//       >
//         <video
//           src={herovideo}
//           autoPlay
//           muted
//           loop
//           playsInline
//           onLoadedData={() => setLoaded(true)}
//           className={`w-full h-full object-cover transition-opacity duration-2000
//           ${loaded ? "opacity-100" : "opacity-0"}
//           brightness-[0.45] contrast-125 saturate-110`}
//         />

//         {/* Black + Red Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
//       </motion.div>

//       {/* Ambient Red Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-[500px] h-[500px] bg-red-600/20 blur-[180px] rounded-full -top-32 -left-32 animate-pulse"></div>
//         <div className="absolute w-[400px] h-[400px] bg-red-700/20 blur-[160px] rounded-full bottom-0 right-0 animate-pulse"></div>
//       </div>

//       {/* ================= Content ================= */}
//       <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 lg:px-24 py-10">

//         {/* ===== NAVBAR ===== */}
//         <motion.nav
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="flex justify-between items-center backdrop-blur-xl bg-red-900/10 border border-red-600/30 px-8 py-4 rounded-full shadow-[0_0_40px_rgba(255,0,0,0.2)]"
//         >
//           <div className="flex items-center gap-3">
//             <span className="w-3 h-3 bg-red-600 rounded-full animate-ping"></span>
//             <span className="text-white font-bold tracking-[0.3em] text-lg">
//                 YUG GUPTA
//             </span>
//           </div>

//           <div className="hidden md:flex gap-12 text-white/70 uppercase tracking-wider text-sm">
//             <a href="#about" className="hover:text-red-500 transition duration-300">About</a>
//             <Link to="/works" className="hover:text-red-500 transition duration-300">Works</Link>
//             <a href="#services" className="hover:text-red-500 transition duration-300">Services</a>
//             <a href="#contact" className="hover:text-red-500 transition duration-300">Contact</a>
//           </div>
//         </motion.nav>

//         {/* ===== MAIN HERO TEXT ===== */}
//         <div className="flex-1 flex items-center">
//           <div className="max-w-6xl">

//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="text-red-500 uppercase tracking-[0.5em] text-xs md:text-sm mb-8"
//             >
//               Creative Cinematographer
//             </motion.p>

//             {/* DRAMATIC TITLE */}
//             <div className="overflow-hidden">
//               <motion.h1
//                 initial={{ y: "120%" }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="text-6xl sm:text-7xl md:text-[120px] font-black leading-none text-white tracking-tight"
//               >
//                 VISUAL
//               </motion.h1>
//             </div>

//             <div className="overflow-hidden">
//               <motion.h1
//                 initial={{ y: "120%" }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 1, delay: 1.2 }}
//                 className="text-6xl sm:text-7xl md:text-[120px] font-black leading-none"
//               >
//                 <span className="bg-gradient-to-r from-red-600 via-red-400 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,0,0,0.6)]">
//                   STORY
//                 </span>{" "}
//                 <span className="text-white">TELLER</span>
//               </motion.h1>
//             </div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.6 }}
//               className="mt-10 text-white/70 max-w-xl text-lg leading-relaxed"
//             >
//               Crafting cinematic experiences through lens and light.
//               Specializing in film, commercial videography, and editorial photography.
//             </motion.p>

//             {/* ===== CTA BUTTON ===== */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.8 }}
//               className="mt-12"
//             >
//               <a
//                 href="#portfolio"
//                 className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-red-600 text-white font-bold uppercase tracking-wider overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-500 hover:scale-110 hover:bg-red-700"
//               >
//                 <span className="relative z-10">Explore Works</span>

//                 {/* Glow Layer */}
//                 <span className="absolute inset-0 bg-red-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></span>
//               </a>
//             </motion.div>
//           </div>
//         </div>

//         {/* ===== SCROLL INDICATOR ===== */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2.5 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 text-xs tracking-widest uppercase"
//         >
//           <span>Scroll</span>
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="mt-2 text-red-500"
//           >
//             <ChevronDown size={26} />
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative h-screen flex items-center px-8 md:px-20 bg-black overflow-hidden">

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center scale-105 animate-slowZoom"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000')",
//         }}
//       />

//       {/* Dark Cinematic Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70" />

//       {/* Soft Ambient Red Glow */}
//       <div className="absolute right-[-200px] top-[-100px] w-[600px] h-[600px] bg-gradient-to-br from-red-600/40 to-transparent rounded-full blur-[150px] animate-pulseSlow" />

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl">

//         {/* Tag */}
//         <p className="text-red-500 tracking-[6px] text-xs mb-6 uppercase animate-fadeUp">
//           Creative Cinematographer
//         </p>

//         {/* Title */}
//         <h1 className="uppercase font-black leading-[0.85] text-[60px] md:text-[130px]">
//           <span className="block text-white animate-slideUp">
//             Visual
//           </span>

//           <span className="block bg-gradient-to-r from-red-500 via-rose-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,0,0.6)] animate-softGlow">
//             Story
//           </span>

//           <span className="block text-white animate-slideUp delay-200">
//             Teller
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <p className="mt-8 text-gray-300 max-w-xl text-lg leading-relaxed animate-fadeUp delay-300">
//           Crafting cinematic experiences through lens and light.
//           Specializing in film, commercial videography,
//           and editorial photography.
//         </p>

//         {/* Button */}
//         <button className="relative mt-10 px-12 py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-sm font-semibold tracking-widest overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.6)]">
//           <span className="relative z-10">EXPLORE WORKS</span>
//           <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-500"></div>
//         </button>
//       </div>

//       {/* Scroll */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 tracking-[4px] animate-bounce z-10">
//         SCROLL ↓
//       </div>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes slideUp {
//             from { opacity: 0; transform: translateY(60px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           @keyframes fadeUp {
//             from { opacity: 0; transform: translateY(40px); }
//             to { opacity: 1; transform: translateY(0); }
//           }

//           @keyframes softGlow {
//             from { text-shadow: 0 0 15px rgba(255,0,0,0.4); }
//             to { text-shadow: 0 0 40px rgba(255,0,0,0.9); }
//           }

//           @keyframes slowZoom {
//             from { transform: scale(1.05); }
//             to { transform: scale(1.12); }
//           }

//           @keyframes pulseSlow {
//             0% { opacity: 0.4; }
//             50% { opacity: 0.7; }
//             100% { opacity: 0.4; }
//           }

//           .animate-slideUp { animation: slideUp 1s ease forwards; }
//           .animate-fadeUp { animation: fadeUp 1.2s ease forwards; }
//           .animate-softGlow { animation: softGlow 2.5s infinite alternate; }
//           .animate-slowZoom { animation: slowZoom 18s ease-in-out infinite alternate; }
//           .animate-pulseSlow { animation: pulseSlow 6s ease-in-out infinite; }
//         `}
//       </style>

//     </section>
//   );
// };

// // export default HeroSection;
// import React, { useEffect, useState } from "react";
// import { photo } from "../assets/assets";

// export default function HeroSection() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-x-hidden">

//       {/* NAV */}
//       <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
//         <span className="text-lg tracking-tight font-semibold">
//           YUG GUPTA
//         </span>
//         <div className="flex gap-10 text-xs uppercase tracking-[0.3em]">
//           <a href="#work" className="hover:opacity-60">Work</a>
//           <a href="#contact" className="hover:opacity-60">Contact</a>
//         </div>
//       </nav>

//       {/* HERO - ASYMMETRIC LAYOUT */}
//       <section className="min-h-screen flex flex-col lg:flex-row relative">

//         {/* LEFT MASSIVE TYPO */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-20 py-32 relative">

//           <div>
//             <h1 className="text-[15vw] lg:text-[8vw] font-extrabold uppercase leading-[0.8] tracking-tighter">
//               VISUAL
//             </h1>

//             <h1 className="text-[15vw] lg:text-[8vw] font-extrabold uppercase leading-[0.8] tracking-tighter text-primary">
//               STORY
//             </h1>

//             <h1 className="text-[15vw] lg:text-[8vw] font-extrabold uppercase leading-[0.8] tracking-tighter">
//               TELLING
//             </h1>

//             <p className="mt-12 max-w-md text-sm opacity-70 leading-relaxed">
//               Cinematic narratives crafted through contrast, texture,
//               architectural framing and emotional depth.
//             </p>
//           </div>

//         </div>

//         {/* RIGHT IMAGE WITH PARALLAX */}
//         <div className="w-full lg:w-1/2 relative overflow-hidden">

//           <div
//             style={{ transform: `translateY(${scrollY * 0.25}px)` }}
//             className="h-[120%]"
//           >
//             <img
//               src={photo}
//               alt="Cinematic"
//               className="w-full h-full object-cover grayscale contrast-125"
//             />
//           </div>

//           {/* Vertical Label */}
//           <div className="absolute right-6 bottom-10 rotate-90 origin-bottom-right text-xs uppercase tracking-[0.4em] opacity-50">
//             Director of Photography
//           </div>

//         </div>
//       </section>

//       {/* WORK — FLOATING EDITORIAL GRID */}
//       <section id="work" className="px-8 lg:px-20 py-40">

//         <div className="mb-32">
//           <h2 className="text-[12vw] lg:text-[6vw] font-extrabold uppercase leading-none tracking-tight">
//             WORK
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 gap-24">

//           {[
//             { title: "SHADOWS OF REASON", year: "2024" },
//             { title: "NORDIC SILENCE", year: "2023" },
//             { title: "CONCRETE PULSE", year: "2022" },
//             { title: "FRACTURED LIGHT", year: "2021" }
//           ].map((project, index) => (
//             <div
//               key={index}
//               className="group relative cursor-pointer"
//             >
//               {/* Image */}
//               <div className="overflow-hidden">
//                 <img
//                   src={photo}
//                   alt={project.title}
//                   className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
//                 />
//               </div>

//               {/* Floating Text */}
//               <div className="absolute -bottom-8 left-8 bg-white dark:bg-black px-8 py-6 shadow-xl group-hover:translate-y-[-10px] transition-transform duration-500">
//                 <h3 className="text-2xl uppercase font-bold tracking-tight">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs uppercase tracking-[0.3em] opacity-60 mt-2">
//                   {project.year}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </section>

//       {/* BIG STATEMENT SECTION */}
//       <section className="px-8 lg:px-20 py-40 bg-black text-white">

//         <h2 className="text-[14vw] lg:text-[7vw] font-extrabold uppercase leading-[0.9] tracking-tight">
//           CINEMA IS <br />
//           SCULPTED <span className="text-primary">LIGHT</span>
//         </h2>

//       </section>

//       {/* CONTACT — MINIMAL */}
//       <section
//         id="contact"
//         className="px-8 lg:px-20 py-40 border-t border-black/10 dark:border-white/10"
//       >

//         <h2 className="text-[10vw] lg:text-[5vw] font-extrabold uppercase mb-20">
//           CONTACT
//         </h2>

//         <div className="flex flex-col gap-10 text-lg">
//           <a
//             href="mailto:hello@mariandean.studio"
//             className="hover:text-primary transition-colors"
//           >
//             hello@mariandean.studio
//           </a>

//           <a
//             href="tel:+1234567890"
//             className="hover:text-primary transition-colors"
//           >
//             +1 234 567 890
//           </a>
//         </div>

//       </section>

//       {/* DARK MODE TOGGLE */}
//       <button
//         onClick={() => document.documentElement.classList.toggle("dark")}
//         className="fixed bottom-10 right-10 w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center transition-transform hover:scale-110"
//       >
//         ◐
//       </button>

//     </div>
//   );
// }

import React from "react";
import { photo } from "../assets/assets";

export default function HeroSection() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-x-hidden relative">

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[160px] rounded-full -z-10"></div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
        <span className="text-lg tracking-tight font-semibold">
          YUG GUPTA
        </span>

        <div className="flex gap-10 text-xs uppercase tracking-[0.3em] font-medium">
          <a href="#work" className="hover:text-primary transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 pt-40 pb-20 gap-20">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">

          <h1 className="text-[13vw] sm:text-[10vw] lg:text-[6vw] font-extrabold uppercase leading-[0.9] tracking-tight">
            VISUAL
          </h1>

          <h1 className="text-[13vw] sm:text-[10vw] lg:text-[6vw] font-extrabold uppercase leading-[0.9] tracking-tight text-primary">
            STORY
          </h1>

          <h1 className="text-[13vw] sm:text-[10vw] lg:text-[6vw] font-extrabold uppercase leading-[0.9] tracking-tight">
            TELLING
          </h1>

          <p className="mt-12 max-w-md text-sm md:text-base text-black/70 dark:text-white/70 leading-relaxed">
            Cinematic narratives crafted through contrast, texture,
            architectural framing and emotional depth.
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="#work"
              className="px-8 py-3 bg-primary text-white text-xs uppercase tracking-widest font-semibold hover:scale-105 transition-transform"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-black dark:border-white text-xs uppercase tracking-widest font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 relative">

          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src={photo}
              alt="Cinematic"
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-black px-6 py-4 shadow-xl border border-black/10 dark:border-white/10">
            <p className="text-xs uppercase tracking-[0.3em] opacity-60">
              Director of Photography
            </p>
          </div>

        </div>

      </section>

      {/* WORK SECTION */}
      <section
        id="work"
        className="px-8 lg:px-20 py-32 border-t border-black/5 dark:border-white/5"
      >

        <div className="mb-20">
          <h2 className="text-[10vw] lg:text-[4vw] font-extrabold uppercase tracking-tight">
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {[
            { title: "SHADOWS OF REASON", year: "2024" },
            { title: "NORDIC SILENCE", year: "2023" },
            { title: "CONCRETE PULSE", year: "2022" },
            { title: "FRACTURED LIGHT", year: "2021" },
          ].map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >

              <div className="overflow-hidden rounded-xl">
                <img
                  src={photo}
                  alt={project.title}
                  className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl uppercase font-bold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs uppercase tracking-[0.3em] opacity-60 mt-2">
                  {project.year}
                </p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* STATEMENT SECTION */}
      <section className="px-8 lg:px-20 py-32 bg-black text-white text-center">

        <h2 className="text-[12vw] lg:text-[5vw] font-extrabold uppercase leading-[0.9] tracking-tight">
          CINEMA IS <br />
          SCULPTED <span className="text-primary">LIGHT</span>
        </h2>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 lg:px-20 py-32 border-t border-black/10 dark:border-white/10"
      >

        <h2 className="text-[8vw] lg:text-[4vw] font-extrabold uppercase mb-16">
          Contact
        </h2>

        <div className="flex flex-col gap-6 text-lg">
          <a
            href="mailto:hello@mariandean.studio"
            className="hover:text-primary transition-colors"
          >
            hello@mariandean.studio
          </a>

          <a
            href="tel:+1234567890"
            className="hover:text-primary transition-colors"
          >
            +1 234 567 890
          </a>
        </div>

      </section>

      {/* DARK MODE TOGGLE */}
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-xl"
      >
        ◐
      </button>

    </div>
  );
}
