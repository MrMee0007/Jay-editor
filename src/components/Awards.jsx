// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import { useRef } from "react";

// const letters = "AWARDS".split("");

// const awards = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
//     startX: "-20%",
//     endX: "20%",
//     startY: "10%",
//     endY: "40%",
//     rotate: -12,
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
//     startX: "80%",
//     endX: "50%",
//     startY: "0%",
//     endY: "40%",
//     rotate: 10,
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
//     startX: "30%",
//     endX: "60%",
//     startY: "80%",
//     endY: "40%",
//     rotate: -8,
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
//     startX: "110%",
//     endX: "70%",
//     startY: "60%",
//     endY: "35%",
//     rotate: 14,
//   },
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
//     startX: "-30%",
//     endX: "30%",
//     startY: "70%",
//     endY: "45%",
//     rotate: -6,
//   },
// ];

// export default function AwardsSection() {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 80,
//     damping: 20,
//   });

//   return (
//     <section
//       ref={ref}
//       className="relative h-[280vh] bg-[#232a54] overflow-hidden flex items-center justify-center"
//     >
//       {/* AWARDS LETTERS */}
//       <div className="absolute flex text-[22vw] font-black text-[#1a214a] select-none pointer-events-none">
//         {letters.map((letter, i) => {
//           const reveal = useTransform(
//             smooth,
//             [i * 0.1, i * 0.1 + 0.15],
//             [200, 0]
//           );

//           const opacity = useTransform(
//             smooth,
//             [i * 0.1, i * 0.1 + 0.15],
//             [0, 1]
//           );

//           return (
//             <motion.span
//               key={i}
//               style={{
//                 y: reveal,
//                 opacity,
//               }}
//             >
//               {letter}
//             </motion.span>
//           );
//         })}
//       </div>

//       {/* FLOATING AWARDS */}
//       {awards.map((award) => {
//         const x = useTransform(
//           smooth,
//           [0, 1],
//           [award.startX, award.endX]
//         );

//         const y = useTransform(
//           smooth,
//           [0, 1],
//           [award.startY, award.endY]
//         );

//         const rotate = useTransform(
//           smooth,
//           [0, 1],
//           [award.rotate, award.rotate + 4]
//         );

//         return (
//           <motion.img
//             key={award.id}
//             src={award.img}
//             style={{ x, y, rotate }}
//             className="absolute w-[240px] rounded-xl shadow-2xl"
//           />
//         );
//       })}
//     </section>
//   );
// }

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const awards = [
  "https://images.prismic.io/buzzworthy/Zh6jVUaI3ufuUOwb_awd-08-2x.webp?auto=format,compress&q=90&w=240",
  "https://images.prismic.io/buzzworthy/ZqJt9h5LeNNTxf6u_certificate-be-the-buzz-sotd.webp?auto=format,compress&q=90&w=240",
  "https://images.prismic.io/buzzworthy/ZqJ-gR5LeNNTxgFI_developer_certificate.webp?auto=format,compress&q=90&w=240",
  "https://images.prismic.io/buzzworthy/Zh6jUUaI3ufuUOwT_awd-04-2x.webp?auto=format,compress&q=90&w=240",
  "https://images.prismic.io/buzzworthy/ZpgQ0B5LeNNTxPwE_cssda-ui-Slingshot-Intergalactic.webp?auto=format,compress&q=90&w=240",
  "https://images.prismic.io/buzzworthy/Zh6jUkaI3ufuUOwV_awd-05-2x.webp?auto=format,compress&q=90&w=240",
];

const letters = ["A", "W", "A", "R", "D", "S"];

const xPositions = ["-35%", "30%", "-25%", "25%", "-15%", "20%"];

function LetterReveal({ letter, index, scrollYProgress }) {

  const start = 0.05 + index * 0.05;
  const end = start + 0.1;

  const y = useTransform(scrollYProgress, [start, end], ["220%", "0%"]);

  return (
    <motion.span style={{ y }} className="inline-block font-black">
      {letter}
    </motion.span>
  );
}

function FloatingCard({ src, index, scrollYProgress }) {

  const segment = 1 / awards.length;

  const start = segment * index;
  const mid = start + segment / 2;
  const end = start + segment;

  const y = useTransform(
    scrollYProgress,
    [start, mid, end],
    ["120vh", "0vh", "-120vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  const rotate = useTransform(
    scrollYProgress,
    [start, mid],
    [15, -10]
  );

  return (
    <motion.div
      style={{
        y,
        x: xPositions[index],
        rotate,
        opacity
      }}
      className="absolute left-1/2 top-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <div className="rounded-xl overflow-hidden shadow-2xl">
        <img src={src} alt="award" className="w-full block"/>
      </div>
    </motion.div>
  );
}

export default function AwardsSection() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (

    <section
      ref={ref}
      className="relative bg-black"
      style={{ height: "500vh" }}
    >

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* AWARDS TEXT */}

        <div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{ zIndex: 10 }}
        >
          <div
            className="flex uppercase"
            style={{
              fontSize: "clamp(6rem,24vw,32rem)",
              letterSpacing: "-0.05em",
              color: "rgba(255,255,255,0.07)",
              fontWeight: 900
            }}
          >
            {letters.map((letter, i) => (
              <div key={i} style={{ overflow: "hidden" }}>
                <LetterReveal
                  letter={letter}
                  index={i}
                  scrollYProgress={scrollYProgress}
                />
              </div>
            ))}
          </div>
        </div>

        {/* FLOATING CARDS */}

        {awards.map((src, i) => (
          <FloatingCard
            key={i}
            src={src}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}

      </div>

    </section>
  );
}