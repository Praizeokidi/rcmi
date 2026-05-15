import jibbyImg from "../images/pexels-jibarofoto-2014773.jpg";
import Button from "../components/Button";
import BgMain from "../images/main-bcg.jpeg";
import StormImg from "../assets/storm.jpg";
import EmpowerImg from "../assets/empower1.jpg";
import EyeImg from "../assets/eye.jpg";
import FarmImg from "../assets/solid.jpg";
import GoodImg from "../assets/image2002.jpg";
import EyescreenImg from "../assets/eyescreen.jpg";
import SpiritualImg from "../assets/give.jpg";
import HygieneImg from "../assets/hygiene.jpg";
import OkayImg from "../assets/okay.jpeg";

const programs = [
  {
    img: StormImg,
    title: "Swift Measures Initiative for Development",
    text: "Comprehensive eye health outreach programs focused on prevention and treatment of visual impairment in underserved communities.",
  },
  {
    img: EmpowerImg,
    title: "Support Team for Outreaches and Missions (STORM)",
    text: "Coordinated evangelism and mission deployment teams reaching communities with structured outreach impact.",
  },
  {
    img: GoodImg,
    title: "Economic Empowerment Initiative",
    text: "Skills acquisition and entrepreneurship training programs designed to promote financial independence and dignity.",
  },
  {
    img: FarmImg,
    title: "Agriculture & Nutrition Program",
    text: "Community-based agricultural development improving food security and sustainable livelihoods.",
  },
  {
    img: SpiritualImg,
    title: "Community Rehabilitation Centres",
    text: "Rehabilitation and empowerment programs for vulnerable individuals including persons with disabilities.",
  },
  {
    img: EyescreenImg,
    title: "Spiritual Empowerment & Discipleship",
    text: "Faith-based growth programs ensuring long-term spiritual maturity and leadership development.",
  },
  {
    img: EyeImg,
    title: "Medical & Eye Care Outreach",
    text: "Integrated healthcare missions focused on preventing blindness and improving community health outcomes.",
  },
  {
    img: HygieneImg,
    title: "Water, Sanitation & Hygiene (WASH)",
    text: "Clean water and sanitation initiatives improving environmental health and reducing disease spread.",
  },
  {
    img: OkayImg,
    title: "Inclusive Education Programs",
    text: "Education initiatives ensuring access to quality learning for children, including those with disabilities.",
  },
];

const ProgramPage = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${jibbyImg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center px-6 max-w-3xl">
          <p className="text-white/70 uppercase tracking-[0.3em] text-sm">
            Our Ministries
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-white mt-4">
            Transformational Programs
          </h1>

          <p className="mt-6 text-gray-200 leading-relaxed">
            Integrated humanitarian, medical, educational, and spiritual initiatives
            designed to restore dignity and transform communities globally.
          </p>
        </div>
      </div>

      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 pt-20">
        <p className="text-cyan-700 uppercase tracking-[0.3em] font-semibold">
          What We Do
        </p>
        <h2 className="text-4xl font-bold mt-4">
          Areas of Impact
        </h2>
        <p className="mt-5 text-gray-600 leading-relaxed">
          Each program is designed to address physical, social, and spiritual needs
          in a sustainable and measurable way.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {programs.map((p, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="h-56 overflow-hidden">
                <img
                  src={p.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h3 className="text-xl font-bold leading-snug">
                  {p.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {p.text}
                </p>

                <div className="mt-6">
                  <Button variant="secondary">
                    Learn More
                  </Button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CTA */}
      <div
        className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgMain})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* SOFT COLOR GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-black/40 to-blue-900/30" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Partner With Our Mission
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed">
            Your support helps us expand these programs and reach more vulnerable
            communities with life-changing impact.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/donations" variant="primary">
              Donate Now
            </Button>

            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProgramPage;