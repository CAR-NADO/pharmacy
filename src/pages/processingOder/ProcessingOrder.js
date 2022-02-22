import React from "react";
import './processingOrder.css'
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SubHeader from "../../components/howItsWorksComponents/SubHeader";
import ProcessingOrderImg1 from '../../assets/processing-order-img1/processing-order-img1.png'

const ProcessingOrder = () => {
  return (
    <div className="processing-order-parent-div">
      <Header />
      <SubHeader />
      <div className="processing-order-container-div">
        <div className="processing-order-content-div">
          <h2>
            GUIDE TO PROCESSING YOUR ORDER: PROCESSING, READY, AND DELIVERED?
          </h2>
          <p>Customer satisfaction is of utmost importance to us and we strive to keep improvising in all areas utilizing optimally our efforts to attain desired results. To simplify the process of ordering at <span className="processing-order-span">Online Pharmas</span>, we have comprehensively listed the complete timeline to help our customers process their <span className="processing-order-span">orders without any hassle</span>. We feel privileged to have you as our customer and keeping your convenience in mind, we have narrowed down the whole procedure in few simple steps. Each step will guide you about the process, making it easier for you to navigate through it. Here, you will come to know as to why you are paying for it and how it further works.</p>
          <img src={ProcessingOrderImg1} alt="" className="processing-order-img1" />
          <ol>
            <h2>Day 1</h2>
            <li>We receive your order with your personal details and products you opt for. After verifying the details and descriptions of the product, our customer support team gets in touch with you, letting you know about your successful submission of provided details followed by processing the transactions. From the <span>3 available options</span> that you have chosen for payment, payment email will be forwarded to you with complete payment details on your registered email id .</li>
            <li>Once the transaction gets approved, we hand over your order to the shipping department. They would check the availability of the stock and its quantity which is always in abundance with us.</li>
            <li>Your product would then go through multiple quality checks to ensure it is flawless and get wrapped up eventually in a discreet package for shipment.</li>
            <h2>Day1- Day2</h2>
            <li>Your product here is ready to be shipped and as soon as it gets shipped, the tracking number of the product is generated to keep you updated about the status of the order via email or call.</li>
            <li>Once the tracking number gets active, you are able to track your order and check its details simultaneously on the website.</li>
            <p>The Package will move from our warehouse to your nearest area distribution center.</p>
            <h2>Day 3-Days 4</h2>
            <li>The package will move from the distribution center to your nearest postal office and will be delivered on the same date and the finally the product will be delivered on your door step.</li>
            <p>The convenience for customers is our top priority and to ensure the promise, we take buffer time of around 3 days to avoid complications. 99% of our orders are delivered on time without any damage and within a discussed timeframe. We guarantee to hand over the product undamaged but often during transit, mis happening might occur, so, we take care of this aspect using buffer time aptly.</p>
            <p><span>Important: If you want to know the status of your order instantly with its exact location, you can call at our toll-free number provided on the website. We would call the shipping carrier, get your order details, and will update you via phone and email.</span></p>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProcessingOrder;
