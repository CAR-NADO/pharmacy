import React from "react";
import "./subHeader.css";
import pharmaLogo from "../../assets/images/pharma-logo.png";
import { HiSearch } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import Badge from "@material-ui/core/Badge";
// import { Link } from 'react-router-dom';
import { useNavigate, NavLink } from "react-router-dom";

const SubHeader = () => {
  // const navigate = useNavigate();
  return (
    <header className="subHeader">
      <div className="upper-part">
        <div className="left-image">
          <img src={pharmaLogo} alt="logo" id="image" />
        </div>
        <div className="sub-header-right-part">
          <HiSearch className="search-icon" />
          <Badge badgeContent={1} color="primary" className="cart-icon">
            <BsCartFill />
          </Badge>
        </div>
      </div>
      <div className="lower-part">
        <NavLink
          className={(navActive) =>
            navActive.isActive ? "isActive" : "navLink"
          }
          to="/"
        >
          <span className="spanHome">HOME</span>
        </NavLink>
        <NavLink
          className={(navActive) =>
            navActive.isActive ? "isActive" : "navLink"
          }
          to={"/howItsWork"}
        >
          <span>HOW IT WORKS</span>
        </NavLink>
        <NavLink
          className={(navActive) =>
            navActive.isActive ? "isActive" : "navLink"
          }
          to={"/shop"}
        >
          <span>SHOP</span>
        </NavLink>
        {/* <span onClick={()=> navigate('/HowItsWork')}>HOW IT WORKS</span> */}
        <NavLink
          className={(navActive) =>
            navActive.isActive ? "isActive" : "navLink"
          }
          to={"/faq"}
        >
          <span>FAQ</span>
        </NavLink>
        <NavLink
          className={(navActive) =>
            navActive.isActive ? "isActive" : "navLink"
          }
          to={"/deliveryInfo"}
        >
          <span>DELIVERY INFO</span>
        </NavLink>
        <NavLink
          className={(navActive) =>
            navActive.isActive ? "isActive" : "navLink"
          }
          to={"/processingOrder"}
        >
          <span>PROCESSING ORDER</span>
        </NavLink>
        <NavLink
          className={(navActive) =>
            navActive.isActive ? "isActive" : "navLink"
          }
          to={"/contactUs"}
        >
          <span>CONTACT US</span>
        </NavLink>
      </div>
    </header>
  );
};

export default SubHeader;
