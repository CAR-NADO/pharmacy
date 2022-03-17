import React from "react";
import "./disclaimer.css";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import SubHeader from "../../../components/header/SubHeader";

const Disclaimer = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="disclaimer-parents-div">
        <div className="disclaimer-container">
          <p>
            Online Pharmas strongly pays attention to the customer’s
            beneficiaries. The price of the medication is likely to change at
            the time of its purchase. The cost of the pill at the time of
            purchase from online pharmacy will be considered to be the final
            cost. Your ordered price might reflect differently if you make a
            change to the quantity, dosage, or varied form. Online Pharmas is
            not tied up with any other dispensaries but is an{" "}
            <span>independent online pharmacy.</span> We are strictly against
            the resale of the products and all the medicines sold under Online
            Pharmas are for personal use. Online Pharmas will not be responsible
            for any sort of legal implications arisen from the buyers’ end nor
            will we take any action to rectify the same. The information is only
            for information purposes which cannot be taken as medical advice
            under any circumstances. We strongly recommend you to seek advice
            from the healthcare professional prior to buying any medicine online
            from this website. We are not responsible for the change of health
            of any individuals taking the drug based on the information of our
            website. You can further contact us at the address. In case of any
            emergency, you can call our emergency number or visit the nearest
            healthcare center for immediate help.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;
