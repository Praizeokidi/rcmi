import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DonImg from "../assets/founder.jpeg";
import BgMain from "../images/main-bcg.jpeg";
import BgGirls from "../images/pexels-jibarofoto-2014773.jpg";

const Vision = () => {
  const [active, setActive] = useState("vision");

  // ScrollSpy (detect active section)
  useEffect(() => {
    const sections = ["vision", "mission", "history", "leadership"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItem = (id, label) => (
    <a
      href={`#${id}`}
      className={`px-4 py-2 rounded-full transition font-medium whitespace-nowrap ${active === id
          ? "bg-blue-900 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      {label}
    </a>
  );

  return (
    <div className="bg-[#f6f7fb] mt-20 text-gray-900 scroll-smooth">

      {/* TOP HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-6">
        <h1 className="text-3xl md:text-5xl font-black">
          Why RCMI Exists
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
          A mission-driven organization restoring hope, healing, and transformation across nations.
        </p>
      </div>

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-3 overflow-x-auto">
          {navItem("vision", "Vision")}
          {navItem("mission", "Mission")}
          {navItem("history", "History")}
          {navItem("leadership", "Leadership")}
        </div>
      </div>

      {/* VISION */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10 items-center">

        <div
          id="vision"
          className="bg-blue-900 text-white rounded-2xl p-10 shadow-xl"
        >
          <h2 className="text-3xl font-bold">Our Vision</h2>

          <p className="mt-6 text-white/80 leading-relaxed text-lg">
            At RCMI, we envisage a world free of blindness and anguish, where
            multitudes are transformed and saved with the host of heaven in jubilation.
          </p>

          <div className="mt-8">
            <Link
              to="/donations"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-xl transition"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={DonImg} alt="Founder" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* MISSION */}
      <div
        id="mission"
        className="relative py-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgMain})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black">
            Our Mission Statement
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
            Our mission is to restore sight, move people from darkness to light,
            take the gospel to unreached people groups, and provide humanitarian care globally.
          </p>
        </div>
      </div>

      {/* HISTORY */}
      <div
        id="history"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
          The History of RCMI
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-lg p-8">

          <div>
            <img src={DonImg} className="rounded-xl shadow-md" />
            <p className="mt-4 font-semibold">
              Dr Chaplain Juliana Nathaniel <br />
              <span className="text-gray-500 font-normal">
                Global Coordinator
              </span>
            </p>
          </div>

          <div className="text-gray-700 leading-relaxed text-lg space-y-4">
            <p>
              RCMI is a non-profit Christian mission organization established in 2009.
            </p>
            <p>
              We respond to the Great Commission through evangelism, medical outreach,
              and humanitarian relief.
            </p>
            <p>
              Our mission is to bring healing, hope, and restoration to vulnerable communities.
            </p>
          </div>

        </div>
      </div>

      {/* LEADERSHIP */}
      <div
        id="leadership"
        className="bg-slate-900 text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Our Leadership
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              ["Dr Chaplain Juliana Nathaniel", "Global Director"],
              ["Reverend Lei Abrahams Ndu", "National Coordinator"],
              ["Chaplain Asuquo Udo Edem", "Technical Advisor"],
              ["Pastor Mike O. Amos", "Director of Missions"],
              ["Evangelist Francisca Okah", "Director STORM"],
              ["Pastor Mrs Claris Eze", "Administration"],
              ["Olabosun Anjorin", "Knowledge Management"],
              ["Minister Istifanus Nathan", "Music Director"],
              ["Dr Chinedu Noble", "Medical Outreach"]
            ].map(([name, role], i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
              >
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-white/60 mt-2">{role}</p>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* FINAL HERO */}
      <div
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BgGirls})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-4xl mx-auto px-6 py-24 text-white">

          <h2 className="text-4xl md:text-5xl font-black">
            Release, Rescue, and Restore Lives
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            We rescue vulnerable individuals and restore dignity through care,
            education, and rehabilitation programs.
          </p>

          <div className="mt-10">
            <Link
              to="/donations"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-xl transition"
            >
              Donate Now
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Vision;