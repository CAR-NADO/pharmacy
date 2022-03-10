import React from "react";
import "./subFooter2.css";
import SubFooterImg1 from "../../assets/subFooter2-img/sub-footer-img1.jpg";
import SubFooterImg2 from "../../assets/subFooter2-img/sub-footer-img2.jpg";
import SubFooterImg3 from "../../assets/subFooter2-img/sub-footer-img3.jpg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { BiMessageRounded } from "react-icons/bi";

const SubFooter2 = () => {
  const subFooter2Data = [
    {
      id: 1,
      image: SubFooterImg1,
      title: "HOW TO KNOW FAKE KSALOL 1MG",
      date: "February 20, 2022",
      disc: "Fake variants of benzodiazepine Ksalol – a brand of alprazolam have prompted a few passes and admissions to",
    },
    {
      id: 2,
      image: SubFooterImg2,
      title: "DIFFERENCE BETWEEN LORAZEPAM VS. XANAX",
      date: "February 11, 2022",
      disc: "Lorazepam and Xanax are the two benzodiazepines utilized for the treatment of anxiety, and both are similarly viable",
    },
    {
      id: 3,
      image: SubFooterImg3,
      title: "WHAT ARE LORAZEPAM TABLETS & WHAT ARE THEY USED FOR?",
      date: "January 19, 2022",
      disc: "Lorazepam tablets are one of the most widely used and popular medications available in the market mainly used",
    },
  ];
  return (
    <div className="subFooter2-parent">
      <div className="subFooter2">
        <div className="subFooter2-header">
          <p>News About Pain, Anxiety & ED Medications</p>
        </div>
        <div className="subFooter2-footer-card">
          {subFooter2Data.map((data) => {
            const { id, image, title, date, disc } = data;
            return (
              <div className="footer-card-left" key={id}>
                <div className="footer-card-upper-img">
                  <img src={image} alt="image" className="subFooterImg1" />
                </div>
                <div className="footer-card-paragraph">
                  <div className="footer-card-para1">
                    <p>{title}</p>
                  </div>
                  <div className="footer-card-para2">
                    <p>{date}</p>
                  </div>
                  <div className="footer-card-para3">
                    <p>{disc}</p>
                  </div>
                  <div className="footer-card-para4">
                    <span>
                      Read More <DoubleArrowIcon className="DoubleArrowIcon" />
                    </span>
                    <p>
                      <BiMessageRounded /> 0
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubFooter2;
