import Button from "../components/Button";
import StormImg from "../assets/storm.jpg";
import EmpowerImg from "../assets/empower1.jpg";
import EyeImg from "../assets/eye.jpg";
// import FarmImg from "../assets/solid.jpg";
import GoodImg from "../assets/image2002.jpg";
import EyescreenImg from "../assets/eyescreen.jpg";
import SpiritualImg from "../assets/give.jpg";
import HygieneImg from "../assets/hygiene.jpg";
import OkayImg from "../assets/okay.jpeg";
import GalleryImg1 from "../assets/gallery1.jpeg";
import GalleryImg2 from "../assets/gallery2.jpeg";
import GalleryImg3 from "../assets/gallery3.jpeg";
import GalleryImg4 from "../assets/gallery4.jpeg";
import GalleryImg5 from "../assets/gallery5.jpg";
import GalleryImg6 from "../assets/gallery6.jpg";
import GalleryImg7 from "../assets/gallery7.jpg";
import GalleryImg8 from "../assets/gallery8.jpg";
import GalleryImg9 from "../assets/gallery9.jpeg";
import GalleryImg10 from "../assets/gallery10.jpeg";
import GalleryImg11 from "../assets/gallery11.jpeg";
import GalleryImg12 from "../assets/gallery12.jpeg";
import GalleryImg13 from "../assets/gallery13.jpeg";
import GalleryImg14 from "../assets/gallery14.jpeg";
import GalleryImg15 from "../assets/gallery15.jpg";
import GalleryImg16 from "../assets/about-shot.jpg";
import GalleryImg18 from "../assets/gallery16.jpg";
import GalleryImg19 from "../assets/gallery17.jpg";
// import GalleryImg17 from "../assets/gallery18.jpg";

const Gallery = () => {
  return (
    <div>
      <div className="h-96   bg-[url('/images/project3.jpg')]">
        <div className="h-96 opacity-65 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="z-3 px-8 pt-24 flex flex-col isolate  justify-center items-center h-full m-auto text-center ">
            <h1 className="font-bold  text-3xl mb-5">RCMI Photo Gallery</h1>
            {/* <p className="mb-4">Giving a helping hand for the poor people</p> */}
            <Button href="/" className={"max-w-32  "}>
              Back Home
            </Button>
          </div>
        </div>
      </div>
      <div className="p-5 py-15 md:p-10">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 lg:gap-8 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <img className="hover:-translate-y-2 transition-all" src={StormImg} />
          <img
            className="hover:-translate-y-2 transition-all"
            src={EmpowerImg}
          />
          <img className="hover:-translate-y-2 transition-all" src={EyeImg} />
          {/* <img src={FarmImg} /> */}
          <img className="hover:-translate-y-2 transition-all" src={GoodImg} />
          <img
            className="hover:-translate-y-2 transition-all"
            src={EyescreenImg}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={SpiritualImg}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={HygieneImg}
          />
          <img className="hover:-translate-y-2 transition-all" src={OkayImg} />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg1}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg2}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg3}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg4}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg5}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg6}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg7}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg8}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg9}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg10}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg11}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg12}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg13}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg14}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg15}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg16}
          />
          {/* <img src={GalleryImg17} /> */}
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg18}
          />
          <img
            className="hover:-translate-y-2 transition-all"
            src={GalleryImg19}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
