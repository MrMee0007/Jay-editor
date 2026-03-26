import { useState, useMemo, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ------------------ DATA ------------------ */

const images = [
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478238/IMG_1303_scvq64.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478218/IMG_1231_uxkiki.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Img19_xlvbjy.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Photo1_vdcrpp.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Photo2_zymbxo.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478238/IMG_1300_squmym.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560978/Img18_rtixf4.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560979/Img22_j8sff4.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774560978/Img21_w152o3.webp" },
  { src: "https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478227/IMG_1240_gtxe0q.webp" },
];

const VISIBLE = 5;
const CENTER = Math.floor(VISIBLE / 2);

/* ------------------ IMAGE CARD ------------------ */

const ImageCard = memo(({ img, isCenter, onClick }) => {
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 20,
      }}
      className="flex-shrink-0 cursor-pointer transform-gpu will-change-transform"
      onClick={onClick}
      style={{
        width: isCenter
          ? "clamp(220px, 28vw, 400px)"
          : "clamp(120px, 16vw, 220px)",
        height: isCenter
          ? "clamp(300px, 40vw, 520px)"
          : "clamp(160px, 24vw, 300px)",
      }}
    >
      <img
        src={`${img.src}?f_auto,q_auto,w=900`}
        alt=""
        loading={isCenter ? "eager" : "lazy"} // 🚀 center loads first
        decoding="async"
        className={`w-full h-full object-cover rounded-xl sm:rounded-2xl transition-all duration-500
          ${isCenter ? "shadow-2xl scale-100" : "opacity-80 scale-95"}
        `}
      />
    </motion.div>
  );
});

/* ------------------ MAIN ------------------ */

function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  /* 🔁 stable helpers */
  const getImage = useCallback((i) => {
    return images[((i % images.length) + images.length) % images.length];
  }, []);

  const display = useMemo(() => {
    const arr = new Array(VISIBLE);

    for (let i = 0; i < VISIBLE; i++) {
      const pos = index + i - CENTER;
      arr[i] = {
        img: getImage(pos),
        key: pos,
      };
    }

    return arr;
  }, [index, getImage]);

  const next = useCallback(() => setIndex((p) => p + 1), []);
  const prev = useCallback(() => setIndex((p) => p - 1), []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-100 to-gray-200 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 sm:px-10 lg:px-20 py-10 overflow-hidden">

      {/* 🔥 TEXT */}
      <div className="max-w-xl w-full text-center lg:text-left mb-10 lg:mb-0 lg:pr-16">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-3">
          Creative Portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-black">
          Crafting <br />
          <span className="bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            Visual Stories
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
          A collection of moments, emotions, and creativity — captured and transformed into stunning visual experiences.
        </p>

        <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:scale-105 active:scale-95 transition">
          Explore Work
        </button>
      </div>

      {/* 🎬 CAROUSEL */}
      <div className="relative flex items-center justify-center w-full lg:w-auto lg:ml-16">

        {/* ARROWS */}
        <div className="absolute w-full flex justify-between items-center px-4 sm:px-6 bottom-4 sm:bottom-6 lg:justify-center lg:gap-10 lg:px-0 lg:-bottom-20">
          <button
            onClick={prev}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white active:scale-90 transition"
          >
            <ChevronLeft size={22} className="lg:scale-125" />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-black hover:text-white active:scale-90 transition"
          >
            <ChevronRight size={22} className="lg:scale-125" />
          </button>
        </div>

        {/* IMAGES */}
        <div className="flex gap-3 sm:gap-5 lg:gap-6 items-center">
          {display.map(({ img, key }, i) => {
            const isCenter = i === CENTER;

            return (
              <ImageCard
                key={key}
                img={img}
                isCenter={isCenter}
                onClick={() => setIndex((p) => p + (i - CENTER))}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(PortfolioCarousel);