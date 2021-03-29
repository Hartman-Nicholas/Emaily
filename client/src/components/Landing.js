import React from "react";
import emailCampaign from "../img/undraw_Email_campaign_re_m6k5.svg";

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="landing__mainHeading">Emaily!</h1>
      <h2 className="landing__subheading">Collect feedback from your users</h2>
      <img
        className="landing__img"
        src={emailCampaign}
        alt="person sending emails"
      ></img>
    </div>
  );
};

export default Landing;
