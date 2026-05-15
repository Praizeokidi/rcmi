import Logoo from "../../assets/rcmil.svg";
import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

// import Button from "../Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
      <nav className="navbar">
        {/* <span
          className="navbar-logo flex items-center mt-3 text-white font-bold text-2xl sm:text-3xl tracking-wide"
        >
          RCMI
        </span> */}
        <Link
          to="/"
          className=" flex items-center h-full ml-8 sm:ml-10"

        >
          <img
            src={Logoo}
            alt="RCMI Logo"
            className=" w-20 h-20 sm:w-24 sm:h-24 object-contain"
          />


        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item relative"
            onMouseEnter={() => {
              if (window.innerWidth >= 960) {
                setDropdown(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 960) {
                setDropdown(false);
              }
            }}
          >

            {/* ABOUT US ROW */}
            <div className="w-full flex items-center justify-between">

              {/* TEXT LINK */}
              <Link
                to="/about"
                className="nav-links text-base"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>

              {/* DROPDOWN ARROW */}
              <button
                type="button"
                className="text-white ml-1 cursor-pointer p-0 bg-transparent border-none"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDropdown((prev) => !prev);
                }}
              >
                <i
                  className={`fas fa-caret-down transition-transform duration-300 ${dropdown ? "rotate-180" : ""
                    }`}
                />
              </button>

            </div>

            {/* DROPDOWN MENU */}
            {dropdown && <Dropdown />}

          </li>

          <li className="nav-item">
            <Link
              to="/programs"
              className="nav-links text-base"
              onClick={closeMobileMenu}
            >
              Ministries
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              className="nav-links text-base"
              onClick={closeMobileMenu}
            >
              Ministry Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className="nav-links text-base"
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/urgentneeds"
              className="nav-links  text-base"
              onClick={closeMobileMenu}
            >
              Urgent Needs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/donations"
              className="nav-links text-base"
              onClick={closeMobileMenu}
            >
              Donate
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
