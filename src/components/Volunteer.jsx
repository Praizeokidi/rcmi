import Button from "./Button";

const Volunteer = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND */}
      <div className="relative h-[420px] sm:h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-950 via-slate-900 to-black">

        {/* soft glow overlays */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.4),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.3),transparent_60%)]"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-3xl px-6">

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-wide">
            Become a Volunteer
          </h1>

          <p className="mt-5 text-gray-200 text-base sm:text-lg leading-relaxed">
            Join RCMI in bringing hope, medical outreach, evangelism, and
            humanitarian support to communities in need across Africa and beyond.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button
              href="/contact"
              className="px-8 py-4 text-lg bg-green-500 hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl rounded-xl"
            >
              BECOME A VOLUNTEER
            </Button>
          </div>

        </div>
      </div>

      {/* FLOATING INFO STRIP */}
      <div className="relative -mt-12 z-20">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x">

          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800">Outreach</h3>
            <p className="text-gray-500 text-sm mt-2">
              Medical & humanitarian missions
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800">Evangelism</h3>
            <p className="text-gray-500 text-sm mt-2">
              Spreading hope to unreached communities
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800">Support</h3>
            <p className="text-gray-500 text-sm mt-2">
              Helping vulnerable individuals and families
            </p>
          </div>

        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="py-20 px-6 text-center max-w-4xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Your Time Can Change Lives
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Whether on the field or behind the scenes, volunteers are the heart
          of our mission. Every skill, every effort, every hour matters.
        </p>

      </div>

    </section>
  );
};

export default Volunteer;