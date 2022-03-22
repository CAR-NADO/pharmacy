import React from "react";
import Header from "../../../components/header/Header";
import SubHeader from "../../../components/header/SubHeader";
import Footer from "../../../components/footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CitraImg1 from "../../../assets/citra100-img/citra-img1.jpg";
import CitraImg2 from "../../../assets/citra100-img/citra-img2.jpg";
import "./citra.css";

const Citra = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <Header />
      <SubHeader />
      <div className="citra-parents-div">
        <div className="citra-container">
          <h1>
            How Citra 100 Tramadol Is Best For The Treatment Of Moderate To
            Severe Pain?
          </h1>
          <img src={CitraImg1} alt="image" className="citraImg" />
          <h1>Buy Genuine Citra, Jpdol (Tramadol) Tablets Online</h1>
          <p>
            <span>Citra 100mg tramadol</span> is given to the patients for the
            treatment of moderate to severe pain.{" "}
            <san>Tramadol 100mg online</san> affects the brain and changes the
            way your body feels and responds to pain. The onset of pain relief
            usually starts an hour later after you have gulped down the
            medicine.
          </p>
          <p>
            When you <span>buy Citra Tablets</span> from Onlinepharmas, you
            should not worry about the authenticity of the medicine.
            Onlinepharmas has been catering to the health needs of the people
            for years with its high-quality medicines. Tramadol is narcotic in
            nature used to relieve pain.
          </p>
          <p>
            Tramadol cannot be used for so-called reasons unless you really
            suffer the pain. You can buy Citra Tabletas online in USA from
            online drugstore and get medicines delivered to your home now. We
            ensure to provide safe and legal medicines along with convenience
            and privacy to keep your health above everything. All the doses of
            Tramadol available in Onlinepharmas are FDA approved.
          </p>
          <h1>Onlinepharmas Provides Continuous Support</h1>
          <p>
            At Onlinepharmas, we try our level best that you get sufficient and
            continuous support from our support team whenever need arises. If
            you suffer from any pain or issues with the intake of medicine or
            anything related to the information of medicine, we consider your
            query the topmost priority.
          </p>
          <p>
            You can call our customer team through call and email, we will
            listen to you and provide you the best solution. We ensure to be in
            touch with you 24*7 even when you have bought the medicine; we have
            retained the significance of the brand with our utmost care towards
            individuals’ health.
          </p>
          <p>
            <span>Citra 100 tramadol</span> is an opioid pain reliever that is
            known to alter the perception of pain and emotional response. You
            might experience different state of mind with medicine effectively
            working in your central nervous system post consumption. Therefore,
            we put our best forward with regard to whittling down the concern of
            patients, be it about the quality of medicine, damages, expiry, or
            shipping concerns, we are there to help you out as soon as possible.
          </p>
          <p>
            At the time of receiving order, if you encounter any issue with your
            order, we shall take appropriate steps to solve your problem and do
            the needful with available options, keeping your convenience at the
            forefront.
          </p>
          <h1>Tips To Remember</h1>
          <p>
            If the medicine is affecting you, immediately contact your doctor to
            know the reason behind it. If you feel allergic to it or taking any
            other medication along with it, do let your doctor know about it.
            Tramadol does interact with other drugs or allergies, as a result,
            it can sometimes lead to adverse health problems.
          </p>
          <h1>Common Side Effects Of Citra Tablets</h1>
          <p>
            The common side effects that are likely to occur as a result of
            using Citra 50mg are:
          </p>
          <ul>
            <li>Constipation</li>
            <li>Drowsiness</li>
            <li>Dizziness</li>
            <li>Nausea</li>
            <li>Vomiting</li>
            <li>Headache</li>
            <li>Low energy levels</li>
            <p>
              If these side effects are mild, you will feel okay after few days,
              but if they are severe, consult your doctor to seek the best
              treatment possible.
            </p>
          </ul>
          <h1>Buy Citra Tablets Online In USA At Cheapest Price</h1>
          <img src={CitraImg2} alt="image" className="citraImg" />
          <p>
            When you buy Citra Tablets, we take the guarantee of its quality not
            of how the medicine affects you. To avoid miserable health problems,
            seek doctor’s help to get rid of the pain.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Citra;
