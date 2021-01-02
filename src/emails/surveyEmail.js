const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendSurveyEmail = (survey) => {
  const { recipients, title, subject, body } = survey;

  //   const formatAddresses = (recipients) => {
  //     return recipients.map(({ email }) => {
  //       return new helper.Email(email); // going to need to fix this.
  //     });
  //   };

  //   const addClickTracking = () => {
  //     const trackingSettings = new helper.TrackingSettings();
  //     const clickTracking = new helper.ClickTracking(true, true);

  //     trackingSettings.setClickTracking(clickTracking);
  //     addTrackingSettings(trackingSettings);
  //   };

  sgMail
    .sendMultiple({
      to: recipients,
      from: "hartn001@outlook.com",
      subject: subject,
      html: `
          <html>
        <body>
          <div style="text-align: center;">
          <h1>${title}<h1>
            <h3>I'd like your input!</h3>
            <p>Please answer the following questions</p>
            <p>${body}</p>
            <div>
              <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/thanks">Yes</a>
            </div>
            <div>
              <a href="${process.env.REDIRECT_DOMAIN}/api/surveys/thanks">No</a>
            </div>
          </div>
        </body>
      </html>
      `, // need to use back ticks next to plus button allows you to insert variables without having to concatenate.
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sendSurveyEmail,
};
