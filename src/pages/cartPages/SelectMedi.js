import React from "react";
import "./selectMedi.css";
import Header from "../../components/header/Header";
// import SubHeader from "../../components/howItsWorksComponents/SubHeader";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";
import CartImg1 from "../../assets/cart-img/cart-img1.jpg";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StarIcon from "@mui/icons-material/Star";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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

const SelectMedi = () => {
  const { id } = useParams();
  const product = productsData.filter((element) => element.id == id);
  console.log("product", product[0].id);
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
                  {" "}
                  <ArrowLeftIcon />{" "}
                </div>
                <div className="select-medi-div2-arrow2">
                  {" "}
                  <ArrowRightIcon />{" "}
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
              <select className="select-medi-div6">
                <option value="Choose an options">Choose an options</option>
                <option value="180 pills express">180 pills express</option>
                <option value="360 pills express">360 pills express</option>
              </select>
            </div>
            <div className="select-medi-div7">
              <h3>Quantity</h3>
              <div className="select-medi-div8">
                <input type="text" placeholder="1" />
                <div className="select-medi-div9">
                  <ArrowDropUpIcon />
                  <ArrowDropDownIcon />
                </div>
              </div>
            </div>
            <div className="select-medi-div10">
              <button className="select-medi-div10-btn1">
                {" "}
                <ShoppingCartIcon />
                ADD TO CART{" "}
              </button>
              <button className="select-medi-div10-btn2">
                {" "}
                <FavoriteIcon />{" "}
              </button>
              <button className="select-medi-div10-btn3">
                {" "}
                <RepeatIcon />{" "}
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
