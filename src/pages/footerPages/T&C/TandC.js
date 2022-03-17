import React from "react";
import "./tandc.css";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import SubHeader from "../../../components/header/SubHeader";

const TandC = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="t-and-c-parents-div">
        <div className="t-and-c-container">
          <h1>Introduction:</h1>
          <p>
            <span>Online Pharmas</span> is the best medical service provider to
            take care of you as well as your family’s medical needs. We are
            available 24/7 to serve you and bring you a suitable drug according
            to the prescription given by your doctor. Our motto is to bring
            everything to your doorsteps.
          </p>
          <h1>Safety of User Account Details:</h1>
          <p>
            We never share our user’s valuable information to any third parties,
            hence maintaining our name as the most trusted brand in the Online
            pharmacy business. Our users are our valuable assets. Thus, we take
            the utmost care to prevent any harm to their private details like
            email, username, contact, or address, or payment details.
          </p>
          <h1>Eligibility to Use:</h1>
          <p>
            To be eligible to use our website services, you must be 18 years or
            older. You must not use unfair means to forge your identity or
            falsify your contact details. In case of any discrepancies in the
            details at any point, we reserve the right to take necessary
            measures.
          </p>
          <h1>Registration:</h1>
          <p>
            Users are requested to provide their accurate details so as to
            receive orders timely and to the correct delivery address.
            Therefore, you are required to give the correct Name, Address,
            contact details, email ID, and personal information to be able to
            place orders without any problem. All these details get stored in
            our website’s database.
          </p>
          <h1>Sale of Drugs without Prescription:</h1>
          <p>
            We do not sell any drugs without prescription except a few that are
            available over the counter to treat common diseases like cold,
            fever, headache, or syrups. Please make sure to have a written
            prescription before you proceed to place an order from our site.
          </p>
          <h1>Disclaimer: limitation of liability</h1>
          <p>
            Onlinepharmas.com provides all information, Products, and services
            included on the website. We specifically disclaim warranties of any
            kind to the extent allowed by the applicable law. Onlinepharmas.com
            assumes no responsibility for any damages or viruses that may infect
            your computer equipment or other property on account of your access
            to, use, or browsing.
          </p>
          <h1>Contact Us:</h1>
          <p>
            For any support related to accessing/configuring/logging into your
            account, or canceling/placing/returning your order, you are
            recommended to get in touch with our support team at the given email
            or customer care number. You can reach us via email or phone as per
            the given working hours.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TandC;
