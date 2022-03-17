import React from "react";
import "./footer.css";
import FooterImg1 from "../../assets/footer-img/footer-img1.png";
import FooterImg2 from "../../assets/footer-img/footer-img2.png";
import FooterImg3 from "../../assets/footer-img/footer-img3.png";
import FooterImg4 from "../../assets/footer-img/footer-img4.png";
import FooterImg5 from "../../assets/footer-img/footer-img5.png";
import PaymentImg from "../../assets/footer-img/payment-img1.png";
import { CgFacebook } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigateFooter = useNavigate();
  return (
    <div className="footer-parent">
      <div className="footer-header-div">
        <div className="footer-header1">
          <img src={FooterImg1} alt="image" className="footerImg1" />
          <p>
            If you’re in need of medicines – we’re here by your side. Stay safe
            and buy online!
          </p>
          <p>
            <MdLocationOn className="footer-icon" /> 230 Oxford Rd Kenilworth IL
            60043, USA
          </p>
          <p>
            <BsFillTelephoneFill className="footer-icon" />
            onlinepharmas247@gmail.com
          </p>
          <div className="footer-span-parent-div">
            <div className="footer-span1">
              <span>
                <CgFacebook
                  className="footer-span-icon"
                  onClick={(e) =>
                    (window.location =
                      "https://www.facebook.com/onlinepharmasusa/")
                  }
                />
              </span>
            </div>
            <div className="footer-span2">
              <span>
                <AiFillInstagram
                  className="footer-span-icon"
                  onClick={(e) =>
                    (window.location = "https://www.instagram.com")
                  }
                />
              </span>
            </div>
            <div className="footer-span3">
              <span>
                <FaPinterestP
                  className="footer-span-icon"
                  onClick={(e) =>
                    (window.location = "https://www.pinterest.com/")
                  }
                />
              </span>
            </div>
          </div>
        </div>
        <div className="footer-header2">
          <h2>QUICK LINKS</h2>
          <p>Chemist Near Me</p>
          <p onClick={() => navigateFooter("/fakePharma")}>
            Fake Online Pharmacies
          </p>
          <p>Ksalol 1 mg</p>
          <p onClick={() => navigateFooter("/deliveryInfo")}>Delivery Info</p>
          <p>Blogs</p>
          <p onClick={() => navigateFooter("/refund")}>Refund Policy</p>
        </div>
        <div className="footer-header3">
          <p onClick={() => navigateFooter("/onlineDoctor")}>Online Doctor</p>
          <p>What is Citra 100</p>
          <p onClick={() => navigateFooter("/tandC")}>Terms & Conditions</p>
          <p onClick={() => navigateFooter("/faq")}>FAQ</p>
          <p onClick={() => navigateFooter("/privacyPolicy")}>Privacy Policy</p>
          <p onClick={() => navigateFooter("/disclaimer")}>DISCLAIMER</p>
        </div>
        <div className="footer-header4">
          <h2>SECURED BY</h2>
          <div>
            <img src={FooterImg2} alt="img" />
            <img src={FooterImg3} alt="img" />
            <img src={FooterImg4} alt="img" />
            <img src={FooterImg5} alt="img" />
          </div>
        </div>
      </div>
      <div className="footer-lower-div">
        <div className="footer-lower1">
          <span className="footer-lower1-span2">©</span>
          <span className="footer-lower1-span1"> onlinepharmas.com</span>
          <span className="footer-lower1-span2">
            | All Rights Reserved. 2021 |
          </span>
          <span className="footer-lower1-span1">By Codelab Technology</span>
        </div>
        <div className="footer-lower2">
          <img src={PaymentImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
