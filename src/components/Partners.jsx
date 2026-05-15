import { motion } from "framer-motion";
import PartnerImg from "../assets/pexels-rdne-6646852.jpg";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#22c55e,transparent_40%),radial-gradient(circle_at_bottom_left,#06b6d4,transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full md:block"
          >

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">

              <img
                src={PartnerImg}
                alt="Partners"
                className="
        w-full
        h-[260px]
        sm:h-[320px]
        md:h-[420px]
        object-cover
        hover:scale-105
        transition duration-700
      "
              />

              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* floating badge */}
            <div className="
      absolute
      bottom-3
      right-3
      md:-bottom-6 md:-right-6
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      px-4 py-2 md:px-5 md:py-3
      rounded-xl
      shadow-xl
    ">
              <p className="text-xs md:text-sm text-gray-200">
                Global Partnership Network
              </p>
            </div>

          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-4 py-2 text-xs tracking-widest uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              Partnership Program
            </span>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Become a{" "}
              <span className="text-green-400">Pioneer Partner</span>
            </h2>

            <p className="mt-6 text-gray-300 leading-loose text-lg">
              Join a global movement of impact. As a monthly partner, you help
              fund outreach programs, medical missions, disaster relief, and
              evangelism in unreached communities worldwide.
            </p>

            {/* impact highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                Global Outreach
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                Lifesaving Missions
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                Gospel Expansion
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                Community Impact
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/donations"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-xl transition shadow-lg hover:-translate-y-1"
              >
                Become a Monthly Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;