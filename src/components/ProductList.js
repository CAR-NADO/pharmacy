import React from 'react'
import './productList.css';
import Medicine1 from '../assets/medicines/medicine1.png';
import PharmaLogo6 from '../assets/images/pharma-logo-6.jpg';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { GoGitCompare } from "react-icons/go";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorIcon from '@mui/icons-material/Error';

const ProductList = () => {

    return (
        <div>
            <div className='product-heading'>
                <div className="headingText">
                    <h1>Treatment Options at Online Pharmas</h1>
                </div>
                <div className='parentContainer'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
                            return (
                                <div className='medicineList'>
                                    <div className="product-card content">
                                        <div>
                                            <div className="content-overlay"></div>
                                            <img src={Medicine1} alt="logo" className='medicine1' />
                                        </div>
                                        <div className="lowerPart">
                                            <div className="lowerPartIcon-left"> <SearchIcon className='searchIcon' /> </div>
                                            <div className="lowerPartIcon-left"> <GoGitCompare className='compareIcon' /> </div>
                                            <div className="lowerPartIcon-left"> <FavoriteBorderIcon className='heartIcon' /> </div>
                                            <div className="lowerPartIcon-right"> <ShoppingCartIcon className='cartIcon' fontSize='small'
                                            />
                                                <p className='selectOption'>SELECT OPTIONS</p> </div>
                                        </div>
                                    </div>
                                    <div className="cardLowerDisc">
                                        <p className='para medDisc1'>PAIN RELIEF TABLETS</p>
                                        <p className='para medDisc2'>Tramadol (Jpdol Tablet)</p>
                                        <p className='para medDisc3'>$480.00 – $1,710.00</p>
                                        <p> <StarIcon className='starIcon' /> <StarIcon className='starIcon' /> <StarIcon className='starIcon' /><StarIcon className='starIcon' /> <StarIcon className='starIcon' /> </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                    <div className="after-product-list">
                        <div className="left-part"> 
                        <img src={PharmaLogo6} alt="logo" className='pharmaLogo6' />
                        </div>
                        <div className="right-part"> 
                        <div className="right-heading-text">
                        <h1 className='rightHeadingText'>What are the Main Benefits of Online Pharmas?</h1>
                        </div> 
                        <div className="right-button">
                            <button className='button'>
                            <p className='button-para'>Order now <ArrowForwardIosIcon className='arrowForward' /> Genuine Medication</p>
                            </button>
                        </div>
                        <div className="right-list">
                            <ul>
                            <li>EXPRESS DELIVERY</li>
                            <li>BEST QUALITY PRODUCTS</li>
                            <li>100% SATISFACTION</li>
                            <li>FAST CHECKOUT METHOD</li>
                            <li>SECURE TRANSACTION</li>
                            <li>24/7 CUSTOMER SUPPORT</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="info-heading-container">
                        <div className="info-heading">
                        <p> <ErrorIcon className='errorIcon'/> The information on this website is not intended to replace advice from a doctor or qualified medical expert.</p>
                        </div>
                    </div>
        </div>
    )
}

export default ProductList