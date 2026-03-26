import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Camera,
  Video,
  Award,
} from "lucide-react";

const timelineData = [
  {
    year: "2020",
    title: "Creative Foundation",
    subtitle: "Visual Discovery Phase",
    description:
      "Started exploring cinematography, storytelling and video editing through independent projects and experimental visual compositions.",
    icon: GraduationCap,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    ],
  },
  {
    year: "2022",
    title: "University & Skill Expansion",
    subtitle: "GLA University",
    description:
      "Expanded into professional editing workflows, graphic design and post-production using Premiere Pro, After Effects, Canva and Photoshop.",
    icon: Camera,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
      },
    ],
  },
  {
    year: "2023",
    title: "Event & Celebrity Coverage",
    subtitle: "Freelance Videographer",
    description:
      "Covered university events, weddings and celebrity appearances delivering cinematic multi-camera productions and premium edits.",
    icon: Video,
    media: [
      {
        type: "video",
        src: "https://www.w3schools.com/html/movie.mp4",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
      },
    ],
  },
  {
    year: "2024",
    title: "Cinematography Club Leadership",
    subtitle: "Videography Head & Treasurer",
    description:
      "Led official university productions, managed budgets, supervised shoots and mentored junior creators in advanced filmmaking techniques.",
    icon: Award,
    media: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      },
    ],
  },
];

const TimelineGallery = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black text-white px-8 lg:px-24 py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-[10vw] lg:text-[4vw] font-extrabold uppercase tracking-tight mb-24">
          Journey
        </h2>

        <div className="relative">

          {/* Base Line */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-white/10 -translate-x-1/2" />

          {/* Animated Red Progress Line */}
          <motion.div
            style={{ scaleY: progressScale }}
            className="absolute left-1/2 top-0 w-px h-full bg-red-600 origin-top -translate-x-1/2 shadow-[0_0_25px_rgba(220,38,38,0.8)]"
          />

          {timelineData.map((item, index) => {
            const itemRef = useRef(null);
            const isInView = useInView(itemRef, { amount: 0.4 });

            const { scrollYProgress: itemProgress } = useScroll({
              target: itemRef,
              offset: ["start 80%", "end 20%"],
            });

            const x = useTransform(
              itemProgress,
              [0, 1],
              index % 2 === 0 ? [-120, 0] : [120, 0]
            );

            const opacity = useTransform(itemProgress, [0, 0.3], [0, 1]);
            const y = useTransform(itemProgress, [0, 1], [80, 0]);

            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                ref={itemRef}
                className="relative mb-40 flex items-center"
              >
                {/* Background Year Watermark */}
                <motion.div
                  style={{ opacity }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                >
                  <span className="text-[20vw] font-extrabold text-white/5">
                    {item.year}
                  </span>
                </motion.div>

                {/* MEDIA SIDE */}
                <motion.div
                  style={{ x, opacity, y }}
                  className={`w-1/2 relative z-10 ${
                    isLeft ? "pr-16" : "pl-16 order-2"
                  }`}
                >
                  <div className="relative w-full h-[420px]">

                    {item.media.map((media, i) => (
                      <motion.div
                        key={i}
                        style={{
                          top: `${i * 25}px`,
                          left: `${i * 20}px`,
                          zIndex: 10 - i,
                        }}
                        className="absolute w-[85%] h-[360px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] group border border-white/10"
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.src}
                            alt=""
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <video
                            src={media.src}
                            muted
                            loop
                            autoPlay={isInView}
                            playsInline
                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        )}
                      </motion.div>
                    ))}

                  </div>
                </motion.div>

                {/* Center Red Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-black z-20 shadow-[0_0_25px_rgba(220,38,38,0.9)]" />

                {/* TEXT SIDE */}
                <motion.div
                  style={{ opacity, y }}
                  className={`w-1/2 relative z-10 ${
                    isLeft ? "pl-16" : "pr-16 text-right"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 mb-4 ${
                      isLeft ? "" : "justify-end"
                    }`}
                  >
                    <div className="p-3 rounded-xl bg-red-600/10 border border-red-600/40 backdrop-blur-md">
                      <Icon size={22} className="text-red-600" />
                    </div>

                    <span className="text-xs tracking-[0.4em] uppercase text-red-600">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-4xl font-bold mb-6">
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineGallery;