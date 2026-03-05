import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
// import Button from "../Button";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const [open, setOpen] = useState(null);
  // const Navwin = (MenuName) => {if (windows.innerWidth >=768){setOpen(MenuName)}}
  // const Navdow = () => {if (windows.innerWidth >=768){setOpen(null)}}

  return (
    <nav className=" bg-transparent lg:px-20 p-6 absolute w-full ">
      <div className="flex items-center font-medium justify-around gap-6">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="logo"
            className="md:cursor-pointer h-9"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex text-xl font-bold hidden capitalize items-center text-white gap-1 lg:gap-7 xl:gap-16 font-[Poppins]">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Home
            </Link>
          </li> */}
          <NavLinks />
          <li className="flex">
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Ministry Reports
            </Link>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Urgent Needs
            </Link>
          </li>
        </ul>
        <div className="md:block hidden"></div>
        {/* Mobile nav */}
        <ul
          className={`
                md:hidden z-10 bg-white fixed  w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"} 
        `}
        >
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <NavLinks />
          <li className="">
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Ministry Reports
            </Link>
            <Link to="/" className="py-7 px-3 inline-block text-white">
              Urgent Needs
            </Link>
          </li>

          <div className="py-5"></div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
