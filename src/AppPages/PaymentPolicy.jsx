import { Link } from "react-router-dom";
import BgMain from "../images/main-bcg.jpeg";
import BgGirls from "../images/pexels-jibarofoto-2014773.jpg";
import Logoz from "../assets/rcmil.svg";
import Pay from "../assets/payment.png";
import HeaderImg from "../images/pexels-jibarofoto-2014773.jpg";




const PaymentPolicy = () => {
    return (
        <div className="bg-gray-100">


            <div className="h-80 bg-center bg-cover bg-no-repeat relative overflow-x-hidden"
                style={{ backgroundImage: `url(${HeaderImg})` }}
            >
                <div className="h-full backdrop-brightness-50">

                    <div className="z-3 px-4 sm:px-8 pt-24 flex flex-col justify-center items-center h-full text-center">
                        <h1 className="font-bold text-white text-4xl mt-0 mb-5">
                            Payment Policy
                        </h1>


                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 -mb-10 text-white">

                {/* LEFT CONTENT */}
                <div className="p-6 lg:p-14 space-y-7 border-red bg-blue-800 lg:space-y-12">

                    <h1 className="text-3xl lg:text-4xl font-extrabold">
                        Donations & Payments
                    </h1>

                    <p className="text-gray-200 lg:text-white tracking-wide lg:tracking-widest leading-loose text-base lg:text-xl">
                        Refuge and Consolation Ministry International (RCMI) accepts
                        donations to support humanitarian outreach, medical missions,
                        and community restoration projects. All contributions are used
                        transparently to advance the mission of restoring hope and
                        providing relief to those in need.
                    </p>

                    {/* BUTTON (VISIBLE ON ALL SCREENS) */}
                    <div>
                        <Link
                            to="/donations"
                            className="inline-block bg-green-500 rounded hover:bg-green-600 hover:text-black transition px-6 py-3"
                        >
                            DONATE NOW
                        </Link>
                    </div>

                </div>

                {/* RIGHT IMAGE (VISIBLE ON ALL SCREENS BUT CONTROLLED SIZE) */}
                <div className="flex items-center justify-center p-6 lg:p-0">

                    <img
                        src={Logoz}
                        alt="RCMI Logo"
                        className="w-40 sm:w-52 mb-10 ml-10 lg:w-full object-contain"
                    />

                </div>

            </div>


            {/* PAYMENT INFO SECTION */}
            <div
                className="bg-cover bg-no-repeat bg-fixed relative overflow-x-hidden"
                style={{ backgroundImage: `url(${BgMain})` }}
            >
                <div className="p-10 py-10 backdrop-brightness-50 space-y-5 text-white">
                    <div className="max-w-5xl m-auto lg:p-10 space-y-4 lg:space-y-8">

                        <h1 className="text-3xl lg:text-5xl font-bold">
                            How We Process Donations
                        </h1>

                        <p className="tracking-wide lg:tracking-wider lg:leading-relaxed lg:text-xl text-lg">
                            All donations are processed securely through verified payment
                            channels. We ensure that every contribution is recorded and
                            allocated directly to mission projects, outreach programs, and
                            humanitarian support initiatives.
                        </p>

                    </div>
                </div>
            </div>

            {/* POLICY DETAILS SECTION */}
            <div className="p-6 text-center py-20">
                <h1 className="text-2xl py-6 font-bold lg:text-4xl">
                    Payment Terms & Transparency
                </h1>

                <div className="p-6 md:p-10 max-w-6xl m-auto bg-cyan-100 grid md:grid-cols-2 gap-7">

                    <div className="space-y-5">
                        <img src={Pay} alt="image of payment" />
                        <h1 className="text-lg font-bold">
                            Secure & Transparent Giving
                        </h1>
                    </div>

                    <div>
                        <p className="leading-loose text-lg">
                            • All donations are voluntary and non-refundable once processed.
                            <br />
                            • Funds are used strictly for ministry and humanitarian outreach.
                            <br />
                            • RCMI does not share donor financial information with third parties.
                            <br />
                            • Receipts can be provided upon request for accountability.
                            <br />
                            • Donations may be made via bank transfer or approved online channels.
                        </p>
                    </div>

                </div>
            </div>

            {/* FINAL CTA SECTION */}
            <div className="bg-cover bg-no-repeat bg-fixed relative overflow-x-hidden"
                style={{ backgroundImage: `url(${BgGirls})` }}
            >
                <div className="h-full w-full backdrop-brightness-50">
                    <div className="p-11 sm:px-15 sm:pt-44 flex flex-col justify-center max-w-3xl text-white">

                        <h1 className="text-4xl py-4 leading-relaxed tracking-wide font-bold">
                            Support Our Mission Through Giving
                        </h1>

                        <p className="font-medium text-lg leading-relaxed tracking-wide mb-9">
                            Your donation helps us restore hope, provide medical outreach,
                            support vulnerable communities, and spread compassion to those in need.
                            Every contribution makes a real impact.
                        </p>

                        <Link
                            to="/donations"
                            className="text-center max-w-64 bg-green-500 rounded hover:bg-green-600 hover:text-black transition p-4"
                        >
                            DONATE NOW
                        </Link>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default PaymentPolicy;