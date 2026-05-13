
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
        `${import.meta.env.VITE_BACKEND_URL_URL}/contact`,
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
  console.log(import.meta.env.VITE_BACKEND_URL);
  return (
    <div>

      {/* HEADER */}
      <div className="h-80 bg-center bg-cover bg-no-repeat relative overflow-x-hidden"
        style={{ backgroundImage: `url(${nappyPic})` }}
      >
        <div className="h-full backdrop-brightness-50">
          <div className="z-3 px-4 sm:px-8 pt-24 flex flex-col justify-center items-center h-full text-center">
            <h1 className="font-bold text-white text-3xl mb-5">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="px-4 py-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">

          <p className="text-lg py-6 leading-relaxed tracking-wider">
            Thank you for your interest in RCMI. Please fill the form below
            and we will respond within one business day.
          </p>

          <div className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              bg-cyan-700
              w-full
              max-w-5xl
              mx-auto
              p-4
              sm:p-8
              rounded-xl
              shadow-lg
              text-white
            "
          >

            {/* CONTACT FORM */}
            <div className="w-full min-w-0">

              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 text-gray-600">

                {/* NEW: form submit handler */}

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4 w-full"
                >

                  <div className="w-full">
                    <label className="text-sm">Your name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} // NEW
                      className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-sm">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // NEW
                      className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-sm">Message</label>
                    <textarea
                      placeholder="Message"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)} // NEW
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 resize-none"
                    ></textarea>
                  </div>

                  {/* NEW: real submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      sm:w-auto
                      flex
                      gap-3
                      items-center
                      justify-center
                      bg-teal-300
                      rounded
                      hover:bg-green-600
                      hover:text-black
                      transition
                      px-6 py-4
                    "   >
                    {loading ? "Sending..." : "Send Message"} <FaArrowCircleRight />
                  </button>

                </form>

              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col space-y-8 p-4 sm:p-6 justify-between break-words">
              <div className="space-y-6">

                <div>
                  <span>📞 +234 810 093 9299</span>
                </div>

                <div>
                  <span>📞 +234 706 050 8070</span>
                </div>

                <div className="break-all">
                  <span>✉️ info@rcmi.org.ng</span>
                  <br />
                  <span>✉️ refugeandconsolationministryin@gmail.com</span>
                </div>

              </div>

              <div className="flex flex-wrap gap-4 text-2xl">
                {/* <a href="#">Facebook</a> */}
                <a href="https://www.facebook.com/Refuge-and-Consolation-Ministry-International-102556255649354/"
                  target="_blank"
                  rel="noreferrer">
                  <ion-icon name="logo-facebook" role="img" class="md hydrated">
                  </ion-icon></a>
                <a href="https://www.instagram.com/invites/contact/?i=1dlxlloqpy900&utm_content=npiq5pv"
                  target="_blank"
                  rel="noreferrer">
                  <ion-icon name="logo-instagram" role="img" class="md hydrated">
                  </ion-icon></a>
                <a href="#">
                  <ion-icon name="logo-twitter" role="img" class="md hydrated">

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

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