import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../images/pepegasLogo.png";
import avatar from "../../images/ayayaAvatar.jpg";

function NavBar() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`navBar ${show && "navBar__bg"}`}>
      <div className="navBar__contents">
        <img className="navBar__logo" src={logo} alt="logo" />
        <img className="navBar__avatar" src={avatar} alt="avatar" />
      </div>
      {/* <div className="list">
        <ul>
          <li>Manga</li>
          <li>More...</li>
        </ul>
      </div> */}
    </div>
  );
}

export default NavBar;
