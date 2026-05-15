import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BgMain from "../images/main-bcg.jpeg";

const faqs = [
    {
        question: "What is RCMI?",
        answer:
            "Refuge and Consolation Ministry International (RCMI) is a Christian NGO dedicated to medical missions, evangelism, and humanitarian outreach focused on restoring hope and transforming lives.",
    },
    {
        question: "How can I support the ministry?",
        answer:
            "You can support RCMI through donations, volunteering, prayer, or partnering with our outreach programs. Every contribution helps us reach more lives.",
    },
    {
        question: "Are donations secure?",
        answer:
            "Yes. All donations are processed through secure and verified channels. We ensure transparency and accountability in all financial operations.",
    },
    {
        question: "Can I get a receipt for my donation?",
        answer:
            "Yes. Receipts are available upon request for all verified donations made to the ministry.",
    },
    {
        question: "Where do the donations go?",
        answer:
            "Funds are used for medical missions, evangelism outreach, disaster relief, and supporting vulnerable communities across regions we serve.",
    },
    {
        question: "Can I volunteer with RCMI?",
        answer:
            "Yes. We welcome volunteers for missions, outreach programs, administration, and support services. Visit our contact page to apply.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 mt-10 overflow-x-hidden">

            {/* HERO SECTION */}
            <div
                className="w-full h-[320px] sm:h-[420px] flex items-center justify-center text-white text-center bg-center bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${BgMain})` }}
            >
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-4xl sm:text-6xl mt-20 font-extrabold tracking-wide">
                        Frequently Asked Questions
                    </h1>

                    <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                        Everything you need to know about Refuge and Consolation
                        Ministry International.
                    </p>
                </motion.div>
            </div>

            {/* INTRO */}
            <div className="max-w-6xl mx-auto px-6 py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-gray-800"
                >
                    How can we help you?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mt-5 leading-loose max-w-3xl mx-auto"
                >
                    Explore answers to common questions about our ministry,
                    donations, volunteer opportunities, outreach missions,
                    transparency, and humanitarian impact.
                </motion.p>
            </div>

            {/* FAQ GRID */}
            <div className="max-w-7xl mx-auto px-6 pb-24">

                {/* ✅ CHANGED:
            responsive rows & columns layout
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="
                rounded-2xl
                overflow-hidden
                backdrop-blur-lg
                bg-white/80
                border border-white/20
                shadow-xl
                hover:shadow-2xl
                transition-all
                duration-300
              "
                        >

                            {/* QUESTION BUTTON */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-6
                  text-left
                  group
                "
                            >

                                <span
                                    className="
                    text-lg
                    font-semibold
                    text-gray-800
                    group-hover:text-cyan-700
                    transition
                  "
                                >
                                    {faq.question}
                                </span>

                                {/* ANIMATED ICON */}
                                <motion.div
                                    animate={{
                                        rotate: openIndex === index ? 45 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="
                    min-w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-100
                    text-cyan-700
                    text-2xl
                    font-bold
                  "
                                >
                                    +
                                </motion.div>

                            </button>

                            {/* SMOOTH ACCORDION */}
                            <AnimatePresence initial={false}>

                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden"
                                    >

                                        <motion.div
                                            initial={{ y: -10 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -10 }}
                                            transition={{ duration: 0.25 }}
                                            className="
                        px-6
                        pb-6
                        text-gray-600
                        leading-relaxed
                      "
                                        >
                                            {faq.answer}
                                        </motion.div>

                                    </motion.div>
                                )}

                            </AnimatePresence>

                        </motion.div>
                    ))}

                </div>

            </div>

            {/* CTA SECTION */}
            <div className="bg-gradient-to-r from-cyan-700 to-blue-900 text-white py-20 px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >

                    <h2 className="text-4xl font-bold">
                        Still Have Questions?
                    </h2>

                    <p className="mt-5 text-gray-200 text-lg leading-relaxed">
                        Reach out to our team and we’ll gladly assist you with
                        donations, volunteering, outreach programs, or partnership inquiries.
                    </p>

                    <a
                        href="/contact"
                        className="
              inline-block
              mt-8
              bg-green-500
              hover:bg-green-600
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
              shadow-lg
            "
                    >
                        Contact Us
                    </a>

                </motion.div>

            </div>

        </div>
    );
};

export default FAQ;