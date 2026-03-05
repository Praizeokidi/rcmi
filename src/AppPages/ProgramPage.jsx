import Button from "../components/Button";
import StormImg from "../assets/storm.jpg";
import EmpowerImg from "../assets/empower1.jpg";
import EyeImg from "../assets/eye.jpg";
import FarmImg from "../assets/solid.jpg";
import GoodImg from "../assets/image2002.jpg";
import EyescreenImg from "../assets/eyescreen.jpg";
import SpiritualImg from "../assets/give.jpg";
import HygieneImg from "../assets/hygiene.jpg";
import OkayImg from "../assets/okay.jpeg";

const ProgramPage = () => {
  return (
    <div>
      <div>
        <div className=" py-14 text-white text-center bg-[url('/images/pexels-jibarofoto-2014773.jpg')]  bg-center bg-cover bg-no-repeat bg-fixed relative overflow-x-hidden p-6 space-y-8 h-64 grid items-center">
          <h1 className="text-2xl font-bold  ">Ministries </h1>
        </div>
        <div className="p-7 pt-24 ">
          <div className=" max-w-6xl m-auto grid gap-5 md:grid-cols-3">
            <div>
              <div>
                <img className="h-64 w-full  " src={EmpowerImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Swift Measures Initiative for Development{" "}
                </h1>
                <p className="mb-6">
                  - Eye Health Initiative RCMI implements comprehensive eye
                  health programs.{" "}
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64  w-full " src={StormImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Support Team for Outreaches and Missions (STORM){" "}
                </h1>
                <p className="mb-6">
                  There will be regular evangelism by the evangelism team that
                  will be constituted headed by the{" "}
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64   w-full" src={EyeImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Economic Empowerment (skills acquisition, entrepreneurship):{" "}
                </h1>
                <p className="mb-6">
                  To ensure that persons with disability and missionaries are
                  self-sufficient, RCMI will initiate training to promote
                  skills..{" "}
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64   w-full" src={FarmImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Agriculture and Nutrition Programme:
                </h1>
                <p className="mb-6">
                  RCMI embarks on agriculture programmes. We collaborate with
                  the communities to improve agricultural yields and take them
                  through the value chain system.
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64   w-full" src={EyescreenImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Community Based Rehabilitation Centres:
                </h1>
                <p className="mb-6">
                  Rehabilitation centres will be set up to further empower
                  community members including persons with disabilities with
                  skills required for self-sustenance, and poverty reduction and
                  to enable them to contribute meaningfully towards improving
                  their welfare and the socio-economic development of the
                  nation.
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64   w-full" src={SpiritualImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Spiritual Empowerment Programs: (Believers Foundation and
                  Discipleship):
                </h1>
                <p className="mb-6">
                  RCMI is not only interested in winning souls but that the
                  souls will be rooted in Christianity and abide to the end.
                  John 15:16 says, “You have not chosen me, but I have chosen
                  you, and ordained you, that ye should go and bring forth
                  fruits, and that your fruits should remain.”
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64   w-full" src={GoodImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Outreaches and Missions:
                </h1>
                <p className="mb-6">
                  RCMI implements integrated eye health programs. Our focus is
                  to improve sights and prevent blindness among adults,
                  children, and adolescents in and out of school through
                  promotion, prevention, treatments, and rehabilitation of eye
                  health conditions.
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64   w-full" src={HygieneImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Water, Sanitation, and Hygiene:
                </h1>
                <p className="mb-6">
                  Certain eye conditions are water and environment related, as
                  such, the RCMI engage in the implementation of water,
                  sanitation, and hygiene promotion programs to increase access
                  of communities to sanitation and the clean drinking water.
                </p>
                <Button>Read More </Button>
              </div>
            </div>
            <div>
              <div>
                <img className="h-64   w-full" src={OkayImg} />
              </div>
              <div className="p-9 text-center ">
                <h1 className="font-bold mb-7 text-xl">
                  Inclusive Education for Persons with Disability:
                </h1>
                <p className="mb-6">
                  Part of the RCMI’s long-term initiative is inclusive
                  education. The organization will register and operate an
                  inclusive education school to provide quality education and
                  rehabilitation for children.
                </p>
                <Button>Read More </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
