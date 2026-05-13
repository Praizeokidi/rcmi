import { useState } from "react";
import axios from "axios";

const Newsletter = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // NEW: prevents multiple submissions and gives better UX

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {

      setLoading(true); // NEW: disable button while sending request

      await axios.post(
        `${import.meta.env.VITE_API_URL}/subscribe`,
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

                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path></svg>

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

                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"></path></svg>
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