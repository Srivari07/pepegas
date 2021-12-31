import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/pepegasLogo.png";
import avatar from "../../assets/ayayaAvatar.jpg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
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
        <img
          className="navBar__logo"
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <img
          className="navBar__avatar"
          src={avatar}
          alt="avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
      {/* <div className="list">
        <span>Movies</span>
        <span>Manga</span>
        <span>MyList</span>
      </div> */}
    </div>
  );
}

export default NavBar;
