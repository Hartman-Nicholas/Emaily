import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/index";
import history from "../../history";

const SurveyFormReview = ({ onCancel }) => {
  const form = useSelector((state) => state.form.SurveyForm.values);
  const dispatch = useDispatch();
  const { surveyTitle, subject, recipients, body } = form;
  return (
    <div className="surveyReview">
      <h2 className="surveyReview__title">Please confirm your entry</h2>
      <div>
        <div>
          <h4 className="surveyReview__subTitle">Survey Title</h4>
          <div className="surveyReview__content">{surveyTitle}</div>
        </div>
      </div>
      <div>
        <div>
          <h4 className="surveyReview__subTitle">Subject Line</h4>
          <div className="surveyReview__content">{subject}</div>
        </div>
      </div>
      <div>
        <div>
          <h4 className="surveyReview__subTitle">Email Body</h4>
          <div className="surveyReview__content">{body}</div>
        </div>
      </div>
      <div>
        <div>
          <h4 className="surveyReview__subTitle">Recipient List</h4>
          <div className="surveyReview__content">{recipients}</div>
        </div>
      </div>

      <div className="surveyForm__submit">
        <button className="btn--cancel" onClick={onCancel}>
          Back
        </button>
        <button onClick={() => dispatch(actions.submitSurvey(form, history))}>
          Send
        </button>
      </div>
    </div>
  );
};

export default SurveyFormReview;
