import React from "react";
import { Form, Field, FormSpy } from "react-final-form";
import createDecorator from "final-form-focus";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import FormStateToRedux from "./FormStateToRedux";

const required = (value) => (value ? undefined : "Required");
const emailCheck = (value) => {
  const errors = validateEmails(value || "");
  return errors;
};
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
const focusOnError = createDecorator();

const SurveyForm = (props) => {
  const { surveyTitle, subject, body, recipients } = props.initialValues;
  return (
    <div className="surveyForm">
      <Form
        onSubmit={props.onSubmit}
        decorators={[focusOnError]}
        keepDirtyOnReinitialize
        subscription={{
          submitting: true,
        }}
      >
        {({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form="SurveyForm" />
            <Field
              name="surveyTitle"
              placeholder={surveyTitle}
              validate={required}
            >
              {({ input, meta, placeholder }) => (
                <div
                  className={`surveyForm__field ${
                    meta.active ? "--active" : ""
                  }`}
                >
                  <label>Survey Title:</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && (
                    <span className="surveyForm__required">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="subject" placeholder={subject} validate={required}>
              {({ input, meta, placeholder }) => (
                <div
                  className={`surveyForm__field ${
                    meta.active ? "--active" : ""
                  }`}
                >
                  <label>Subject Line:</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && (
                    <span className="surveyForm__required">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="body" placeholder={body} validate={required}>
              {({ input, meta, placeholder }) => (
                <div
                  className={`surveyForm__field ${
                    meta.active ? "--active" : ""
                  }`}
                >
                  <label>Email Body:</label>
                  <textarea {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && (
                    <span className="surveyForm__required">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field
              name="recipients"
              placeholder={recipients}
              validate={composeValidators(required, emailCheck)}
            >
              {({ input, meta, placeholder }) => (
                <div
                  className={`surveyForm__field ${
                    meta.active ? "--active" : ""
                  }`}
                >
                  <label>Recipient List:</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && (
                    <span className="surveyForm__required">
                      {meta.error}
                      {console.log(meta.error)}
                    </span>
                  )}
                </div>
              )}
            </Field>
            <div className="surveyForm__submit">
              <Link className="btn--cancel" to="/surveys">
                Cancel
              </Link>
              <button type="submit" disabled={pristine || submitting}>
                Next
              </button>
            </div>
            <FormSpy subscription={{ submitSucceeded: true, values: true }}>
              {({ submitSucceeded }) => {
                if (submitSucceeded) {
                  return <Redirect to="/surveys/new" />;
                }
                return <div></div>;
              }}
            </FormSpy>
            <FormStateToRedux form="SurveyForm" />
                        
          </form>
        )}
      </Form>
    </div>
  );
};

export default SurveyForm;
