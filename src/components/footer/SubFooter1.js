import React from "react";
import "./subFooter1.css";

const SubFooter1 = () => {
  const subFooter1Data = [
    {
      id: 1,
      title: "Placing order",
      disc: "Select the product and package. Add it to your cart and confirm the order by giving required details.",
    },
    {
      id: 2,
      title: "Payment",
      disc: "Paypal money request will be forwared on your given email id. Go through it and pay there for your order.",
    },
    {
      id: 3,
      title: "Tracking and delivery",
      disc: "Tracking number will be shared within 24 hours and the order will be delivered in 3-4 working days.",
    },
  ];
  return (
    <div className="SubFooter1-parent">
      <div className="subFooter1">
        <div className="subFooter1-header">
          <p>Get your order in 3 simple steps</p>
        </div>
        <div className="subFooter1-footer">
          {subFooter1Data.map((data) => {
            const { id, title, disc } = data;
            return (
              <div className="subFooter1-card" key={id}>
                <div className="subFooter1-card-heading">
                  <p>{title}</p>
                </div>
                <div className="subFooter1-card-paragraph">
                  <p>{disc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubFooter1;
