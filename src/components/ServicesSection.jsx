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

// const ServicesSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="services"
//       ref={ref}
//       className="px-8 lg:px-20 py-32 border-t border-black/5 dark:border-white/5"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* 🔥 CINEMATIC HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1 }}
//           className="mb-28 relative"
//         >
//           {/* Background Stroke Text */}
//           <h2 className="absolute inset-0 text-[14vw] lg:text-[7vw] font-extrabold uppercase tracking-tight text-transparent stroke-text pointer-events-none select-none opacity-10">
//             Services
//           </h2>

//           {/* Main Gradient Heading */}
//           <div className="relative overflow-hidden inline-block">
//             <h2 className="text-[10vw] lg:text-[4vw] font-extrabold uppercase tracking-tight leading-none bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
//               Services
//             </h2>

//             {/* Animated Shine */}
//             <div className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 animate-shine pointer-events-none" />
//           </div>

//           <p className="mt-10 max-w-xl text-black/60 dark:text-white/60 leading-relaxed">
//             Comprehensive creative solutions designed with precision,
//             storytelling depth, and cinematic craftsmanship.
//           </p>
//         </motion.div>

//         {/* SERVICES LIST */}
//         <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10">

//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 60 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.2 + index * 0.15,
//               }}
//               whileHover={{ y: -8 }}
//               className="relative group py-16 cursor-pointer overflow-hidden transition-all duration-500"
//             >
//               {/* 🔴 Gradient Hover Layer */}
//               <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />

//               {/* Shine Sweep */}
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/10 rotate-12 translate-x-[-100%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-out" />
//               </div>

//               <div className="relative z-10 grid md:grid-cols-3 gap-12 items-start">

//                 {/* Number */}
//                 <div className="text-6xl md:text-7xl font-extrabold text-black/10 dark:text-white/10 group-hover:text-white/20 transition-colors duration-500">
//                   {service.number}
//                 </div>

//                 {/* Content */}
//                 <div className="md:col-span-2">

//                   <div className="flex items-center gap-6 mb-6">
//                     <div className="text-primary group-hover:text-white transition-colors duration-300">
//                       <service.icon size={32} strokeWidth={1.5} />
//                     </div>

//                     <h3 className="text-2xl md:text-3xl uppercase font-bold tracking-tight group-hover:text-white transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                   </div>

//                   <p className="text-black/60 dark:text-white/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed max-w-xl">
//                     {service.description}
//                   </p>

//                   <div className="mt-6 text-xs uppercase tracking-[0.3em] text-primary group-hover:text-white flex items-center gap-3 transition-colors duration-300">
//                     <span>Learn More</span>
//                     <span className="group-hover:translate-x-2 transition-transform duration-300">
//                       →
//                     </span>
//                   </div>

//                 </div>
//               </div>
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const services = [
  { num: "1", title: "NARRATIVE FILM" },
  { num: "2", title: "COMMERCIAL & ADS" },
  { num: "3", title: "MUSIC VIDEOS" },
  { num: "4", title: "DOCUMENTARY" },
];

const ServicesSection = () => {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-24 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 overflow-hidden">

      {/* 🌊 Soft Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent">
                What I Create
              </span>
            </h2>

            {/* Badge */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-blue-100 rounded-full px-4 py-1.5 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">Y</span>
              </div>
              <span className="text-xs text-gray-600">
                Available for projects
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </div>
          </div>

          <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
            I craft visual experiences across film, commercial storytelling,
            and artistic productions — each project driven by emotion,
            precision, and cinematic depth.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">

          {/* SERVICES */}
          <div className="space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <span className="text-gray-400 text-sm">
                    {service.num}.
                  </span>

                  <span className="text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {service.title}
                  </span>
                </div>

                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
              </motion.div>
            ))}
          </div>

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-full md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-200/30 blur-2xl"></div>

            <img
              src={"https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774567145/Yugphoto_wn5aml.jpg"}
              alt="On set"
              className="relative w-full h-[420px] object-cover rounded-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;