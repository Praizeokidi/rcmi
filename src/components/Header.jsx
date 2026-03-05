import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import hamburger from "../assets/hamburger.svg";
// import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { navigation } from "../constants";
import { HambugerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`px-5 md:px-16 lg:pt-4 lg:px-28 m-auto  absolute transition-all top-0 left-0 w-full z-50 bg-transparent      ${
        openNavigation ? "bg-transparent" : "bg-n-8/90"
      }`}
    >
      <div className="   flex items-center px-5 lg:px-6.5 xl:px-2 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-20"
            alt="Flowbite Logo"
          />
          {/* <img src={brainwave} width={190} height={40} alt="Brainwave" /> */}
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[7rem] left-0 right-0 bottom-0  bg-n-5  lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-bold text-lg capitalize text-white transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25  lg:font-medium lg:text-base ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1-1"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HambugerMenu />
        </nav>

        <div
          className="ml-auto  lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <img
            src={hamburger}
            alt="hamburger icon"
            width={45}
            color="white"
            height={45}
          />
          {/* <ion-icon
            classname={"h-20 font-bold"}
            name="reorder-three-outline"
          ></ion-icon> */}

          {/* <MenuSvg openNavigation={openNavigation} /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <div>
//       <nav class="bg-transparent">
//         <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               class="h-8"
//               alt="Flowbite Logo"
//             />
//             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Flowbite
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="navbar-dropdown"
//             type="button"
//             class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-dropdown"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
//             <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <button
//                   id="dropdownNavbarLink"
//                   data-dropdown-toggle="dropdownNavbar"
//                   class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                 >
//                   Dropdown{" "}
//                   <svg
//                     class="w-2.5 h-2.5 ms-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   id="dropdownNavbar"
//                   class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
//                 >
//                   <ul
//                     class="py-2 text-sm text-gray-700 dark:text-gray-400"
//                     aria-labelledby="dropdownLargeButton"
//                   >
//                     <li>
//                       <a
//                         href="#"
//                         class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Dashboard
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         Earnings
//                       </a>
//                     </li>
//                   </ul>
//                   <div class="py-1">
//                     <a
//                       href="#"
//                       class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                     >
//                       Sign out
//                     </a>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

//////////////////////////////

// import React from "react";

// const Header = () => {
//   return (
//     <div>
//       <nav class="block w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
//         <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
//           <a
//             href="#"
//             class="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
//           >
//             Material Tailwind
//           </a>
//           <div class="hidden lg:block">
//             <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//               <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
//                 <a href="#" class="flex items-center">
//                   Pages
//                 </a>
//               </li>
//               <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
//                 <a href="#" class="flex items-center">
//                   Account
//                 </a>
//               </li>
//               <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
//                 <a href="#" class="flex items-center">
//                   Blocks
//                 </a>
//               </li>
//               <li class="flex items-center p-1 text-sm gap-x-2 text-slate-600">
//                 <a href="#" class="flex items-center">
//                   Docs
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <button
//             class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
//             type="button"
//           >
//             <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </span>
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
// import logo from "../../img/logo.png";
// const Header = () => {
//   const [isMenu, setisMenu] = useState(false);
//   const [isResponsiveclose, setResponsiveclose] = useState(false);
//   const toggleClass = () => {
//     setisMenu(isMenu === false ? true : false);
//     setResponsiveclose(isResponsiveclose === false ? true : false);
//   };
//   let boxClass = ["main-menu menu-right menuq1"];
//   if (isMenu) {
//     boxClass.push("menuq2");
//   } else {
//     boxClass.push("");
//   }
//   const [isMenuSubMenu, setMenuSubMenu] = useState(false);
//   const toggleSubmenu = () => {
//     setMenuSubMenu(isMenuSubMenu === false ? true : false);
//   };
//   let boxClassSubMenu = ["sub__menus"];
//   if (isMenuSubMenu) {
//     boxClassSubMenu.push("sub__menus__Active");
//   } else {
//     boxClassSubMenu.push("");
//   }
//   return (
//     <header className="header__middle">
//       <div className="container">
//         <div className="row">
//           {/* Add Logo  */}
//           <div className="header__middle__logo">
//             <NavLink exact activeClassName="is-active" to="/">
//               <img
//                 src="https://flowbite.com/docs/images/logo.svg"
//                 class="h-8"
//                 alt="Flowbite Logo"
//               />
//             </NavLink>
//           </div>
//           <div className="header__middle__menus">
//             <nav className="main-nav ">
//               {/* Responsive Menu Button */}
//               {isResponsiveclose === true ? (
//                 <>
//                   <span
//                     className="menubar__button"
//                     style={{ display: "none" }}
//                     onClick={toggleClass}
//                   >
//                     {" "}
//                     <FiXCircle />{" "}
//                   </span>
//                 </>
//               ) : (
//                 <>
//                   <span
//                     className="menubar__button"
//                     style={{ display: "none" }}
//                     onClick={toggleClass}
//                   >
//                     {" "}
//                     <FiAlignRight />{" "}
//                   </span>
//                 </>
//               )}
//               <ul className={boxClass.join(" ")}>
//                 <li className="menu-item">
//                   <NavLink
//                     exact
//                     activeClassName="is-active"
//                     onClick={toggleClass}
//                     to={`/`}
//                   >
//                     {" "}
//                     Home{" "}
//                   </NavLink>
//                 </li>
//                 <li className="menu-item ">
//                   <NavLink
//                     onClick={toggleClass}
//                     activeClassName="is-active"
//                     to={`/About`}
//                   >
//                     {" "}
//                     About{" "}
//                   </NavLink>{" "}
//                 </li>
//                 <li
//                   onClick={toggleSubmenu}
//                   className="menu-item sub__menus__arrows"
//                 >
//                   {" "}
//                   <Link to="#">
//                     {" "}
//                     Shop <FiChevronDown />{" "}
//                   </Link>
//                   <ul className={boxClassSubMenu.join(" ")}>
//                     <li>
//                       {" "}
//                       <NavLink
//                         onClick={toggleClass}
//                         activeClassName="is-active"
//                         to={`/Online`}
//                       >
//                         {" "}
//                         Online Shop{" "}
//                       </NavLink>{" "}
//                     </li>
//                     <li>
//                       <NavLink
//                         onClick={toggleClass}
//                         activeClassName="is-active"
//                         to={`/Offline`}
//                       >
//                         {" "}
//                         Offline Shop{" "}
//                       </NavLink>{" "}
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="menu-item ">
//                   <NavLink
//                     onClick={toggleClass}
//                     activeClassName="is-active"
//                     to={`/Contact`}
//                   >
//                     {" "}
//                     Contact{" "}
//                   </NavLink>{" "}
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
