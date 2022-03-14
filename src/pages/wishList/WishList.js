import React from "react";
import "./wishList.css";
import Header from "../../components/header/Header";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/footer/Footer";
// import MedicineImg from "../../assets/medicines/medicine1.png";
import { MdCheckCircleOutline } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { removeWishList } from "../../redux/actions/actionWishList";
import { toast } from "react-toastify";
import EmptyWishListImg from "../../assets/wishList-img/empty-wishlist-img.png";

const WishList = () => {
  const dispatch = useDispatch();
  const handleRemoveWishList = (id) => {
    dispatch(removeWishList(id));
    toast("One item remove from wish List", {
      position: "top-center",
      type: "error",
      theme: "dark",
      autoClose: 1000,
    });
  };
  const wishListSelector = useSelector((state) => {
    return state.wishListReducer;
  });
  return (
    <div>
      <Header />
      <SubHeader />
      {wishListSelector.wishListItems.length === 0 ? (
        <div className="wish-list-img-parents-div">
          <img
            src={EmptyWishListImg}
            alt="image"
            className="EmptyWishListImg"
          />
        </div>
      ) : (
        <div className="wish-list-parent-div">
          <div className="wish-list-container-div">
            <div className="wish-list-heading-div">
              <div className="wish-list-name-div">
                <h4>PRODUCT NAME</h4>
              </div>
              <div className="wish-list-price-div">
                <h4>UNIT PRICE</h4>
              </div>
              <div className="wish-list-status-div">
                <h4>STOCK STATUS</h4>
              </div>
            </div>
            <div className="wish-list-straight-line"></div>
            {wishListSelector.wishListItems.map((items) => {
              const { id, image, name, price, availability } = items;
              // console.log("items", items);
              return (
                <div className="wish-list-medicine-list" key={id}>
                  <div className="wish-list-img-name">
                    <img src={image} alt="image" className="wish-list-img" />
                    <p>{name}</p>
                  </div>
                  <div className="wish-list-price-range">
                    <h4>{price}</h4>
                  </div>
                  <div className="wish-list-stock">
                    <MdCheckCircleOutline className="wish-list-stock" />
                    <h4>{availability}</h4>
                  </div>
                  <div className="wish-list-button">
                    <button className="wishList-button">SELECT OPTIONS</button>
                    <FiDelete
                      onClick={() => handleRemoveWishList(id)}
                      className="wish-list-delete-btn"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WishList;
