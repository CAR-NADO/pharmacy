import React from 'react';
import './subFooter2.css';
import SubFooterImg1 from '../../assets/subFooter2-img/sub-footer-img1.jpg';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { BiMessageRounded } from "react-icons/bi";

const SubFooter2 = () => {
  return (
    <div className="subFooter2-parent">
        <div className="subFooter2">
            <div className="subFooter2-header">
                <p>News About Pain, Anxiety & ED Medications</p>
            </div>
            <div className="subFooter2-footer-card">
                {
                     [1,2,3].map((id)=> {
                         return (
                        
                <div className="footer-card-left"key={id}>
                <div className="footer-card-upper-img">
                    <img src={SubFooterImg1} alt="image" className='subFooterImg1'/>
                </div>
                <div className="footer-card-paragraph">
                <div className="footer-card-para1">
                    <p>DIFFERENCE BETWEEN LORAZEPAM VS. XANAX</p>
                </div>
                <div className="footer-card-para2">
                    <p>February 11, 2022</p>
                </div>
                <div className="footer-card-para3">
                    <p>Lorazepam and Xanax are the two benzodiazepines utilized for the treatment of anxiety, and both are similarly viable</p>
                </div>
                <div className="footer-card-para4">
                    <p>Read More <DoubleArrowIcon className='DoubleArrowIcon'/> </p>
                    <p> <BiMessageRounded /> 0 </p>
                </div>
                </div>
                </div>
                     
                     )
                    })
               }
            </div>
        </div>
    </div>
  )
}

export default SubFooter2