import React, { useState } from "react";
import "./selectMedi.css";
import Header from "../../components/header/Header";
// import SubHeader from "../../components/howItsWorksComponents/SubHeader";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImPinterest } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialGithubCircular } from "react-icons/ti";
import { productsData } from "../../data/productsData";
import { useParams } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addItems, getTotal } from "../../redux/actions/action";
import { addWishList } from "../../redux/actions/actionWishList";
import { toast } from "react-toastify";

const SelectMedi = () => {
  const dispatchWishList = useDispatch();
  const result = useSelector((state) => {
    return state.wishListReducer;
  });
  // console.log("result", result);
  const addToWishList = (product) => {
    let existProductInWishlist = result.wishListItems.filter((item) => {
      return item.id === product[0].id;
    });
    // console.log("product", product);
    if (existProductInWishlist.length === 0) {
      dispatchWishList(addWishList(product));
      toast("Product added in wishlist...", {
        type: "success",
        theme: "dark",
        autoClose: 1000,
      });
    } else {
      toast("Product already exist in wishlist!", {
        type: "error",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };
  // const dispatchWishList = useDispatch();
  // const result = useSelector((state) => {
  //   return state.wishListReducer;
  // });

  // const addToWishList = (product) => {
  //   let existProductInWishlist = result.wishListItems.filter((item) => {
  //     return item.id === product.id;
  //   });
  //   console.log("existProductInWishlist", existProductInWishlist);
  //   if (existProductInWishlist.length === 0) {
  //     dispatchWishList(addWishList(product));
  //     toast("Product added in wishlist...", {
  //       type: "success",
  //       theme: "dark",
  //       autoClose: 1000,
  //     });
  //   } else {
  //     toast("Product already exist in wishlist!", {
  //       type: "error",
  //       theme: "dark",
  //       autoClose: 2000,
  //     });
  //   }
  // };
  // const {cartItems} = useSelector((data)=> data.cartReducer)
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = productsData.filter((element) => element.id == id);
  // console.log("product[0].id", product[0].id);
  // console.log("product", product);
  const [selectPackage, setSelectPackage] = useState("disabled");

  const handleChange = (e) => {
    setSelectPackage(e.target.value);
  };
  // console.log("selectPackage", selectPackage);
  const addToCart = () => {
    let productObj = {
      // id:product[0].id,
      id: JSON.parse(selectPackage).id,
      sku: product[0].sku,
      name: product[0].name,
      category: product[0].category,
      availability: product[0].availability,
      discription: product[0].disc,
      productImage: product[0].image,
      reviews: product[0].reviews,
      price: JSON.parse(selectPackage).price,
      // title: product[0].selectPackageArr.title,
    };
    // console.log("productObj",productObj)
    dispatch(addItems(productObj));
    dispatch(getTotal());
  };
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="select-medi-parent-div">
        <div className="select-medi-container">
          <div className="select-medi-container-left">
            <img
              src={product[0].image}
              alt="image"
              className="select-medi-container-img"
            />
          </div>
          <div className="select-medi-container-right">
            <div className="select-medi-div1">
              <h2>{product[0].name}</h2>
              <div className="select-medi-div2">
                <div className="select-medi-div2-arrow1">
                  <ArrowLeftIcon />
                </div>
                <div className="select-medi-div2-arrow2">
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
            <div className="select-medi-div3">
              <h3>SKU:{product[0].sku}</h3>
              <h3>Availability: {product[0].availability}</h3>
            </div>
            <div className="select-medi-div4">
              <p>
                <StarIcon fontSize="x-small" />
                <StarIcon fontSize="x-small" />
                <StarIcon fontSize="x-small" />
                <StarIcon fontSize="x-small" />
                <StarIcon fontSize="x-small" />
              </p>
              <h4>{product[0].reviews} Reviews</h4>
              <h4>Email to a friend</h4>
            </div>
            <div className="select-medi-div5">
              <h2>{product[0].price}</h2>
              <p>{product[0].disc}</p>
              <h3>select Package</h3>
              <select
                className="select-medi-div6"
                value={selectPackage}
                onChange={(e) => handleChange(e)}
              >
                <option value="disabled">Choose an options</option>
                {product[0].selectPackageArr?.map((data) => {
                  const { id, price, title } = data;
                  // console.log("data", data);
                  return (
                    <option value={`{"price":${price}, "id":${id}}`} key={id}>
                      {title}
                    </option>
                  );
                })}
              </select>
              {selectPackage !== "disabled" && (
                <span
                  onClick={() => setSelectPackage("disabled")}
                  className="closeIcon"
                >
                  <CloseIcon /> clear
                </span>
              )}
            </div>
            {selectPackage !== "disabled" && (
              <h5 className="closeIcon">${JSON.parse(selectPackage).price}</h5>
            )}
            {/* <div className="select-medi-div7">
              <h3>Quantity</h3>
              <div className="select-medi-div8">
                <input type="text" placeholder="1" />
                <div className="select-medi-div9">
                  <ArrowDropUpIcon />
                  <ArrowDropDownIcon />
                </div>
              </div>
            </div> */}
            <div className="select-medi-div10">
              <button
                disabled={selectPackage === "disabled"}
                className={
                  selectPackage === "disabled"
                    ? "disabled"
                    : "select-medi-div10-btn1"
                }
                onClick={() => addToCart()}
              >
                <ShoppingCartIcon />
                ADD TO CART
              </button>
              <button
                onClick={() => addToWishList(product)}
                className="select-medi-div10-btn2"
              >
                <FavoriteIcon />
              </button>
              <button className="select-medi-div10-btn3">
                <RepeatIcon />
              </button>
            </div>

            <div className="select-medi-div11">
              <h3>Categories:</h3>
              <h4>{product[0].category}</h4>
            </div>
            <div className="select-medi-div12">
              <h3>Share:</h3>
              <RiFacebookFill className="select-medi-div12-icon" />
              <AiOutlineTwitter className="select-medi-div12-icon" />
              <ImPinterest className="select-medi-div12-icon" />
              <FaLinkedinIn className="select-medi-div12-icon" />
              <TiSocialGithubCircular className="select-medi-div12-icon" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectMedi;
