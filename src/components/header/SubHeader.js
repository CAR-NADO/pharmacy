import React from "react";
import "./subHeader.css";
import pharmaLogo from "../../assets/images/pharma-logo.png";
import { ImSearch } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import Badge from "@material-ui/core/Badge";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { removeItems } from "../../redux/actions/action";

const SubHeader = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  // console.log("cartItems", cartItems);
  
  const [state, setState] = React.useState({
    right: false,
  });
  const handleRemoveItem = (id) => {
    // console.log("handle remove item",id)
    dispatch(removeItems(id));
  };

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
            <ImCross
              className="drawer-container-div1-icon"
              onClick={toggleDrawer(anchor, false)}
            />
          </div>
          {cartItems.map((cartItem) => {
            const { productImage, name, price, id } = cartItem.data;
            return (
              <div className="drawer-container-div2" key={id}>
                <img
                  src={productImage}
                  alt="image"
                  className="drawer-container-img"
                />
                <div className="drawer-container-div3">
                  <div className="drawer-container-div4">
                    <h3>{name}</h3>
                    <ImCross
                      fontSize="x-small"
                      className="drawer-container-div4-icon"
                      onClick={() => handleRemoveItem(id)}
                    />
                  </div>
                  <h3>
                    {cartItem.cartQuantity} x ${price}
                  </h3>
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
            <Link to="/PageOne">
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
  // const navigate = useNavigate();
  return (
    <header className="subHeader">
      <div className="upper-part">
        <div className="left-image">
          <img src={pharmaLogo} alt="logo" id="image" />
        </div>
        <div className="sub-header-right-part">
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
              <ImSearch
                className="search-icon"
                // onClick={toggleDrawer(anchor, true)}
              />
              <Badge
                onClick={toggleDrawer(anchor, true)}
                badgeContent={1}
                color="primary"
                className="cart-icon"
              >
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
      <div className="lower-part">
        <NavLink
          className={(navActive) =>
            // {console.log("navActive", navActive)}
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
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}></Button> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </header>
  );
};

export default SubHeader;
