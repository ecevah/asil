const mongoose = require("mongoose");
const groupModel = require("./groups");
const Schema = mongoose.Schema;

const ReportsSchema = new Schema({
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
  finishedDate: {
    type: Date,
    required: [true, "Finished date is required"],
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: groupModel,
    required: [true, "Group id is required"],
  },
  compulsoryActivities: {
    type: [String],
  },
  otherActivities: {
    type: [String],
  },
  prayerTimes: {
    type: [{}],
    required: [true, "Prayer times is required"],
  },
  extraPoints: {
    type: Number,
  },
  photos: {
    type: [String],
  },
  score: {
    type: Number,
    required: [true, "Score is required"],
  },
});

module.exports = mongoose.model("reports", ReportsSchema);
