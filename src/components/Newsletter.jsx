import { useState } from "react";
import axios from "axios";
import nappyPic from "../images/pexels-nappy-3360204.jpg";

const Newsletter = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/subscribe`,
        { email }
      );

      alert("Thanks for subscribing!");
      setEmail("");

    } catch (error) {
      console.error("Newsletter Error:", error);

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
    <div
      className="relative bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${nappyPic})` }}
    >

      {/* PREMIUM DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      <div className="relative py-20 sm:py-28 lg:py-36">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-xl">

              <p className="text-sm uppercase tracking-[0.25em] text-white/60 mb-4">
                RCMI Newsletter
              </p>

              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Stay informed about global impact, missions & outreach
              </h2>

              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Receive updates on humanitarian missions, evangelism, medical outreach,
                and transformation stories from communities we serve globally.
              </p>

              {/* FORM (UNCHANGED BACKEND LOGIC) */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="
                    w-full
                    rounded-xl
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    px-4
                    py-3
                    text-white
                    placeholder:text-white/50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-emerald-400
                  "
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full sm:w-auto
                    px-6 py-3
                    rounded-xl
                    font-semibold
                    text-white
                    bg-emerald-500
                    hover:bg-emerald-400
                    transition-all
                    shadow-lg
                    disabled:opacity-50
                  "
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>

              </form>

            </div>

            {/* RIGHT FEATURES */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-white font-semibold text-lg">Weekly Insights</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Impact stories, field reports, and ministry updates.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-white font-semibold text-lg">Global Outreach</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Learn how lives are being transformed across nations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-white font-semibold text-lg">No Spam Policy</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Only meaningful updates. No unnecessary emails.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="text-white font-semibold text-lg">Trusted Network</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Connected with verified field partners globally.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Newsletter;