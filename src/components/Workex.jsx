import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* =========================
   DATA
========================= */
const projects = [
  {
    id: 1,
    title: "Grata Burger — Sizzle Meets Story",
    category: "Food",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786912930/lv_0_20260425195346_1.mp4",
    tagline: "Sizzle meets story. Bold flavor, premium branding.",
  },
  {
    id: 2,
    title: "HitA — Short Clip",
    category: "Food",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876790/grata_Sandwchh_1.mp4",
    tagline: "Bold cuts. Instant impact.",
  },
  {
    id: 3,
    title: "Crimson Dreams",
    category: "Advertisement",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876791/AlrightTV_Promo_2.mp4",
    tagline: "Elegance in motion.",
  },
  {
    id: 4,
    title: "Urban Pulse",
    category: "Fashion",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876787/Cloth_Fast_cut_2.mp4",
    tagline: "Feel the rhythm.",
  },
  {
    id: 5,
    title: "AI Motion Story",
    category: "Animation",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876785/animation_1_2.mp4",
    tagline: "AI-enhanced. Cinematic and sharp.",
  },
  {
    id: 6,
    title: "AlrightTV Promo",
    category: "Food",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876779/grata_burger_1_1.mp4",
    tagline: "Fast cuts. Bold emotion.",
  },
  {
    id: 7,
    title: "Design Stories — Short Clip",
    category: "Editorial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876771/Sequence_01_1.mp4",
    tagline: "Texture meets motion.",
  },
  {
    id: 8,
    title: "ANI 2 — AI Edit",
    category: "Animation",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876767/ANI_2_2.mp4",
    tagline: "AI-enhanced storytelling.",
  },
  {
    id: 9,
    title: "HITA 26 — Beauty Edit",
    category: "Beauty",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876757/HITA_26_01_1.mp4",
    tagline: "Luxury visuals with soft motion.",
  },
  {
    id: 10,
    title: "I2GLO Change — Motion Edit",
    category: "AI & Motion",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876756/I2GLO_CHANGE_1.mp4",
    tagline: "AI-driven motion with impact.",
  },
  {
    id: 11,
    title: "HITAAAA — Beauty Campaign",
    category: "Beauty",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1786876749/HITAAAA_1.mp4",
    tagline: "Clean pacing. Premium finish.",
  },
  {
    id: 12,
    title: "Jay Burgrill — Brand Edit",
    category: "Food",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493776/Jay-BurgrillVideo.mp4",
    tagline: "Brand moments made cinematic.",
  },
  {
    id: 13,
    title: "Jay Assignment — AI Storyboard",
    category: "Editorial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493753/Copy_of_Jay_Assignment.mp4",
    tagline: "Concept-driven storytelling.",
  },
  {
    id: 14,
    title: "Jay Kohinoor — Animation Edit",
    category: "Jewellery",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493747/Jay_Kohinoor-Animation_1.mp4",
    tagline: "Animated elegance with rhythm.",
  },
  {
    id: 15,
    title: "Alright DM — Social Promo",
    category: "Advertisement",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493717/alright_DM.mp4",
    tagline: "Short-form branding with punch.",
  },
  {
    id: 16,
    title: "Airbaby Animate — Motion Concept",
    category: "Animation",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493712/airbaby_animate.mp4",
    tagline: "Playful motion. Sharp storytelling.",
  },
  {
    id: 17,
    title: "LBL Mahima — Beauty Reel",
    category: "Beauty",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493705/lbl_mahima_2.mp4",
    tagline: "Smooth transitions. Premium polish.",
  },
  {
    id: 18,
    title: "Jay Task 2 — Commercial Cut",
    category: "Commercial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493699/Jay-Task_2.mp4",
    tagline: "Brand storytelling in motion.",
  },
  {
    id: 19,
    title: "SNUBBS — Visual Edit",
    category: "Commercial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493686/SNUBBS_1.mp4",
    tagline: "Clean visual rhythm and appeal.",
  },
  {
    id: 20,
    title: "SENQUIRA — Beauty Campaign",
    category: "Beauty",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493633/SENQUIRA_1.mp4",
    tagline: "Luxury feel. Strong cinematic flow.",
  },
  {
    id: 21,
    title: "Task 1 — Brand Reel",
    category: "Editorial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493632/Task-1.mp4",
    tagline: "Stylish cut with brand energy.",
  },
  {
    id: 22,
    title: "Animation Sec — Motion Cut",
    category: "Animation",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493627/Animation_sec.mp4",
    tagline: "Dynamic motion. Premium finish.",
  },
  {
    id: 23,
    title: "Jay Sample YT — Social Edit",
    category: "Editorial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493623/Jay_Sample_YT.mp4",
    tagline: "Platform-ready storytelling.",
  },
  {
    id: 24,
    title: "Jay Assignment Reel — Brand Edit",
    category: "Editorial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493622/Jay-AssignmentReel-1.mp4",
    tagline: "A polished visual brand cut.",
  },
  {
    id: 25,
    title: "SEN WALK 9 — Commercial Motion",
    category: "Fashion",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493615/SEN-WALK-9.mp4",
    tagline: "Modern motion with strong pacing.",
  },
  {
    id: 26,
    title: "SEN WALK 1 — Promo Edit",
    category: "Fashion",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493603/SEN-WALK---1.mp4",
    tagline: "Focused cut for modern promotion.",
  },
  {
    id: 27,
    title: "LF 2 — Fashion Reel",
    category: "Fashion",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493602/LF-2.mp4",
    tagline: "Fashion energy in motion.",
  },
  {
    id: 28,
    title: "Burger — Food Promo",
    category: "Food",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493592/burger__.mp4",
    tagline: "Food branding with a punchy finish.",
  },
  {
    id: 29,
    title: "SENQUIRA Red — Beauty Reel",
    category: "Beauty",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493586/SENQUIRA___RED.mp4",
    tagline: "Bold beauty visuals with rhythm.",
  },
  {
    id: 30,
    title: "SNUBBS Netflix — Visual Story",
    category: "Commercial",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493752/SNUBBS-Netflix.mp4",
    tagline: "Mood-driven storytelling at scale.",
  },
  {
    id: 31,
    title: "LMC CC — Brand Visual",
    category: "Beauty",
    video: "https://res.cloudinary.com/gpypzfsh/video/upload/v1791493786/lmccc.mp4",
    tagline: "Polished branding with a refined look.",
  },
];

const categories = ["All", ...new Set(projects.map((project) => project.category))];

/* =========================
   VIDEO CARD
========================= */
const VideoCard = ({
  project,
  index,
  hoveredProject,
  setHoveredProject,
  setActiveVideo,
}) => {
  const videoRef = useRef(null);
  const isHovered = hoveredProject === project.id;

  // 🎬 Dynamic layout
  const isLarge = index % 3 === 0;
  const isReel = index % 3 === 1;

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${
        isLarge ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onMouseEnter={() => {
        setHoveredProject(project.id);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setHoveredProject(null);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      onClick={() => setActiveVideo(project.video)}
    >
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        controls={isHovered}
        className={`w-full object-cover border border-white/40 ${
          isLarge
            ? "h-[520px]"
            : isReel
            ? "h-[520px] aspect-[9/16]"
            : "h-[520px]"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
        <span className="text-red-400 text-xs tracking-[0.3em] uppercase">
          {project.category}
        </span>

        <h3 className="font-display text-2xl text-white uppercase mt-2">
          {project.title}
        </h3>

        <p className="text-white/70 text-sm mt-2">
          {project.tagline}
        </p>
      </div>
    </motion.div>
  );
};

/* =========================
   MAIN PAGE
========================= */
const WorksPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-black text-white">

      {/* 🔥 WRAPPER FIX */}
      <div className="pt-[80px]">

        {/* HERO */}
        <section className="min-h-[60vh] flex items-center px-6 md:px-12 lg:px-20 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
    <p className="text-red-400 uppercase tracking-[0.4em] text-sm mb-4">
      Selected Works
    </p>

    <div className="flex items-start gap-4 mb-8">
      <span className="accent-dot-large mt-6 shadow-red-500/50 shadow-lg" />

      <div>
        <h2 className="editorial-heading-large text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 leading-none">
          VIS—
        </h2>
        <h2 className="editorial-heading-large text-white -mt-2 md:-mt-4 leading-none">
          UALS
        </h2>
      </div>
    </div>

    <p className="text-white/60 max-w-xl leading-relaxed">
      Every frame is intentional. Every cut carries rhythm.  
      These visuals are crafted to capture attention instantly 
      and leave a lasting emotional impact.
    </p>

    <div className="mt-10 h-[1px] w-40 bg-gradient-to-r from-red-500 to-transparent" />
  </motion.div>

</section>

        {/* FILTER */}
        <div className="sticky top-[80px] z-30 bg-black/90 backdrop-blur px-6 md:px-12 lg:px-20 py-4 flex gap-6 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 uppercase text-xs transition-colors ${
                activeCategory === cat
                  ? "text-red-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="px-6 md:px-12 lg:px-20 -mb-8 text-white/40 text-xs uppercase tracking-widest" aria-live="polite">
          Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"} in {activeCategory}
        </p>

        {/* GRID */}
        <section className="px-6 md:px-12 lg:px-20 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, index) => (
            <VideoCard
              key={project.id}
              project={project}
              index={index}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
              setActiveVideo={setActiveVideo}
            />
          ))}
        </section>

      </div>

      {/* FULLSCREEN */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.video
              src={activeVideo}
              controls
              autoPlay
              className="w-full max-w-5xl rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

              {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center border border-white/10 py-12 px-6 rounded-2xl bg-white/5 backdrop-blur-md"
        >
          <h3 className="text-white font-display text-2xl mb-4 uppercase">
            Let’s Create Something Powerful
          </h3>

          <p className="text-white/50 mb-6">
            High-impact visuals designed to stop scrolls and drive engagement.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 
                       hover:from-red-700 hover:to-orange-600 
                       text-white uppercase tracking-widest text-sm transition"
          >
            Start a Project
          </a>
        </motion.div>

    </main>
  );
};

export default WorksPage;