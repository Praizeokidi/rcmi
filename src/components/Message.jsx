import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import FounderImg from "../assets/founder.jpeg";
import { HiOutlineAcademicCap } from "react-icons/hi2";
// import Section from "./Section";

const Message = () => {
  return (
    <div className="bg-n-8 text-white  py-20 m-auto ">
      <div className="p-4 max-w-6xl m-auto md:grid grid-cols-2">
        <div className="p-4">
          <div>
            <h1 className="text-4xl tracking-wide leading-normal font-extrabold">
              Message by the{" "}
              <span className="text-orange-500">Global coordinator</span>
            </h1>
          </div>
          <div className="py-4">
            <p
              className="flex py-4 
            "
            >
              <FaQuoteLeft />
              We follow Jesus’ example by being an active, visible, tangible
              expression of God’s love as we work alongside the poor and
              oppressed.
              <FaQuoteRight />
            </p>

            <p className="py-4 flex">
              <HiOutlineAcademicCap className="text-2xl" />
              Dr Chaplain Juliana Nathaniel, Ph.D., RCMI Global Coordinator
            </p>
          </div>
        </div>
        <div className="p-4">
          <img src={FounderImg} className=" shadow-black-500/40 shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Message;
