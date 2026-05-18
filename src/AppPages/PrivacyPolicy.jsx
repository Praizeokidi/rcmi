import React from "react";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Lock,
    Database,
    Cookie,
    Globe,
    Mail,
    CheckCircle2,
} from "lucide-react";

import BgMain from "../images/main-bcg.jpeg";
import nappyPic from "../images/pexels-nappy-3360204.jpg";

const PrivacyPolicy = () => {
    return (
        <div className="bg-slate-50 mt-10 overflow-hidden">

            {/* HERO SECTION */}
            <section
                className="relative min-h-[420px] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${nappyPic})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-cyan-900/60"></div>

                <div className="relative z-10 max-w-5xl px-6 text-center text-white">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-5">
                        <ShieldCheck className="w-5 h-5 text-cyan-300" />
                        <span className="text-sm tracking-wide uppercase">
                            GDPR-Compliant Privacy Standards
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                        Privacy Policy
                    </h1>

                    <p className="mt-3 text-sm sm:text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
                        Refuge and Consolation Ministry International (RCMI)
                        is committed to protecting your privacy, securing your
                        personal data, and maintaining transparency in how
                        information is collected and used.
                    </p>
                </div>
            </section>

            {/* INTRO CARDS */}
            <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:-translate-y-2 transition duration-300">
                        <Lock className="w-10 h-10 text-cyan-600 mb-5" />

                        <h3 className="text-2xl font-bold text-slate-900">
                            Secure Data
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Your information is stored using secure systems
                            and industry-standard protection practices.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:-translate-y-2 transition duration-300">
                        <Database className="w-10 h-10 text-cyan-600 mb-5" />

                        <h3 className="text-2xl font-bold text-slate-900">
                            Transparent Usage
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We clearly explain how your information is collected,
                            processed, and managed.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:-translate-y-2 transition duration-300">
                        <Globe className="w-10 h-10 text-cyan-600 mb-5" />

                        <h3 className="text-2xl font-bold text-slate-900">
                            Global Compliance
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Our privacy practices are aligned with international
                            data protection principles including GDPR standards.
                        </p>
                    </div>

                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT COLUMN */}
                    <div className="space-y-8">

                        {/* CARD */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-cyan-100 p-3 rounded-2xl">
                                    <Database className="text-cyan-700 w-7 h-7" />
                                </div>

                                <h2 className="text-3xl font-bold text-slate-900">
                                    Information We Collect
                                </h2>
                            </div>

                            <ul className="space-y-4 text-gray-700 leading-relaxed">
                                {[
                                    "Names, email addresses, and contact details",
                                    "Newsletter subscription information",
                                    "Messages submitted through contact forms",
                                    "Technical information such as IP address and browser type",
                                    "Website analytics and usage information",
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <CheckCircle2 className="text-cyan-600 w-5 h-5 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CARD */}
                        <div className="bg-gradient-to-br from-cyan-700 to-blue-900 text-white rounded-3xl shadow-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>

                                <h2 className="text-3xl font-bold">
                                    How We Use Data
                                </h2>
                            </div>

                            <ul className="space-y-4 leading-relaxed text-gray-100">
                                <li>• Respond to inquiries and support requests</li>
                                <li>• Send newsletters and ministry updates</li>
                                <li>• Improve website performance and usability</li>
                                <li>• Maintain platform security and integrity</li>
                                <li>• Support ministry communications and outreach</li>
                            </ul>
                        </div>

                        {/* CARD */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-cyan-100 p-3 rounded-2xl">
                                    <Cookie className="text-cyan-700 w-7 h-7" />
                                </div>

                                <h2 className="text-3xl font-bold text-slate-900">
                                    Cookies & Analytics
                                </h2>
                            </div>

                            <p className="text-gray-700 leading-loose">
                                We may use cookies and analytics technologies
                                to enhance website functionality, understand
                                visitor behavior, and improve user experience.
                                Users can manage or disable cookies directly
                                through browser settings.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-8">

                        {/* IMAGE CARD */}
                        <div
                            className="rounded-3xl overflow-hidden shadow-2xl min-h-[350px] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${BgMain})` }}
                        >
                            <div className="absolute inset-0 bg-black/55"></div>

                            <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">
                                <h2 className="text-4xl font-bold leading-tight">
                                    Protecting Your Information Matters
                                </h2>

                                <p className="mt-5 text-gray-200 leading-relaxed">
                                    RCMI is committed to responsible data handling,
                                    confidentiality, and transparent digital practices.
                                </p>
                            </div>
                        </div>

                        {/* RIGHTS CARD */}
                        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-cyan-100 p-3 rounded-2xl">
                                    <ShieldCheck className="text-cyan-700 w-7 h-7" />
                                </div>

                                <h2 className="text-3xl font-bold text-slate-900">
                                    Your Rights
                                </h2>
                            </div>

                            <ul className="space-y-4 text-gray-700 leading-relaxed">
                                {[
                                    "Request access to your personal data",
                                    "Correct inaccurate information",
                                    "Request deletion of your information",
                                    "Withdraw consent at any time",
                                    "Request information about how your data is processed",
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <CheckCircle2 className="text-cyan-600 w-5 h-5 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* THIRD PARTY */}
                        <div className="bg-slate-900 text-white rounded-3xl shadow-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-white/10 p-3 rounded-2xl">
                                    <Globe className="w-7 h-7" />
                                </div>

                                <h2 className="text-3xl font-bold">
                                    Third-Party Services
                                </h2>
                            </div>

                            <p className="text-gray-300 leading-loose">
                                We may use trusted third-party providers for
                                hosting, analytics, communications, and secure
                                service delivery. These providers operate under
                                their own privacy and security standards.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="relative py-24 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-900"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-8">
                        <Mail className="w-10 h-10" />
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Questions About Privacy?
                    </h2>

                    <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        If you have questions regarding this Privacy Policy
                        or how your data is handled, our team is available
                        to assist you.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">

                        <a
                            href="mailto:info@rcmi.org.ng"
                            className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition duration-300"
                        >
                            info@rcmi.org.ng
                        </a>

                        <Link
                            to="/contact"
                            className="border border-white/30 backdrop-blur-md bg-white/10 px-8 py-4 rounded-2xl hover:bg-white hover:text-slate-900 transition duration-300"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default PrivacyPolicy;