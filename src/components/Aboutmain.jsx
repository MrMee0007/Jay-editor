// import { useEffect, useRef, useCallback, memo } from "react";
// import { motion } from "framer-motion";
// import { Film } from "lucide-react";
// import gsap from "gsap";

// /* ------------------ DATA (CDN OPTIMIZED) ------------------ */

// const floatingCards = [
//   {
//     src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562699/img1_1_rasz75.webp",
//     rotation: -12,
//   },
//   {
//     src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562700/img3_xf1c0x.webp",
//     rotation: -6,
//   },
//   {
//     src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562710/img5_zsgaz8.webp",
//     rotation: -6,
//   },
//   {
//     src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562699/img2_bnbvqj.webp",
//     rotation: 0, // center
//   },
//   {
//     src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774563007/Photo13_pl0qb0.webp",
//     rotation: 6,
//   },
//   {
//     src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562781/img8_mdpc3i.webp",
//     rotation: 6,
//   },
//   {
//     src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562715/img6_kcusio.webp",
//     rotation: 12,
//   },
// ];

// const rotations = floatingCards.map((c) => c.rotation);

// /* ------------------ COMPONENT ------------------ */

// const HeroSection = () => {
//   const cardsRef = useRef([]);

//   const setCardRef = useCallback((el, i) => {
//     if (el) cardsRef.current[i] = el;
//   }, []);

//   useEffect(() => {
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (prefersReducedMotion) return;

//     const ctx = gsap.context(() => {
//       const cards = cardsRef.current;
//       if (!cards.length) return;

//       const centerIndex = 3;
//       const centerCard = cards[centerIndex];
//       const otherCards = cards.filter((_, i) => i !== centerIndex);

//       // 🚀 Initial GPU optimized state
//       gsap.set(cards, {
//         y: 120,
//         opacity: 0,
//         scale: 0.92,
//         transform: "translateZ(0)",
//         willChange: "transform, opacity",
//       });

//       gsap.set(centerCard, { zIndex: 20 });
//       gsap.set(otherCards, { zIndex: 5 });

//       const tl = gsap.timeline({ delay: 0.2 });

//       // 🎯 Center card
//       tl.to(centerCard, {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       // 🎬 Other cards
//       tl.to(
//         otherCards,
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           rotation: (i) => rotations[i],
//           stagger: 0.06,
//           duration: 0.6,
//           ease: "back.out(1.6)",
//         },
//         "-=0.3"
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#f8fafc]">

//       {/* 🌈 Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-white" />
//       <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full" />

//       {/* 🔥 TITLE */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 text-center mb-8 px-6"
//       >
//         <p className="text-xs md:text-sm font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">
//           Videographer & Photographer
//         </p>

//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[0.95] mb-4">
//           Hi, I'm <span className="text-slate-600">YUG</span>
//         </h1>

//         <h2 className="text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 bg-clip-text text-transparent">
//           Visual Storyteller
//         </h2>
//       </motion.div>

//       {/* 📧 EMAIL */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.92 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.3 }}
//         className="relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-md hover:shadow-lg transition mb-14"
//       >
//         <Film className="w-4 h-4 text-blue-500" />
//         <a
//           href="mailto:yuggupta9236@gmail.com"
//           className="text-sm font-medium text-slate-600"
//         >
//           yuggupta9236@gmail.com
//         </a>
//       </motion.div>

//       {/* 🎴 CARDS */}
//       <div className="relative z-10 flex items-center justify-center -space-x-5 md:-space-x-8 px-6">
//         {floatingCards.map((card, i) => (
//           <div
//             key={i}
//             ref={(el) => setCardRef(el, i)}
//             className={`group relative flex-shrink-0 rounded-xl
//             ${
//               i === 3
//                 ? "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
//                 : "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
//             }`}
//           >
//             <div
//               className="absolute inset-0 rounded-xl overflow-hidden shadow-md
//               transition-all duration-300 ease-out
//               group-hover:-translate-y-8 group-hover:shadow-2xl"
//             >
//               <img
//                 src={`${card.src}?f_auto,q_auto,w=800`}
//                 alt={`Portfolio ${i}`}
//                 loading={i === 3 ? "eager" : "lazy"}
//                 decoding="async"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✨ SUBTEXT */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="relative z-10 max-w-xl text-center text-slate-500 mt-10 px-6 text-sm md:text-base leading-relaxed"
//       >
//         I speak two languages:{" "}
//         <span className="font-medium text-slate-700">Light</span> and{" "}
//         <span className="font-medium text-slate-700">Emotion</span>.  
//         Through intentional storytelling, I craft visuals that are refined,
//         impactful, and timeless.
//       </motion.p>
//     </section>
//   );
// };

// export default memo(HeroSection);

import { useEffect, useRef, useCallback, memo } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

/* ------------------ DATA ------------------ */

const floatingCards = [
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562699/img1_1_rasz75.webp", rotation: -12 },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562700/img3_xf1c0x.webp", rotation: -6 },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562710/img5_zsgaz8.webp", rotation: -4 },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562699/img2_bnbvqj.webp", rotation: 0 },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774563007/Photo13_pl0qb0.webp", rotation: 4 },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562781/img8_mdpc3i.webp", rotation: 6 },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774562715/img6_kcusio.webp", rotation: 12 },
];

const HeroSection = () => {
  const cardsRef = useRef([]);

  const setCardRef = useCallback((el, i) => {
    if (el) cardsRef.current[i] = el;
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      const centerIndex = 3;
      const baseY = 40; // ✅ final Y position (important)

      /* ------------------ INITIAL STACK ------------------ */
      gsap.set(cards, {
        x: 0,
        y: 160,
        scale: 0.9,
        opacity: 0,
        rotation: (i) => (i - centerIndex) * 2,
        zIndex: (i) => 20 - i,
      });

      const tl = gsap.timeline({ delay: 0.2 });

      /* ------------------ STEP 1: STACK LIFT ------------------ */
      tl.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.02,
      });

      /* ------------------ STEP 2: SLIGHT COMPRESSION ------------------ */
      tl.to(
        cards,
        {
          scale: 0.95,
          duration: 0.25,
          ease: "power2.inOut",
        },
        "-=0.3"
      );

      /* ------------------ STEP 3: FINAL LINE POSITION ------------------ */
      const spread =
  window.innerWidth < 480
    ? 45
    : window.innerWidth < 768
    ? 65
    : 120;

      tl.to(
        cards,
        {
          x: (i) => (i - centerIndex) * spread,
          y: baseY,
          rotation: (i) => floatingCards[i].rotation,
          scale: 1,
          zIndex: (i) => (i === centerIndex ? 30 : 10),
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.05"
      );

      /* ------------------ HOVER (FIXED, NO DRIFT) ------------------ */
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: baseY - 20, // lift up
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: baseY, // return to exact position
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#f8fafc]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100 to-white" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-12 px-6"
      >
        <p className="text-xs md:text-sm font-mono tracking-[0.35em] text-slate-400 uppercase mb-6">
          Videographer & Photographer
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-4">
          Hi, I'm <span className="text-slate-600">YUG</span>
        </h1>

        <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 bg-clip-text text-transparent">
          Visual Storyteller
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 flex items-center justify-center mt-10">
        {floatingCards.map((card, i) => (
          <div
            key={i}
            ref={(el) => setCardRef(el, i)}
            className={`absolute rounded-xl cursor-pointer
              ${
                i === 3
                  ? "w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44"
                  : "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
              }`}
          >
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={`${card.src}?f_auto,q_auto,w=800`}
                alt={`card-${i}`}
                loading={i === 3 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 max-w-xl text-center text-slate-500 mt-45 px-6 text-sm md:text-base"
      >
        I speak two languages:{" "}
        <span className="text-slate-700 font-medium">Light</span> and{" "}
        <span className="text-slate-700 font-medium">Emotion</span>.
      </motion.p>
    </section>
  );
};

export default memo(HeroSection);

