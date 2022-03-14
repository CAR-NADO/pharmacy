import React from "react";
import "./header.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { ImPinterest } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
          <p className="font-style">Login / </p>
          <p className="font-style">Sign up</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
