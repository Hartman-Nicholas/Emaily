import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import * as actions from "../components/store/actions";
import history from "../history";
import DashBoard from "./DashBoard";
import Header from "./Header";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";
import UserInfo from "./UserInfo";
import CheckoutForm from "./forms/CheckoutForm";
import Footer from "./Footer";
import PaymentFailure from "./PaymentFailure";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  return (
    <Router history={history}>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={DashBoard} />
          <Route path="/surveys/new" exact component={SurveyNew} />
          <Route path="/UserInfo" exact component={UserInfo} />
          <Route path="/checkoutForm" exact component={CheckoutForm} />
          <Route path="/paymentFailure" exact component={PaymentFailure} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
