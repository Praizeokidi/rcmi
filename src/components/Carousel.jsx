// import { useState } from "react";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";
// export default function Carousel({ slides }) {
//   let [current, setCurrent] = useState(0);

//   let previousSlide = () => {
//     if (current === 0) setCurrent(slides.length - 1);
//     else setCurrent(current - 1);
//   };

//   let nextSlide = () => {
//     if (current === slides.length - 1) setCurrent(0);
//     else setCurrent(current + 1);
//   };

//   return (
//     <div className="group w-full h-screen m-auto overflow-hidden relative">
//       <div
//         className={`flex h-screen transition ease-out duration-40`}
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {slides.map((s) => {
//           return <img src={s} />;
//         })}
//       </div>

//       <div className="hidden group-hover:flex absolute top-0 h-full w-full justify-between items-center text-white px-10 text-3xl">
//         <button onClick={previousSlide}>
//           <BsFillArrowLeftCircleFill />
//         </button>
//         <button onClick={nextSlide}>
//           <BsFillArrowRightCircleFill />
//         </button>
//       </div>

//       <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//         {slides.map((s, i) => {
//           return (
//             <div
//               onClick={() => {
//                 setCurrent(i);
//               }}
//               key={"circle" + i}
//               className={`rounded-full w-5 h-5 cursor-pointer  ${
//                 i == current ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import { useState } from "react";
import "../style/Carousel.css";
import Button from "./Button";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 8500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  console.log(current);
  return (
    <div
      className="w-full group md:w-[90%] m-auto h-screen carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay ">
                <h2 className="card_title text-2xl font-black">
                  {image.title}
                </h2>
                <p className="font-bold text-lg">{image.text}</p>
                <Button href={"/programs"} className={"w-32"}>
                  View More
                </Button>
              </div>
            </div>
          );
        })}
        <div className="hidden group-hover:flex">
          <div className="carousel_arrow_left" onClick={slideLeft}>
            &lsaquo;
          </div>
          <div className="carousel_arrow_right" onClick={slideRight}>
            &rsaquo;
          </div>
        </div>

        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
