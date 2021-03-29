import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./SurveyList";

const DashBoard = () => {
  return (
    <div>
      <div>
        <Link to="/surveys/new">
          <button className="btn__add">Create Survey</button>
        </Link>
      </div>
      <SurveyList />
    </div>
  );
};

export default DashBoard;
