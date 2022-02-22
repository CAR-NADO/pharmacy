import React from 'react'
import './accordian.css';

const Accordian = () => {
  return (
    <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <p>WHEN WILL I RECEIVE MY TRACKING NUMBER AND WHAT WILL BE DELIVERY TIME</p>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <p>Once the payment is done the order will be processed immidiately and you will be updated. Tracking number will be shared within 24-48 hours.</p>
                <p>Delivery will be done in 4-5 working days through USPS. Our sales executive will be in regular touch untill it reaches you.</p>
              </div>
            </div>
          </div>
  )
}

export default Accordian