import EyeImg from "../assets/gallery15.jpg";
import HelpImg from "../assets/help.jpg";
import KidImg from "../assets/pexels-emmages-8948347.jpg";
import ChildImg from "../assets/pexels-jayb-11045177.jpg";
import NeedImg from "../assets/pexels-julian-cordero-386432806-29380333.jpg";
import HeaderImg from "../components/Header";
import RefugeesImg from "../assets/pexels-kublackphotography-10858384.jpg";
import BibleImg from "../assets/gospel.jpg";
import SafariImg from "../assets/pexels-safari-consoler-3290243-25228111.jpg";
import JustImg from "../assets/pexels-justin-muhinda-1340590076-25457343.jpg";
import JibaImg from "../assets/pexels-jibarofoto-2774546.jpg";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";

const UrgentNeeds = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO (UNCHANGED STRUCTURE) ================= */}
      <div
        className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat bg-fixed overflow-x-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(${HelpImg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div
          className="bg-center bg-cover bg-no-repeat relative overflow-hidden shadow-2xl"
          style={{ backgroundImage: `url(${HeaderImg})` }}
        >
          <div className="p-5 m-5 max-w-5xl lg:p-10 py-8 sm:m-9 md:m-16 rounded-2xl lg:gap-2 mb-12 lg:mx-auto mt-20 bg-white/90 backdrop-blur-xl grid gap-10 md:grid-cols-2 items-center shadow-2xl border border-white/30">

            <div className="grid p-2 space-y-7">
              <h1 className="font-extrabold text-3xl text-gray-900 tracking-tight">
                Meet Urgent Needs
              </h1>

              <p className="text-gray-600 leading-relaxed">
                Every donation towards an urgent need makes an eternal
                difference, bringing relief and hope to those facing
                unimaginable challenges. Choose a cause below and make impact today.
              </p>

              <Link
                to="/donations"
                className="inline-flex justify-center items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg hover:shadow-xl"
              >
                Meet an Urgent Need Below
              </Link>
            </div>

            <div>
              <img
                className="rounded-2xl w-full object-cover shadow-xl"
                src={NeedImg}
                alt="Urgent Needs Header"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <main className="py-16 px-4">

        <div className="grid my-10 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            { img: BibleImg, title: "Send The Gospel To The Unreached Tribes" },
            { img: ChildImg, title: "Share Jesus With Forgotten Children" },
            { img: RefugeesImg, title: "Help Refugees And Crisis Children" },
            { img: EyeImg, title: "Minister To Eye Disease Victims" },
            { img: KidImg, title: "Raise Disciples And Leaders" },
            { img: SafariImg, title: "Respond To Disaster" },
            { img: JustImg, title: "Provide A Future For Children" },
            { img: JibaImg, title: "Support Persecuted Christians" },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >

              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 text-center space-y-4">

                <h2 className="font-bold text-gray-900 text-lg leading-snug">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500">
                  $4,000 of $12,000 raised
                </p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-orange-500 rounded-full" />
                </div>

                <Link
                  to="/donations"
                  className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  Meet Need
                </Link>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-800 underline"
                >
                  Learn More →
                </a>

              </div>
            </div>
          ))}

        </div>


      </main>
      <Newsletter />

    </div>
  );
};

export default UrgentNeeds;