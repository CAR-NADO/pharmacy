import React from "react";
import "./productList.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MdShoppingCart } from "react-icons/md";
import StarIcon from "@mui/icons-material/Star";
import { GoGitCompare } from "react-icons/go";
import { Link } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { useDispatch } from "react-redux";
import { addWishList } from "../../redux/actions/actionWishList";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductList = () => {
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
  return (
    <div>
      <div className="product-heading">
        <div className="headingText">
          <h1>Treatment Options at Online Pharmas</h1>
        </div>
        <div className="parentContainer flex-column-xs">
          {productsData.map((product) => {
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
                        <MdShoppingCart className="cartIcon" fontSize="small" />
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
    </div>
  );
};

export default ProductList;

// const { id } = useParams();
// const product = productsData.filter((elem) => {
//   return elem;
// });
