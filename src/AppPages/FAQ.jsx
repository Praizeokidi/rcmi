import React, { useState } from "react";
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
        <div className="bg-gray-100 mt-27">

            {/* HERO */}
            <div
                className="w-full h-[300px] sm:h-[400px] flex items-center justify-center text-white text-center bg-center bg-cover bg-no-repeat relative"
                style={{ backgroundImage: `url(${BgMain})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-3 text-lg text-gray-200">
                        Everything you need to know about RCMI
                    </p>
                </div>
            </div>

            {/* INTRO */}
            <div className="max-w-6xl mx-auto p-6 py-12 text-center">
                <h2 className="text-3xl font-bold">We’re here to help</h2>
                <p className="text-gray-600 mt-4 leading-loose">
                    Find answers to common questions about donations, outreach programs,
                    volunteering, and how RCMI operates globally.
                </p>
            </div>

            {/* GRID FAQ SECTION (UPDATED) */}
            <div className="max-w-6xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden
                            transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                        >

                            {/* QUESTION */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="font-semibold text-gray-800">
                                    {faq.question}
                                </span>

                                <span
                                    className={`text-2xl font-bold text-cyan-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    +
                                </span>
                            </button>

                            {/* ANSWER (ANIMATED) */}
                            <div
                                className={`px-5 text-gray-600 leading-relaxed overflow-hidden transition-all duration-500 ease-in-out
                                ${isOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
                            >
                                {faq.answer}
                            </div>

                        </div>
                    );
                })}

            </div>

            {/* CTA */}
            <div className="bg-cyan-700 text-white text-center py-16 px-6">

                <h2 className="text-3xl font-bold">
                    Still have questions?
                </h2>

                <p className="mt-3 text-gray-100">
                    Reach out to us and we’ll be happy to help you.
                </p>

                <a
                    href="/contact"
                    className="inline-block mt-6 bg-green-500 px-6 py-3 rounded hover:bg-green-600 transition"
                >
                    Contact Us
                </a>

            </div>

        </div>
    );
};

export default FAQ;