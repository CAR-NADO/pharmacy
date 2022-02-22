import React from "react";
import Accordian from "../../components/accordian/Accordian";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SubHeader from "../../components/howItsWorksComponents/SubHeader";

const Faq = () => {
  const accordianData = [{
    id: 1,
    title:"WHEN WILL I RECEIVE MY TRACKING NUMBER AND WHAT WILL BE DELIVERY TIME",
    disc:""

  }]
  return (
    <div className="faq-parent-div">
      <div>
        <Header />
        <SubHeader />
      </div>
      <div className="faq-accordion-parent-div">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <Accordian />
          <Accordian />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
