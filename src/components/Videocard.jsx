import { useRef, useState, memo, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, X } from "lucide-react";

const VideoCard = memo(
  ({
    videoSrc,
    posterImage,
    title,
    subtitle,
  }) => {
    const videoRef = useRef(null);
    const fullscreenVideoRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Auto play on hover
    useEffect(() => {
      if (!videoRef.current) return;

      if (isHovered) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }, [isHovered]);

    const togglePlay = (e) => {
      e.stopPropagation();
      if (!videoRef.current) return;

      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }

      setIsPlaying(!isPlaying);
    };

    const toggleMute = (e) => {
      e.stopPropagation();
      const newMuted = !isMuted;

      if (videoRef.current) videoRef.current.muted = newMuted;
      if (fullscreenVideoRef.current)
        fullscreenVideoRef.current.muted = newMuted;

      setIsMuted(newMuted);
    };

    const openFullscreen = (e) => {
      e.stopPropagation();
      setIsFullscreen(true);
      document.body.style.overflow = "hidden";
    };

    const closeFullscreen = () => {
      setIsFullscreen(false);
      document.body.style.overflow = "";
    };

    return (
      <>
        {/* CARD */}
        <div
          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={openFullscreen}
        >
          {/* Proper Aspect Ratio */}
          <div className="aspect-[4/5] md:aspect-[4/5] w-full overflow-hidden">
            <video
              ref={videoRef}
              poster={posterImage}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {subtitle && (
              <p className="text-xs text-blue-400 mb-2 tracking-[0.4em] uppercase font-bold">
                {subtitle}
              </p>
            )}
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              {title}
            </h3>
          </div>

          {/* Controls */}
          <div
            className={`absolute bottom-6 right-6 flex items-center gap-3 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>

            <button
              onClick={openFullscreen}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition"
            >
              <Maximize2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* FULLSCREEN VIEWER */}
        {isFullscreen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-6"
            onClick={closeFullscreen}
          >
            <button
              onClick={closeFullscreen}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={fullscreenVideoRef}
                src={videoSrc}
                controls
                autoPlay
                muted={isMuted}
                className="w-full max-h-[85vh] rounded-2xl object-contain"
              />
            </div>
          </div>
        )}
      </>
    );
  }
);

export default VideoCard;