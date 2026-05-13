import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`, // FIXED: must match Vercel env
        formData
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen overflow-y-auto">
      <div className="py-8 px-4 sm:py-12 sm:px-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-cyan-700 w-full mx-auto max-w-6xl p-4 sm:p-10 rounded-xl shadow-lg text-white">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6">
            <h1 className="font-bold text-2xl sm:text-4xl">
              Contact RCMI
            </h1>
            <p className="text-cyan-100">
              Send us a message and we will respond shortly
            </p>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 text-gray-600">

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2"
              />

              {/* FIXED BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="bg-cyan-400 p-4 rounded hover:bg-teal-500 transition text-black font-semibold"
              >
                {loading ? "Sending..." : "Submit"}
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;