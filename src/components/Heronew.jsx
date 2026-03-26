import { useState } from "react";

const footageItems = [
  {
    video: "https://player.vimeo.com/external/449695843.sd.mp4?s=fb04bd3dbda0ac8f9a5c915d0f9db83610658f5b&profile_id=164",
    title: "Mobile & Studio",
    desc: "Capturing compelling stories through cinematic mobile and studio production.",
  },
  {
    video: "https://player.vimeo.com/external/449695848.sd.mp4?s=60c8002683b2af0cf15864c23b2a627476f5fb24&profile_id=164",
    title: "Events & Concerts",
    desc: "High-energy event coverage with immersive storytelling visuals.",
  },
  {
    video: "https://player.vimeo.com/external/449695851.sd.mp4?s=8e06a0c9b74d3434969650ee1c8a0c7efd8c86e7&profile_id=164",
    title: "Expert Lens Work",
    desc: "Professional camera direction and cinematic execution in every frame.",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navLinks = ["home", "about", "portfolio", "services", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-white">
          PRATIBHA<span className="text-primary">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setActive(link)}
              className={`uppercase text-sm tracking-wider transition-all duration-300 ${
                active === link
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-primary text-black px-5 py-2 text-sm font-semibold rounded-full hover:scale-105 transition-transform"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative pt-32 pb-20 bg-black text-white overflow-hidden"
      >
        {/* Glowing Overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[200px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Top */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                CINEMATIC <br />
                <span className="italic text-primary">VISUALS</span> <br />
                IN MOTION
              </h1>

              <p className="text-white/70 mb-8 max-w-lg">
                We elevate your brand through legendary visual storytelling —
                from creative direction to immersive cinematography.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#portfolio"
                  className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  View Portfolio
                </a>

                <a
                  href="#about"
                  className="border border-white/40 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* Background Hero Image from Unsplash */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition" />

              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80"
                alt="Cinematic Videographer"
                className="relative rounded-3xl w-full object-cover aspect-square shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Footage Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {footageItems.map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 text-center hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-full h-44 mb-6 rounded-2xl overflow-hidden">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition">
                  {item.title}
                </h3>

                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroSection;