import { useState } from "react";
import axios from "axios";


const Contact = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/contact`,
      formData
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    alert("Failed to send message");
  }
};

  return (
    <div className="bg-gray-300">
      {" "}
      <div className="py-12 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-cyan-700 w-full m-auto max-w-6xl p-6 sm:p-10 rounded-xl shadow-lg text-white overflow-hidden">
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
          <div className="relative">
            <div className="absolute w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-24"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8  text-gray-600">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    Your name
                  </label>
                </div>
                <div>
                 <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
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
  value={formData.email}
  onChange={handleChange}
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
  value={formData.message}
  onChange={handleChange}
  placeholder="Message"
  rows="4"
  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
/>
                </div>
                <div>
                  <button type="submit" className="bg-cyan-400 rounded p-3 hover:bg-teal-400 transition-all hover:text-white text-black">Submit
</button>
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
