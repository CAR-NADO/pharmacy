import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import SubHeader from "../../components/header/SubHeader";
import ProductList from "../../components/productList/ProductList";
import MediDiscription from "../../components/MediDiscription";
import Pagination from "../../components/slider/Pagination";
import SubFooter2 from "../../components/footer/SubFooter2";
import SubFooter1 from "../../components/footer/SubFooter1";
import Footer from "../../components/footer/Footer";
import PharmaLogo from "../../assets/images/pharma-logo-1.jpg";
import PharmaLogo2 from "../../assets/images/pharma-logo-2.jpg";
import PharmaLogo3 from "../../assets/images/pharma-logo-3.png";
import PharmaLogo4 from "../../assets/images/pharma-logo-4.jpg";
import PharmaLogo5 from "../../assets/images/pharma-logo-5.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NearMeIcon from "@mui/icons-material/NearMe";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import RemoveIcon from "@mui/icons-material/Remove";

const Home = () => {
  const cardData = [
    {
      id: 1,
      Icon: LocalShippingIcon,
      title: "FAST SHIPPING",
      disc: "US to US 3 Days Delivery",
    },
    {
      id: 2,
      Icon: ShoppingCartIcon,
      title: "DISCRETE",
      disc: "PLAIN PACKAGING",
    },
    {
      id: 3,
      Icon: NearMeIcon,
      title: "Highest Quality",
      disc: "GENUINE PRODUCTS",
    },
    {
      id: 4,
      Icon: CardMembershipIcon,
      title: "ENCRYPTED SECURE",
      disc: "CHECKOUT SYSTEM",
    },
  ];
  // const cartTotal = {
  //   total: 100,
  //   quantity: 10,
  // };
  // cartTotal.product = "laptop";
  // console.log("cartTotal", cartTotal);

  // const arr = [
  //   {
  //     id: 1,
  //     name: "apple",
  //   },
  //   {
  //     id: 2,
  //     name: "ball",
  //   },
  //   {
  //     id: 3,
  //     name: "cat",
  //   },
  //   {
  //     id: 4,
  //     name: "dog",
  //   },
  // ];

  // let a = 10;

  // const filters = arr.filter((item) => {
  //   return item;
  // });

  // console.log("filters", filters);

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="shop-imageContainer">
        <img src={PharmaLogo} alt="logo" width="100%" className="shop-image" />
      </div>
      <div className="belowShopImage">
        {cardData.map((data) => {
          const { id, Icon, title, disc } = data;
          return (
            <div className="home-page-card" key={id}>
              <div className="cardLeftIcon">
                <Icon fontSize="large" className="LocalShippingIcon" />
              </div>
              <div className="cardMiddleIcon">
                <RemoveIcon fontSize="large" className="removeIcon" />
              </div>
              <div>
                <div className="cardRight">
                  <h4 className="fastShipping">{title}</h4>
                  <h5 className="US-to-US">{disc}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pharma-logo-2">
        <img src={PharmaLogo2} alt="logo" className="pharmaLogo2" />
      </div>
      <div className="usBestOnlineContainer">
        <div className="usBestOnline">
          <h1> USA Best Online Pharmacy:</h1>
          <h1>Fast Delivery Available in US</h1>
        </div>
        <div className="pharma-logo-3">
          <img src={PharmaLogo3} alt="logo" className="pharmaLogo3" />
        </div>
      </div>
      <div className="paragraph">
        <div className="paragraph-1">
          <p>
            Thank you for visiting OnlinePharmas.com – the US’s One Stop Shop
            for Top Quality <span>ED Medication,</span>
            <span> Anxiety Medication</span> and <span>Painkillers.</span>
          </p>
        </div>
        <div className="paragraph-2">
          <p>
            If you are visiting for the first time and you want to buy cheap
            sleeping tablets online in the USA you have come to the right place!
            We accept payments on all major platforms
            <span> PayPal, (Western Union/Bitcoin ) and Bank Transfer</span> –
            we offer the best deals on bulk orders.
          </p>
        </div>
        <div className="paragraph-3">
          <p>
            After payment is received goods are sent immediately in plain padded
            envelopes, and delivery to locations in the USA takes just 3 – 4
            working days!
          </p>
        </div>
      </div>
      <div className="pharma-logo-4">
        <img src={PharmaLogo4} alt="logo" className="pharmaLogo4" />
      </div>
      <div className="pharma-logo-5">
        <img src={PharmaLogo5} alt="logo" className="pharmaLogo5" />
      </div>
      <div>
        <ProductList />
        <MediDiscription />
        <Pagination />
        <SubFooter2 />
        <SubFooter1 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
