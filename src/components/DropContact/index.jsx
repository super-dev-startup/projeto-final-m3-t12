import { useState, useRef, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { DropDownContact } from "./style";

import contact from "../../assets/contact.png";

const DropContact = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <DropDownContact>
      <div className="App">
        <div className="menu-container" ref={menuRef}>
          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <ul className="dropDownIcons">
              <DropdownItem
                href="https://www.facebook.com/"
                icon={<FaFacebookF />}
              />
              <DropdownItem
                href="https://www.instagram.com/"
                icon={<FaInstagram />}
              />
              <DropdownItem href="https://twitter.com/" icon={<FaTwitter />} />
            </ul>
          </div>

          <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={contact} />
          </div>
        </div>
      </div>
    </DropDownContact>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <a href={props.href} target="_blank" rel="noreferrer">{props.icon}</a>
    </li>
  );
}

export default DropContact;
