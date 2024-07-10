const mongoose = require("mongoose");
const studentsModel = require("./students");
const Schema = mongoose.Schema;

const StudentsReportSchema = new Schema({
  studentsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: studentsModel,
    required: [true, "Student ID is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  achievementPoints: {
    type: Number,
    required: [true, "Achievement points is required"],
  },
  penaltyPoints: {
    type: Number,
    required: [true, "Penalty points is required"],
  },
  participation: {
    type: Boolean,
    required: [true, "Participation is required"],
  },
});
module.exports = mongoose.model("studentsReport", StudentsReportSchema);
