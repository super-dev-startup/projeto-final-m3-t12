/* eslint-disable import/order */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import { useState, useRef, useEffect } from "react";
import { DropDownContact } from "./style";

import { FaFacebookF, FaInstagram, FaTwitter  } from 'react-icons/fa'


import contact from '../../assets/contact.png'
// import face from '../../assets/face.png'
// import twitter from '../../assets/twitter.png'
// import insta from '../../assets/insta.png'

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
        
            <ul>
              <DropdownItem icon={<FaFacebookF/>} />
              <DropdownItem icon={<FaInstagram/>} />
              <DropdownItem icon={<FaTwitter/>} />
            </ul>
                  </div>
                  
                  <div
            className="menu-trigger"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img src={contact}></img>
          </div>
        </div>
      </div>
    </DropDownContact>
  );
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
          <a href="#"> 
      {props.icon}
      </a>
    </li>
  );
}

export default DropContact;
