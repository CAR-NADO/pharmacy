import React from 'react';
import './header.css';
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagramSquare,FaClinicMedical } from "react-icons/fa";
import { ImPinterest } from "react-icons/im";

const Header = () => {
    return (
        <header className="header">
            {/* <div> <FaClinicMedical className='FaClinicMedical' /> </div> */}
            <div className="left-header">
                <p className='p-font-style'>Express US to US 3 Days Delivery</p>
            </div>
            <div className="middle-header">
            <div className="icons">
            <p className='p-font-style'>Follow: </p> 
            <RiFacebookFill className='icon'/>
            <FaInstagramSquare className='icon'/>
            <ImPinterest className='icon' />
            </div>
            <div className="wishlist">
            <p className='font-style'>Wishlist (0)</p>
            </div>
            </div>
            <div className="right-header">
                <p className='font-style'>Login / Sign up</p>
            </div>
        </header>
    )
};

export default Header;
