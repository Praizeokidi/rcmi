const Contact = () => {
  return (
    <div className="bg-gray-300">
      {" "}
      <div className="py-12 p-10">
        <div className="grid md:grid-cols-2 space-y-6 bg-cyan-700 w-full  m-auto max-w-6xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex space-y-8 flex-col p-6 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide mb-4 hover:text-orange-600 hover:-translate-y-2 transition-all">
                Contact RCMI
              </h1>
              <p className="pt-2 mb-6 text-cyan-100 text-sm">
                Send us a message and we will do well to reach out
              </p>
            </div>
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
          <div className="relative">
            <div className="absolute w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-24"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8  text-gray-600">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label for="" className="text-sm">
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
                  <label for="" className="text-sm">
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
                  <label for="" className="text-sm">
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
                <div>
                  <a
                    href="/"
                    className=" bg-cyan-400 rounded  p-4  hover:bg-teal-400 transition-all hover:text-white text-black"
                  >
                    Submit
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
