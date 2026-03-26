import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { memo, useRef, useEffect } from "react";

/* ------------------ DATA ------------------ */

const projects = [
  {
    title: "Recording Navjot — Short Clip",
    category: "Stage Frame",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773136616/video2_lvg1nm.mp4",
  },
  {
    title: "Navjot Ahuja — Short Clip",
    category: "Stage Frame",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773136489/video1_ijormh.mp4",
  },
  {
    title: "Navjot Ahuja — Short Clip",
    category: "Music Concert",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773135665/video3_yip0we.mp4",
  },
  {
    title: "Ember & Smoke",
    category: "Public View Installation",
    video: "https://res.cloudinary.com/ds0y1ut9q/video/upload/v1773136645/video4_st8cbr.mp4",
  },
];

/* ------------------ HOOK: AUTO PLAY WHEN VISIBLE ------------------ */

const useAutoPlay = (ref) => {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [ref]);
};

/* ------------------ VIDEO CARD ------------------ */

const VideoCard = memo(({ project, large }) => {
  const videoRef = useRef(null);
  useAutoPlay(videoRef);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`relative group overflow-hidden shadow-xl
        ${large ? "rounded-3xl" : "rounded-2xl"}
      `}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        preload="metadata"
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105
          ${large ? "h-[65vh]" : "h-[420px]"}
        `}
      />

      {/* OVERLAY */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent
          ${large ? "p-10" : "p-6"}
        `}
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">
              {project.category}
            </p>

            <h3
              className={`font-bold text-white
                ${large ? "text-3xl md:text-4xl" : "text-xl"}
              `}
            >
              {project.title}
            </h3>
          </div>

          <div
            className={`rounded-full bg-white flex items-center justify-center shadow-xl
              transition duration-300 group-hover:scale-110
              ${large ? "w-14 h-14" : "w-10 h-10"}
            `}
          >
            <ExternalLink
              className={`${large ? "w-6 h-6" : "w-4 h-4"} text-black`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* ------------------ MAIN SECTION ------------------ */

const ProjectsSection = () => {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
            OFFICIAL VISUAL ARCHITECT — GALGOTIAS EVENT
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto">
            Specially invited to capture every light, every movement,
            and every unforgettable moment.
          </p>
        </motion.div>

        {/* FEATURED */}
        <div className="mb-20">
          <VideoCard project={projects[0]} large />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.video}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <VideoCard project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default memo(ProjectsSection);