const mongoose = require("mongoose");
const express = require("express");
const requireCredits = require("../middleware/requireCredits");
const requireLogin = require("../middleware/requireLogin");
const router = new express.Router();
const Survey = mongoose.model("Survey");
const { sendSurveyEmail } = require("../emails/surveyEmail");

router.get("/api/surveys/thanks", (req, res) => {
  res.send("Thank you for completing the survey");
});

router.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
  const { title, subject, body, recipients } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map((email) => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now(),
  });
  try {
    await sendSurveyEmail(survey);
    await survey.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  } catch (error) {
    res.status(422);
  }
});

module.exports = router;
