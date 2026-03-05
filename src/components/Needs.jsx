import NeedImg1 from "../assets/gospel.jpg";
import NeedImg2 from "../assets/pexels-jayb-11045177.jpg";
import NeedImg3 from "../assets/pexels-kublackphotography-10858384.jpg";

const Needs = () => {
  return (
    <div className="text-center p-9 h-full  bg-gray-100">
      <div>
        <div className="text-black">
          <h1 className="leading-relaxed tracking-wide font-bold p-9 my-10 text-4xl uppercase">
            Meet Urgent Needs
          </h1>
          <div className="grid md:grid-cols-3 gap-9 max-w-6xl m-auto">
            <div className="my-4 justify-items-center  grid">
              <h1 className="mb-5 leading-relaxed tracking-widest font-semibold">
                SEND THE GOSPEL TO THE UNREACHED TRIBES
              </h1>
              <img
                className="h-72  hover:shadow-2xl shadow-lg transition-all hover:-translate-y-2 rounded"
                src={NeedImg1}
              />
              <p className="py-4">$4,000 of $12,000 raised</p>

              <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div class="bg-orange-600 h-4 rounded-full w-1/3"></div>
              </div>

              <p className="py-7 tracking-widest font-semibold">
                In the remote regions of Asia, 12 Unreached People Groups have
                never heard the Gospel of Jesus Christ. There is no active
                ministries in the following areas.
              </p>
              <div className="py-5">
                <a
                  href="/"
                  className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="my-4 justify-items-center grid">
              <h1 className="mb-5 leading-relaxed tracking-widest font-semibold">
                SHARE JESUS WITH THE FORGOTTEN CHIDREN
              </h1>
              <img
                className="h-72 hover:shadow-2xl shadow-lg transition-all hover:-translate-y-2 rounded"
                src={NeedImg2}
              />
              <p className="py-4">$900 of $12,000 raised</p>
              <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div class="bg-orange-600 h-4 rounded-full w-1/12"></div>
              </div>
              <p className="py-7 tracking-widest font-semibold">
                Across Southeast Asia, the Badjao children live on the margins
                of society. These forgotten little ones belong to one of the
                region's most overlooked tribes.
              </p>
              <div className="py-5">
                <a
                  href="/"
                  className="buttn bg-green-500 rounded text-white p-4  hover:bg-green-600 transition-all hover:text-black"
                >
                  Donate Now
                </a>
              </div>
            </div>
            <div className="my-4 justify-items-center grid">
              <h1 className="mb-5 leading-relaxed tracking-widest font-semibold">
                HELP FEED REFUGEES AND KIDS AFFECTED BY INSURGENCIES
              </h1>
              <img
                className="h-72 hover:shadow-2xl shadow-lg transition-all hover:-translate-y-2 rounded"
                src={NeedImg3}
              />
              <p className="py-4">$0 of $12,000 raised</p>
              <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                {/* <div class="bg-orange-600 h-4 rounded-full w-3"></div> */}
              </div>
              <p className=" py-7 tracking-widest font-semibold">
                Devastating civil war in Myanmar has uprooted hundreds of
                families, leaving many refugee children in desperate need of
                food. Their survival is a daily struggle.
              </p>
              <div className="py-5">
                <a
                  href="/"
                  className="buttn bg-green-500 rounded p-4 text-white  hover:bg-green-600 transition-all hover:text-black"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
          <div className="my-14">
            {" "}
            <a
              href="/"
              className="buttn hover:bg-orange-700 bg-orange-600 rounded-3xl p-4 text-white"
            >
              View More Urgent Needs{" "}
              <ion-icon
                className={"bg-orange-400 rounded "}
                name="chevron-forward-outline"
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;
