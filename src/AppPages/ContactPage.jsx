/* eslint-disable react/no-unknown-property */
import nappyPic from "../images/pexels-nappy-3360204.jpg"
import { useState } from "react"; // NEW
import axios from "axios"; // NEW
import { FaArrowCircleRight } from "react-icons/fa";
import eyeImg from "../assets/eye.jpg";
import okayImg from "../images/okay.jpeg"
import gallery17Img from "../images/gallery17.jpg"
import gallery2Img from "../images/gallery2.jpeg"


const ContactPage = () => {

  // NEW: form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // NEW: submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        {
          name,
          email,
          message
        }
      );

      alert("Message sent successfully");

      // clear form
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {

      console.error(error);
      alert("Failed to send message");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div>

      {/* HEADER */}
      <div className="h-80 bg-center bg-cover bg-no-repeat relative overflow-x-hidden"
        style={{ backgroundImage: `url(${nappyPic})` }}
      >
        <div className="h-full backdrop-brightness-50">
          <div className="z-3 px-8 pt-24 flex flex-col justify-center items-center h-full text-center">
            <h1 className="font-bold text-white text-3xl mb-5">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="p-8 bg-gray-100">
        <div className="max-w-5xl m-auto">

          <p className="text-lg py-6 leading-relaxed tracking-wider">
            Thank you for your interest in RCMI. Please fill the form below
            and we will respond within one business day.
          </p>

          <div className="grid my-10 md:grid-cols-2 gap-10 space-y-6 bg-cyan-700 w-full max-w-4xl m-auto p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">

            {/* CONTACT FORM */}
            <div className="relative">

              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600">

                {/* NEW: form submit handler */}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

                  <div>
                    <label className="text-sm">Your name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} // NEW
                      className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // NEW
                      className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>

                  <div>
                    <label className="text-sm">Message</label>
                    <textarea
                      placeholder="Message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)} // NEW
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    ></textarea>
                  </div>

                  {/* NEW: real submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex gap-5 items-center justify-center max-w-64 bg-teal-300 rounded hover:bg-green-600 hover:text-black transition p-4"
                  >
                    {loading ? "Sending..." : "Send Message"} <FaArrowCircleRight />
                  </button>

                </form>

              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="flex space-y-8 flex-col p-6 justify-between">

              <div className="space-y-6">

                <div>
                  <span>📞 +44 7462 984 955</span>
                </div>

                <div>
                  <span>📞 +234 706 050 8070</span>
                </div>

                <div>
                  <span>✉️ julienath@yahoo.com</span>
                </div>

              </div>

              <div className="flex space-x-4 text-lg">
                {/* <a href="#">Facebook</a> */}
                <a href="https://www.facebook.com/Refuge-and-Consolation-Ministry-International-102556255649354/">
                  <ion-icon name="logo-facebook" role="img" class="md hydrated">
                    <template shadowrootmode="open">
                      <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon"
                          viewBox="0 0 512 512"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd">
                          </path></svg></div></template></ion-icon></a>
                <a href="https://www.instagram.com/invites/contact/?i=1dlxlloqpy900&utm_content=npiq5pv">
                  <ion-icon name="logo-instagram" role="img" class="md hydrated">
                    <template shadowrootmode="open">
                      <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon"
                          viewBox="0 0 512 512">
                          <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z">
                          </path>
                          <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z">
                          </path>
                        </svg>
                      </div>
                    </template>
                  </ion-icon></a>
                <a href="#">
                  <ion-icon name="logo-twitter" role="img" class="md hydrated">
                    <template shadowrootmode="open">
                      <div class="icon-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon s-ion-icon"
                          viewBox="0 0 512 512">
                          <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z">
                          </path>
                        </svg>
                      </div>
                    </template>
                  </ion-icon>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* REPORTS SECTION */}
      <div className="bg-gray-200 text-center p-8">
        <h1 className="pb-3 text-xl font-bold tracking-wider">
          WANT TO LEARN MORE ?
        </h1>
        <p>Check out the ministry reports below:</p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4">

        <div
          className="text-white h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${okayImg})` }}
        >
          <div className="p-7 backdrop-brightness-50 h-full">
            <h1 className="font-bold text-xl">
              RCMI provides economic empowerment to community
            </h1>
            <div className="my-10 text-gray-400"> <a className="py-2 font-bold border-y-2 border-gray-400 ">Read More</a></div>
          </div>
        </div>

        <div
          className="text-white h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${eyeImg})` }}
        >
          <div className="p-7 backdrop-brightness-50 h-full">
            <h1 className="font-bold text-xl">
              RCMI provides help to victims of glycoma and eye defects
            </h1>
            <div className="my-10 text-gray-400"> <a className="py-2 font-bold border-y-2 border-gray-400 ">Read More</a></div>
          </div>
        </div>

        <div
          className="text-white h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${gallery17Img})` }}
        >
          <div className="p-7 backdrop-brightness-50 h-full">
            <h1 className="font-bold text-xl">
              RCMI provides help to children with health issues and defects.
            </h1>
            <div className="my-10 text-gray-400"> <a className="py-2 font-bold border-y-2 border-gray-400 ">Read More</a></div>
          </div>
        </div>

        <div
          className="text-white h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${gallery2Img})` }}
        >
          <div className="p-7 backdrop-brightness-50 h-full">
            <h1 className="font-bold text-xl">
              RCMI provides shelter for the refugees
            </h1>
            <div className="my-10 text-gray-400"> <a className="py-2 font-bold border-y-2 border-gray-400 ">Read More</a></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;