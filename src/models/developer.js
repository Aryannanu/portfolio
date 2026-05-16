const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true
    },
    birthday: {
      type: Date
    },
    location: {
      type: String,
      required: true
    },
    resume: {
      type: String
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Developer",developerSchema);