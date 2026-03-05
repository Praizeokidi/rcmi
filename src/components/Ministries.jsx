import MinImg1 from "../assets/pexels-turan-sahi-n-428086655-20369382.jpg";
import MinImg2 from "../assets/gallery15.jpg";
import MinImg3 from "../assets/pexels-emmages-8948347.jpg";
import MinImg4 from "../assets/pexels-safari-consoler-3290243-25228111.jpg";
import MinImg5 from "../assets/pexels-justin-muhinda-1340590076-25457343.jpg";
import MinImg6 from "../assets/pexels-jibarofoto-2774546.jpg";

const Ministries = () => {
  return (
    <div className="text-black  text-center">
      <div>
        <div className="p-7 py-16 ">
          <h1 className="leading-relaxed tracking-widest font-medium">
            OUR MINISTRIES
          </h1>
          <h1 className="leading-relaxed tracking-widest text-3xl font-bold my-5 text-orange-600">
            How You Can Make an Impact
          </h1>
          <p className="font-medium text-lg leading-relaxed tracking-wide max-w-5xl m-auto">
            RCMI demonstrates the love of God through meeting both the practical
            and spiritual needs of the poor, the outcast, and those Jesus would
            consider the "least of these." Your partnership is vital in
            achieving this mission. Learn more about our ministries and how you
            can get involved.
          </p>
        </div>
        <div className="bg-white  p-10 text-black">
          <div className="grid   md:grid-cols-2 gap-7 lg:grid-cols-3 max-w-6xl m-auto ">
            <div className="justify-items-center grid ">
              <a href="/">
                <img
                  className="rounded-lg hover:shadow-2xl shadow-lg transition-all hover:-translate-y-2 w-96 h-64"
                  src={MinImg1}
                />
                <p className=" uppercase underline my-3 hover:text-blue-700">
                  Reach Unreached people groups{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
                </p>
              </a>
            </div>
            <div className="justify-items-center grid">
              <a href="/">
                <img
                  className=" shadow-lg rounded-lg hover:shadow-2xl transition-all hover:-translate-y-2 w-96 h-64"
                  src={MinImg2}
                />
                <p className="uppercase underline my-3 hover:text-blue-700">
                  Minister to victims of glycoma and eye defects{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
                </p>
              </a>
            </div>
            <div className="justify-items-center grid">
              <a href="/">
                <img
                  className="shadow-lg rounded-lg hover:shadow-2xl transition-all hover:-translate-y-2 w-96 h-64"
                  src={MinImg3}
                />
                <p className="uppercase underline my-3 hover:text-blue-700">
                  Raise up disciples and leaders{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
                </p>
              </a>
            </div>
            <div className="justify-items-center grid">
              <a href="/">
                <img
                  className="shadow-lg rounded-lg hover:shadow-2xl transition-all hover:-translate-y-2 w-96 h-64"
                  src={MinImg4}
                />
                <p className="uppercase underline my-3 hover:text-blue-700">
                  Respond to disasters{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
                </p>
              </a>
            </div>
            <div className="justify-items-center grid">
              <a href="/">
                <img
                  className=" shadow-lg rounded-lg hover:shadow-2xl transition-all hover:-translate-y-2 w-96 h-64"
                  src={MinImg5}
                />
                <p className="uppercase underline my-3 hover:text-blue-700">
                  Provide a future for children{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
                </p>
              </a>
            </div>
            <div className="justify-items-center grid">
              <a href="/">
                <img
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 w-96 h-64"
                  src={MinImg6}
                />
                <p className="uppercase  underline my-3 hover:text-blue-700">
                  Support presecuted christians{" "}
                  <ion-icon name="arrow-forward-outline"></ion-icon>{" "}
                </p>
              </a>
            </div>
          </div>
          <div className="hidden  lg:block">
            {" "}
            <h1 className="my-16 mt-24 leading-relaxed tracking-widest text-3xl font-bold ">
              Read Our Most Recent{" "}
              <span className="text-orange-600">Ministry Reports</span>
            </h1>
            <div className="text-left grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl m-auto">
              <div className="hover:shadow-2xl hover:border-2 p-6 rounded">
                <img
                  className="hover:shadow-2xl shadow-lg transition-all hover:-translate-y-2 "
                  src={MinImg1}
                />
                <p className="mt-8">October 3, 2024</p>
                <p className="font-semibold text-lg">
                  RCMI provides shelter for local government
                </p>
                <div className="my-8">
                  <a
                    href="/"
                    className="buttn bg-green-600 rounded-full text-white p-4 hover:bg-green-700 transition-all hover:text-black"
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:border-2 p-6 rounded">
                <img
                  className="hover:shadow-2xl shadow-lg transition-all hover:-translate-y-2 "
                  src={MinImg1}
                />
                <p className="mt-8">January 18, 2024</p>
                <p className="font-semibold text-lg">
                  Smiles on faces as RCMI deliver food stuff to the needy
                </p>
                <div className="my-8">
                  <a
                    href="/"
                    className="buttn bg-green-600 rounded-full text-white p-4 hover:bg-green-700 transition-all hover:text-black"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="hover:shadow-2xl hover:border-2 p-6 rounded">
                <img
                  className=" hover:shadow-2xl shadow-lg transition-all hover:-translate-y-2"
                  src={MinImg1}
                />
                <p className="mt-8">July 30, 2024</p>
                <p className="font-semibold text-lg">
                  Your miracle is on it's way, spiritual guidance
                </p>
                <div className="my-8">
                  <a
                    href="/"
                    className="buttn bg-green-600 rounded-full text-white p-4 hover:bg-green-700 transition-all hover:text-black"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;
