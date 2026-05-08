import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Logo from "../../assets/rcmix.svg";
// import Button from "../Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo flex items-center"
          onClick={closeMobileMenu}
        >
          <img
            src={Logo}
            alt="Refuge and Consolation Ministry International"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/vision-mission"
              className="nav-links text-base"
              onClick={closeMobileMenu}
            >
              About Us <i className="fas fa-caret-down" />
            </Link>
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
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
