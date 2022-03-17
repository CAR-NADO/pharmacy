import React, { useState } from "react";
import "./shop.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SubHeader from "../../components/header/SubHeader";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
import { productsData } from "../../data/productsData";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MdShoppingCart } from "react-icons/md";
import StarIcon from "@mui/icons-material/Star";
import { GoGitCompare } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishList } from "../../redux/actions/actionWishList";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Shop = () => {
  // const handleRadioBtn = () => {
  //   console.log("Clicked Radio Button ==>");
  // };

  const [selectBox, setSelectBox] = useState("Default sorting");
  const [sortedItems, setSortedItems] = useState(productsData);
  const handleChangeSelectBox = (e) => {
    if (e.target.value == "Default sorting") {
      setSortedItems(productsData);
      // setSortedItems([]);
      console.log("Default sorting call...");
    } else if (e.target.value == "Sort by in stock") {
      console.log("Sort by in stock...");
      let response = productsData.filter((items) => {
        return items.availability === "In Stock";
      });
      // console.log("response", response);
      setSortedItems(response);
    } else if (e.target.value == "Sort by price: low to high") {
      console.log("Sort by price: low to high call...");
      let response = productsData.sort((a, b) => {
        return a.minPrice - b.minPrice;
      });
      setSortedItems(response);
    } else if (e.target.value == "Sort by price: high to low") {
      console.log("Sort by price: high to low call...");
      let response = productsData.sort((a, b) => {
        return b.maxPrice - a.maxPrice;
      });
      setSortedItems(response);
    }
    setSelectBox(e.target.value);
  };

  //**************************************************************** */
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    return state.wishListReducer;
  });

  const addToWishList = (product) => {
    let existProductInWishlist = result.wishListItems.filter((item) => {
      return item.id === product.id;
    });

    if (existProductInWishlist.length === 0) {
      dispatch(addWishList(product));
      toast("Product added in wishlist...", {
        type: "success",
        theme: "dark",
        autoClose: 2000,
      });
    } else {
      toast("Product already exist in wishlist!", {
        type: "error",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

  // console.log("sortedItems===>", sortedItems);
  return (
    <div className="shop-parent-div">
      <div>
        <Header />
        <SubHeader />
        <div className="shop-parent-div">
          <div className="shop-container-div">
            <div className="shop-left-head">
              <p>Showing 1–20 of 23 results</p>
              {/* <div className="shop-radio-button">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="In Stock"
                      control={<Radio />}
                      label="In Stock"
                      onClick={(e) => handleRadioBtn(e)}
                    />
                    <FormControlLabel
                      value="Out of Stock"
                      control={<Radio />}
                      label="Out of Stock"
                    />
                  </RadioGroup>
                </FormControl>
              </div> */}
            </div>
            <div className="shop-right-head">
              <div className="shop-show-paragraph">
                <span>Show</span>
                <select
                  data-placeholder="20"
                  className="shop-select-option1"
                  tabIndex="5"
                >
                  <option value="20">20</option>
                  <option value="40">40</option>
                  <option value="60">60</option>
                  <option value="80">80</option>
                </select>
              </div>
              <div>
                <select
                  value={selectBox}
                  onChange={(e) => handleChangeSelectBox(e)}
                  data-placeholder="Default sorting"
                  className="shop-select-option2"
                  tabIndex="5"
                >
                  <option value="Default sorting" className="select-option">
                    Default sorting
                  </option>
                  <option value="Sort by popularity" className="select-option">
                    Sort by popularity
                  </option>
                  <option value="Sort by in stock" className="select-option">
                    Sort by in stock
                  </option>
                  <option
                    value="Sort by out of stock"
                    className="select-option"
                  >
                    Sort by out of stock
                  </option>
                  <option value="Sort by latest" className="select-option">
                    Sort by latest
                  </option>
                  <option
                    value="Sort by price: low to high"
                    className="select-option"
                  >
                    Sort by price: low to high
                  </option>
                  <option
                    value="Sort by price: high to low"
                    className="select-option"
                  >
                    Sort by price: high to low
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="product-heading">
          <div className="headingText">
            <h1>Treatment Options at Online Pharmas</h1>
          </div>
          <div className="parentContainer">
            {sortedItems.map((product) => {
              const { id, image, category, name, price } = product;
              return (
                <div className="medicineList" key={id}>
                  <div className="product-card content">
                    <div>
                      <div className="content-overlay"></div>
                      <img src={image} alt="logo" className="medicine1" />
                    </div>
                    <div className="lowerPart">
                      <div className="lowerPartIcon-left">
                        <SearchIcon className="searchIcon" />
                      </div>
                      <div className="lowerPartIcon-left">
                        <GoGitCompare className="compareIcon" />
                      </div>
                      <div className="lowerPartIcon-left">
                        <FavoriteBorderIcon
                          className="heartIcon"
                          onClick={() => addToWishList(product)}
                        />
                      </div>
                      <Link
                        to={`/SelectMedi/${id}`}
                        className="product-lower-part-link"
                      >
                        <div className="lowerPartIcon-right">
                          <MdShoppingCart
                            className="cartIcon"
                            fontSize="small"
                          />
                          <p className="selectOption">SELECT OPTIONS</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="cardLowerDisc">
                    <p className="para medDisc1">{category}</p>
                    <p className="para medDisc2">{name}</p>
                    <p className="para medDisc3">{price}</p>
                    <p>
                      <StarIcon className="starIcon" />
                      <StarIcon className="starIcon" />
                      <StarIcon className="starIcon" />
                      <StarIcon className="starIcon" />
                      <StarIcon className="starIcon" />
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Shop;

// setSelectBox(e.target.value);
// // console.log("handleSelectBox", e.target.value);
// const result = productsData.filter((filData) => {
//   return (
//     filData.category === e.target.value ||
//     filData.category === e.target.value ||
//     filData.category === e.target.value ||
//     filData.selectPackageArr.filter((value) => {
//       console.log("value", value);
//     })
//   );
// });
// console.log("result", result);
