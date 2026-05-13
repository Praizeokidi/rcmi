import { useState } from "react";
import axios from "axios";
import { FaArrowCircleRight } from "react-icons/fa";

const Contact = () => {
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
        `${import.meta.env.VITE_BACKEND_URL}/contact`, // CHANGED: ensure correct env name
        {
          name,
          email,
          message
        }
      );

      alert("Message sent successfully");

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error(error);
      alert("Failed to send message");

    } finally {
      setLoading(false);
    }

    // ❌ REMOVED: console.log(import.meta.env.VITE_API_URL);
    // reason: unnecessary + can confuse debugging + may be undefined
  };

  return (
    <div className="bg-gray-300 min-h-screen overflow-y-auto">
      {" "}
      <div className="py-8 px-4 sm:py-12 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-cyan-700 w-full mx-auto max-w-6xl p-4 sm:p-10 rounded-xl shadow-lg text-white">
          <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6">
            <div>
              <h1 className="font-bold text-2xl sm:text-4xl tracking-wide mb-4">
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
                  <span> +234 810 093 9299</span>
                </div>
                <div>
                  <ion-icon
                    name="call-outline"
                    className="text-teal-300 text-xl"
                  ></ion-icon>
                  <span> +234 706 050 8070</span>
                </div>
                <br />
                <div>
                  <ion-icon
                    name="mail-open-outline"
                    className="text-teal-300 text-xl"
                  ></ion-icon>

                  <a
                    href="mailto:refugeandconsolationministryin@gmail.com"
                    className="break-all text-sm"
                  >   info@rcmi.org.ng
                  </a>
                </div>
                <div>
                  <ion-icon
                    name="mail-open-outline"
                    className="text-teal-300 text-xl"
                  ></ion-icon>
                  <a
                    href="mailto:refugeandconsolationministryin@gmail.com"
                    className="break-all text-sm"
                  >   refugeandconsolationministryin@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="https://www.facebook.com/Refuge-and-Consolation-Ministry-International-102556255649354/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://www.instagram.com/invites/contact/?i=1dlxlloqpy900&utm_content=npiq5pv">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </div>
          </div>
          <div className="relative overflow-visible">
            <div className="hidden sm:block absolute w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
            <div className="hidden sm:block absolute w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-24"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-5 sm:p-8 text-gray-600 overflow-visible">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full pb-6">
                <div>
                  <label htmlFor="" className="text-sm">
                    Your name
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 mt-2 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
