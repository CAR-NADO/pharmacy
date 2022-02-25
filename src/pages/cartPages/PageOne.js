import React from 'react';
import './pageOne.css';
import Header from '../../components/header/Header';
// import SubHeader from '../../components/howItsWorksComponents/SubHeader'; 
import SubHeader from '../../components/header/SubHeader';
import Footer from '../../components/footer/Footer';
import CartImg1 from '../../assets/cart-img/cart-img1.jpg';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ProductList from '../../components/productList/ProductList';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const PageOne = () => {
  return (
    <div className='cart-pageOne-parent-div'>
      <Header />
      <SubHeader />
      <div className='cart-pageOne-container'>
      <div className='cart-pageOne-container-left'>
        <div className='cart-pageOne-div1'>
          <h2>ITEM</h2>
          <div className='cart-pageOne-div2'>
            <h2>PRICE</h2>
            <h2>QUANTITY</h2>
            <h2>TOTAL</h2>
          </div>
        </div>
        <div className='cart-pageOne-div3'>
          <img src={CartImg1} alt='image' className='cart-img1'/>
          <p>Buy Adderall Online - 90 pills express</p>
          <h2>$510.00</h2>
          <div className='cart-pageOne-div3-input'>
            <input type='text' className='cartPageOneDiv3Input' placeholder='0' />
            <div className='cart-pageOne-upDown-icon'>
            <ArrowDropUpIcon />
            <ArrowDropDownIcon />
            </div>
          </div>
          <h2>$510.00</h2>
          <CancelIcon className='cart-pageOne-cancel-icon' />
        </div>
        <div className='cart-pageOne-div4'>
          <div className='cart-pageOne-div5'>
            <input type='text' placeholder='Coupon code' className='coupon-input-field'/>
            <button className='apply-coupon-btn'>APPLY COUPON</button>
          </div>
          <button className='update-cart-btn'>UPDATE CART</button>
        </div>
      </div>
      <div className='cart-pageOne-container-right'>
        <h2>CART TOTALS</h2>
        <div className='cart-pageOne-div6'>
          <h2>Subtotal</h2>
          <h2>$510.00</h2>
        </div>
        <div className='cart-pageOne-div7'>
          <h2>Shipping</h2>
          <div className='cart-pageOne-div8'>
            <p>Flat rate: $10.00</p>
            <h2>Shipping to IL.</h2>
            <div className='cart-pageOne-div9'>
            <LocalShippingIcon />
            <h2>Change address</h2>
            </div>
          </div>
        </div>
        <div className='cart-pageOne-div10'>
          <h2>Total</h2>
          <h2>$520.00</h2>
        </div>
        <div className='cart-pageOne-btn-div'>
        <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
        <button className='shopping-btn'>CONTINUE SHOPPING</button>
        </div>
      </div>
      </div>
      {/* <div className='cart-pageOne-div11'>
        <h2>You may be interested in...</h2>
        <KeyboardDoubleArrowDownIcon />
      </div> */}
      {/* <ProductList /> */}
      <Footer />
    </div>
  )
}

export default PageOne;