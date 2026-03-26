import { useRef, useEffect, useCallback, memo } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  animate,
} from "framer-motion";

/* ------------------ DATA ------------------ */

const videos = [
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774475769/IMG_1405_lslxrm.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774476897/IMG_1537_r5wi3p.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774475783/IMG_1446_djat19.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774477718/IMG_1242_m1rgo8.mp4" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774477732/IMG_1159_emnsfs.mp4" },
];

// ✅ Static loop (no re-render)
const loopVideos = [...videos, ...videos];

const SeasonSection = () => {
  const beltRef = useRef(null);
  const y = useRef(0);
  const beltHeight = useRef(0);

  /* ------------------ DESKTOP LOOP ------------------ */

  useEffect(() => {
    if (beltRef.current) {
      beltHeight.current = beltRef.current.scrollHeight / 2; // dynamic loop size
    }
  }, []);

  useAnimationFrame((_, delta) => {
    const el = beltRef.current;
    if (!el) return;

    y.current -= delta * 0.05;

    // ✅ dynamic reset (no hardcoded 800)
    if (y.current <= -beltHeight.current) {
      y.current += beltHeight.current;
    }

    el.style.transform = `translate3d(0, ${y.current}px, 0)`;
  });

  /* ------------------ MOBILE SLIDER ------------------ */

  const x = useMotionValue(0);
  const controlsRef = useRef(null);

  const startAutoScroll = useCallback(() => {
    controlsRef.current = animate(x, "-50%", {
      ease: "linear",
      duration: 18,
      repeat: Infinity,
    });
  }, [x]);

  const stopAutoScroll = useCallback(() => {
    controlsRef.current?.stop();
  }, []);

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, [startAutoScroll, stopAutoScroll]);

  /* ------------------ RENDER ------------------ */

  return (
    <section className="h-screen flex flex-col md:flex-row bg-white overflow-hidden">

      {/* 🧠 TEXT */}
      <div className="w-full md:w-[42%] flex flex-col justify-center items-center md:items-end text-center md:text-right px-6 md:pl-12 md:pr-2 py-10 md:py-0 relative z-10">
        <div className="max-w-md">
          <h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-8xl font-extrabold text-blue-950 leading-[0.9] tracking-tight">
            SEASON
          </h1>

          <h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 leading-[0.9] tracking-tight">
            2025—26
          </h1>

          <p className="mt-4 text-base sm:text-lg text-blue-900 leading-relaxed">
            A visual journey through the seasons, capturing the essence of nature's ever-changing beauty and the emotions it evokes.
          </p>
        </div>

        {/* glow */}
        <div className="absolute w-[220px] h-[220px] md:w-[280px] md:h-[280px] bg-blue-400/20 blur-[90px] rounded-full top-10 md:top-16 right-10 -z-10" />
      </div>

      {/* 🎬 STRIP */}
      <div className="w-full md:w-[58%] h-[60vh] md:h-full relative flex items-center justify-center overflow-hidden">

        {/* 🖥 DESKTOP */}
        <div className="hidden md:block relative rotate-[-18deg] scale-125">
          <div className="relative bg-white px-5 py-12 rounded-xl shadow-xl border border-black/10">

            {/* film holes */}
            <div className="absolute top-2 left-0 w-full flex justify-between px-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black rounded-sm" />
              ))}
            </div>

            <div className="absolute bottom-2 left-0 w-full flex justify-between px-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black rounded-sm" />
              ))}
            </div>

            {/* video belt */}
            <div
              ref={beltRef}
              className="flex flex-col gap-6 items-center will-change-transform"
            >
              {loopVideos.map((video, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }}>
                  <div className="bg-black p-[3px] rounded-sm shadow-md">
                    <video
                      src={video.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="w-[300px] md:w-[330px] h-[180px] md:h-[200px] object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 📱 MOBILE */}
        <div className="md:hidden w-full overflow-hidden -mt-4">
          <motion.div
            style={{ x }}
            className="flex gap-5 px-4 will-change-transform"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }} // improved constraint
            dragElastic={0.08}
            onDragStart={stopAutoScroll}
            onDragEnd={startAutoScroll}
          >
            {loopVideos.map((video, i) => (
              <motion.div
                key={i}
                className="min-w-[85%] aspect-square rounded-3xl overflow-hidden shadow-lg flex-shrink-0 bg-black"
                whileTap={{ scale: 0.96 }}
              >
                <video
                  src={video.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default memo(SeasonSection);