// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Film, Video, Camera, Wand2 } from "lucide-react";

// const services = [
//   {
//     icon: Film,
//     title: "Film Direction",
//     description:
//       "From concept to final cut, bringing cinematic visions to life with artistic precision.",
//     number: "01",
//   },
//   {
//     icon: Video,
//     title: "Commercial Videography",
//     description:
//       "Creating compelling visual content for brands that demand excellence.",
//     number: "02",
//   },
//   {
//     icon: Camera,
//     title: "Editorial Photography",
//     description:
//       "Fashion-forward imagery for publications, campaigns, and portfolios.",
//     number: "03",
//   },
//   {
//     icon: Wand2,
//     title: "Post-Production",
//     description:
//       "Color grading, editing, and visual effects that elevate every frame.",
//     number: "04",
//   },
// ];

// const ServicesSection2 = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="services"
//       ref={ref}
//       className="relative bg-black text-white py-28 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden"
//     >
//       {/* Cinematic Red Background Glow */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600/10 blur-[140px] rounded-full" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full" />

//       <div className="relative z-10 max-w-7xl mx-auto">

//         {/* ===== Premium Heading ===== */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1 }}
//           className="relative mb-28"
//         >
//           {/* Watermark */}
//           <h2 className="absolute -top-16 left-0 text-[18vw] md:text-[10vw] font-extrabold text-white/5 uppercase tracking-tight pointer-events-none select-none">
//             SERVICES
//           </h2>

//           {/* Accent Line */}
//           <div className="w-16 h-[2px] bg-red-600 mb-6" />

//           {/* Main Title */}
//           <div className="relative z-10">
//             <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
//               Crafting Visual
//             </h2>
//             <h2 className="text-4xl md:text-6xl font-bold uppercase text-red-600 -mt-2">
//               Experiences
//             </h2>

//             <p className="mt-6 max-w-2xl text-white/60 leading-relaxed text-lg">
//               High-end creative services designed to transform ideas into
//               powerful cinematic stories. Every frame is intentional.
//               Every detail refined.
//             </p>
//           </div>
//         </motion.div>

//         {/* ===== Services Grid ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//               className="group relative bg-black p-10 md:p-14 cursor-pointer overflow-hidden border border-white/5"
//             >
//               {/* Hover Red Sweep */}
//               <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

//               <div className="relative z-10">

//                 {/* Large Number */}
//                 <span className="absolute top-6 right-8 text-6xl md:text-8xl font-bold text-white/10 group-hover:text-white/20 transition duration-500">
//                   {service.number}
//                 </span>

//                 {/* Icon */}
//                 <div className="mb-6 text-red-600 group-hover:text-black transition duration-500">
//                   <service.icon size={40} strokeWidth={1.5} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4 group-hover:text-black transition duration-500">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-white/60 group-hover:text-black/80 transition duration-500 leading-relaxed">
//                   {service.description}
//                 </p>

//                 {/* Arrow */}
//                 <div className="mt-8 flex items-center gap-2 text-red-600 group-hover:text-black transition duration-500">
//                   <span className="text-sm uppercase tracking-widest">
//                     Learn more
//                   </span>
//                   <span className="transform group-hover:translate-x-2 transition duration-300">
//                     →
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection2;

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const media = [
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Live Concert Energy",
    category: "Event Film",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400&auto=format&fit=crop",
    title: "Studio Portrait",
    category: "Photography",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Stage Highlights",
    category: "Cinematic",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    title: "Ocean Film",
    category: "Travel",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Music Edit",
    category: "Editing",
  },
];

const PortfolioCard = ({ item, featured }) => {
  const isVideo = item.type === "video";
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();

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
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl shadow-lg transition duration-500 ${
        featured
          ? "h-[320px] sm:h-[400px] md:h-full"
          : "h-[260px]"
      }`}
    >
      {/* MEDIA */}
      {isVideo ? (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            controls={isPlaying}
            onClick={handleToggle}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Play Button */}
          {!isPlaying && (
            <div
              onClick={handleToggle}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur p-4 rounded-full shadow-lg hover:scale-110 transition">
                <Play size={28} className="text-black" />
              </div>
            </div>
          )}
        </div>
      ) : (
        <img
          src={`${item.src}&w=1000`}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />
      )}

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

      {/* Content */}
      <div className="absolute bottom-0 p-5 sm:p-6">
        <span className="inline-block text-[10px] sm:text-xs uppercase tracking-widest text-blue-200 bg-white/10 px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
          {item.category}
        </span>

        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
          {item.title}
        </h3>
      </div>

      {/* Featured Tag */}
      {featured && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blue-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Video Tag */}
      {isVideo && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/80 text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">
          Video
        </div>
      )}
    </motion.div>
  );
};

const PortfolioSection = () => {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-200/30 blur-[120px] sm:blur-[140px] rounded-full top-0 left-1/3" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-14 sm:mb-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
          Selected <span className="text-blue-600">Work</span>
        </h2>

        <p className="mt-4 sm:mt-6 text-gray-600 max-w-2xl text-base sm:text-lg">
          A curated mix of cinematic visuals and storytelling.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 auto-rows-[260px]">

        {/* Featured */}
        <div className="sm:col-span-2 md:col-span-2 md:row-span-2">
          <PortfolioCard item={media[0]} featured />
        </div>

        {/* Others */}
        {media.slice(1).map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </div>

    </section>
  );
};

export default PortfolioSection;