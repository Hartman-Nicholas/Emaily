import React from "react";
import { useDispatch } from "react-redux";
import { handlePayment } from "../components/store/actions/index";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const RenderForm = () => {
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto" }}
    >
      <CardElement />
      <button type="submit" disabled={!stripe}>
        pay
      </button>
    </form>
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
