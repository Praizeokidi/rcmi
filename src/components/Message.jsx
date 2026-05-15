import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";

import FounderImg from "../assets/founder.jpeg";

const Message = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24">

      {/* background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#22c55e,transparent_45%),radial-gradient(circle_at_bottom_left,#06b6d4,transparent_45%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* label */}
          <span className="inline-block mb-5 px-4 py-2 text-xs tracking-widest uppercase bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
            Leadership Message
          </span>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Message from the{" "}
            <span className="text-green-400">Global Coordinator</span>
          </h2>

          {/* quote card */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">

            <FaQuoteLeft className="text-green-400 text-xl mb-3" />

            <p className="text-gray-200 leading-loose text-lg">
              We follow Jesus’ example by being an active, visible, tangible
              expression of God’s love as we work alongside the poor and oppressed.
            </p>

            <div className="flex justify-end mt-3">
              <FaQuoteRight className="text-green-400 text-xl" />
            </div>

          </div>

          {/* signature */}
          <div className="mt-8 flex items-center gap-3 text-gray-300">
            <HiOutlineAcademicCap className="text-2xl text-green-400" />
            <div>
              <p className="font-semibold text-white">
                Dr. Chaplain Juliana Nathaniel, Ph.D.
              </p>
              <p className="text-sm text-gray-400">
                RCMI Global Coordinator
              </p>
            </div>
          </div>

        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">

            <img
              src={FounderImg}
              alt="Global Coordinator"
              className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-xl shadow-xl">
            <p className="text-sm text-gray-200">
              Leadership • Vision • Global Impact
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Message;