import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DonationImg from "../assets/donationimage.jpg";
import CcImg from "../assets/cc.webp";
import PityImg from "../assets/pexels-mikejudkins-1113533.jpg";
import MinImg1 from "../assets/pexels-turan-sahi-n-428086655-20369382.jpg";
import MinImg2 from "../assets/gallery15.jpg";
import MinImg3 from "../assets/pexels-emmages-8948347.jpg";
import MinImg4 from "../assets/pexels-safari-consoler-3290243-25228111.jpg";
import MinImg5 from "../assets/pexels-justin-muhinda-1340590076-25457343.jpg";
import MinImg6 from "../assets/pexels-jibarofoto-2774546.jpg";
import PityImg2 from "../assets/pexels-julian-cordero-386432806-29380333.jpg";
import BgMain from "../images/main-bcg.jpeg";

const ministryAreas = [
  {
    image: MinImg1,
    title: "Reach Unreached People Groups",
  },
  {
    image: MinImg2,
    title: "Medical Outreach & Eye Care",
  },
  {
    image: MinImg3,
    title: "Raise Disciples & Leaders",
  },
  {
    image: MinImg4,
    title: "Emergency & Disaster Response",
  },
  {
    image: MinImg5,
    title: "Provide Hope for Children",
  },
  {
    image: MinImg6,
    title: "Support Persecuted Christians",
  },
];

const DonationPage = () => {
  return (
    <div className="bg-[#F8FAFC] overflow-x-hidden mt-27">

      {/* HERO SECTION */}
      <div
        className="relative h-[90vh] min-h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${DonationImg})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >

              <div className="inline-flex mt-28 items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <span className="text-sm tracking-[0.2em] uppercase">
                  Refuge & Consolation Ministry International
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Give Hope.
                <br />
                Restore Lives.
              </h1>

              <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl">
                Your generosity helps us provide medical outreach, disaster
                response, humanitarian support, evangelism, and life-changing
                care to vulnerable communities across Nigeria and beyond.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-10">

                <a
                  href="https://paystack.shop/pay/rcmi-donations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-green-500
                    hover:bg-green-600
                    text-black
                    font-semibold
                    px-8
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300
                    shadow-2xl
                    hover:-translate-y-1
                  "
                >
                  Donate Now
                </a>

                <Link
                  to="/contact"
                  className="
                    border
                    border-white/40
                    hover:bg-white
                    hover:text-black
                    px-8
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300
                    backdrop-blur-sm
                  "
                >
                  Partner With Us
                </Link>

              </div>

              <img
                src={CcImg}
                alt="Payment methods"
                className="w-56 mt-8"
              />

            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="
                hidden
                lg:block
              "
            >

              <div
                className="
                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-white/20
                  rounded-[32px]
                  p-8
                  shadow-2xl
                "
              >

                <img
                  src={PityImg}
                  alt="RCMI outreach"
                  className="
                    w-full
                    h-[500px]
                    object-cover
                    rounded-[24px]
                  "
                />

                <div className="pt-7 text-white">
                  <h2 className="text-2xl font-bold">
                    Every Donation Creates Impact
                  </h2>

                  <p className="mt-4 text-gray-200 leading-relaxed">
                    Through trusted mission partnerships and outreach teams,
                    your support reaches communities in urgent need with care,
                    compassion, and the Gospel.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* IMPACT SECTION */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >

            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight">
              How Your Giving Makes
              <span className="text-cyan-700"> A Difference</span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-loose">
              Your support empowers RCMI to bring healing, hope, relief,
              discipleship, and humanitarian assistance to underserved
              communities through sustainable outreach programs.
            </p>

          </motion.div>

          {/* MINISTRY GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {ministryAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  bg-white
                  rounded-[28px]
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                "
              >

                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-72
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-6 flex items-center text-cyan-700 font-semibold group-hover:translate-x-2 transition-all duration-300">
                    Learn More →
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

          {/* DONATE CTA */}
          <div className="text-center mt-20">

            <a
              href="https://paystack.shop/pay/rcmi-donations"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                bg-red-700
                hover:bg-red-600
                text-white
                px-10
                py-5
                rounded-2xl
                text-xl
                font-semibold
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Help Today
            </a>

            <img
              className="py-4 w-52 mx-auto"
              src={CcImg}
              alt="Cards"
            />

          </div>

        </div>
      </section>

      {/* DONATION INFO SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <img
                src={PityImg2}
                alt="Donation"
                className="
                  rounded-[32px]
                  shadow-2xl
                  object-cover
                  w-full
                "
              />

            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <div className="inline-flex px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm mb-6">
                Trusted Humanitarian Outreach
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Support Our Mission Through Giving
              </h2>

              <p className="mt-8 text-gray-600 text-lg leading-loose">
                Your contribution helps provide emergency relief, healthcare,
                discipleship, education support, and community transformation
                initiatives across vulnerable regions.
              </p>

              <div className="mt-10 space-y-5 text-gray-700">

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>
                  <p>Secure donations through trusted payment channels</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>
                  <p>Transparent and accountable ministry operations</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-2"></div>
                  <p>Direct support for outreach and humanitarian projects</p>
                </div>

              </div>

              <div className="flex flex-wrap gap-5 mt-12">

                <a
                  href="https://paystack.shop/pay/rcmi-donations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-cyan-700
                    hover:bg-cyan-800
                    text-white
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    transition-all
                    duration-300
                    shadow-xl
                  "
                >
                  Donate Securely
                </a>

                <Link
                  to="/contact"
                  className="
                    border
                    border-gray-300
                    hover:border-cyan-700
                    hover:text-cyan-700
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    transition-all
                  "
                >
                  Contact Us
                </Link>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative bg-cover bg-center py-32"
        style={{ backgroundImage: `url(${BgMain})` }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black leading-tight"
          >
            Together, We Can Reach More Lives
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 text-lg text-gray-200 leading-loose max-w-3xl mx-auto"
          >
            Join us in bringing hope, compassion, healing, and the message of
            Christ to communities facing hardship and crisis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-12"
          >

            <a
              href="https://paystack.shop/pay/rcmi-donations"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                bg-green-500
                hover:bg-green-600
                text-black
                px-10
                py-5
                rounded-2xl
                text-lg
                font-bold
                transition-all
                duration-300
                shadow-2xl
                hover:-translate-y-1
              "
            >
              Make a Donation
            </a>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default DonationPage;