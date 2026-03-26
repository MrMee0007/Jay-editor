import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white px-6 md:px-20 py-40">

      {/* Massive Soft Background Word */}
      <h2 className="absolute top-20 left-1/2 -translate-x-1/2 text-[18vw] font-black text-blue-100/40 tracking-tight select-none pointer-events-none">
        EXPERTISE
      </h2>

      {/* Soft Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE — TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.4em] text-sm text-blue-600 mb-6 font-semibold">
            What I Bring
          </p>

          <h3 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Crafting Visual
            <span className="block bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h3>

          <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-lg">
            A carefully cultivated blend of cinematic storytelling, creative
            direction and technical execution — refined through real-world
            productions and collaborative leadership.
          </p>
        </motion.div>

        {/* RIGHT SIDE — GLASS CARD PARAGRAPHS */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="p-12 rounded-3xl bg-white/70 backdrop-blur-2xl border border-blue-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] space-y-8">

            <p className="text-slate-700 text-lg leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold text-slate-900">
                cinematography
              </span>{" "}
              — mastering light, composition, and movement to translate
              emotion into powerful visual narratives.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              With deep expertise in{" "}
              <span className="font-semibold text-slate-900">
                video editing & post-production
              </span>
              , I craft seamless stories using industry tools while maintaining
              precision and creative clarity.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              My foundation in{" "}
              <span className="font-semibold text-slate-900">
                design, leadership and collaboration
              </span>{" "}
              ensures every project balances aesthetic excellence with
              strategic execution.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              I bring structure, communication and time discipline into
              creative workflows — delivering premium results without
              compromising artistic integrity.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}