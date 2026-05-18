import Newsletter from "../components/Newsletter";
import Partners from "../components/Partners";
import HeaderImg from "../images/pexels-jibarofoto-2014773.jpg";
import OkayImg from "../images/okay.jpeg";
import EyeImg from "../images/eye.jpg";
import GalleryImg from "../images/gallery17.jpg";
import BgMain from "../images/main-bcg.jpeg";



const MinistryReport = () => {
  const reports = [
    {
      img: OkayImg,
      tag: "Economic Empowerment",
      title: "Building sustainable livelihoods in vulnerable communities",
      desc:
        "RCMI implemented skills acquisition programs focused on entrepreneurship, vocational training, and long-term income stability for displaced and vulnerable families.",
      impact: "1,200+ beneficiaries reached",
    },
    {
      img: EyeImg,
      tag: "Medical Outreach",
      title: "Restoring sight through community eye health programs",
      desc:
        "Our medical teams conducted screenings, treatments, and referrals for patients suffering from preventable blindness and vision impairment.",
      impact: "3,500+ patients treated",
    },
    {
      img: GalleryImg,
      tag: "Child Welfare",
      title: "Protecting and supporting vulnerable children",
      desc:
        "We provided shelter support, nutrition aid, and educational assistance to children affected by poverty, displacement, and health challenges.",
      impact: "800+ children supported",
    },
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <div
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeaderImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90" />

        <div className="mt-15 relative z-10 text-center max-w-4xl px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-300">
            Humanitarian Transparency Report
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-white mt-4">
            Ministry Impact Report
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            Documenting real stories of transformation, humanitarian response,
            medical outreach, and community restoration across our mission fields.
          </p>
        </div>
      </div>

      {/* GLOBAL IMPACT STATS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div className="bg-white shadow-lg rounded-2xl p-10">
            <h2 className="text-4xl font-black text-green-600">5,500+</h2>
            <p className="mt-3 text-gray-600">Lives impacted through outreach programs</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-10">
            <h2 className="text-4xl font-black text-cyan-600">12+</h2>
            <p className="mt-3 text-gray-600">Communities actively served</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-10">
            <h2 className="text-4xl font-black text-blue-600">3</h2>
            <p className="mt-3 text-gray-600">Core humanitarian focus areas</p>
          </div>

        </div>
      </div>

      {/* STORY SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center px-6 pt-24">
        <h2 className="text-4xl md:text-5xl font-black">
          Field Reports & Impact Stories
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed">
          Each report below reflects real field engagement, community transformation,
          and measurable humanitarian outcomes.
        </p>
      </div>

      {/* STORY CARDS (UNICEF STYLE) */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {reports.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >

            {/* IMAGE */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={item.img}
                className="h-[360px] w-full object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full tracking-wide">
                {item.tag}
              </div>

              <div className="absolute bottom-5 left-5 bg-white/90 text-black px-4 py-2 rounded-xl text-sm font-semibold">
                {item.impact}
              </div>
            </div>

            {/* TEXT */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
                Field Report
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">
                {item.title}
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                {item.desc}
              </p>

              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex items-center text-green-600 font-semibold tracking-wide hover:text-green-700 transition"
                >
                  Read full report →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FINAL GLOBAL CTA */}
      <div
        className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgMain})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* SOFT COLOR GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-black/40 to-blue-900/30" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Help Us Continue This Impact
          </h2>

          <p className="mt-6 text-gray-200 max-w-3xl mx-auto leading-loose">
            Your partnership enables us to reach more communities, provide medical care,
            and deliver life-changing humanitarian support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="/donations"
              className="
          inline-block
          bg-green-500
          hover:bg-green-600
          text-black
          font-semibold
          px-10
          py-4
          rounded-2xl
          shadow-lg
          transition-all
          duration-300
          hover:-translate-y-1
        "
            >
              Donate Now
            </a>

            <a
              href="/contact"
              className="
          inline-block
          border border-white/30
          bg-white/10
          backdrop-blur-md
          text-white
          hover:bg-white/20
          px-10
          py-4
          rounded-2xl
          transition-all
          duration-300
          hover:-translate-y-1
        "
            >
              Partner With Us
            </a>

          </div>

        </div>
      </div>

      <Partners />
      <Newsletter />

    </div>
  );
};

export default MinistryReport;