import { useState } from "react"; // NEW
import axios from "axios"; // NEW
import { FaArrowCircleRight } from "react-icons/fa";
import eyeImg from "../assets/eye.jpg";

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
      <div className="h-80 bg-[url('/images/pexels-nappy-3360204.jpg')] bg-center bg-cover bg-no-repeat relative overflow-x-hidden">
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
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
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

        <div className="text-white h-64 bg-[url('/images/okay.jpeg')] bg-center bg-cover">
          <div className="p-7 backdrop-brightness-50 h-full">
            <h1 className="font-bold text-xl">
              RCMI provides shelter for the refugees
            </h1>
          </div>
        </div>

        <div
          className="text-white h-64 bg-center bg-cover"
          style={{ backgroundImage: `url(${eyeImg})` }}
        >
          <div className="p-7 backdrop-brightness-50 h-full">
            <h1 className="font-bold text-xl">
              RCMI provides shelter for the refugees
            </h1>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ContactPage;