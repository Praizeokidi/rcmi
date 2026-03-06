import { FaArrowCircleRight } from "react-icons/fa";
import eyeImg from '../assets/eye.jpg';

const ContactPage = () => {
  return (
    <div>
      <div>
        <div className="h-80   bg-[url('/images/pexels-nappy-3360204.jpg')] bg-center bg-cover bg-no-repeat  relative overflow-x-hidden">
          <div className="h-full backdrop-brightness-50">
            <div className="z-3 px-8 pt-24 flex flex-col   justify-center items-center h-full m-auto text-center ">
              <h1 className="font-bold text-white  text-3xl mb-5">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
        <div className="p-8  bg-gray-100">
          <div className="max-w-5xl m-auto">
            <p className="text-lg py-6 leading-relaxed tracking-wider ">
              Thank you for your interest in RCMI. We are happy to answer any
              questions you may have and would also love to pray for you if you
              have any prayer requests. Please contact us by filling out the
              form below, and we will do our best to respond within one business
              day.
            </p>
            <div className="grid my-10 md:grid-cols-2 gap-10 space-y-6 bg-cyan-700 w-full  m-auto max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
              <div className="relative">
                <div className="absolute w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
                <div className="absolute w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-24"></div>
                <div className="relative z-10 bg-white rounded-xl shadow-lg p-8  text-gray-600">
                  <form action="" className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="" className="text-sm">
                        Your name
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">
                        Email Address
                      </label>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="ring-1 ring-gray-300  mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">
                        Message
                      </label>
                    </div>
                    <div>
                      <textarea
                        placeholder="Message"
                        rows="4"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                      ></textarea>
                    </div>
                    <a
                      href="/"
                      className="buttn flex gap-5 items-center text-center max-w-64 bg-teal-300 rounded hover:bg-green-600 hover:text-black transition p-4"
                    >
                      Send Message <FaArrowCircleRight />
                    </a>
                  </form>
                </div>
              </div>
              <div className="flex space-y-8 flex-col p-6 justify-between">
                <div className="  space-y-6">
                  <div className="grid justify-start space-x-2 items-center">
                    <div>
                      <ion-icon
                        name="call-outline"
                        className="text-teal-300 text-xl"
                      ></ion-icon>
                      <span>+44 7462 984 955</span>
                    </div>

                    <div>
                      <ion-icon
                        name="call-outline"
                        className="text-teal-300 text-xl"
                      ></ion-icon>
                      <span>+234 706 050 8070</span>
                    </div>
                    <div>
                      <ion-icon
                        name="mail-open-outline"
                        className="text-teal-300 text-xl"
                      ></ion-icon>
                      <span>julienath@yahoo.com </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 text-lg">
                  <a href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                  <a href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 text-center p-8">
          <div className="">
            <h1 className="pb-3 text-xl font-bold tracking-wider ">
              WANT TO LEARN MORE ?
            </h1>
            <p>CHeck out the ministry reports below:</p>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-4 xl:grid">
          <div className="text-white h-64 bg-[url('/images/okay.jpeg')] bg-center bg-cover bg-no-repeat  relative overflow-x-hidden">
            <div className="p-7 backdrop-brightness-50 h-full">
              <h1 className="font-bold text-xl">
                RCMI provides shelter for the refugees
              </h1>
              <div className="my-10 text-gray-400">
                {" "}
                <a className="py-2 font-bold border-y-2 border-gray-400 ">
                  Read More
                </a>
              </div>
            </div>
          </div>
         <div
  className="text-white h-64 bg-center bg-cover bg-no-repeat relative overflow-x-hidden"
  style={{ backgroundImage: `url(${eyeImg})` }}
>
            <div className="p-7 backdrop-brightness-50 h-full">
              <h1 className="font-bold text-xl">
                RCMI provides shelter for the refugees
              </h1>
              <div className="my-10 text-gray-400">
                {" "}
                <a className="py-2 font-bold border-y-2 border-gray-400 ">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="text-white h-64 bg-[url('/images/gallery17.jpg')] bg-center bg-cover bg-no-repeat  relative overflow-x-hidden">
            <div className="p-7 backdrop-brightness-50 h-full">
              <h1 className="font-bold text-xl">
                RCMI provides shelter for the refugees
              </h1>
              <div className="my-10 text-gray-400">
                {" "}
                <a className="py-2 font-bold border-y-2 border-gray-400 ">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="text-white h-64 bg-[url('/images/gallery2.jpeg')] bg-center bg-cover bg-no-repeat  relative overflow-x-hidden">
            <div className="p-7 backdrop-brightness-50 h-full">
              <h1 className="font-bold text-xl">
                RCMI provides shelter for the refugees
              </h1>
              <div className="my-10 text-gray-400">
                {" "}
                <a className="py-2 font-bold border-y-2 border-gray-400 ">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
