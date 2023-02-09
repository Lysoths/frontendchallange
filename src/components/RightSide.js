import { useState } from "react";

const RightSide = ({ name, setName, cardNumber, setCardNumber }) => {
  const nameHandler = (e) => {
    setCardNumber({ ...cardNumber, cardHolder: e.target.value });
  };

  const cardNumberHandler = (e) => {
    const number = e.target.value.toString().replace(/\d{4}(?=.)/g, "$& ");
    setCardNumber(number);
    setCardNumber({ ...cardNumber, cardNumber: number });
  };

  const securHandler1 = (e) => {
    setCardNumber({ ...cardNumber, secur1: e.target.value });
  };

  const securHandler2 = (e) => {
    setCardNumber({ ...cardNumber, secur2: e.target.value });
  };

  const securHandler3 = (e) => {
    setCardNumber({ ...cardNumber, secur3: e.target.value });
  };
  return (
    <div className='Rightside'>
      <div className='card-container'>
        <div className='card-name'>
          <small>CARDHOLDER NAME</small>
          <input
            type='text'
            name=''
            id=''
            maxLength='30'
            onChange={nameHandler}
          />
        </div>
        <div className='card-number'>
          <small>CARD NUMBER</small>
          <input
            type='text'
            name=''
            id=''
            maxLength='16'
            onChange={cardNumberHandler}
          />
        </div>
        <div className='card-secur'>
          <div className='left'>
            <small className='secur'>EXP.DATE (MM/YY)</small>
            <div>
              <input
                type='text'
                name=''
                id=''
                maxLength='2'
                onChange={securHandler1}
              />
              <input
                type='text'
                name=''
                id=''
                maxLength='2'
                onChange={securHandler2}
              />
            </div>
          </div>
          <div className='right'>
            <small className='secur'>CVD</small>
            <input
              type='text'
              name=''
              id=''
              maxLength='3'
              onChange={securHandler3}
            />
          </div>
        </div>
        <div className='button'>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
