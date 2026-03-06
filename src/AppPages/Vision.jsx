import DonImg from "../assets/founder.jpeg";
//import DonImg2 from "../images/pexels-victor-moragriega-1390556186-29421908.jpg";
import BgMain from "../images/main-bcg.jpeg";
import BgGirls from "../images/pexels-jibarofoto-2014773.jpg";
//import Newsletter from "../components/Newsletter";
//import BgImage from "../images/pexels-jibarofoto-2014773.jpg";

const Vision = () => {
  return (
    <div className="bg-gray-100  mt-28">
      <div className="p-6 py-10  m-auto max-w-6xl">
        <h1 className="hidden p-6 py-10 lg:block text-4xl font-bold">
          Why Does RCMI exist ?
        </h1>
        <div className="grid lg:grid-cols-2">
          <div className="p-2 lg:p-14 lg:space-y-12 space-y-7 lg:bg-blue-800 lg:text-white ">
            <h1 className="text-4xl font-extrabold">Our Vision</h1>
            <p className="text-gray-700 tracking-wider lg:tracking-widest lg:leading-loose lg:text-white lg:text-xl text-lg">
              At RCMI, we envisage a world free of blindness and anguish, where
              multitudes are transformed and saved with the host of heaven in
              jubilation as the saints’ march into heaven in their numbers.{" "}
            </p>
            <div className="hidden lg:block">
              <a
                href="/"
                className="buttn text-center max-w-64 bg-green-500 rounded hover:bg-green-600 hover:text-black transition p-4"
              >
                Donate Now
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
          <img src={DonImg} alt="Founder" className="h-full" />
          </div>
        </div>
      </div>

       {/* Mission Section */}
            <div className="bg-cover bg-no-repeat bg-fixed relative overflow-x-hidden"
        style={{ backgroundImage: `url(${BgMain})` }}>
        <div className="p-10  py-10 backdrop-brightness-50 space-y-5 text-white ">
          <div className="max-w-5xl m-auto lg:p-10 space-y-4 lg:space-y-8">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Our Mission Statement
            </h1>
            <p className=" tracking-wide lg:tracking-wider lg:leading-relaxed lg:text-xl text-lg">
              Our mission is to restore sight, move people from darkness to
              light, take the gospel to unreached people group, and provide
              solace to people in difficult circumstances. We provide support by
              meeting their spiritual/psychological, physiological, and social
              needs to ameliorate sufferings and negative impacts of neglect,
              using medical outreach as an in road into the communities.
            </p>
          </div>
        </div>
      </div>


       {/* History Section */}
      <div className="p-6 text-center py-20">
        <h1 className="text-2xl py-6 font-bold lg:text-4xl">
          The History of RCMI
        </h1>
        <div className="p-6 md:p-10 max-w-6xl m-auto bg-cyan-100 grid md:grid-cols-2  gap-7">
          <div className="space-y-5">
            <img src={DonImg} />
            <h1 className="text-lg font-bold">
              Dr Chaplain Juliana Nathaniel, Ph.D. <br></br> RCMI Global
              Coordinator
            </h1>
          </div>
          <div>
            <p className="leading-loose text-lg">
              Refuge and Consolation Ministry International (RCMI), is a
              non-profit making, non-governmental, mission support and emergency
              response Christian ministry established in 2009.
              <br></br> The Bible in Mark 16:15 & Matthew 28:19-20, says, “And
              he said unto them, go ye into all the world, and preach the gospel
              to every creature. [16]He that believeth and is baptized shall be
              saved; but he that believeth not shall be damned (NKJV).
              <br></br>In response to the great commission, we embark on
              integral missions, medical missions and conduct crusades and
              outreaches within the communities to reconcile men to God, restore
              sight to individuals suffering from spiritual blindness, and
              provide treatment to those afflicted with sickness diseases and
              visual impairment. We equally support individuals affected by
              disaster to alleviate their suffering.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="md:py-10 py-5 bg-cyan-600 ">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center">Our Leadership</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 max-w-6xl m-auto ">
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl"> Dr Chaplain Juliana Nathaniel</h1>
              <p className="text-gray-700"> Global Director</p>
            </div>

             {/* Add other leaders similarly */}
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl"> Reverend Lei Abrahams Ndu </h1>
              <p className="text-gray-700"> National Coordinator</p>
            </div>
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl"> Chaplain Asuquo Udo Edem </h1>
              <p className="text-gray-700">National Technical Advisor</p>
            </div>
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl">Pastor Mike O. Amos</h1>
              <p className="text-gray-700"> Director of Missions</p>
            </div>
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl"> Evangelist Francisca Nonye Okah</h1>
              <p className="text-gray-700"> Director STORM.</p>
            </div>
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl">Pastor Mrs Claris Eze </h1>
              <p className="text-gray-700"> Director of Administration</p>
            </div>
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl"> Olabosun Anjorin </h1>
              <p className="text-gray-700"> Director Knowledge Management</p>
            </div>
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl"> Minister Istifanus Nathan </h1>
              <p className="text-gray-700"> Director Music</p>
            </div>
            <div className="border-2 border-white p-6 space-y-6">
              <h1 className="text-xl"> Dr Chinedu Noble </h1>
              <p className="text-gray-700"> Director Medical Outreach</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sm:h-screen w-full h-[69rem] md:h-screen lg:h-screen xl:h-screen bg-center bg-cover bg-no-repeat relative overflow-x-hidden"
        style={{ backgroundImage: `url(${BgGirls})` }}>
          <div className=" h-full w-full backdrop-brightness-50 ">
            <div>
              <div className="p-11 sm:px-15 sm:h-2/3 sm:pt-44 flex justify-items-center justify-between flex-col pt-32 h-2/3 absolute md:ml-10 lg:ml-28  antialiased max-w-3xl text-white ">
                <h1 className="text-4xl py-4  leading-relaxed tracking-wide font-bold">
                  Release, Rescue, and Restore Girls Trapped in Trafficking
                </h1>
                <p className="font-medium text-lg leading-relaxed tracking-wide mb-9">
                  Right now, in the red-light districts of Myanmar, young girls
                  are trapped in a nightmare, trafficked into sex work and
                  living in constant fear. Our brave outreach teams venture into
                  dangerous areas to release these girls, providing them with
                  trauma counseling, job training, and a safe place to heal.
                  While thousands of lives have already been transformed, tens
                  of thousands more are still waiting. On average, it costs $160
                  to rescue one girl. Will you make a compassionate donation
                  today to release more girls from trafficking?
                </p>
                <a
                  href="/"
                  className="buttn text-center max-w-64 bg-green-500 rounded hover:bg-green-600 hover:text-black transition p-4"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
