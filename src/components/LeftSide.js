import { useState } from "react";

const LeftSide = ({ name, cardNumber, newCards }) => {
  return (
    <div className='Leftside'>
      <div className='left-side-container'>
        <div className='up'>
          <div className='circles'>
            <div className='circle'></div>
            <div className='little-circle'></div>
          </div>
          <div className='number-container'>
            <p className='number'>{cardNumber.cardNumber}</p>
          </div>
          <div className='credit-card-info'>
            <p>{cardNumber.cardHolder && cardNumber.cardHolder}</p>
            <p>
              {cardNumber.secur1}/{cardNumber.secur2}
            </p>
          </div>
        </div>
        <div className='down'>
          <p className='exp'>{cardNumber.secur3}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
