import { copyrightSign } from "../assets/icons";
import { footerLinks, socials } from "../constants";
import { Link } from "react-router-dom";
import Logoo from "../assets/rcmil.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white lg:p-20 p-10 max-container">

      {/* ================= TOP SECTION ================= */}
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">

        {/* LEFT BLOCK */}
        <div className="flex flex-col items-start">
          <Link to="/">
            <img
              src={Logoo}
              alt="logo"
              width={150}
              height={46}
              className="m-0 w-40 object-contain"
            />
          </Link>

          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Your generosity will allow us to help more families in need...
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </div>
        </div>

        {/* ================= RIGHT LINKS (MODIFIED: pushed slightly right) ================= */}
        <div className="flex flex-1 justify-end lg:gap-36 gap-20 flex-wrap pl-6 lg:pl-12"> {/* MODIFIED: added justify-end + padding-left */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                    key={link.name}
                  >
                    {link.link.startsWith("http") ||
                      link.link.startsWith("mailto:") ||
                      link.link.startsWith("tel:") ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.link}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="flex justify-end items-center gap-3 mt-24 text-white-400 max-sm:flex-col max-sm:items-center max-sm:gap-1">
        {/* MODIFIED: justify-end + reduced gap */}

        <div className="flex items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright RCMI. 2026 All rights reserved.</p>
        </div>

        {/* MODIFIED: tighter spacing + inline alignment */}
        <p className="font-montserrat cursor-pointer whitespace-nowrap">
          Terms & Conditions
        </p>

      </div>
    </footer>
  );
};

export default Footer;