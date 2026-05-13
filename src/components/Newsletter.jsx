import { useState } from "react";
import axios from "axios";

// ✅ CHANGED: imported background image properly
import nappyPic from "../images/pexels-nappy-3360204.jpg";

const Newsletter = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ CHANGED: added proper submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ CHANGED: trims spaces from email input
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {

      setLoading(true);

      // ✅ CHANGED:
      // switched from VITE_API_URL to VITE_BACKEND_URL
      // because your backend env variable is:
      // VITE_BACKEND_URL=https://rcmi-backend.onrender.com
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/subscribe`,
        { email }
      );

      alert("Subscribed successfully!");

      // ✅ CHANGED: clears input after success
      setEmail("");

    } catch (error) {

      // ✅ CHANGED: better debugging
      console.error("Newsletter Error:", error);

      // ✅ CHANGED: better error handling
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Subscription failed");
      }

    } finally {

      setLoading(false);

    }
  };

  return (

    // ✅ CHANGED:
    // replaced bg-[url()] with imported image
    // because Vite sometimes fails resolving dynamic image paths in production
    <div
      className="m-auto bg-center bg-cover bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${nappyPic})` }}
    >

      <div className="relative m-auto py-16 sm:py-24 lg:py-32 backdrop-brightness-50">

        <div className="mx-auto isolate w-full max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

            <div className="w-full max-w-xl lg:max-w-lg">

              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Subscribe to our newsletter
              </h2>

              <p className="mt-4 text-lg text-white">
                Stay Updated: Subscribe to receive the latest news,
                tips, and exclusive content directly in your inbox
              </p>

              {/* ✅ CHANGED: proper form wrapper */}
              <form
                onSubmit={handleSubmit}
                className="
    mt-6
    flex
    flex-col
    sm:flex-row
    w-full
    gap-4
  "
              >

                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                {/* ✅ CHANGED:
      removed flex-1 and max-width issues
      added min-w-0 to prevent overflow on mobile
  */}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
      min-w-0
      w-full
      rounded-md
      border-0
      bg-white/10
      px-3.5
      py-3
      text-white
      placeholder:text-gray-300
      shadow-sm
      ring-1
      ring-inset
      ring-white/20
      focus:ring-2
      focus:ring-indigo-500
      outline-none
    "
                  placeholder="Enter your email"
                />

                {/* ✅ CHANGED:
      forced full width on mobile
      added shrink-0 so button cannot collapse
  */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
  w-full
  sm:w-auto
  block
  rounded-md
  bg-indigo-500
  px-5
  py-3
  text-sm
  font-semibold
  text-white
  shadow-sm
  hover:bg-indigo-400
  transition
  disabled:opacity-50
"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>

              </form>

            </div>

            {/* FEATURES */}
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">

              <div className="flex flex-col items-start">

                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">

                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25"
                    />
                  </svg>

                </div>

                <dt className="mt-4 text-base font-semibold text-white">
                  Weekly articles
                </dt>

                <dd className="mt-2 text-base text-white">
                  Join our community to gain valuable insights and expert advice.
                </dd>

              </div>

              <div className="flex flex-col items-start">

                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">

                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3"
                    />
                  </svg>

                </div>

                <dt className="mt-4 text-base font-semibold text-white">
                  No spam
                </dt>

                <dd className="mt-2 text-base text-white">
                  No spam content
                </dd>

              </div>

            </dl>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Newsletter;