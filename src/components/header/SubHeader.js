import React, { useState } from "react";
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
import { removeItems, getTotal } from "../../redux/actions/action";
import { productsData } from "../../data/productsData";
import CloseIcon from "@mui/icons-material/Close";

const SubHeader = () => {
  const [inputFilter, setInputFilter] = useState([]);
  const handleSearchInput = (event) => {
    const searchWord = event.target.value;
    const newFilterData = productsData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setInputFilter(newFilterData);
    if (searchWord === "") {
      setInputFilter([]);
    } else {
      setInputFilter(newFilterData);
    }
  };

  const dispatch = useDispatch();
  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cartReducer
  );
  // console.log("cartItems", cartItems);

  const [state, setState] = React.useState({
    right: false,
  });
  const handleRemoveItem = (id) => {
    // console.log("handle remove item",id)
    dispatch(removeItems(id));
    dispatch(getTotal());
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
            {cartTotalQuantity === 0 && <h6>Your shopping cart is empty</h6>}
            {cartTotalQuantity === 1 && (
              <h6> {cartTotalQuantity} ITEM IN THE SHOPPING BAG</h6>
            )}
            {cartTotalQuantity > 1 && (
              <h6> {cartTotalQuantity} ITEMS IN THE SHOPPING BAG</h6>
            )}
            <ImCross
              className="drawer-container-div1-icon"
              onClick={toggleDrawer(anchor, false)}
            />
          </div>
          {cartItems.map((cartItem) => {
            // console.log("cartItems", cartItems);
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
          {cartTotalQuantity !== 0 && (
            <>
              <div className="straight-line"></div>
              <div className="drawer-container-div5">
                <h2>SUBTOTAL :</h2>
                <h2 className="">${cartTotalAmount}.00</h2>
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
            </>
          )}
        </div>
      </div>
    </Box>
  );
  return (
    <>
      <header className="subHeader">
        <div className="upper-part flex-column-xs">
          <div className="left-image">
            <img src={pharmaLogo} alt="logo" id="image" />
          </div>
          <div className="sub-header-right-part">
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <div>
                  <div className="subHeader-input-field">
                    <div>
                      <input
                        type="text"
                        // value={inputFilter}
                        placeholder="Search Product..."
                        className="subHeaderInputField"
                        onChange={(e) => {
                          handleSearchInput(e);
                        }}
                      />
                      {inputFilter.length === 0 ? (
                        <ImSearch className="input-search-icon" />
                      ) : (
                        <CloseIcon
                          className="input-clear-icon"
                          onClick={() => setInputFilter([])}
                        />
                      )}
                    </div>
                  </div>
                  <div className="search-input-list">
                    {inputFilter.slice(0, 3).map((val) => {
                      const { id, name, price, image } = val;
                      // console.log("val", val);
                      return (
                        <Link
                          to={`/SelectMedi/${id}`}
                          className="search-nav-link"
                        >
                          <div className="search-list-parent-div" key={id}>
                            <div className="search-list-left">
                              <img
                                src={image}
                                alt="image"
                                className="search-list-left-img"
                              />
                            </div>
                            <div className="search-list-right-part">
                              <h1>{name}</h1>
                              <h2>{price}</h2>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <Badge
                  onClick={toggleDrawer(anchor, true)}
                  badgeContent={cartTotalQuantity}
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
      <div className="lower-part">
        <NavLink
          className={(navActive) =>
            // console.log("navActive", navActive)
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
    </>
  );
};

export default SubHeader;
