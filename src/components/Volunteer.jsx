import Button from "./Button";
// import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";
// import { useRef } from "react";

const Volunteer = () => {
  // const parallaxRef = useRef(null);
  return (
    <div className=" h-96">
      <div className="bg-orange-400 w-full h-full">
        <div className="h-[100%]  max-w-xl m-auto w-[80%] grid grid-rows-2 px-2  bg-blue-950 py-15">
          <div className="text-center m-auto w-full max-w-md">
            <h1 className=" p-3 text-4xl tracking-wide leading-normal font-extrabold">
              We Need Volunteers...
            </h1>
          </div>
          <div className="text-center ">
            <Button className="">BECOME A VOLUNTEER</Button>
            {/* <ScrollParallax isAbsolutelyPositioned>
              <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl xl:flex">
                {heroIcons.map((icon, index) => (
                  <li className="p-5" key={index}>
                    <img src={icon} width={24} height={25} alt={icon} />
                  </li>
                ))}
              </ul>
            </ScrollParallax> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
