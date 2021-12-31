import React from "react";
import "./LoginScreen.css";
// import LoginScreenBg from "../../assets/loginBg.png";
import LoginScreenLogo from "../../assets/pepegasLogo.png";
import { useState } from "react";
import SignupScreen from "../SignupScreen/SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      {/* <img src={LoginScreenBg} alt="LoginScreenBg" /> */}
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src={LoginScreenLogo}
          alt="loginScreenLogo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited Animes, Manga and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
