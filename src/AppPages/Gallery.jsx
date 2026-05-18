import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BgMain from "../images/main-bcg.jpeg";
import StormImg from "../assets/storm.jpg";
import EmpowerImg from "../assets/empower1.jpg";
import EyeImg from "../assets/eye.jpg";
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

const images = [
  StormImg,
  EmpowerImg,
  EyeImg,
  GoodImg,
  EyescreenImg,
  SpiritualImg,
  HygieneImg,
  OkayImg,
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg4,
  GalleryImg5,
  GalleryImg6,
  GalleryImg7,
  GalleryImg8,
  GalleryImg9,
  GalleryImg10,
  GalleryImg11,
  GalleryImg12,
  GalleryImg13,
  GalleryImg14,
  GalleryImg15,
  GalleryImg16,
  GalleryImg18,
  GalleryImg19,
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="bg-[#0B1220] text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${BgMain})`
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        <div className="mt-10 relative z-10 text-center max-w-4xl px-6">

          <h1 className="text-5xl md:text-6xl font-black tracking-wide">
            RCMI Global Gallery
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-loose">
            Moments of impact, compassion, medical outreach, evangelism, and
            transformation captured across communities we serve.
          </p>

          <div className="mt-10">
            <Button href="/" className="max-w-40">
              Back Home
            </Button>
          </div>

        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Stories Through Images
        </h2>

        <p className="mt-5 text-gray-400 leading-loose">
          Each image represents real lives touched through outreach, healing,
          and the message of hope.
        </p>

      </div>

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className="
                relative
                group
                overflow-hidden
                rounded-2xl
                cursor-pointer
                bg-gray-900
                shadow-lg
                hover:shadow-cyan-500/20
                transition-all
                duration-500
              "
            >

              <img
                src={img}
                alt="gallery"
                className="
                  w-full
                  h-64
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

            </div>
          ))}

        </div>

      </div>

      {/* LIGHTBOX (OPTIONAL PREMIUM UX) */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="
            fixed inset-0 bg-black/90
            flex items-center justify-center
            z-50
            p-6
          "
        >
          <img
            src={activeImage}
            alt="preview"
            className="
              max-h-[85vh]
              max-w-[90vw]
              rounded-2xl
              shadow-2xl
            "
          />
        </div>
      )}

      {/* CTA SECTION */}
      <div className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgMain})` }}
      >

        {/* DARK OVERLAY (reduced opacity so image shows) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* SOFT COLOR GLOW (adds premium tone without killing image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/30 via-black/40 to-blue-900/30" />

        {/* CONTENT */}
        <div className="relative z-10">

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Be Part of the Impact
          </h2>

          <p className="mt-6 text-gray-200 max-w-3xl mx-auto leading-loose">
            Your support helps us continue reaching communities with medical care,
            evangelism, and humanitarian relief.
          </p>

          <div className="mt-10">

            <Link
              to="/donations"
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
        ">
              Support This Mission
            </Link>


          </div>

        </div>
      </div>

    </div>
  );
};

export default Gallery;