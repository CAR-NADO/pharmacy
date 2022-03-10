import React from "react";
import "./pagination.css";
import Slider from "react-slick";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Pagination = () => {
  const paginationData = [
    {
      id: 1,
      message:
        "Online pharma healthcare products offer the best service, I recommend them as I am using their products for a long time now and I never had any issue.",
      name: "GEORGE RABORN",
    },
    {
      id: 2,
      message:
        "I was busy with my work and needed some medicines I got to know about online pharma healthcare products and ordered the medicines. I received my medicines at my doorstep within the delivery date. I am happy with their service.",
      name: "LUCILLE DETTLAFF",
    },
    {
      id: 3,
      message:
        "I ordered healthcare products from online pharma and I received all my medicines within 4-5 days of placing my orders. They are the most trusted and loyal when it comes to offering customer service. I recommend using their products is.",
      name: "PATTY NESSEL",
    },
    {
      id: 4,
      message:
        "I stay away from my parents and was worried about their health. I ordered their medicines from online healthcare pharma and received 100 per cent genuine and affordable products. Now, I don't have to worry about my parent's health.",
      name: "WILLIAM REID",
    },
    {
      id: 5,
      message:
        "I ordered from online pharma healthcare products and I was surprised that I received the product at the same price while I ordered the product. Life has become easy with online pharma healthcare products.",
      name: "JIM KECK",
    },
    {
      id: 6,
      message:
        "As a senior citizen, I was worried about getting my medicines from an offline chemist as I have to be safe but with online pharma products, my worries are resolved. They have helped me by offering my healthcare products at.",
      name: "GEORGE SPIVACK",
    },
    {
      id: 7,
      message:
        "I ordered the product from online pharma healthcare products and they offered me a high-quality product in real-time delivery.",
      name: "DIANE DYER BALZER",
    },
    {
      id: 8,
      message:
        "Online Pharma healthcare products are the most trusted website to order healthcare products at an affordable price. I ordered my products and received them without any hassle. They offer genuine products.",
      name: "GEORGE SPISKA",
    },
    {
      id: 9,
      message:
        "With COVID-19 Pandemic, Online Pharma healthcare products have helped me to sit from the comfort of home and order my medicines that give assurance that my health is safe.",
      name: "SUZANNE MALCOLM",
    },
    {
      id: 10,
      message:
        "Online Pharma healthcare products are the best ones. I ordered the product and received them before the delivery date.",
      name: "DENISE GURULE",
    },
    {
      id: 11,
      message:
        "Many of Onlinepharmas products have multiple indications, Indication gives us unique insight into what are the uses and precautions related the products thus saves significant time.",
      name: "SANDY COOPER",
    },
    {
      id: 12,
      message:
        "I have found Onlinepharmas extremely valuable and uniquely frank in the way they interact with the customers and advised them. I would like thank your team for guiding me.",
      name: "LINDA PATISON",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pagination-parent">
      <div className="pagination">
        <div className="pagination-header">
          <h1>What People Say About Us</h1>
          <p className="underline"></p>
        </div>
        <Slider {...settings}>
          {paginationData.map((data) => {
            const { id, message, name } = data;
            return (
              <div className="pagination-footer" key={id}>
                <p>
                  <ImQuotesLeft className="quotes" />
                </p>
                <p className="message"> {message} </p>
                <p className="name"> {name} </p>
                <p className="fillStar">
                  <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
                  <BsStarHalf />
                </p>
                <p>
                  <ImQuotesRight className="quotes" />
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Pagination;
