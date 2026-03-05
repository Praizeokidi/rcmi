import Button from "./Button";
import StormImg from "../assets/storm.jpg";
import EmpowerImg from "../assets/empower1.jpg";
import EyeImg from "../assets/eye.jpg";

const Programs = () => {
  return (
    <div className="w-full p-7 bg-white m-auto py-20">
      <div>
        <div>
          <div className="">
            <h1 className="text-black font-bold text-4xl p-5">Programs</h1>
            <h1 className="text-black font-semibold text-2xl p-5">
              {" "}
              Programs of the Ministry
            </h1>
            <div className=" text-black p-5">
              <Button href="/programs" className={"text-n-8"}>
                All programs
              </Button>
            </div>
          </div>
          <div className="md:flex  gap-8 p-4">
            <div class="relative shadow-2xl py-1 ...">
              <img src={StormImg} />
              <div class="absolute text-center rounded w-[90%] mx-auto  bg-white bottom-0 right-0  left-0 ...">
                <p className="text-black font-semibold">
                  Support Team for Outreaches and Missions (STORM)
                </p>
              </div>
            </div>
            <div class="relative shadow-2xl py-1 ...">
              <img src={EmpowerImg} />
              <div class="absolute text-center rounded w-[90%] mx-auto  bg-white bottom-0 right-0  left-0 ...">
                <p className="text-black font-semibold">Economic Empowerment</p>
              </div>
            </div>
            <div class="relative shadow-2xl  py-1 ...">
              <img src={EyeImg} />
              <div class="absolute text-center rounded w-[90%] mx-auto  bg-white bottom-0 right-0  left-0 ...">
                <p className="text-black font-semibold">
                  Swift Measures Initiative for Development (SMID)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
