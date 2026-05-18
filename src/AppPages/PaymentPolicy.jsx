import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import BgMain from "../images/main-bcg.jpeg";
import BgGirls from "../images/pexels-jibarofoto-2014773.jpg";
import HeaderImg from "../images/pexels-jibarofoto-2014773.jpg";

import Logoz from "../assets/rcmil.svg";
// import Pay from "../assets/payment.png";

const PaymentPolicy = () => {
    return (
        <div className="bg-[#f5f7fb] mt-10 overflow-x-hidden">

            {/* HERO SECTION */}
            <div
                className="relative h-[420px] w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HeaderImg})` }}
            >

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/65"></div>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 to-cyan-900/40"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
                >

                    <div className="mt-20 mb-6">
                        <span className="bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm tracking-widest uppercase">
                            RCMI Global Policy
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                        Payment Policy
                    </h1>

                    <p className="mt-6 max-w-3xl text-sm sm:text-xl text-gray-200 leading-relaxed">
                        Transparent, secure, and accountable giving practices
                        designed to support humanitarian outreach, medical missions,
                        and Christian ministry initiatives globally.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <Link
                            to="/donations"
                            className="
                bg-green-500
                hover:bg-green-600
                text-white
                font-semibold
                px-8
                py-4
                rounded-xl
                transition
                shadow-2xl
              "
                        >
                            Donate Now
                        </Link>

                        <a
                            href="#policy"
                            className="
                border
                border-white/30
                bg-gray/10
                backdrop-blur-md
                hover:bg-white/20
                text-black
                font-semibold
                px-8
                py-4
                rounded-xl
                transition
              "
                        >
                            Read Policy
                        </a>

                    </div>

                </motion.div>

            </div>

            {/* PREMIUM INTRO SECTION */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="
              bg-gradient-to-br
              from-blue-900
              to-cyan-800
              text-white
              rounded-3xl
              p-8
              lg:p-14
              shadow-2xl
              relative
              overflow-hidden
            "
                    >

                        {/* GLOW EFFECT */}
                        <div className="absolute top-0 right-0 w-56 h-56 bg-cyan-400/20 blur-3xl rounded-full"></div>

                        <div className="relative z-10 space-y-8">

                            <div className="space-y-4">

                                <span className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
                                    Donations & Payments
                                </span>

                                <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                                    Ethical & Transparent Giving
                                </h2>

                            </div>

                            <p className="text-gray-200 leading-loose text-lg">
                                Refuge and Consolation Ministry International (RCMI)
                                receives donations to support humanitarian outreach,
                                evangelism, medical missions, disaster response,
                                and community restoration initiatives.
                            </p>

                            <p className="text-gray-200 leading-loose text-lg">
                                Every contribution is handled with integrity,
                                accountability, and stewardship to ensure resources
                                are directed toward impactful ministry operations
                                and compassionate service delivery.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-2">

                                <Link
                                    to="/donations"
                                    className="
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    px-7
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                    shadow-lg
                  "
                                >
                                    Support the Mission
                                </Link>

                                <Link
                                    to="/contact"
                                    className="
                    border
                    border-white/30
                    hover:bg-white/10
                    px-7
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                  "
                                >
                                    Contact Us
                                </Link>

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT LOGO CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="
              bg-white
              rounded-3xl
              shadow-2xl
              p-10
              flex
              justify-center
              items-center
              min-h-[500px]
              relative
              overflow-hidden
            "
                    >

                        {/* DECORATIVE GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-100"></div>

                        <div className="absolute w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

                        <img
                            src={Logoz}
                            alt="RCMI Logo"
                            className="
                relative
                z-10
                w-60
                sm:w-72
                lg:w-[400px]
                object-contain
                drop-shadow-2xl
              "
                        />

                    </motion.div>

                </div>

            </div>

            {/* DONATION PROCESS SECTION */}
            <div
                className="relative bg-cover bg-center bg-fixed bg-no-repeat"
                style={{ backgroundImage: `url(${BgMain})` }}
            >

                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center space-y-8"
                    >

                        <span className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
                            Secure Processing
                        </span>

                        <h2 className="text-4xl lg:text-6xl font-black">
                            How We Process Donations
                        </h2>

                        <p className="max-w-4xl mx-auto text-lg lg:text-xl text-gray-200 leading-loose">
                            All donations are processed through secure and verified
                            payment channels. Contributions are carefully documented,
                            monitored, and allocated toward approved ministry,
                            outreach, humanitarian, and operational initiatives.
                        </p>

                    </motion.div>

                </div>

            </div>

            {/* POLICY CARDS */}
            <div
                id="policy"
                className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
            >

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[0.3em] text-cyan-700 text-sm">
                        Transparency Standards
                    </span>

                    <h2 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900">
                        Payment Terms & Policies
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-loose text-lg">
                        Our commitment to accountability, donor trust,
                        ethical stewardship, and secure financial processing.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[
                        {
                            title: "Secure Transactions",
                            text: "All financial transactions are processed through trusted and encrypted payment systems.",
                        },
                        {
                            title: "Non-Refundable Donations",
                            text: "Donations are considered voluntary contributions and are generally non-refundable once processed.",
                        },
                        {
                            title: "Financial Transparency",
                            text: "RCMI maintains transparent accountability standards regarding the use of donated funds.",
                        },
                        {
                            title: "Data Protection",
                            text: "Donor financial and personal information is never sold or shared without authorization.",
                        },
                        {
                            title: "Mission Allocation",
                            text: "Funds are directed toward ministry outreach, humanitarian support, and operational sustainability.",
                        },
                        {
                            title: "Donation Receipts",
                            text: "Official receipts and confirmations are available for verified contributions upon request.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="
                bg-white
                rounded-3xl
                p-8
                shadow-xl
                hover:shadow-2xl
                transition
                border
                border-gray-100
                group
              "
                        >

                            <div
                                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  text-cyan-700
                  text-2xl
                  font-bold
                  mb-6
                  group-hover:scale-110
                  transition
                "
                            >
                                ✓
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-loose">
                                {item.text}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>

            {/* PREMIUM CTA */}
            <div
                className="relative bg-cover bg-center bg-fixed bg-no-repeat"
                style={{ backgroundImage: `url(${BgGirls})` }}
            >

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-cyan-950/70"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-white text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >

                        <span className="uppercase tracking-[0.3em] text-cyan-300 text-sm">
                            Make An Impact
                        </span>

                        <h2 className="mt-5 text-4xl lg:text-6xl font-black leading-tight">
                            Support Hope, Healing & Restoration
                        </h2>

                        <p className="mt-8 text-lg lg:text-xl text-gray-200 leading-loose max-w-3xl mx-auto">
                            Your generosity enables us to provide humanitarian relief,
                            medical outreach, spiritual care, and life-transforming
                            support to vulnerable communities around the world.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-5">

                            <Link
                                to="/donations"
                                className="
                  bg-green-500
                  hover:bg-green-600
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                  shadow-2xl
                "
                            >
                                Donate Now
                            </Link>

                            <Link
                                to="/contact"
                                className="
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-md
                  hover:bg-white/20
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
                            >
                                Contact Us
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </div>

        </div>
    );
};

export default PaymentPolicy;