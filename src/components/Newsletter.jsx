import { useState } from "react";
import axios from "axios";

const Newsletter = () => {

const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false); 
// NEW: prevents multiple submissions and gives better UX

const handleSubmit = async (e) => {
  e.preventDefault();

  if(!email){
    alert("Please enter your email");
    return;
  }

  try {

    setLoading(true); // NEW: disable button while sending request

    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/subscribe`,
      { email }
    );

    alert("Subscribed successfully!");

    setEmail(""); // clears input after success

  } catch (error) {

    console.error(error); // NEW: helpful for debugging

    alert("Subscription failed");

  } finally {
    setLoading(false); // NEW: re-enable button
  }
};

  return (
    <div className="m-auto bg-[url('/images/pexels-nappy-3360204.jpg')] bg-center bg-cover bg-no-repeat overflow-x-hidden">

      <div className="relative m-auto overflow-hidden py-16 sm:py-24 lg:py-32 backdrop-brightness-50">

        <div className="mx-auto isolate max-w-6xl px-6 lg:px-8">

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

            <div className="max-w-xl lg:max-w-lg">

              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Subscribe to our newsletter
              </h2>

              <p className="mt-4 text-lg text-white">
                Stay Updated: Subscribe to receive the latest news, tips, and
                exclusive content directly in your inbox
              </p>

              {/* NEW: form wrapper so handleSubmit works */}
              <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">

                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email} 
                  // NEW: connects input to React state

                  onChange={(e) => setEmail(e.target.value)} 
                  // NEW: updates state when user types

                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  disabled={loading} 
                  // NEW: prevents multiple clicks while request is running

                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 disabled:opacity-50"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                  {/* NEW: shows loading text */}
                </button>

              </form>

            </div>

            {/* Feature section */}
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5"
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
                      d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0"
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