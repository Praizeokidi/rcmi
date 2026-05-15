import { motion } from "framer-motion";
import FoodImg from "../assets/feed.jpg";
import SpiritImg from "../assets/spiritual.jpg";

import MinImg1 from "../assets/pexels-turan-sahi-n-428086655-20369382.jpg";
import MinImg2 from "../assets/gallery15.jpg";
import MinImg3 from "../assets/pexels-emmages-8948347.jpg";
import MinImg4 from "../assets/pexels-safari-consoler-3290243-25228111.jpg";
import MinImg5 from "../assets/pexels-justin-muhinda-1340590076-25457343.jpg";
import MinImg6 from "../assets/pexels-jibarofoto-2774546.jpg";

const ministries = [
  {
    title: "Reach Unreached People Groups",
    img: MinImg1,
  },
  {
    title: "Medical & Eye Care Outreach",
    img: MinImg2,
  },
  {
    title: "Discipleship & Leadership Training",
    img: MinImg3,
  },
  {
    title: "Disaster Relief Response",
    img: MinImg4,
  },
  {
    title: "Child Welfare & Future Support",
    img: MinImg5,
  },
  {
    title: "Support Persecuted Christians",
    img: MinImg6,
  },
];

const reportData = [
  {
    img: MinImg1,
    date: "Oct 3, 2024",
    title: "RCMI Provides Shelter for Vulnerable Communities",
  },
  {
    img: FoodImg,
    date: "Jan 18, 2024",
    title: "Food Relief Brings Hope to Hundreds of Families",
  },
  {
    img: SpiritImg,
    date: "Jul 30, 2024",
    title: "Spiritual Guidance Transforms Communities",
  },
];

const Card = ({ title, img }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition"
  >
    <div className="overflow-hidden">
      <img
        src={img}
        alt={title}
        className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
      />
    </div>

    <div className="p-5 text-left">
      <p className="uppercase text-sm tracking-widest text-gray-700 font-semibold group-hover:text-cyan-700 transition">
        {title}
      </p>
    </div>
  </motion.div>
);

const ReportCard = ({ img, date, title }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition"
  >
    <img src={img} className="h-52 w-full object-cover" />

    <div className="p-5 text-left">
      <p className="text-xs text-gray-500">{date}</p>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>

      <a
        href="/"
        className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition"
      >
        Read More
      </a>
    </div>
  </motion.div>
);

const Ministries = () => {
  return (
    <section className="bg-gray-50 text-black">

      {/* HERO TEXT */}
      <div className="text-center px-6 py-20 max-w-4xl mx-auto">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="uppercase tracking-widest text-gray-500"
        >
          Our Ministries
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mt-4"
        >
          How You Can Make an Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 text-gray-600 leading-relaxed"
        >
          RCMI demonstrates the love of God through humanitarian aid, medical outreach,
          discipleship, and community transformation across nations.
        </motion.p>
      </div>

      {/* MINISTRIES GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {ministries.map((m, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
            >
              <Card {...m} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* REPORTS SECTION */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Latest Ministry Reports
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportData.map((r, i) => (
              <ReportCard key={i} {...r} />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Ministries;