import React from 'react';
import './subHeader.css';
import pharmaLogo from '../../assets/HowItsWork-images/pharma-logo.png';
import { HiSearch } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import Badge from '@material-ui/core/Badge';
// import { Link } from 'react-router-dom';

const SubHeader = () => {
    return (
        <header>
            <header className="how-its-work-subHeader">
                <div className="how-its-work-upper-part">
                    <div className="how-its-work-left-image">
                        <img src={pharmaLogo} alt="logo" id='how-its-work-image' />
                    </div>
                    <div className="how-its-work-sub-header-right-part">
                        <div className='how-its-work-select-items-div'>
                            <select className='select-items'>
                                {/* <option ><input type="text" /></option> */}
                                <option value="volvo">All Categories</option>
                                <option value="saab">Anti-Anxiety Tablets</option>
                                <option value="opel">Erectile Dysfunction</option>
                                <option value="audi">Pain Relief Tablets</option>
                            </select>
                        </div>
                        <div className='how-its-work-input'><input type="text" className='howItsWorkInput'
                            placeholder='Search for Products' /></div>
                        <div className='how-its-work-search-icon'><HiSearch className='howItsWorkSearchIcon' /></div>
                    </div>
                </div>
            </header>
            <div className="how-its-work-lower-part-parent-div">
                <div className="how-its-work-lower-part-container-div">
                    <div><span className='how-its-work-spanHome'>HOME</span></div>
                    {/* <Link to={'/HowItsWork'} ><span>HOW IT WORKS</span></Link> */}
                    <div className='how-its-work-lower-part-middle'>
                        <span>SHOP</span>
                        <span>FAQ</span>
                        <span>DELIVERY INFO</span>
                        <span>PROCESSING ORDER</span>
                        <span>CONTACT US</span>
                    </div>
                    <div>
                        <Badge badgeContent={1} color="primary" className='cart-icon' >
                            <BsCartFill />
                        </Badge>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default SubHeader;
