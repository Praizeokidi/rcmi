import Button from "../components/Button";
import Image1 from "../assets/abt1.jpg";
import Image2 from "../assets/abt2.jpg";
import Image3 from "../assets/abt3.jpg";
const AboutPage = () => {
  return (
    <div>
      <div>
        <div className="h-96   ">
          <div className="h-96 opacity-65 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="z-3 px-8 pt-24 flex flex-col isolate justify-center items-center h-full m-auto text-center ">
              <h1 className="font-bold text-3xl mb-5">ABOUT RCMI</h1>
              <p className="mb-4">
                Reefuge and Consolation Ministry International
              </p>
              <Button href="/" className={"max-w-32  "}>
                Back Home
              </Button>
            </div>
          </div>
        </div>
        <div className="p-15  grid md:grid-cols-2 gap-3">
          <div>
            <div className="py-9">
              <img className="pb-4 shadow-2xl" src={Image1} />
              <img className="pb-4 shadow-2xl" src={Image2} />
              <img className="pb-4 shadow-2xl" src={Image3} />
            </div>
          </div>
          <div className="p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold underline mb-4 text-orange-600">
                RCMI Goals
              </h2>
              <p>
                The goals of RCMI are to reduce morbidity and mortality among
                communities targeted at the vulnerable (persons with
                disabilities, the elderly and poor) within communities in
                Nigeria, Africa and beyond.We aspire to reach the lost and
                unreached people groups with the message of love, to make the
                world a better place to live.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold underline text-orange-600 mb-4">
                RCMI Objectives
              </h2>
              <ul className=" list-decimal">
                <li className="mb-3">
                  Reach the unreached people groups in Nigeria, Africa, and
                  beyond with the message of salvation through Jesus Christ to
                  save them from sin and condemnation.
                </li>
                <li className="mb-3">
                  Strengthen capacity of missionaries and their spouses on soul
                  winning discipleship and modalities for breaking new grounds
                  for furtherance of the gospel of Jesus Christ.
                </li>
                <li className="mb-3">
                  Increase access of vulnerable groups (missionaries, new
                  converts in difficult circumstances and victims of disaster)
                  within the communities to health care and humanitarian
                  services through medical outreach and emergency response while
                  introducing them to Christ.
                </li>
                <li className="mb-3">
                  4. Share the love of Christ by improving access of the rural
                  communities to nutrition, clean drinking water, sanitation
                  facilities and hygiene practices to curb malnutrition,
                  waterborne and sanitation related diseases.
                </li>
                <li className="mb-3">
                  Strengthen capacity of the vulnerable groups, (missionaries,
                  their spouses, and victims of disaster) to empower them to
                  attain their educational pursuits including entrepreneurship,
                  to enable them to navigate through life with ease, live good
                  productive lives, and contribute meaningfully towards
                  improving the lots of humanity.
                </li>
                <li className="mb-3">
                  Strengthen the health system to facilitate access to quality
                  health services (eye care, treatment of minor ailments and
                  referrals) in Nigeria, other African countries and beyond.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-11 lg:p-24 max-w-5xl">
          <div className="mb-10">
            <div>
              <h1 className="text-2xl text-orange-600 font-semibold mb-6">
                Our Reach
              </h1>
            </div>
            <div>
              <p>
                We initiated activities in Nigeria and will reach other parts of
                Africa and the globe as the Almighty God grants us speed. We
                will extend our activities to other African countries, Europe,
                Middle East, and Latin America. <br></br>Being rural focused, we
                have offices in Abuja FCT, Achi Enugu State, and Bauchi State
                Nigeria. There is an office in Anambra State which is presently
                redundant.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl font-semibold mb-6 text-orange-600">
                Target Groups:
              </h1>
            </div>
            <div>
              <p>
                Our target audience are:
                <ul className="list-disc">
                  <li>Unreached people group.</li>
                  <li>Missionaries </li>
                  <li>New converts</li>
                  <li>
                    Displaced individuals including the persons living with
                    disabilities
                  </li>
                  <li>Indigent persons</li>
                  <li>Women</li>
                  <li>Children</li>
                  <li>Community Gate Keepers</li>
                  <li>Government Officials</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="p-9 max-w-9xl m-auto  lg:p-24">
          <div>
            <h1 className="text-3xl font-semibold mb-6">MANAGEMENT OF RCMI</h1>
            <h1 className="text-xl font-medium mb-6">
              Board of Trustees of RCMI:
            </h1>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 p-1">
            <div className="mb-5 p-4">
              <p>
                <span className="text-orange-600 font-extrabold text-xl">
                  Professor Amos Paul Bassi :
                </span>
                <br></br>
                is a Professor of Public Health Medicine and the immediate past
                Provost College of Medicine and Health Sciences, Bingham
                University, Nigeria. He is a member of the strategic advisory
                Board of the West African Institute of Public Health and a
                global advocate for Primary Health Care. He has a multi country
                experience which include implementation of major RMNCAH
                interventions in Africa and Asia for close to 30 years. His area
                of expertise was in Health System strengthening, Malaria, water,
                Sanitation and Hygiene related programs. Amongst the
                international Organizations he worked for are WHO, UNICEF,
                USAID, DFID, European Union and World Bank as well as
                non-for-profit organisation like John Snow Incorporated. He is
                an active member of the Nigerian Medical Association (NMA) and
                recognised for his global and local networks.{" "}
              </p>
            </div>
            <div className="mb-5 p-4">
              <p>
                <span className="text-orange-600 font-extrabold text-xl">
                  Dr Juliana Nathaniel :
                </span>
                <br></br>
                is a Public Health Specialist with a Ph.D. in Public Health. She
                has more than 30 years’ experience in Project Development and
                Management. Her core Skills include strategic planning, project
                cycle management, finance management, organizational capacity
                development, health systems strengthening (leadership and
                governance, health financing, human resource for health
                management and service delivery). She is a team building expert
                and has successfully led health projects at the State and
                National levels in Nigeria. She was the Project Director of the
                most successful eye health program ever implemented in Nigeria
                (the defunct Seeing is Believing Program in Nigeria) led by
                Christoffel BlindenMission (CBM) in collaboration with the
                International Agency for Prevention of Blindness (AIPB),
                supported by the Standard Chartered Bank.
              </p>
            </div>
            <div className="mb-5 p-4">
              <p>
                <span className="text-orange-600 font-extrabold text-xl">
                  Dr Ferdinand Nweke :
                </span>
                <br></br>
                is a Medical Doctor with MBBS qualification. He has successfully
                managed public and private sector service delivery programs as a
                Medical Director in-charge. He is the Chair of RCMI Board of
                Trustees. He is an acclaimed international Evangelist, and the
                Global Coordinator of Eternity Ministries International based in
                Abuja, FCT Nigeria.
              </p>
            </div>
            <div className="mb-5 p-4">
              <p>
                <span className="text-orange-600 font-extrabold text-xl">
                  Mr Kalajaiye Adelaja:
                </span>
                <br></br>
                is a seasoned educationist and worked as a lecturer at Federal
                polytechnic Bauchi. He has a B.Sc. Business Administration and
                MBA Marketing. He retired as a Senior lecturer after 23 years of
                service with the Federal Polytechnic Bauchi. His Specialization
                is Human Resource Management. Currently, a missionary in Oriade
                LGA, Osun State. He is the Founder of the Polished Arrow
                Ministries based in Ikeji Ile, Osun State.
              </p>
            </div>
            <div className="mb-5 p-4">
              <p>
                <span className="text-orange-600 font-extrabold text-xl">
                  Barrister Cyril Irorakpo:
                </span>
                <br></br>
                is a successful legal practitioner and the RCMI Legal Advisor.
                He has a chamber and manages a successful and thriving legal
                firm in Bauchi State.
              </p>
            </div>
            <div className="mb-5 p-4">
              <p>
                <span className="text-orange-600 font-extrabold text-xl">
                  Mrs. Francisca Okah:
                </span>
                <br></br>
                She is a seasoned educationist with a National Certificate of
                Education (NCE) obtained from the prestigious Ahmadu Bello
                University, Zaria. She worked as a classroom teacher and later
                worked with 2 USAID projects in Bauchi State. She retired after
                putting in 10 years of useful service as the Project Admin and
                Finance Officer of the defunct Vision Project and the Community
                Participation for Action in the Social Sector (COMPASS) project
                funded projects in Bauchi State.
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4 mt-8 text-orange-600">
              Directors of RCMI:
            </h1>
            <p>
              The Global Director coordinates the affairs of RCMI at the
              international level. We have a National Technical Advisors and a
              National Coordinator that oversees the affairs of RCMI at the
              national level. There are Eight Directors in charge of the
              different departments of the ministry.
            </p>
          </div>
          <div>
            <h1 className="text-orange-600 text-xl font-bold mb-4 mt-9">
              The Directors are as follows::
            </h1>
            <p>
              <ul className="list-decimal p-4">
                <li> Dr Chaplain Juliana Nathaniel - Global Director</li>
                <li> Reverend Lei Abrahams Ndu – National Coordinator</li>
                <li>Chaplain Asuquo Udo Edem – National Technical Advisor</li>
                <li> Pastor Mike O. Amos – Director of Missions</li>
                <li> Evangelist Francisca Nonye Okah- Director STORM.</li>
                <li> Pastor Mrs Claris Eze - Director of Administration</li>
                <li> Olabosun Anjorin -Director Knowledge Management</li>
                <li> Minister Istifanus Nathan - Director Music</li>
                <li> Director Medical Outreach - Dr Chinedu Noble</li>
                <li> Director of Logistics and Supplies - Vacant</li>
                <li> Director of Finance - Vacant</li>
              </ul>
            </p>
          </div>
          <div>
            <h1 className="text-xl text-orange-600 font-bold mb-4 mt-8">
              Deputy Directors:
            </h1>
            <p>
              RCMI has eight Deputy Directors as follows: Two of the deputy
              directors are based at the head office and the remaining are at
              the six geopolitical zones of Nigeria.
            </p>
          </div>
          <div>
            <h1 className=" text-xl font-bold mb-4 mt-9 text-orange-600">
              National Level:
            </h1>
            <p>
              <ul className="list-decimal p-4">
                <li>Sunday Dogara - Deputy Director of Medical Outreach.</li>
                <li> Deputy Director of Missions.</li>
              </ul>
            </p>
          </div>
          <div>
            <h1 className=" text-xl font-bold mb-4 mt-9 text-orange-600">
              Others are at the geopolitical zones:
            </h1>
            <p>
              <ul className="list-decimal p-4">
                <li> Pastor Noah Halan- Deputy Director Northeast zone.</li>
                <li>Mr Zacharia D. Yiga-Deputy Director Northcentral zone..</li>
                <li> Deputy Director Northwest zone -Vacant</li>
                <li> Deputy Director Southeast zone- Vacant</li>
                <li> Deputy Director Southsouth zone- Vacant</li>
                <li> Deputy Director Southwest- Vacant</li>
              </ul>
            </p>
          </div>
          <div className="mb-14">
            <h1 className=" text-3xl font-extrabold mb-9 mt-15 text-orange-600">
              Location of RCMI
            </h1>
            <p>
              By October 2024, RCMI will relocate its operational base to a
              rural community called Achi, Enugu State, Nigeria. In the interim,
              the ministry is operating from its office in Abuja, Federal
              Capital Territory, Nigeria. The RCMI state office in Bauchi is
              functional and situated at Zafin-Zurfi Settlement, Adjacent the
              Federal Polytechnic Fence. Along Dass Road. We plan to reactivate
              the office in Anambra State by June 2025, as we continue to expand
              our geographic coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
