import React from "react";
import { Link } from "react-router-dom";
import BgMain from "../images/main-bcg.jpeg";
import nappyPic from "../images/pexels-nappy-3360204.jpg"




const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 mt-27">

            <div className="h-80 bg-center bg-cover bg-no-repeat relative overflow-x-hidden"
                style={{ backgroundImage: `url(${nappyPic})` }}
            >
                <div className="h-full backdrop-brightness-50">
                    <div className="z-3 px-4 sm:px-8 pt-24 flex flex-col justify-center items-center h-full text-center">
                        <h1 className="font-bold text-white text-4xl mt-0 mb-5">
                            Privacy Policy
                        </h1>

                        <small className="text-gray-100 leading-loose text-md">
                            This Privacy Policy explains how Refuge and Consolation Ministry International (RCMI)
                            collects, uses, stores, and protects your personal data when you visit our website,
                            submit forms, or interact with our services.
                        </small>
                    </div>
                </div>
            </div>
            {/* SECTION 1 */}
            <div className="grid lg:grid-cols-2 bg-white">

                <div className="p-6 lg:p-14 space-y-6">
                    <h2 className="text-3xl font-bold">1. Information We Collect</h2>

                    <p className="text-gray-700 leading-loose">
                        We may collect the following data:
                    </p>

                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                        <li>Name and contact details (email, phone number)</li>
                        <li>Messages submitted via contact forms</li>
                        <li>Newsletter subscription data</li>
                        <li>Technical data (IP address, browser type, device info)</li>
                    </ul>
                </div>

                <div className="hidden lg:block">
                    <img
                        src={BgMain}
                        alt="Privacy"
                        className="h-full object-cover"
                    />
                </div>
            </div>

            {/* SECTION 2 */}
            <div className="bg-cyan-700 text-white p-10 space-y-6">

                <h2 className="text-3xl font-bold">
                    2. How We Use Your Information
                </h2>

                <p className="leading-loose">
                    We use your data to:
                </p>

                <ul className="list-disc ml-6 space-y-2">
                    <li>Respond to inquiries and messages</li>
                    <li>Send newsletters and updates (if subscribed)</li>
                    <li>Improve our website and services</li>
                    <li>Maintain security and prevent abuse</li>
                </ul>

            </div>

            {/* SECTION 3 */}
            <div className="p-10 max-w-6xl m-auto space-y-6">

                <h2 className="text-3xl font-bold">
                    3. Legal Basis for Processing (GDPR)
                </h2>

                <p className="text-gray-700 leading-loose">
                    We process your personal data based on:
                </p>

                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Consent (e.g. newsletter signup)</li>
                    <li>Legitimate interest (improving services)</li>
                    <li>Legal obligations where applicable</li>
                </ul>

            </div>

            {/* SECTION 4 */}
            <div className="bg-gray-200 p-10 space-y-6">

                <h2 className="text-3xl font-bold">
                    4. Data Protection & Storage
                </h2>

                <p className="text-gray-700 leading-loose">
                    Your data is securely stored in our database and protected
                    using industry-standard security practices. We do not sell or share
                    your personal data with third parties for marketing purposes.
                </p>

            </div>

            {/* SECTION 5 */}
            <div className="bg-white p-10 space-y-6">

                <h2 className="text-3xl font-bold">
                    5. Your Rights (GDPR)
                </h2>

                <p className="text-gray-700 leading-loose">
                    You have the right to:
                </p>

                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Request access to your data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data (“right to be forgotten”)</li>
                    <li>Withdraw consent at any time</li>
                </ul>

            </div>

            {/* SECTION 6 */}
            <div className="bg-cyan-600 text-white p-10 space-y-6">

                <h2 className="text-3xl font-bold">
                    6. Cookies
                </h2>

                <p className="leading-loose">
                    We may use cookies to improve user experience, track website performance,
                    and understand user behavior. You can disable cookies in your browser settings.
                </p>

            </div>

            {/* SECTION 7 */}
            <div className="p-10 max-w-6xl m-auto space-y-6">

                <h2 className="text-3xl font-bold">
                    7. Third-Party Services
                </h2>

                <p className="text-gray-700 leading-loose">
                    We may use third-party services such as hosting providers, email services,
                    or analytics tools. These providers are bound by their own privacy policies.
                </p>

            </div>

            {/* SECTION 8 */}
            <div className="bg-gray-900 text-white p-10 space-y-6 text-center">

                <h2 className="text-3xl font-bold">
                    8. Contact Us
                </h2>

                <p>
                    If you have questions about this Privacy Policy, contact us at:
                </p>

                <p className="font-semibold">
                    info@rcmi.org.ng
                </p>

                <div className="mt-6">
                    <Link
                        to="/contact"
                        className="bg-green-500 px-6 py-3 rounded hover:bg-green-600 transition"
                    >
                        Contact Us
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default PrivacyPolicy;