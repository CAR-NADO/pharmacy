import React from "react";
import "./header.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { ImPinterest } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Header = () => {
  const wishListHeaderSelector = useSelector((state) => {
    return state.wishListReducer;
  });
  // console.log("wishListHeaderSelector", wishListHeaderSelector);

  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/wishList");
  // };
  return (
    <header className="header">
      <div className="left-header">
        <p className="p-font-style">Express US to US 3 Days Delivery</p>
      </div>
      <div className="middle-header">
        <div className="icons">
          <p className="p-font-style">Follow: </p>
          <RiFacebookFill className="icon" />
          <FaInstagramSquare className="icon" />
          <ImPinterest className="icon" />
        </div>
        <div className="wishlist">
          <p className="font-style" onClick={() => navigate(`/wishList`)}>
            Wishlist ({wishListHeaderSelector.wishListItems.length})
          </p>
        </div>
      </div>
      <div className="right-header-parent">
        <div className="right-header">
          {/* <p className="font-style">Login / </p>
          <p className="font-style">Sign up</p> */}
          <button
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <span className="font-style">Login </span>
            <span className="font-style">/</span>
            <span className="font-style"> Sign up</span>
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl header-model-parent-div">
          <div className="modal-content header-model-container">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="login-signUp-page-container">
              <div className="login-side-container">
                <div className="login-page-left-side">
                  <div className="login-side-heading">
                    <h1>Login</h1>
                  </div>
                  <div className="login-side-email">
                    <h2>
                      Username or email address
                      <span className="asterisk-span">*</span>
                    </h2>
                    <input type="text" className="login-input-area" />
                  </div>
                  <div className="login-side-password">
                    <h2>
                      Password <span className="asterisk-span">*</span>
                    </h2>
                    <input type="password" className="login-input-area" />
                    {/* <RemoveRedEyeIcon /> */}
                  </div>
                  <h3>LOST YOUR PASSWORD?</h3>
                  <div className="login-button-div">
                    <button className="login-button">LOGIN</button>
                    <div className="remember-me-para">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckIndeterminate"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="login-page-right-side">
                  <div className="register-side-heading">
                    <h1>REGISTER</h1>
                  </div>
                  <div className="register-side-email">
                    <h2>
                      Email address <span className="asterisk-span">*</span>
                    </h2>
                    <input type="text" className="login-input-area" />
                  </div>
                  <p>A password will be sent to your email address.</p>
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                    <span className="privacy-policy-span"> privacy policy</span>
                    . All the information provided will be kept confidential.
                  </p>
                  <div className="register-side-button">
                    <button className="register-button">REGISTER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
