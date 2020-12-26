import axios from "axios";
import * as actionTypes from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: actionTypes.FETCH_USER,
    payload: res.data,
  });
};

export const handlePayment = (id, value) => async (dispatch) => {
  const res = await axios.post("/api/charge", {
    id,
    amount: value,
  });

  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};

// const elements = useElements();
// const { error, paymentMethod } = await stripe.createPaymentMethod({
//   type: "card",
//   card: elements.getElement(CardElement),
// });
// if (!error) {
//   const { id } = paymentMethod;
//   try {
//     const { data } = await axios.post("/api/charge", { id, amount: 1099 });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
