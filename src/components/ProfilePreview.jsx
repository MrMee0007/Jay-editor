import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Pause } from "lucide-react";

/* =========================
   DATA
========================= */
const featuredProjects = [
  {
    id: 1,
    title: "Grata Burger",
    category: "Commercial",
    video:
      "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876779/grata_burger_1_1.mp4",
  },
  {
    id: 2,
    title: "HitA — Short Clip",
    category: "Advertisement",
    video:
      "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876749/HITAAAA_1.mp4",
  },
  {
    id: 3,
    title: "Grata Sandwich",
    category: "Commercial",
    video:
      "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876790/grata_Sandwchh_1.mp4",
  },
  {
    id: 4,
    title: "Advertisement ",
    category: "Commercial",
    video:
      "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876771/Sequence_01_1.mp4",
  },
  {
    id: 5,
    title: "Golden Hour",
    category: "Editorial",
    video:
      "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876757/HITA_26_01_1.mp4",
  },
  {
    id: 6,
    title: "TV Promo",
    category: "Advertisement",
    video:
      "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876791/AlrightTV_Promo_2.mp4",
  },
];

/* =========================
   VIDEO CARD COMPONENT
========================= */
const VideoCard = ({ project, index, isInView }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = (e) => {
    e.preventDefault(); // stop navigation

    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
      className="group cursor-pointer"
    >
      <Link to="/works">
        <div className="relative overflow-hidden aspect-[3/4] mb-4 rounded-lg">
          
          {/* 🎬 VIDEO */}
          <video
            ref={videoRef}
            src={project.video}
            controls
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* 🎮 PLAY/PAUSE BUTTON
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center 
                       opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <div className="bg-black/60 p-4 rounded-full backdrop-blur-md border border-white/20">
              {isPlaying ? (
                <Pause className="text-white w-6 h-6" />
              ) : (
                <Play className="text-white w-6 h-6" />
              )}
            </div>
          </button> */}

          {/* 🔥 Overlays */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* 🧠 TEXT */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-red-400 text-xs uppercase tracking-widest block mb-1">
              {project.category}
            </span>
            <h3 className="font-display text-xl text-white uppercase">
              {project.title}
            </h3>
          </div>

          {/* ✨ BORDER */}
          <div className="absolute inset-0 border border-white/10 group-hover:border-red-500/40 transition duration-500" />
        </div>
      </Link>
    </motion.div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-4"
          >
            <span className="text-vertical font-display text-6xl lg:text-8xl text-white/10 hidden md:block">
              01
            </span>

            <div>
              <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                SELEC
              </h2>
              <h2 className="editorial-heading-large text-white -mt-2 md:-mt-4">
                TED
              </h2>
              <h2 className="editorial-heading-large text-white -mt-2 md:-mt-4">
                WORKS
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-right"
          >
            <p className="text-white/60 max-w-md mb-6">
              A glimpse into recent cinematic works across film, commercial,
              and editorial projects.
            </p>

            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-500 
                         hover:gap-4 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              View All Works
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

{/* VIDEO GRID / MOBILE SLIDER */}
<div className="relative">
  
  {/* Desktop */}
  <div className="hidden md:grid grid-cols-3 gap-6">
    {featuredProjects.map((project, index) => (
      <VideoCard
        key={project.id}
        project={project}
        index={index}
        isInView={isInView}
      />
    ))}
  </div>

{/* Mobile Slider */}
<div
  className="
    md:hidden
    flex
    gap-5
    overflow-x-auto
    snap-x
    snap-mandatory
    scroll-smooth
    pb-6
    -mx-6
    px-6
    scrollbar-hide
  "
>
  {featuredProjects.map((project, index) => (
    <div
      key={project.id}
      className="flex-shrink-0 w-[85vw] snap-center"
    >
      <VideoCard
        project={project}
        index={index}
        isInView={isInView}
      />
    </div>
  ))}
</div>

</div>

        

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/works"
            className="btn-editorial bg-red-600 hover:bg-transparent 
                       border border-red-600 text-white 
                       hover:text-red-500 transition-all duration-300"
          >
            <span>Explore Full Portfolio</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioPreview;