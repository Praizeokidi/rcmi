import { Link } from "react-router-dom";
import cottonbroImg from "../images/pexels-cottonbro-4630674.jpg";

const Hero = () => {
  return (
    <section
      className="relative  min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${cottonbroImg})` }}
    >
      {/* DARK BASE OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* PREMIUM GRADIENT LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-blue-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-4xl px-6 sm:px-10 lg:ml-24 text-white">

          {/* BADGE (optional but premium feel) */}
          <div className=" mt-10 mb-6">
            <span className="bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-xs tracking-widest uppercase">
              RCMI Rescue Mission
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Release, Rescue, and Restore Girls Trapped in Trafficking
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-3xl">
            Right now, in the red-light districts of Myanmar, young girls are
            trapped in a nightmare—trafficked into sex work and living in
            constant fear. Our outreach teams risk dangerous environments to
            rescue them, offering trauma care, job training, and safe
            rehabilitation.
          </p>

          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            It costs an average of $160 to rescue one girl. Your support
            directly funds rescue operations and restoration programs.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/donations"
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-xl shadow-2xl transition hover:-translate-y-1"
            >
              Donate Now
            </Link>

            <a
              href="/urgentneeds"
              className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Learn More
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;