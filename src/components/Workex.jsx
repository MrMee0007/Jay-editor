import React, { useEffect, useRef, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= DATA ================= */
const workData = [
  {
    role: "Official Media Crew Member",
    organization: "Galgotias University",
    year: "2024",
    description:
      "Covered Navjot Ahuja Concerts Performance.",
    clips: [
      { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774477718/IMG_1242_m1rgo8.mp4" },
    ],
  },
  {
    role: "Concert Videographer",
    organization: "GLA University",
    year: "2023",
    description:
      "Covered Ankit Tiwari And Panther Concerts Performance.",
    clips: [
      { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774475769/IMG_1405_lslxrm.mp4" },
    ],
  },
  {
    role: "Freelance Video Editor",
    organization: "Independent Projects",
    year: "2022 – Present",
    description: "Professional editing services for artists and brands.",
    clips: [
      { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774557759/IMG_2009_1_bzvgqy.mp4" },
    ],
  },
];

/* ================= CARD ================= */
const Card = memo(({ item }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-md md:shadow-lg"
  >
    <h3 className="text-lg md:text-2xl font-bold text-gray-900">
      {item.role}
    </h3>

    <p className="text-blue-500 text-sm md:text-base font-medium mb-2">
      {item.organization}
    </p>

    <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-5">
      {item.description}
    </p>

    {/* 📺 VIDEO (FULLY VISIBLE) */}
    <div className="w-full aspect-[4/3] bg-black rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center">
      <video
        src={item.clips[0].src}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        className="w-full h-full object-contain"
      />
    </div>
  </motion.div>
));

/* ================= MAIN ================= */
export default function WorkexStunning() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  /* Scroll progress */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* GSAP animation (optimized) */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".card", {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* 🔥 HEADING */}
      <div className="text-center mb-16 sm:mb-24">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-900">
          EXPERIENCE
        </h2>
        <p className="text-blue-500 mt-2 tracking-[0.3em] text-[10px] sm:text-xs">
          MY JOURNEY
        </p>
      </div>

      {/* ================= TIMELINE ================= */}
      <div ref={timelineRef} className="relative">

        {/* Desktop Line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gray-200" />

        <motion.div
          style={{ height: lineHeight }}
          className="hidden md:block absolute left-1/2 top-0 w-[3px] bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
        />

        {/* ================= CARDS ================= */}
        <div className="flex flex-col gap-12 sm:gap-20 md:gap-24">
          {workData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 relative"
              >

                {/* 📱 MOBILE DESIGN */}
                <div className="block md:hidden">
                  <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
                    
                    {/* Year Badge */}
                    <span className="inline-block text-xs font-semibold px-3 py-1 mb-3 rounded-full bg-blue-100 text-blue-600">
                      {item.year}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900">
                      {item.role}
                    </h3>

                    <p className="text-blue-500 text-sm mb-2">
                      {item.organization}
                    </p>

                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>

                    <div className="w-full aspect-[4/3] bg-black rounded-xl overflow-hidden">
                      <video
                        src={item.clips[0].src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* 🖥️ DESKTOP DESIGN */}
                <div className="hidden md:contents">
                  {isLeft ? (
                    <>
                      <div className="card">
                        <Card item={item} />
                      </div>

                      <div className="text-left">
                        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                          {item.year}
                        </h2>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-right">
                        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                          {item.year}
                        </h2>
                      </div>

                      <div className="card">
                        <Card item={item} />
                      </div>
                    </>
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-md" />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}