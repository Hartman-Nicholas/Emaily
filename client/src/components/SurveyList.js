import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./store/actions/index";

const SurveyList = () => {
  const surveys = useSelector((state) => state.surveys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSurveys);
  }, [dispatch]);

  const renderSurveyList = () => {
    if (surveys) {
      return surveys.reverse().map((survey) => {
        return (
          <div className="surveyCard" key={survey._id}>
            <div className="surveyCard__content">
              <h2 className="surveyCard__content--title">
                {survey.surveyTitle}
              </h2>
              <p className="surveyCard__content--body">{survey.body}</p>
              <p className="surveyCard__response--sent">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>

              <div className="surveyCard__response">
                <p className="surveyCard__response--item">Yes: {survey.yes}</p>
                <p className="surveyCard__response--item">No: {survey.no}</p>
                <button
                  className="surveyCard__response--delete"
                  onClick={() => {
                    dispatch(actions.deleteSurvey(survey._id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      });
    }
    return <div>Loading..</div>;
  };

  return <div>{renderSurveyList()}</div>;
};

export default SurveyList;
