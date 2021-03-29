import React from "react";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div className="paymentFailure">
      <div className="paymentFailure__content">
        <h2 className="paymentFailure__content__Title">
          There was a problem processing the payment
        </h2>
        <h4 className="paymentFailure__content__subTitle">
          Would you like to try again or return back to Surveys?
        </h4>
        <div className="paymentFailure__content__submit">
          <Link className="paymentFailure__content__btn" to="/checkoutForm">
            Try Again
          </Link>
          <Link className="paymentFailure__content__btn" to="/surveys">
            To Surveys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
