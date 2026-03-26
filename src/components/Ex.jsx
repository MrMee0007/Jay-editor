import { motion } from "framer-motion";

/* ================= IMPORT IMAGES ================= */
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import wedding1 from "../assets/images/wedding1.jpg";
import wedding2 from "../assets/images/wedding2.jpg";

/* ================= IMPORT VIDEOS ================= */
import showreel from "../assets/videos/showreel.mp4";
import eventHighlight from "../assets/videos/eventHighlight.mp4";
import { video1 } from "../assets/assets";

export default function Ex() {
  const workCollection = [
    { src: event1, title: "Live Concert Coverage" },
    { src: event2, title: "Celebrity Event Shoot" },
    { src: wedding1, title: "Wedding Cinematic Frame" },
    { src: wedding2, title: "Pre-Wedding Story Film" },
  ];

  const videoCollection = [
    { src: showreel, title: "Official Showreel 2026" },
    { src: video1, title: "Event Highlight Film" },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-[0.2em]">
            WORK
          </h1>
          <p className="text-red-600 mt-6 text-lg tracking-[0.3em]">
            CINEMATOGRAPHY • EDITING • STORYTELLING
          </p>
        </motion.div>
      </section>

      {/* ================= WORK COLLECTION ================= */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-red-600">
          Work Collection
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {workCollection.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[450px] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-50"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-2xl font-semibold tracking-wider">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EVENT HIGHLIGHTS GRID ================= */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10 bg-zinc-950">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-red-600">
          Event Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {workCollection.map((item, index) => (
            <motion.img
              key={index}
              src={item.src}
              alt=""
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="h-72 w-full object-cover rounded-2xl border border-white/10 hover:shadow-[0_0_40px_rgba(255,0,0,0.4)]"
            />
          ))}
        </div>
      </section>

      {/* ================= VIDEO SHOWCASE ================= */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-red-600">
          Showreels & Films
        </h2>

        <div className="space-y-20">
          {videoCollection.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 bg-black"
            >
              <video
                src={video.src}
                controls
                className="w-full h-[500px] object-cover"
              />
              <div className="p-6 border-t border-white/10">
                <h3 className="text-2xl font-semibold">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="px-6 md:px-20 py-28 border-t border-white/10 bg-zinc-950">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-red-600">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-10"
        >
          <div>
            <h3 className="text-2xl font-semibold">
              Pratibha – Cinematography Club
            </h3>
            <p className="text-red-500 mt-2">
              Treasurer & Videography Head (2024 – 2026)
            </p>
            <p className="text-gray-400 mt-4 leading-7">
              Led official university media coverage, supervised production workflow,
              coordinated multi-camera setups, and managed event budgets while ensuring
              cinematic quality output.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Freelance Event & Celebrity Coverage
            </h3>
            <p className="text-gray-400 mt-4 leading-7">
              Covered live concerts, celebrity appearances, and weddings with strong
              storytelling techniques, cinematic framing, and professional post-production.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="px-6 md:px-20 py-36 text-center border-t border-white/10">
        <h2 className="text-5xl font-bold uppercase text-red-600 mb-10">
          Let’s Build Something Cinematic
        </h2>

        <button className="px-12 py-5 bg-red-600 rounded-full text-white font-semibold tracking-widest hover:bg-red-700 transition duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]">
          Contact Me
        </button>
      </section>

    </div>
  );
}