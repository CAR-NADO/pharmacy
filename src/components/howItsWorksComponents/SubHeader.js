import React from "react";
import "./subHeader.css";
import pharmaLogo from "../../assets/HowItsWork-images/pharma-logo.png";
import { HiSearch } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import Badge from "@material-ui/core/Badge";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { ImCross } from "react-icons/im";
import CartImg1 from '../../assets/cart-img/cart-img1.jpg';

// import { useNavigate } from "react-router-dom";
const SubHeader = () => {
  // const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 367 }}
    role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
  >
    <div className="drawer-parent-div">
      <div className="drawer-container">
        <div className="drawer-container-div1">
          <h3>1 ITEM IN THE SHOPPING BAG</h3>
          <ImCross className="drawer-container-div1-icon" onClick={toggleDrawer(anchor, false)}/>
        </div>
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <div className="drawer-container-div2">
              <img
                src={CartImg1}
                alt="image"
                className="drawer-container-img"
              />
              <div className="drawer-container-div3">
                <div className="drawer-container-div4">
                  <h3>Buy Adderall Online</h3>
                  <ImCross
                    fontSize="x-small"
                    className="drawer-container-div4-icon"
                  />
                </div>
                <h3>1 x $510.00</h3>
              </div>
            </div>
          );
        })}
        <div className="straight-line"></div>
        <div className="drawer-container-div5">
          <h2>SUBTOTAL :</h2>
          <h2 className="">$510.00</h2>
        </div>
        <div className="drawer-container-div6">
          <Link to='/PageOne' >
          <button className="drawer-container-div6-btn1">
            VIEW YOUR CART
          </button>
          </Link>
          <button className="drawer-container-div6-btn2">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  </Box>
);
  return (
    <header>
      <header className="how-its-work-subHeader">
        <div className="how-its-work-upper-part">
          <div className="how-its-work-left-image">
            <img src={pharmaLogo} alt="logo" id="how-its-work-image" />
          </div>
          <div className="how-its-work-sub-header-right-part">
            <div className="how-its-work-select-items-div">
              <select className="select-items">
                {/* <option ><input type="text" /></option> */}
                <option value="volvo">All Categories</option>
                <option value="saab">Anti-Anxiety Tablets</option>
                <option value="opel">Erectile Dysfunction</option>
                <option value="audi">Pain Relief Tablets</option>
              </select>
            </div>
            <div className="how-its-work-input">
              <input
                type="text"
                className="howItsWorkInput"
                placeholder="Search for Products"
              />
            </div>
            <div className="how-its-work-search-icon">
              <HiSearch className="howItsWorkSearchIcon" />
            </div>
          </div>
        </div>
      </header>
      <div className="how-its-work-lower-part-parent-div">
        <div className="how-its-work-lower-part-container-div">
          <div className="how-its-work-lower-part-middle">
          <NavLink className='navLink' to="/">
              <span className="how-its-work-spanHome">HOME</span>
            </NavLink>
            <NavLink className={(navActive)=> navActive.isActive ? 'isActive' : 'navLink' } to={"/howItsWork"}>
            <span>HOW IT WORKS</span>
          </NavLink>
            <NavLink className={(navActive)=> navActive.isActive ? 'isActive' : 'navLink' } to={"/shop"}>
              <span>SHOP</span>
            </NavLink>
            {/* <span onClick={()=> navigate('/HowItsWork')}>HOW IT WORKS</span> */}
            <NavLink className={(navActive)=> navActive.isActive ? 'isActive' : 'navLink' } to={"/faq"}>
              <span>FAQ</span>
            </NavLink>
            <NavLink className={(navActive)=> navActive.isActive ? 'isActive' : 'navLink' } to={"/deliveryInfo"}>
              <span>DELIVERY INFO</span>
            </NavLink>
            <NavLink className={(navActive)=> navActive.isActive ? 'isActive' : 'navLink' } to={"/processingOrder"}>
              <span>PROCESSING ORDER</span>
            </NavLink>
            <NavLink className={(navActive)=> navActive.isActive ? 'isActive' : 'navLink' } to={"/contactUs"}>
              <span>CONTACT US</span>
            </NavLink>
          </div>
          <div>
          {
          ["right"].map((anchor) => (
            <React.Fragment key={anchor}>

            <Badge 
            onClick={toggleDrawer(anchor, true)}
            badgeContent={1} 
            color="primary" 
            className="cart-icon">
            <BsCartFill />
            </Badge>
            <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              ></Drawer>
            </React.Fragment>
          ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
