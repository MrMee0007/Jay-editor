import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Volume2, VolumeX, Play, Pause } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* =========================
   DATA
========================= */
const featuredProjects = [
  { id: 1, title: "Grata Burger",      category: "Commercial",    year: "2024", video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876779/grata_burger_1_1.mp4" },
  { id: 2, title: "HitA — Short Clip", category: "Advertisement", year: "2024", video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876749/HITAAAA_1.mp4" },
  { id: 3, title: "Grata Sandwich",    category: "Commercial",    year: "2024", video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876790/grata_Sandwchh_1.mp4" },
  { id: 4, title: "Advertisement",     category: "Commercial",    year: "2023", video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876771/Sequence_01_1.mp4" },
  { id: 5, title: "Golden Hour",       category: "Editorial",     year: "2023", video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876757/HITA_26_01_1.mp4" },
  { id: 6, title: "TV Promo",          category: "Advertisement", year: "2023", video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876791/AlrightTV_Promo_2.mp4" },
];

/* =========================
   REEL CARD
========================= */
const ReelCard = ({ project, isActive }) => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isActive) {
      v.currentTime = 0;
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [isActive]);

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  };

  return (
    <div className={`reel-card ${isActive ? "reel-card--active" : ""}`}>
      {/* Video */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className="reel-video"
      />

      {/* Gradient overlay */}
      <div className="reel-gradient" />

      {/* Top controls */}
      <div className="reel-top-bar">
        <span className="reel-category">{project.category}</span>
        <div className="reel-top-actions">
          <button onClick={togglePlay} className="reel-icon-btn" aria-label="play/pause">
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button onClick={toggleMute} className="reel-icon-btn" aria-label="mute/unmute">
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      </div>

      {/* Bottom info */}
      <div className="reel-bottom">
        <p className="reel-year">{project.year}</p>
        <h3 className="reel-title">{project.title}</h3>
        <Link to="/works" className="reel-cta" onClick={(e) => e.stopPropagation()}>
          Watch <ArrowRight size={12} />
        </Link>
      </div>

      {/* Active border glow */}
      {isActive && <div className="reel-active-border" />}
    </div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const PortfolioPreview = () => {
  const sectionRef = useRef(null);
  const swiperRef  = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() => swiperRef.current?.swiper.slidePrev(), []);
  const next = useCallback(() => swiperRef.current?.swiper.slideNext(), []);

  return (
    <section id="portfolio" ref={sectionRef} className="reel-section">

      {/* Ambient glow */}
      <div className="reel-ambient" />

      {/* ─── HEADER ─── */}
      <motion.div
        className="reel-header"
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="reel-header-left">
          <span className="reel-section-label">Selected Works</span>
          <h2 className="reel-section-heading">
            <span className="reel-heading-stroke">SELEC</span>TED<br />WORKS
          </h2>
        </div>
        <div className="reel-header-right">
          <p className="reel-section-sub">
            Cinematic reels across commercial, editorial &amp; advertising.
          </p>
          <Link to="/works" className="reel-view-all">
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>

      {/* ─── REEL SLIDER ─── */}
      <motion.div
        className="reel-slider-outer"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          loop={true}
          speed={750}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSlideChange={(s) => setActiveIndex(s.realIndex)}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            0:    { slidesPerView: 1.18, spaceBetween: 14 },
            480:  { slidesPerView: 1.45, spaceBetween: 18 },
            640:  { slidesPerView: 2.1,  spaceBetween: 20 },
            900:  { slidesPerView: 2.6,  spaceBetween: 22 },
            1200: { slidesPerView: 3.2,  spaceBetween: 24 },
            1440: { slidesPerView: 3.8,  spaceBetween: 26 },
          }}
          className="reel-swiper"
        >
          {featuredProjects.map((project, i) => (
            <SwiperSlide key={project.id} className="reel-swiper-slide">
              <ReelCard project={project} isActive={activeIndex === i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ─── NAV ARROWS ─── */}
        <button onClick={prev} className="reel-nav reel-nav--prev" aria-label="previous">
          <ArrowLeft size={20} />
        </button>
        <button onClick={next} className="reel-nav reel-nav--next" aria-label="next">
          <ArrowRight size={20} />
        </button>
      </motion.div>

      {/* ─── COUNTER + DOTS ─── */}
      <motion.div
        className="reel-footer-bar"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <span className="reel-counter">
          <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
          <span>/</span>
          <span>{String(featuredProjects.length).padStart(2, "0")}</span>
        </span>

        <div className="reel-dots">
          {featuredProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => { swiperRef.current?.swiper.slideToLoop(i); setActiveIndex(i); }}
              className={`reel-dot ${i === activeIndex ? "reel-dot--active" : ""}`}
              aria-label={`slide ${i + 1}`}
            />
          ))}
        </div>

        <Link to="/works" className="reel-explore-btn">
          <span>Explore All</span>
          <ArrowRight size={14} />
        </Link>
      </motion.div>

    </section>
  );
};

export default PortfolioPreview;