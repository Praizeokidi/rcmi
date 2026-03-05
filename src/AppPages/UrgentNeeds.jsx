import NeedImg1 from "../assets/storm.jpg";
import NeedImg2 from "../assets/give.jpg";
import NeedImg3 from "../assets/okay.jpeg";
import HeaderImg from "../components/Header";
import DonImg from "../images/pexels-julian-cordero-386432806-29380333.jpg";
import Newsletter from "../components/Newsletter";

const UrgentNeeds = () => {
  return (
    <div>
      <header className=" fixed ">{/* <Header /> */}</header>
      <main>
        <div className="bg-center bg-cover bg-no-repeat bg-fixed relative overflow-x-hidden"  style={{ backgroundImage: `url(${HeaderImg})` }}>
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
              <a
                href="/"
                className="buttn text-white text-center bg-green-500  hover:bg-green-600 hover:text-black transition p-4 max-w-72"
              >
                Meet an Urgent Need Below
              </a>
            </div>
            <div>
              <img className="rounded " src={DonImg} alt="Urgent Needs Header"/>
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
                  src={NeedImg1}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
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
                Send The Gospel To The Unreached Tribes
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={NeedImg2}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
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
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Send The Gospel To The Unreached Tribes
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={NeedImg1}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Send The Gospel To The Unreached Tribes
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={NeedImg2}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
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
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Send The Gospel To The Unreached Tribes
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={NeedImg1}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
              {" "}
              <h1 className="p-4 leading-relaxed tracking-widest bg-gray-200 font-bold">
                Send The Gospel To The Unreached Tribes
              </h1>
              <div className="my-4  p-4  justify-items-center grid">
                <img
                  className="h-72 p-4 hover:shadow-2xl transition-all hover:-translate-y-2 rounded"
                  src={NeedImg2}
                />
                <p className="pb-4 ">$4,000 of $12,000 raised</p>

                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div className="bg-orange-600 h-4 rounded-full w-1/3"></div>
                </div>

                <div className="py-9">
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
            <div className="text-center rounded-2xl border-2">
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
                  <a
                    href="/"
                    className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                  >
                    Meet an Urgent Need
                  </a>
                </div>
                <a href="" className="underline">
                  Learn More →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </main>
    </div>
  );
};

export default UrgentNeeds;
