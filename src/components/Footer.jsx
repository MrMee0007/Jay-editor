import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ if using React Router

/* ================= DATA ================= */
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Hire Me", path: "/hireme" },
  { name: "Contact", path: "/contact" },
];

const socials = [
  { icon: Instagram, link: "https://instagram.com/" },
  { icon: Linkedin, link: "https://linkedin.com/" },
];

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 px-6 md:px-16 py-14 md:py-16">

      <div className="max-w-6xl mx-auto">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-10 pb-10 border-b border-gray-200">

          {/* BRAND */}
          <div className="md:col-span-2">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight"
            >
              Yug Gupta
              <span className="block text-blue-600 text-base font-semibold mt-2 leading-snug">
                Creative Cinematographer <br />
                Video Editor <br />
                Graphic Designer
              </span>
            </motion.h2>

            <p className="text-gray-600 mt-4 max-w-sm text-sm leading-relaxed">
              Crafting bold cinematic visuals with strategic storytelling.
              Let’s create something powerful and unforgettable.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-3 text-gray-700 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-600 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-700 font-medium text-sm">

              <a
                href="mailto:yuggupta9236@gmail.com"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>

              <a
                href="tel:+918887586830"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>

            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-gray-600 text-sm mt-1">
              Get creative updates & insights.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto"
          >
            <input
              type="email"
              required
              placeholder="Your Email"
              className="bg-white border border-gray-300 focus:border-blue-600 px-4 py-2.5 rounded-l-lg outline-none w-full md:w-60 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 rounded-r-lg font-semibold text-sm hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-xs font-medium">

          <p>
            © {new Date().getFullYear()} Yug Gupta. All rights reserved.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5">
            {socials.map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}