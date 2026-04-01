import EyeImg from "../assets/gallery15.jpg";
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
    <div>
      <header className=" fixed ">{/* <Header /> */}</header>
      <main>
        <div className="bg-center bg-cover bg-no-repeat bg-fixed relative overflow-x-hidden" style={{ backgroundImage: `url(${HeaderImg})` }}>
          <div className="p-5 m-5 max-w-5xl lg:p-10 py-8 sm:m-9 md:m-16 rounded-xl lg:gap-2 mb-12 lg:mx-auto mt-36 bg-blue-200 grid gap-10 md:grid-cols-2 items-center">
            <div className="grid p-2 space-y-7">
              <h1 className="font-extrabold text-2xl">Meet Urgent Needs</h1>
              <p className="lg:max-w-xs">
                Every donation towards an urgent need makes an eternal
                difference, bringing relief and hope to those facing
                unimaginable challenges. Whether it is ministering to those with
                leprosy, sharing the Gospel, or responding to crisis, your
                support matters. Choose from several urgent needs below and
                donate today.
              </p>
              <Link
                to="/donations"
                className="buttn text-center max-w-64 bg-green-500 rounded hover:bg-green-600 hover:text-black transition p-4"
              >
                Meet an Urgent Need
              </Link>
            </div>
            <div>
              <img className="rounded " src={NeedImg} alt="Urgent Needs Header" />
            </div>
          </div>
        </div>

        {/* Urgent Needs Cards */}
        <div className="p-5">
          <div className="grid my-8 max-w-5xl m-auto md:grid-cols-2 gap-8 ">
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Send The Gospel To The Unreached Tribes
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={BibleImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Share Jesus With The Forgotten Children
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={ChildImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Help Feed Refugees And Kids Affected By Insurgencies

              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={RefugeesImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Minister To Victims Of Glycoma And Eye Defects
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={EyeImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Raise Up Disciples And Leaders
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={KidImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Respond To Disaster
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={SafariImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Provide A Future For Children
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={JustImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Support Prosecuted Christians
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={JibaImg}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            {/* <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Send The Gospel To The Unreached Tribes
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={NeedImg3}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <Link
                    to="/donations"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </Link>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <Newsletter />
      </main>
    </div>
  );
};

export default UrgentNeeds;
