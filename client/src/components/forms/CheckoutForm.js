import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { handlePayment } from "../store/actions/index";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const RenderForm = () => {
  const [payment, setPayment] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      try {
        dispatch(handlePayment(id, 500));
        setPayment(true);
      } catch (error) {
        console.log(error);
        setPayment(false);
      }
    }
  };

  const PaymentRedirect = () => {
    if (payment === null) {
      return <div></div>;
    }

    if (payment) {
      return <Redirect to="/surveys" />;
    } else {
      return <Redirect to="/paymentFailure" />;
    }
  };

  return (
    <div className="paymentForm">
      <form className="paymentForm__form" onSubmit={handleSubmit}>
        <h4>Test Card Details:</h4>

        <div>
          <h5 className="paymentForm__form__subTitle">Card Number: </h5>
          <p className="paymentForm__form__content">4242 4242 4242 4242</p>
        </div>

        <div>
          <h5 className="paymentForm__form__subTitle">Exp Date: </h5>
          <p className="paymentForm__form__content">12/30</p>
        </div>

        <div>
          <h5 className="paymentForm__form__subTitle">CVC: </h5>
          <p className="paymentForm__form__content">132</p>
        </div>

        <div>
          <h5 className="paymentForm__form__subTitle">ZIP: </h5>
          <p className="paymentForm__form__content">11528</p>
        </div>

        <div className="paymentForm__form__card">
          <CardElement />
        </div>

        <div className="paymentForm__form__submit">
          <button type="submit" disabled={!stripe} name="action">
            Pay 5$
            <PaymentRedirect />
          </button>
          <Link className="btn--cancel" to="/surveys">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

const CheckoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <RenderForm />
    </Elements>
  );
};

export default CheckoutForm;
