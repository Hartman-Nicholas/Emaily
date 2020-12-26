const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    credits: {
      type: Number,
      default: 0,
    },
    displayName: {
      type: String,
    },
    familyName: {
      type: String,
    },
    givenName: {
      type: String,
    },
    profilePhoto: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    googleId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;

  return userObject;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
