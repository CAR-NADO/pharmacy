import React from "react";
import "./faq.css";
import Accordian from "../../components/accordian/Accordian";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
// import SubHeader from "../../components/howItsWorksComponents/SubHeader";
import SubHeader from "../../components/header/SubHeader";

const Faq = () => {
  const accordianData = [
    {
      id: 1,
      title:
        "WHEN WILL I RECEIVE MY TRACKING NUMBER AND WHAT WILL BE DELIVERY TIME",
      disc: "",
    },
  ];
  return (
    <div className="faq-parent-div">
      <Header />
      <SubHeader />
      <div className="faq-accordion-parent-div">
        <div className="accordion-item">
          <h2 className="accordion-header static-accordian-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h4>
                WHY PAYPAL PAYMENT METHOD IS PREFERRED OVER OTHER PAYMENT MODE?
              </h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <p>
                We ceaselessly strive to provide convenience to our esteemed
                customers with improved services. These high-quality medications
                are available in the market only when you have the prescription
                with you. You cannot directly purchase the medication from any
                pharmacy, hospital, or from the doctor directly. We help our
                customers navigate through the process of payment easily,
                keeping precautions at the forefront.
              </p>
              <p>
                <span>Customers’ satisfaction</span> is what constantly work for
                and contribute to making their experience better with our
                bespoke services. To give them hassle-free online transactions,
                <span>PayPal is an apt method</span> wherein the submission of
                sale details is not required. All you can do is link a card to
                your account to make it your preferred payment option. Using
                bank transfer or other modes of payment require a sale detail
                which is not the case in PayPal method and doesn’t affect your
                recurring payments, subscriptions, or billing agreements.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <h4>IS IT SAFE TO BUY MEDICINE ONLINE?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <p>
                Our medicines are made of high-quality ingredients and you can
                order them from our online pharmacy anytime 24*7. All our
                medications meet strict quality standards at the time of
                production.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <h4>
                WHEN WILL I RECEIVE MY TRACKING NUMBER AND WILL BE DELIVERY
                TIME?
              </h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <p>
                Once the payment is done the order will be processed immidiately
                and you will be updated. Tracking number will be shared within
                24-48 hours.
              </p>
              <p>
                Delivery will be done in 4-5 working days through USPS. Our
                sales executive will be in regular touch untill it reaches you.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              <h4>DO ALL YOUR PILLS ARE APPROVED AND SAFE?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <p>
                The medicines that onlinepharmas provides are safe and easy to
                use. They are meticulously tested during clinical trials to
                ensure good results. They are approved only after successful
                check-up by drugs administration department during development
                process.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              <h4>HOW CAN I PURCHASE A MEDICATION?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body">
              <p>
                You can place your order on the website www.onlinepharmas.com by
                selecting the required medication and the quantity. You can also
                place your order via email or chat prsent on our website.
              </p>
              <p>
                Once the order is placed confirmation email will be forwarded on
                your email id.
              </p>
              <p>
                Soon a Paypal payment link will be shared on your email id you
                can pay through the link.
              </p>
              <p>
                As soon as we recieve the payment your order will be processed
                and the tracking number will be shared in 48-36 hours.
              </p>
              <p>
                Our sales executive will be in regular touch with you untill the
                package reaches you address.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSix"
            >
              <h4>WHAT IS THE CORRECT DOSAGE FOR INSOMNIA MEDICATION?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSix"
          >
            <div className="accordion-body">
              <p>
                The minimum and maximum dose depend on the medical condition you
                are in. Ensure that you get yourself checked by the doctor to
                know the amount of dose your body needs. You can start off with
                a small dose only when your doctor permits you.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSeven"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSeven"
            >
              <h4>WHAT HAPPEN WHEN I USE TRAMADOL ALONG WITH OTHER DRUGS?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSeven"
          >
            <div className="accordion-body">
              <p>
              There are medications that might or might not work with other drugs. The medicine works differently on every individual, it is suggested to seek healthcare advice to ensure if tramadol can be used combined with other medication.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseEight"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseEight"
            >
              <h4>WHY I COST VERY LESS?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEight"
          >
            <div className="accordion-body">
              <p>
              Our mission is to deliver results at the minimum price that a patient could afford. We are here to provide top-notch health facilities for a healthy nation. Onlinepharmas contributes to facilitating the health needs of people and drops the idea of generating revenue unlike others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
