//import DonImg from "../images/pexels-julian-cordero-386432806-29380333.jpg";
import Newsletter from "../components/Newsletter";
import Partners from "../components/Partners";
import HeaderImg from "../images/pexels-jibarofoto-2014773.jpg";
import OkayImg from "../images/okay.jpeg";
import EyeImg from "../images/eye.jpg";
import GalleryImg from "../images/gallery17.jpg";


const MinistryReport = () => {
  return (
    <div>
      <div>
        <div className=" py-14 text-white text-center bg-center bg-cover bg-no-repeat bg-fixed relative overflow-x-hidden p-6 space-y-8" style={{ backgroundImage: `url(${HeaderImg})` }}>
          <h1 className="text-2xl font-bold  ">Ministry Reports</h1>
          <p>Read Our Latest Ministry Reports Below :</p>
        </div>
        <div className="p-6 max-w-6xl m-auto">
          <div className="grid py-20 gap-16">
            <div className="gap-10 grid space-y-6 md:grid-cols-2">
              <div
  className="relative bg-cover h-80 w-full"
  style={{ backgroundImage: `url(${OkayImg})` }}>
                <div className="absolute right-2 backdrop-brightness-50 top-3   text-white z-5...">
                  <p>Economic Empowerment Ministry, Ministry Reports</p>
                </div>
              </div>
              <div>
                {" "}
                <h1 className="text-3xl font-semibold tracking-wider">
                  RCMI provides economic empowerment to community
                </h1>
                <p className="py-5 text-gray-600">
                  To ensure that persons with disability and missionaries are
                  self-sufficient, RCMI initiated training to promote skills
                  acquisition and entrepreneurship, to boost the economic base
                  of the community.
                </p>
                <div className="my-6">
                  <a
                    href="/"
                    className="font-bold overline hover:text-blue-900 "
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="gap-10 grid space-y-6 md:grid-cols-2">
              <div className="relative bg-cover h-80 w-full" style={{ backgroundImage: `url(${EyeImg})` }}>
                <div className="absolute right-2 backdrop-brightness-50 top-3   text-white z-5...">
                  <p>Glycoma and Eye defects Ministry, Ministry Reports</p>
                </div>
              </div>
              <div>
                {" "}
                <h1 className="text-3xl font-semibold tracking-wider">
                  RCMI provides help to victims of glycoma and eye defects
                </h1>
                <p className="py-5 text-gray-600">
                  RCMI implements comprehensive eye health programs.
                </p>
                <div className="my-6">
                  <a
                    href="/"
                    className="font-bold overline hover:text-blue-900 "
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="gap-10 grid space-y-6 md:grid-cols-2">
              <div className="relative bg-cover h-80 w-full" style={{ backgroundImage: `url(${GalleryImg})` }}>
                <div className="absolute right-2 backdrop-brightness-50 top-3   text-white z-5...">
                  <p>Children Ministry, Ministry Reports</p>
                </div>
              </div>
              <div>
                {" "}
                <h1 className="text-3xl font-semibold tracking-wider">
                  RCMI provides help to children with health issues and defects.
                </h1>
                <p className="py-5 text-gray-600">
                  This arm of the ministry is responsible for support to
                  missionaries and converts in difficult circumstances.
                </p>
                <div className="my-6">
                  <a
                    href="/"
                    className="font-bold overline hover:text-blue-900 "
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Newsletter />
    </div>
  );
};

export default MinistryReport;
