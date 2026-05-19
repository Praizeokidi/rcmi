/*
MODIFICATIONS MADE:
1. Added useRef for stable hover delay timeout (fixes flicker + unreliable setTimeout behavior)
2. Implemented hover delay (150ms) for dropdown close
3. Cleaned hover handlers to prevent dropdown disappearing when moving cursor between trigger and menu
4. Improved desktop-only hover logic consistency
*/

import Logoo from "../../assets/rcmil.svg";
import React, { useState, useRef } from "react"; // MODIFIED: added useRef
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const timeoutRef = useRef(null); // MODIFIED: stable timeout reference

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // MODIFIED: hover handlers with delay logic
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 960) {
      timeoutRef.current = setTimeout(() => {
        setDropdown(false);
      }, 300); // hover delay
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex items-center h-full ml-8 sm:ml-10">
          <img
            src={Logoo}
            alt="RCMI Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
          />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* ABOUT US */}
          <li
            className="nav-item relative"
            onMouseEnter={handleMouseEnter}   // MODIFIED
            onMouseLeave={handleMouseLeave}   // MODIFIED
          >
            <div className="w-full flex items-center justify-between">

              <Link
                to="/about"
                className="nav-links text-base"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>

              <button
                type="button"
                className="text-white ml-0 cursor-pointer p-0 bg-transparent border-none"
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

            {/* DROPDOWN */}
            <div
              className="hidden md:block absolute left-0 top-full"
              onMouseEnter={handleMouseEnter}  // MODIFIED: prevents flicker
              onMouseLeave={handleMouseLeave}  // MODIFIED
            >
              {dropdown && (
                <Dropdown
                  closeMobileMenu={closeMobileMenu}
                  closeDropdown={() => setDropdown(false)}
                />
              )}
            </div>

            {/* MOBILE ACCORDION DROPDOWN */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${dropdown ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
            >
              <Dropdown
                closeMobileMenu={closeMobileMenu}
                closeDropdown={() => setDropdown(false)}
              />
            </div>
          </li>

          <li className="nav-item">
            <Link to="/programs" className="nav-links text-base" onClick={closeMobileMenu}>
              Ministries
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/blog" className="nav-links text-base" onClick={closeMobileMenu}>
              Ministry Reports
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/gallery" className="nav-links text-base" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/urgentneeds" className="nav-links text-base" onClick={closeMobileMenu}>
              Urgent Needs
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/donations" className="nav-links text-base" onClick={closeMobileMenu}>
              Donate
            </Link>
          </li>

          <li>
            <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;