import React from 'react'
import './deliveryInfo.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SubHeader from '../../components/howItsWorksComponents/SubHeader'
import DeliveryInfoImg1 from '../../assets/delivery-info-img/delivery-info-img1.jpg'

const DeliveryInfo = () => {
  return (
    <div className='delivery-info-parent-div'>
    <Header />
    <SubHeader />
    <div className="delivery-info-accordion-parent-div">
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
               <p>DELIVERY INFORMATION</p>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <p>
                Delivery Information includes the customer’s name, shipping address, contact details, customer’s email ID, and Delivery Time and Date for the placed order. Delivery information includes order price, quantity, and the date & time when the order was placed.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <p>ORDER PROCESSING AND DELIVERY TIME</p>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <p>Payment to be done by the customer once the order is placed. You will be notified via mail or text once payment is received. Upon the confirmation of the order, tracking information will be shared within 24-48 hours. The delivery of the order will be within <span>3-5 working days</span> and may vary depending on the postal services of the area.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <p>PACKING OF ORDERS</p>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <p>Order Packaging refers to the different methods used to package different orders. For fragile products or the product vulnerable to spill, we use different precautions to resist any damage to the placed order. We ensure the product reaches our customers the same way they expect to maintain its quality.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                <p>UNDELIVERED ORDERS</p>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body">
                <p>An order is said to Undelivered when the recipient refuses to accept it, Package is damaged during the transit,Delivery address is incorrect,or nobody is available to receive the order at the specified delivery address even after multiple attempts.The order will be returned to us.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                <p>CONTACT US</p>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div className="accordion-body">
                <p>In an exceptional case, such as order delays, help regarding order cancellation, or non-refund of order fee, you are advised to contact our customer support service center via the given methods of communication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='delivery-info-img1'>
        <img src={DeliveryInfoImg1} alt='image' className='deliveryInfoImg1'/>
      </div>
    <Footer />
  </div>
  )
}

export default DeliveryInfo;