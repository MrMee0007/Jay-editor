import React, { useRef, useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// ✅ Reusable animation config
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const VideoCard = ({ project, isDimmed }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Stable click handler
  const handleClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();

      // ✅ Handle autoplay promise (important for browsers)
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {}); // silent fail
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <motion.div
      {...fadeUp}
      className={`cursor-pointer transition-opacity duration-300 ${
        isDimmed ? "opacity-40" : "opacity-100"
      }`}
    >
      {/* 🎥 Video Container */}
      <div
        onClick={handleClick}
        className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 shadow-md group"
      >
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          preload="metadata"
          controls={isPlaying}
          className="w-full h-full object-cover"
        />

        {/* ▶️ Play Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isPlaying
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md scale-100 group-hover:scale-110 transition-transform">
            <Play className="text-black w-6 h-6 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* ⏱ Duration */}
        {!isPlaying && project.duration && (
          <div className="absolute top-3 right-3 text-xs bg-white/80 text-black px-2 py-1 rounded">
            {project.duration}
          </div>
        )}
      </div>

      {/* 📄 Info */}
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-xs text-gray-500 mt-1">
            {project.category}
          </p>
        </div>

        <div className="h-[2px] bg-black w-10 mt-3" />
      </div>
    </motion.div>
  );
};

// ✅ Prevent unnecessary re-renders
export default memo(VideoCard);