import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Dropdown({ closeMobileMenu, closeDropdown }) {

  return (
    <ul className="dropdown-menu">
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => {
                closeDropdown();
                closeMobileMenu();
              }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/* ✅ PROP VALIDATION */
Dropdown.propTypes = {
  closeMobileMenu: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default Dropdown;