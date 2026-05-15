import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  HeartHandshake,
  Users,
  ShieldCheck,
  Stethoscope,
  Church,
} from "lucide-react";

import Image1 from "../assets/abt1.jpg";
import Image2 from "../assets/abt2.jpg";
import Image3 from "../assets/abt3.jpg";
import BgMain from "../images/main-bcg.jpeg";

const AboutPage = () => {
  const goals = [
    {
      icon: <HeartHandshake size={28} />,
      title: "Humanitarian Outreach",
      text: "Providing relief, healthcare support, and compassionate care to vulnerable communities.",
    },
    {
      icon: <Church size={28} />,
      title: "Evangelism & Missions",
      text: "Reaching unreached people groups with the Gospel and message of hope through Christ.",
    },
    {
      icon: <Stethoscope size={28} />,
      title: "Medical Missions",
      text: "Delivering eye care, treatment, and healthcare access through strategic outreach programs.",
    },
    {
      icon: <Globe size={28} />,
      title: "Global Impact",
      text: "Expanding our reach across Nigeria, Africa, and beyond through sustainable ministry efforts.",
    },
  ];

  const leadership = [
    {
      name: "Dr Chaplain Juliana Nathaniel",
      role: "Global Director",
    },
    {
      name: "Reverend Lei Abrahams Ndu",
      role: "National Coordinator",
    },
    {
      name: "Chaplain Asuquo Udo Edem",
      role: "National Technical Advisor",
    },
    {
      name: "Pastor Mike O. Amos",
      role: "Director of Missions",
    },
    {
      name: "Evangelist Francisca Nonye Okah",
      role: "Director STORM",
    },
    {
      name: "Pastor Mrs Claris Eze",
      role: "Director of Administration",
    },
  ];

  return (
    <div className="bg-white overflow-x-hidden mt-17">

      {/* HERO SECTION */}
      <div
        className="relative min-h-[80vh] bg-center bg-cover bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${BgMain})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            <div className="mb-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white">
              <ShieldCheck size={18} />
              <span className="text-sm tracking-wide uppercase">
                Christian Humanitarian Organization
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              About RCMI
            </h1>

            <p className="mt-7 text-lg sm:text-xl leading-relaxed text-gray-200 max-w-2xl">
              Refuge and Consolation Ministry International is committed to
              restoring hope, transforming lives, advancing humanitarian care,
              and spreading the Gospel through compassionate outreach and
              sustainable impact initiatives.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/donations"
                className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold text-white shadow-xl"
              >
                Support Our Mission
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 transition px-8 py-4 rounded-xl font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>

          </motion.div>

        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >

            <img
              src={Image1}
              alt="RCMI outreach"
              className="rounded-3xl shadow-2xl object-cover h-full"
            />

            <div className="space-y-5">
              <img
                src={Image2}
                alt="RCMI mission"
                className="rounded-3xl shadow-2xl object-cover"
              />

              <img
                src={Image3}
                alt="RCMI humanitarian work"
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>

          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div>
              <p className="text-cyan-700 font-semibold uppercase tracking-[0.2em]">
                Our Mission
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                Restoring Hope Through Faith, Compassion & Service
              </h2>
            </div>

            <p className="text-gray-600 leading-loose text-lg">
              RCMI exists to reduce suffering among vulnerable populations,
              provide humanitarian support, strengthen healthcare access, and
              spread the message of salvation through Jesus Christ across
              communities in Nigeria, Africa, and beyond.
            </p>

            <p className="text-gray-600 leading-loose text-lg">
              Through medical missions, evangelism, emergency response,
              discipleship, and community development initiatives, we seek to
              bring practical help and spiritual transformation to individuals
              and families in need.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 pt-4">

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-3xl font-bold text-cyan-700">15+</h3>
                <p className="text-gray-600 mt-2">
                  Years of humanitarian and ministry impact
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-3xl font-bold text-cyan-700">Global</h3>
                <p className="text-gray-600 mt-2">
                  Outreach vision across Africa and beyond
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* GOALS SECTION */}
      <div className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-cyan-700 font-semibold uppercase tracking-[0.2em]">
              What We Do
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Our Core Areas of Impact
            </h2>

            <p className="mt-6 text-gray-600 leading-loose text-lg">
              We combine humanitarian action, medical outreach, discipleship,
              and sustainable development initiatives to improve lives and
              strengthen communities.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                  {goal.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-6">
                  {goal.title}
                </h3>

                <p className="text-gray-600 leading-loose mt-4">
                  {goal.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

      {/* OBJECTIVES */}
      <div className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <p className="text-cyan-700 font-semibold uppercase tracking-[0.2em]">
              Strategic Objectives
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Building Sustainable Community Transformation
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Reach unreached communities with the Gospel of Jesus Christ.",
              "Support missionaries and strengthen discipleship initiatives.",
              "Expand access to healthcare and humanitarian support.",
              "Improve nutrition, clean water, sanitation, and hygiene access.",
              "Empower vulnerable groups through education and entrepreneurship.",
              "Strengthen healthcare systems and outreach capacity.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >

                <div className="min-w-12 h-12 rounded-full bg-cyan-700 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <p className="text-gray-700 leading-loose">
                  {item}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

      {/* LEADERSHIP */}
      <div className="bg-gradient-to-r from-cyan-800 to-blue-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.2em] text-cyan-200 font-semibold">
              Leadership
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4">
              Experienced & Mission-Driven Leadership
            </h2>

            <p className="mt-6 text-gray-200 leading-loose text-lg">
              RCMI is guided by experienced ministry leaders, healthcare
              professionals, and humanitarian advocates committed to advancing
              transformational impact.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition"
              >

                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Users size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {leader.name}
                </h3>

                <p className="text-cyan-200 mt-3">
                  {leader.role}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

      {/* FINAL CTA */}
      <div className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-700 to-blue-900 rounded-[2rem] p-10 lg:p-16 text-white shadow-2xl"
          >

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Partner With Us To Transform Lives
            </h2>

            <p className="mt-6 text-lg text-gray-200 leading-loose max-w-3xl mx-auto">
              Your support enables us to continue humanitarian outreach,
              medical missions, evangelism, and community restoration programs
              that impact thousands of lives.
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

      </div>

    </div>
  );
};

export default AboutPage;