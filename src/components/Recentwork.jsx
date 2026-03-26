import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard2";

/* ------------------ DATA ------------------ */

const PROJECTS = [
  {
    id: 1,
    title: "DJ - Night Promo",
    category: "Post Promotional Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1771436971/Herovideo_wwwdaf.mp4",
  },
  {
    id: 2,
    title: "Cultural Festival Promo",
    category: "Cinematic Highlight Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774473477/AQPqDsiLyTttJE6Y3FRez94xxeH9k3kSSaheArJ0mq-tS6D_lKzsT0XEh2sTDX2AshiiXvBUmtgkCxKF3PwmkqMlt69zmgQRNondo8c_vtl44p.mp4",
  },
  {
    id: 3,
    title: "Freshers Party Promo",
    category: "Event Highlight Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774383805/AQMxd98OcoIgfakTTcpaWtDXxVBpZqB1CL6JqQziQfDyWQyGU4zzr5qLSXUHu9t2GNO6D0MvLTSNgzvZYJLm2TPZ_arygCODJBiswdA_-_ROTATE_-_Videobolt.net_ahe5em.mp4",
  },
  {
    id: 4,
    title: "University Convocation Ceremony",
    category: "Impactful Event Edit",
    video:
      "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1774383822/AQMvzmeg8SevVfTvc-NhWDB_KaUv4fmDgYKcsOtxEXCAP5NlcrU_DSBCpShRafbCq-lssGJRdZAYofYOeIfdqewf9qBsEWYsGdc-ens_-_ROTATE_-_Videobolt.net_fyeq8e.mp4",
  },
];

/* ------------------ ANIMATIONS (STATIC) ------------------ */

const fadeUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const slideLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const slideRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

/* ------------------ MEMO VIDEO CARD ------------------ */

const MemoVideoCard = memo(VideoCard);

/* ------------------ COMPONENT ------------------ */

const RecentWork = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // ✅ stable handlers (no re-creation)
  const handleHover = useCallback((id) => {
    setHoveredId(id);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  /* ------------------ DERIVED DATA ------------------ */

  const featured = PROJECTS[0];
  const others = PROJECTS.slice(1, 3);
  const last = PROJECTS[3];

  return (
    <section className="bg-white text-black py-[16vh] px-6 md:px-16">
      <div className="max-w-[1500px] mx-auto">

        {/* 🔥 HERO */}
        <div className="mb-32 max-w-[1100px]">
          <span className="text-xs tracking-[0.4em] text-gray-400 block mb-6 uppercase">
            Selected Work
          </span>

          <h1 className="text-[3rem] md:text-[6rem] lg:text-[7rem] font-extrabold leading-[0.9] tracking-tight">
            I EDIT <br />
            WITH <span className="text-gray-400">INTENTION</span>
          </h1>
        </div>

        {/* 🎬 FEATURED */}
        <div className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          <MemoVideoCard project={featured} />

          <motion.div {...slideRight} className="max-w-lg">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.95]">
              {featured.title}
            </h2>

            <p className="mt-6 text-lg text-gray-600 font-medium leading-relaxed">
              Crafted with{" "}
              <span className="font-semibold text-black">precision</span> and{" "}
              <span className="font-semibold text-black">
                cinematic flow
              </span>.
              Designed to capture attention instantly.
            </p>
          </motion.div>
        </div>

        {/* 🎥 GRID */}
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          {others.map((project) => {
            const isDimmed =
              hoveredId !== null && hoveredId !== project.id;

            return (
              <motion.div key={project.id} {...fadeUp}>
                <MemoVideoCard
                  project={project}
                  isDimmed={isDimmed}
                  onHover={handleHover}
                  onLeave={handleLeave}
                />
              </motion.div>
            );
          })}
        </div>

        {/* 💎 FINAL SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 📝 TEXT */}
          <motion.div {...slideLeft} className="max-w-lg">
            <span className="text-xs tracking-[0.4em] text-gray-400 block mb-6 uppercase">
              Final Showcase
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-tight">
              Built for <br />
              <span className="text-gray-400">Impact & Memory</span>
            </h2>

            <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              This piece represents the balance between{" "}
              <span className="text-black font-semibold">
                visual intensity
              </span>{" "}
              and{" "}
              <span className="text-black font-semibold">
                storytelling clarity
              </span>.
              Designed not just to impress — but to{" "}
              <span className="text-black font-semibold">
                stay with the viewer.
              </span>
            </p>

            <div className="mt-8 w-12 h-[2px] bg-black" />
          </motion.div>

          {/* 🎥 VIDEO */}
          <motion.div {...slideRight}>
            <MemoVideoCard project={last} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(RecentWork);