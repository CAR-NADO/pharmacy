import React from "react";
import "./howItsWork.css";
import Header from "../../components/header/Header";
import SubHeader from "../../components/howItsWorksComponents/SubHeader";
import Pagination from "../../components/slider/Pagination";
import Footer from "../../components/footer/Footer";
import HowItWorksImg2 from "../../assets/HowItsWork-images/how-it-works-img2.jpg";
import HowItWorksImg3 from "../../assets/HowItsWork-images/how-it-works-img3.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HowItsWork = () => {
  const cardData = [
    {
      id: 1,
      Icon: ShoppingCartIcon,
      title: "Shop Online",
      disc: "Choose a nearby store to see what's available.",
    },
    {
      id: 2,
      Icon: LocalShippingIcon,
      title: "Free Shipping",
      disc: "Don’t worry! The orders always arrive on time.",
    },
    {
      id: 3,
      Icon: LoopIcon,
      title: "Free Returns",
      disc: "All returns are subject to verification of original sale.",
    },
    {
      id: 4,
      Icon: FavoriteIcon,
      title: "Gift Cards",
      disc: "The perfect gift for everyone, it is a gift card.",
    },
  ];
  return (
    <div className="how-its-work-parent-div">
      <div>
        <Header />
        <SubHeader />
        <div className="how-it-works-container-div">
          <div className="how-it-works-content-div">
            <h2 className="how-it-works-title1">
              Comparison between US medication supply & Online Pharmas supply
            </h2>
            <h2 className="how-it-works-title1">US Medication Supply Chain</h2>
            <p className="how-it-works-underline-paragraph1-class">
              This is the traditional method for medication to pass through
              various stages untill it reaches customer with highly increased
              prices.
            </p>
            <img
              className="how-it-works-img2-class"
              src={HowItWorksImg2}
              alt="image"
            />
            <h2 className="how-it-works-title1">Online Pharmas Supply Chain</h2>
            <p className="how-it-works-underline-paragraph1-class">
              Through Online Pharmas customer can avail medication at much
              affordable prices due to less number of intermediary without any
              prescription or any other formalities.
            </p>
            <img
              className="how-it-works-img3-class"
              src={HowItWorksImg3}
              alt="image"
            />
            <p className="how-it-works-underline-paragraph2-class">
              Find the right care right when you need it. Start by choosing your
              reason for visit, and we’ll help you find the right care.
            </p>
            <ul>
              <li>Shop directly and save!</li>
              <li>Free or discounted shipping</li>
              <li>24 hour/7 day customer service</li>
              <li>Assurance of freshness with expiration dates</li>
              <li>A greener way to shop</li>
            </ul>
          </div>
        </div>
        <div className="how-it-works-features-parent-div">
          <div className="how-it-works-features-container-div">
            {
              cardData.map((data)=> {
                const {id, Icon, title, disc} = data ;
                return (
            <div className="how-it-works-features-card" key={id}>
              <div className="how-it-works-featurs-card-icon">
                <Icon
                  fontSize="large"
                  className="how-it-works-shopping-cart-icon"
                />
              </div>
              <div className="how-it-works-featurs-card-title">
                <h2>{title}</h2>
              </div>
              <div className="how-it-works-featurs-card-disc">
                <p>{disc}</p>
              </div>
            </div>
             )
            })
          }
          </div>
        </div>
        <div className="how-it-works-below-feature-div-parent">
          <div>
            <h1>The most trusted Online Medicine Store in USA Serving millions of reliable customers</h1>
            <h2>Who we are – USA’s most trusted online medicine pharmacy for all</h2>
            <p>Online Pharmas is one of the dependable pharmacies which are serving online to its customers from a decade and we are delivering quality medicines at your doorstep. At Online Pharmas, we take care of your health, delivering the medicines on time so we take care of every loved one. You can place your order for any medicine from the website we deliver at every corner of the nation – just a few clicks and you are done.</p>
            <h2>What we do – fast delivery at your doorstep in the minimum timeframe</h2>
            <p>At Online Pharmas, we deliver a wide range of prescription medicines and you’ll find a wide range of products available on our website. Now every internet user has the access to the latest medicines and delivers them at your decided place. Alongside, we offer generic medicines options, online buyers can make the significant savings when they place an order online and several other benefits.</p>
            <h2>Easily Accessible</h2>
            <p>A wide list of reasons like heavy traffic, parking issue, monsoon, and shop closed, forgetfulness… and much more are the reason when you are not able to get your medicines on time. However, regular medicine turns important and in case, you miss it you come across chronic medical conditions. Just login to onlinepharmas.com, place your order online and get your medicines delivered at your doorstep, a hassle free solution for all.</p>
            <p>You get complete medicine information at Online Pharmas and when you turn into a customer, you get on-time reminders and you won’t come across forgetfulness.</p>
            <h2>One-stop point</h2>
            <p>At Online Pharmas, you don’t just get a wide range of medicines; a wide range of OTC drugs are also available that may include</p>
            <ul>
              <li>Wellness products</li>
              <li>Vitamins</li>
              <li>Fitness supplements</li>
              <li>Various herbal products</li>
              <li>Pain relievers</li>
            </ul>
            <h2>Trust</h2>
            <p>Online Pharmas is serving to its customers from a decade in the market and has become a significant part of the Pharmaceutical industry. We are dedicated to offer you the completely harmless, unfailing, reasonable medicines that are a value to our customer’s loyalty. You get a wonderful online shopping experience, with ease of delivery and completely secure online transactions.</p>
          </div>
        </div>
        <Pagination />
        <Footer />
      </div>
    </div>
  );
};

export default HowItsWork;
