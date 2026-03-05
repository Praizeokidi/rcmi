import PartnerImg from "../assets/pexels-rdne-6646852.jpg";

const Partners = () => {
  return (
    <div className="bg-n-8 text-white  ">
      <div className="max-w-6xl m-auto lg:py-20  p-10">
        <div className="grid md:grid-cols-2 justify-items-center gap-8 items-center">
          <div className="border-white relative  hidden md:block border-4 h-72 w-80 mr-16">
            <div className="h-72 w-80 absolute  top-6 left-6 ">
              <img
                className="h-72 w-80 hover:translate-x-2 hover:translate-y-2 transition-all"
                src={PartnerImg}
              />
            </div>
          </div>

          <div>
            <h1 className="leading-relaxed tracking-wide font-bold my-10 text-4xl">
              Become a <span className="text-orange-400">Pioneer Partner</span>
            </h1>
            <p>
              Join the dream team! Become a monthly donor and make a lasting
              impact pioneering into Unreached People Groups. When you make a
              recurring donation, your support is impacting lives for eternity.
            </p>
            <div className="my-11">
              <a
                href="/"
                className="buttn bg-green-500 rounded text-white p-4 hover:bg-green-400 hover:text-black transition-all  font-semibold"
              >
                Become a Monthly Donor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
