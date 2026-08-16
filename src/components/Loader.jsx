import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 2;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 500);
      }

      setProgress(current);
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-[#050505]
        text-white
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-red-600/10
          blur-[140px]
        "
      />

      {/* Main content */}
      <div className="relative w-full max-w-2xl px-8">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            flex
            justify-between
            items-center
            mb-8
            text-xs
            uppercase
            tracking-[0.35em]
            text-white/40
          "
        >
          <span>Creative Studio</span>
          <span>Portfolio</span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              font-display
              text-[clamp(4rem,12vw,9rem)]
              leading-[0.8]
              uppercase
              tracking-tighter
            "
          >
            EDIT
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-red-500
                to-orange-400
              "
            >
              .
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
          className="
            mt-8
            text-sm
            md:text-base
            text-white/40
            tracking-wide
          "
        >
          Crafting stories frame by frame.
        </motion.p>

        {/* Progress */}
        <div className="mt-16">

          <div className="flex justify-between mb-3">
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Loading experience
            </span>

            <span className="font-mono text-xs text-white/60">
              {String(progress).padStart(2, "0")}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              className="
                h-full
                bg-gradient-to-r
                from-red-500
                to-orange-400
              "
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.15,
              }}
            />
          </div>

        </div>

        {/* Bottom details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="
            flex
            justify-between
            mt-6
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/20
          "
        >
          <span>Visuals</span>
          <span>Motion</span>
          <span>Story</span>
        </motion.div>

      </div>

      {/* Corner number */}
      <div
        className="
          absolute
          bottom-8
          right-8
          font-mono
          text-xs
          text-white/20
        "
      >
        001
      </div>

      {/* Decorative vertical line */}
      <div
        className="
          absolute
          left-8
          top-1/2
          -translate-y-1/2
          w-[1px]
          h-24
          bg-gradient-to-b
          from-transparent
          via-red-500/50
          to-transparent
        "
      />
    </motion.div>
  );
};

export default Loader;