import React from 'react';
import './subFooter1.css';

const SubFooter1 = () => {
  return (
    <div className="SubFooter1-parent">
        <div className="subFooter1">
            <div className="subFooter1-header">
                <p>Get your order in 3 simple steps</p>
            </div>
            <div className="subFooter1-footer">
                {
                    [1,2,3].map((id)=> {
                        return (
            <div className="subFooter1-card"key={id}>
            <div className="subFooter1-card-heading">
                <p>Placing order</p>
            </div>
            <div className="subFooter1-card-paragraph">
                <p>Select the product and package. Add it to your cart and confirm the order by giving required details.</p>
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

export default SubFooter1