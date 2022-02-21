import React from 'react';
import './pagination.css';
import Slider from "react-slick";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Pagination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="pagination-parent">
      <div className="pagination">
        <div className="pagination-header">
          <h1>What People Say About Us</h1>
          <p className='underline'></p>
        </div>
        <Slider {...settings}>
          <div className="pagination-footer">
            <p> <ImQuotesLeft className='quotes'/> </p>
            <p className='message'> Online pharma healthcare products offer the best service, I recommend them as I am using their products for a long time now and I never had any issue. </p>
            <p className='name'> GEORGE RABORN </p>
            <p className='fillStar'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <BsStarHalf /> </p>
            <p> <ImQuotesRight className='quotes'/> </p>
          </div>
          <div className="pagination-footer">
            <p> <ImQuotesLeft className='quotes'/> </p>
            <p className='message'> Online pharma healthcare products offer the best service, I recommend them as I am using their products for a long time now and I never had any issue. </p>
            <p className='name'> GEORGE RABORN </p>
            <p className='fillStar'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <BsStarHalf /> </p>
            <p> <ImQuotesRight className='quotes'/> </p>
          </div>
          <div className="pagination-footer">
            <p> <ImQuotesLeft className='quotes'/> </p>
            <p className='message'> Online pharma healthcare products offer the best service, I recommend them as I am using their products for a long time now and I never had any issue. </p>
            <p className='name'> GEORGE RABORN </p>
            <p className='fillStar'> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <BsStarHalf /> </p>
            <p> <ImQuotesRight className='quotes'/> </p>
          </div>
        </Slider>
      </div>
    </div >
  )
}

export default Pagination