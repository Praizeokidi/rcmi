import { useState } from "react"; // <-- add this at the top
import Button from "../components/Button";
import DonationImg from "../assets/donationimage.jpg";
import CcImg from "../assets/cc.webp";
import PityImg from "../assets/pexels-mikejudkins-1113533.jpg";
import MinImg1 from "../assets/pexels-turan-sahi-n-428086655-20369382.jpg";
import MinImg2 from "../assets/gallery15.jpg";
import MinImg3 from "../assets/pexels-emmages-8948347.jpg";
import MinImg4 from "../assets/pexels-safari-consoler-3290243-25228111.jpg";
import MinImg5 from "../assets/pexels-justin-muhinda-1340590076-25457343.jpg";
import MinImg6 from "../assets/pexels-jibarofoto-2774546.jpg";
import PityImg2 from "../assets/pexels-julian-cordero-386432806-29380333.jpg";
import DonateButton from "../components/DonateButton";

const DonationPage = () => {
  const [amount, setAmount] = useState(""); // <-- state for input
  
  return (
    <div>
 

      <div className="grid md:px-10 items-center md:grid-cols-2 max-w-6xl m-auto py-10">
        <div className="p-8">
          <h1 className="text-center leading-relaxed capitalize font-semibold text-4xl text-red-600">
            Give to help persecuted christians, reach the unreached and meet
            urgent needs for those in crisis
          </h1>
          <p className="text-gray-500 py-7 tracking-normal leading-9">
            Your money goes to meet both practical and spiritual needs of the
            poor, the outcast and those Jesus would consider the least of my
            brothers."
          </p>
          <a className="text-2xl grid w-72  rounded-md bg-red-700 justify-self-center text-center text-white p-6 h-20 transition-all hover:bg-red-600">
            Help Today!
          </a>
          <img className="py-2 w-52 m-auto" src={CcImg} />
        </div>
        <div className="p-8">
          <img className="rounded-full" src={PityImg} />
        </div>
      </div>
      <div className="max-w-6xl m-auto p-8">
        <div>
          <h1 className="capitalize text-5xl font-bold text-red-800 text-center leading-relaxed">
            How You make difference
          </h1>
          <div className="text-gray-500 py-8">
            <p>
              Your gifts have an unparraled impact because of our trusted
              partners around the world. His Feet has spent decades working in
              some of the most unreached nations of the world. This time has
              resulted in deep and lasting relationships with trusted partners
              in some of the worlds hardest to reach places.
            </p>
            <br></br>
            <p>
              Together we are partnered with them and want to help them reach as
              many people as possible. Through these unique partnerships we are
              able to help in areas where other don’t have access.
            </p>
            <br></br>
            <p>Here are the primary ministry areas where we work.</p>
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
            <div className="py-8">
              {" "}
              <a className="text-2xl grid w-72  bg-red-700 justify-self-center text-center md:w-96 rounded-md text-white p-6 h-20 hover:bg-red-500 transition-all">
                Help Today!
              </a>
              <img className="py-2 w-52 m-auto" src={CcImg} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-96   bg-[url('/images/project3.jpg')]">
        <div className="h-96 opacity-65 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="z-3 px-8 pt-24 flex flex-col isolate  justify-center items-center h-full m-auto text-center ">
            <h1 className="font-bold  text-3xl mb-5">Make Your Donation</h1>
            <p className="mb-4">Help save lives by donating </p>
            <Button href="/" className={"max-w-32  "}>
              Back Home
            </Button>
          </div>
        </div>
      </div> */}
      <div className="p-7 py-20 grid md:grid-cols-2 max-w-6xl m-auto gap-7">
        <div className="p-5 hover:-translate-y-2 transition-all">
          <img src={PityImg2} />
        </div>
        <div className="p-5 py-9">
          <h1 className="font-bold text-4xl">Make a donation</h1>
          <p className="my-8">
            To learn more about make donate charity with us visit our “Contact
            us” page or call 07060508070 for inquiry.
          </p>
          <h1 className="font-bold text-2xl">Make a donation</h1>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="amount" className="text-sm">
              Amount ₦
            </label>
          </div>
          <div>
            <input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>

          {/* Pass amount as a prop to DonateButton */}
          <div className="mt-4">
            <DonateButton amount={amount} />
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
