import React from "react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h5>Please confirm your entry</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
