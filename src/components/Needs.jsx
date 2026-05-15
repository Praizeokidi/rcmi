import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import NeedImg1 from "../assets/gospel.jpg";
import NeedImg2 from "../assets/pexels-jayb-11045177.jpg";
import NeedImg3 from "../assets/pexels-kublackphotography-10858384.jpg";

// 🔥 Animated counter hook
const useCountUp = (target, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration]);

  return count;
};

const NeedCard = ({ title, image, raised, goal, progress, desc }) => {
  const animatedRaised = useCountUp(raised);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6 text-left">
        <h3 className="text-lg font-bold tracking-wide mb-3">
          {title}
        </h3>

        {/* LIVE COUNTER */}
        <p className="text-gray-600 font-medium">
          ${animatedRaised.toLocaleString()} of ${goal.toLocaleString()} raised
        </p>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
          <div
            className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-600 mt-4 leading-relaxed text-sm">
          {desc}
        </p>

        <Link
          to="/donations"
          className="inline-block mt-5 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          Donate Now
        </Link>
      </div>
    </motion.div>
  );
};

const Needs = () => {
  const items = [
    {
      title: "Send the Gospel to Unreached Tribes",
      image: NeedImg1,
      raised: 4000,
      goal: 12000,
      progress: 33,
      desc:
        "Remote regions of Asia remain unreached. We are actively sending teams to bring hope and spiritual transformation.",
    },
    {
      title: "Share Jesus With Forgotten Children",
      image: NeedImg2,
      raised: 900,
      goal: 12000,
      progress: 8,
      desc:
        "Marginalized children in Southeast Asia lack access to education, care, and hope for a better future.",
    },
    {
      title: "Feed Refugees in Crisis Zones",
      image: NeedImg3,
      raised: 0,
      goal: 12000,
      progress: 0,
      desc:
        "Families displaced by conflict urgently need food, shelter, and humanitarian relief to survive.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Meet Urgent Needs
        </h2>
        <p className="text-gray-600 mt-5 leading-relaxed">
          Your support directly funds outreach, rescue missions, and humanitarian
          aid for vulnerable communities worldwide.
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {items.map((item, index) => (
          <NeedCard key={index} {...item} />
        ))}
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          to="/urgentneeds"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-4 rounded-full font-semibold transition shadow-lg"
        >
          View More Urgent Needs
        </Link>
      </div>
    </section>
  );
};

export default Needs;