import React from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import SubHeader from "../../../components/header/SubHeader";
import "./privacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="privacy-policy-parent-div">
        <div className="privacy-policy-container">
          <h1>Introduction</h1>
          <p>
            We understand your needs better, that’s why we have designed a
            unique and universal platform where you can easily buy the medicines
            you need. We are the specialized service providers in the healthcare
            sector, taking care of your every little to primary medical
            supplies. We are the fastest at delivering your medications right to
            your doorsteps.
          </p>
          <h1>Information Collected</h1>
          <p>
            The information we collect from users is saved on our web servers
            used to process and execute orders easily. This information is also
            collected to notify you about the latest offers and promotions
            available on our website.
          </p>
          <h1>Security of information</h1>
          <p>
            Information of our users is safeguarded with the latest encryption
            techniques used nowadays. We strictly abide by the guidelines
            prescribed to us by the state’s legally governing agencies and
            operate according to such. Likewise, the information provided herein
            is immune to copyright act and should not be sold or refurbished via
            any other source.
          </p>
          <h1>Use of cookies</h1>
          <p>
            The information obtained from our users is processed and stored in
            small files, also known as cookies. These cookies reside on your
            computer locally. TO be able to use our website or its services, you
            are recommended to change your computer’s settings to accept
            cookies; otherwise, some functions of our website may not work
            correctly.
          </p>
          <h1>Links to third parties</h1>
          <p>
            Some pages on our website may display information that redirects you
            to the other website or service. Please be aware that these websites
            are not solely or partially bound with onlinepharmas.com. You are
            recommended to ensure your safety while filling any forms or
            providing your sensitive details through such websites/links.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
