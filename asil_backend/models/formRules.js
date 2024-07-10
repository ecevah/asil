const mongoose = require("mongoose");
const studentsModel = require("./students");
const Schema = mongoose.Schema;

const FormRulesSchema = new Schema({
  bestState: {
    type: Number,
    required: [true, "Best state is required"],
  },
  bestPoint: {
    type: Number,
    required: [true, "Best point is required"],
  },
  middleState: {
    type: Number,
    required: [true, "Middle state is required"],
  },
  middlePoint: {
    type: Number,
    required: [true, "Middle point is required"],
  },
  cleaningPhotoNumbers: {
    type: Number,
    required: [true, "Cleaning photo numbers is required"],
  },
  cleaningPhotoPoints: {
    type: Number,
    required: [true, "Cleaning photo points is required"],
  },
  bestParticipationPercentage: {
    type: Number,
    required: [true, "Best participation percentage is required"],
  },
  bestParticipationPoints: {
    type: Number,
    required: [true, "Best participation points is required"],
  },
  middleParticipationPercentage: {
    type: Number,
    required: [true, "Middle participation percentage is required"],
  },
  middleParticipationPoints: {
    type: Number,
    required: [true, "Middle participation points is required"],
  },
  requiredActivityPoint: {
    type: Number,
    required: [true, "Required activity point is required"],
  },
});
module.exports = mongoose.model("formRules", FormRulesSchema);
