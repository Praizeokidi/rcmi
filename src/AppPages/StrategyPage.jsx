import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe2,
  HeartHandshake,
  Stethoscope,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react";

import Strategy from "../components/Strategy";
import BgMain from "../images/main-bcg.jpeg";

const strategyCards = [
  {
    icon: <HeartHandshake size={30} />,
    title: "Humanitarian Outreach",
    text: "Delivering compassionate support, relief interventions, and sustainable community care for vulnerable populations.",
  },
  {
    icon: <Stethoscope size={30} />,
    title: "Medical Missions",
    text: "Providing healthcare access, eye care services, treatment programs, and medical outreach to underserved regions.",
  },
  {
    icon: <Users size={30} />,
    title: "Capacity Building",
    text: "Equipping missionaries, volunteers, and local leaders with the tools and training needed for sustainable impact.",
  },
  {
    icon: <Globe2 size={30} />,
    title: "Global Expansion",
    text: "Extending ministry impact across Nigeria, Africa, and global communities through strategic partnerships.",
  },
];

const StrategyPage = () => {
  return (
    <main className="bg-white overflow-x-hidden mt-17">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[85vh] bg-center bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${BgMain})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mt-8"
          >

            {/* BADGE */}
            <div className="inline-flex mt-10 items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white mb-8">
              <ShieldCheck size={18} />
              <span className="uppercase tracking-[0.2em] text-sm">
                Ministry Strategy & Global Impact
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Strategy of the Ministry
            </h1>

            {/* TEXT */}
            <p className="mt-3 text-sm sm:text-xl leading-relaxed text-gray-200 max-w-3xl">
              Our ministry strategy is built on sustainable humanitarian
              outreach, medical missions, discipleship, leadership development,
              and transformational community engagement designed to restore
              hope and improve lives globally.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold text-white shadow-2xl"
              >
                Back Home
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/donations"
                className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition px-8 py-4 rounded-xl font-semibold text-white"
              >
                Support Our Mission
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-4xl mx-auto">

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.25em] text-cyan-700 font-semibold"
            >
              Strategic Framework
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight"
            >
              Creating Lasting Impact Through Faith,
              Compassion & Sustainable Action
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 text-lg leading-loose text-gray-600"
            >
              RCMI adopts a holistic ministry strategy that integrates
              evangelism, healthcare, humanitarian response, leadership
              development, and community empowerment to improve the wellbeing
              of vulnerable populations and strengthen long-term resilience.
            </motion.p>

          </div>

        </div>

      </section>

      {/* STRATEGY CARDS */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {strategyCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:bg-cyan-700 group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-7">
                  {card.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-loose">
                  {card.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* MAIN STRATEGY CONTENT */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="mb-16 text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.25em] text-cyan-700 font-semibold">
              Ministry Operations
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5">
              How We Execute Our Mission Strategy
            </h2>

            <p className="mt-6 text-lg leading-loose text-gray-600">
              Through collaborative partnerships, field outreach, sustainable
              programs, and faith-driven leadership, RCMI continues to expand
              its humanitarian and spiritual impact.
            </p>

          </div>

          {/* EXISTING STRATEGY COMPONENT */}
          <div className="bg-gray-50 rounded-[2rem] shadow-xl border border-gray-100 p-6 lg:p-12">
            <Strategy />
          </div>

        </div>

      </section>

      {/* IMPACT SECTION */}
      <section className="bg-gradient-to-r from-cyan-800 to-blue-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[0.25em] text-cyan-200 font-semibold">
                Global Vision
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold mt-5 leading-tight">
                Advancing a Global Movement of Hope & Restoration
              </h2>

              <p className="mt-8 text-lg leading-loose text-gray-200">
                Our strategy extends beyond immediate relief. We focus on
                building resilient communities through long-term partnerships,
                healthcare interventions, discipleship, and leadership
                empowerment initiatives.
              </p>

            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >

              {[
                ["15+", "Years of Ministry Impact"],
                ["1000+", "Lives Reached Through Outreach"],
                ["Multiple", "Communities Served"],
                ["Global", "Expansion Vision"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center"
                >
                  <h3 className="text-4xl font-extrabold">
                    {item[0]}
                  </h3>

                  <p className="mt-3 text-gray-200">
                    {item[1]}
                  </p>
                </div>
              ))}

            </motion.div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-700 to-blue-900 rounded-[2rem] p-10 lg:p-16 text-white text-center shadow-2xl"
          >

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Partner With Our Mission Strategy
            </h2>

            <p className="mt-6 text-lg leading-loose text-gray-200 max-w-3xl mx-auto">
              Join us in expanding humanitarian outreach, empowering vulnerable
              communities, strengthening healthcare access, and spreading hope
              through sustainable ministry impact.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <Link
                to="/donations"
                className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Donate Now
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold"
              >
                Become a Partner
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default StrategyPage;