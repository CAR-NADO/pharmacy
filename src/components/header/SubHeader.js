import React from 'react';
import './subHeader.css';
import pharmaLogo from '../../assets/images/pharma-logo.png';
import { HiSearch } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

const SubHeader = () => {
    return (
        <header className="subHeader">
            <div className="upper-part">
                <div className="left-image">
                    <img src={pharmaLogo} alt="logo" id='image' />
                </div>
                <div className="sub-header-right-part">
                    <HiSearch className='search-icon'/>
                    <Badge badgeContent={1} color="primary" className='cart-icon' >
                        <BsCartFill />
                    </Badge>
                </div>
            </div>
            <div className="lower-part">
                <span className='spanHome'>HOME</span>
                <Link to={'/HowItsWork'} ><span>HOW IT WORKS</span></Link>
                <span>SHOP</span>
                <span>FAQ</span>
                <span>DELIVERY INFO</span>
                <span>PROCESSING ORDER</span>
                <span>CONTACT US</span>
            </div>
        </header>
    )
};

export default SubHeader;
