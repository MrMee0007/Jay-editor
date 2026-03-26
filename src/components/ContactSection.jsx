import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ArrowRight,
  Clock,
  Globe,
  Briefcase,
} from "lucide-react";
import Footer from "./Footer";

export default function ContactSection() {
  return (
    <section className="relative px-6 md:px-20 py-24 bg-gray-50 text-gray-900 overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://res.cloudinary.com/ds0y1ut9q/image/upload/v1774478196/IMG_0851_hfkbzy.webp"
          alt="background"
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto mt-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-3">
            Let’s Connect
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Start Your Project
          </h2>

          <div className="w-20 h-[3px] bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE DETAILS */}
          <div className="space-y-10">

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <Phone className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="font-bold text-lg">+91 8887-586830</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-bold text-lg">yuggupta9236@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-bold text-lg">
                    Noida / Delhi / Gurgaon
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="text-gray-500 text-sm">Working Hours</p>
                  <p className="font-bold text-lg">
                    Mon – Sat | 10 AM – 7 PM
                  </p>
                </div>
              </div>



            </div>

            {/* Services */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-600 w-6 h-6" />
                <h3 className="font-bold text-lg">Services</h3>
              </div>

              <ul className="space-y-2 text-gray-700 font-medium">
                <li>• Cinematic Videography</li>
                <li>• Commercial Shoots</li>
                <li>• Music Videos</li>
                <li>• Wedding Films</li>
                <li>• Professional Editing</li>
              </ul>
            </div>


          </div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-200 p-10 rounded-3xl space-y-7 shadow-lg"
          >

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 focus:border-blue-600 rounded-lg px-4 py-3 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 focus:border-blue-600 rounded-lg px-4 py-3 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Project Details
              </label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 focus:border-blue-600 rounded-lg px-4 py-3 outline-none transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            >
              Send Proposal
              <ArrowRight size={18} />
            </button>

          </motion.form>

        </div>

      </div>
    </section>


  );
}