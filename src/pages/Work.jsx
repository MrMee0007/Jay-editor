// import { motion } from "framer-motion";
// import {
//   img3,
//   img4,
//   img5,
//   img2,
//   img6,
//   video1,
//   video2,
//   video3,
//   video4,
//   bg,
// } from "../assets/assets";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";



// export default function Work() {
//   const events = [
//     {
//       title: "Navjot Ahuja Live",
//       venue: "Galgotias University",
//       year: "2024",
//       description:
//         "Part of the official media crew covering Navjot Ahuja’s live performance. Focused on dynamic crowd reactions, stage lighting transitions, and cinematic close-ups for high-impact social media reels.",
//       details:
//         "Handled multi-angle camera coverage, highlight reel creation, short-form edits, and final color balancing for Instagram and YouTube delivery.",
//       gallery: [img3, img4, img5, img2],
//       rawClips: [video2, video3],
//       editedClips: [video1],
//     },
//     {
//       title: "Ankit Tiwari Concert",
//       venue: "GLA University",
//       year: "2023",
//       description:
//         "Captured the emotional and atmospheric stage performance of Ankit Tiwari, focusing on dramatic lighting, audience energy, and intimate close-ups.",
//       details:
//         "Delivered cinematic after-movie, vertical social reels, and promotional highlight edits optimized for engagement.",
//       gallery: [img3, img6, img4],
//       rawClips: [video3],
//       editedClips: [video4],
//     },
//     {
//       title: "University Cultural Fest",
//       venue: "Delhi NCR",
//       year: "2023",
//       description:
//         "Full-day event coverage including dance battles, musical performances, and celebrity guest appearances.",
//       details:
//         "Managed photography, recap video production, backstage coverage, and sponsor-focused promotional edits.",
//       gallery: [img4, img5, img6],
//       rawClips: [bg, bg],
//       editedClips: [bg],
//     },
//     {
//       title: "Artist Promotional Shoot",
//       venue: "Independent Project",
//       year: "2024",
//       description:
//         "Conceptualized and shot cinematic visuals for artist branding and promotional campaign.",
//       details:
//         "Directed lighting setups, shot slow-motion performance footage, and delivered stylized post-production edits.",
//       gallery: [img2, img3, img6],
//       rawClips: [video3],
//       editedClips: [video3, video3],
//     },
//   ];

//   return (

    
//     <div className="bg-black text-white overflow-hidden">

//       <Navbar />
      
//       {/* HERO */}
//       <section className="relative min-h-[80vh] flex items-center px-6 md:px-20 border-b border-white/10">
//         <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[140px] rounded-full"></div>

//         <div className="max-w-5xl relative z-10">
//           <p className="text-red-600 tracking-[0.5em] mb-6 text-sm uppercase">
//             Portfolio & Selected Projects
//           </p>

//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-7xl font-extrabold leading-tight"
//           >
//             Live Event Coverage
//             <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
//               Cinematic Post Production
//             </span>
//           </motion.h1>

//           <p className="mt-8 text-gray-400 max-w-3xl text-lg leading-relaxed">
//             I specialize in capturing high-energy live concerts, university fests,
//             and artist performances — transforming raw footage into cinematic
//             storytelling experiences. From shooting to final delivery, every
//             project is crafted with precision and creative intent.
//           </p>
//         </div>
//       </section>

//       {events.map((event, index) => (
//         <section
//           key={index}
//           className="px-6 md:px-20 py-28 border-b border-white/10 space-y-16"
//         >
//           {/* Event Info */}
//           <div className="max-w-3xl space-y-6">
//             <h2 className="text-4xl md:text-5xl font-bold">{event.title}</h2>
//             <p className="text-red-600 tracking-wide">
//               {event.venue} • {event.year}
//             </p>

//             <p className="text-gray-400 leading-7">
//               {event.description}
//             </p>

//             <p className="text-gray-500 leading-7">
//               {event.details}
//             </p>
//           </div>

//           {/* Gallery */}
//           <div>
//             <h3 className="text-xl mb-8 uppercase tracking-[0.3em] text-red-600">
//               Event Photography
//             </h3>

//             <div className="grid md:grid-cols-4 gap-6">
//               {event.gallery.map((img, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.03 }}
//                   className="overflow-hidden rounded-2xl border border-white/10"
//                 >
//                   <img
//                     src={img}
//                     alt=""
//                     className="object-cover w-full h-[250px] hover:scale-110 transition duration-700"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Raw Clips */}
//           <div>
//             <h3 className="text-xl mb-8 uppercase tracking-[0.3em] text-red-600">
//               Raw Event Clips
//             </h3>

//             <div className="grid md:grid-cols-2 gap-8">
//               {event.rawClips.map((clip, i) => (
//                 <video
//                   key={i}
//                   src={clip}
//                   controls
//                   className="w-full h-[320px] object-cover rounded-2xl border border-white/10"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Edited Clips */}
//           <div>
//             <h3 className="text-xl mb-8 uppercase tracking-[0.3em] text-red-600">
//               Final Cinematic Edits
//             </h3>

//             <div className="grid md:grid-cols-2 gap-8">
//               {event.editedClips.map((clip, i) => (
//                 <video
//                   key={i}
//                   src={clip}
//                   controls
//                   className="w-full h-[320px] object-cover rounded-2xl border border-red-600/30 shadow-lg shadow-red-600/20"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* CTA */}
//       <section className="px-6 md:px-20 py-32 text-center relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent blur-3xl"></div>

//         <div className="relative z-10 max-w-3xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             Let’s Create Something Cinematic
//           </h2>

//           <p className="text-gray-400 mb-10 leading-relaxed">
//             Available for concerts, university events, brand campaigns,
//             artist promotions, and professional editing projects.
//             Let’s bring your event to life through powerful visuals.
//           </p>

//           <button className="px-14 py-5 bg-red-600 rounded-full text-white font-semibold tracking-widest hover:bg-red-700 transition duration-300 shadow-lg shadow-red-600/30">
//             Book a Project
//           </button>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const directors = [
  {
    firstName: "DAVID",
    lastName: "SHANE",
    specialty: "DRAMATIC STORYTELLING",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    firstName: "JIM",
    lastName: "JENKINS",
    specialty: "COMEDIC STORYTELLING",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    firstName: "MARIA",
    lastName: "CRUZ",
    specialty: "VISUAL NARRATIVES",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    firstName: "ELENA",
    lastName: "VOLKOV",
    specialty: "EMOTIONAL CINEMA",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    firstName: "JAMES",
    lastName: "COLE",
    specialty: "CRIME & THRILLER",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function VerticalSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  const touchStart = useRef(null);
  const activeVideoRef = useRef(null);

  const nextSlide = () => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    setActiveIndex((prev) => (prev + 1) % directors.length);
    setTimeout(() => (isScrolling.current = false), 600);
  };

  const prevSlide = () => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    setActiveIndex((prev) =>
      prev === 0 ? directors.length - 1 : prev - 1
    );
    setTimeout(() => (isScrolling.current = false), 600);
  };

  const navigate = useCallback((direction) => {
    if (isScrolling.current) return;

    isScrolling.current = true;

    setActiveIndex((prev) => {
      if (direction === "down") return (prev + 1) % directors.length;
      return prev === 0 ? directors.length - 1 : prev - 1;
    });

    setTimeout(() => (isScrolling.current = false), 600);
  }, []);

  useEffect(() => {
    if (activeVideoRef.current) {
      activeVideoRef.current.currentTime = 0;
      activeVideoRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;

    const wheelHandler = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) return;
      navigate(e.deltaY > 0 ? "down" : "up");
    };

    if (container) {
      container.addEventListener("wheel", wheelHandler, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", wheelHandler);
      }
    };
  }, [navigate]);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const end = e.changedTouches[0].clientY;

    if (!touchStart.current) return;

    const diff = touchStart.current - end;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) navigate("down");
    else navigate("up");

    touchStart.current = null;
  };

  const active = directors[activeIndex];

  const prevVideo =
    directors[(activeIndex - 1 + directors.length) % directors.length].video;

  const nextVideo = directors[(activeIndex + 1) % directors.length].video;

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen w-full overflow-hidden flex flex-col lg:flex-row 
      bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]"
    >

      {/* Cinematic blue glow */}
      <div className="absolute w-[700px] h-[700px] bg-blue-600/20 blur-[180px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/10 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* Background Video */}
      <AnimatePresence mode="wait">
        <motion.video
          key={activeIndex}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110"
        >
          <source src={active.video} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* LEFT VIDEO STACK */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-10 py-10 lg:py-0">

        <div className="relative w-full max-w-[520px] h-[55vh] lg:h-[70vh]">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col gap-5"
            >

              {/* Previous */}
              <div className="h-[15%] overflow-hidden rounded-xl opacity-40 backdrop-blur-md border border-white/10">
                <video src={prevVideo} muted preload="none" className="w-full h-full object-cover"/>
              </div>

              {/* Active */}
              <div className="h-[55%] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-blue-400/20">
                <motion.video
                  ref={activeVideoRef}
                  key={active.video}
                  src={active.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Next */}
              <div className="h-[15%] overflow-hidden rounded-xl opacity-40 backdrop-blur-md border border-white/10">
                <video src={nextVideo} muted preload="none" className="w-full h-full object-cover"/>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 pb-16 lg:pb-0 text-white">

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >

            <h2 className="text-4xl sm:text-6xl lg:text-[110px] font-bold leading-none tracking-tight">
              {active.firstName}
            </h2>

            <h2 className="text-4xl sm:text-6xl lg:text-[110px] text-blue-400/40 font-bold leading-none">
              {active.lastName}
            </h2>

          </motion.div>
        </AnimatePresence>

        <p className="mt-6 lg:mt-10 text-[10px] sm:text-xs tracking-[0.35em] uppercase text-blue-200/70">
          SPECIALIZING <br /> IN {active.specialty}
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-10">

          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full 
            bg-white/5 backdrop-blur-md border border-white/10
            hover:bg-blue-500/30 transition
            flex items-center justify-center text-white text-xl"
          >
            ↑
          </button>

          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full 
            bg-blue-600 hover:bg-blue-500
            shadow-lg shadow-blue-500/30
            transition flex items-center justify-center text-white text-xl"
          >
            ↓
          </button>

        </div>

      </div>
    </div>
  );
}
