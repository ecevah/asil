const mongoose = require("mongoose");
//const psycModel = require("../psychologist/psychologistModel");
//const clientModel = require("../client/clientModel");
const groupModel = require("../models/groups");
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: groupModel,
  },
  dateOfBirth: {
    type: Date,
    require: [true, "Birthday is required"],
  },
  classroom: {
    type: Number,
    require: [true, "Classroom is required"],
  },
  school: {
    type: String,
    require: [true, "School is required"],
  },
  datingDate: {
    type: Number,
    required: [true, "Dating Date is required"],
    default: new Date().getFullYear(),
  },
  fathersProfession: {
    type: String,
    required: [true, "Father's profession is required"],
  },
  last3Points: {
    type: [Number],
    required: [true, "Last 3 points is required"],
  },
  photo: {
    type: String,
    default:
      "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1",
  },
  about: {
    type: String,
    default: " ",
  },
  fatiha: { type: Boolean, default: false },
  ihlas: { type: Boolean, default: false },
  kevser: { type: Boolean, default: false },
  fil: { type: Boolean, default: false },
  kureys: { type: Boolean, default: false },
  tebbet: { type: Boolean, default: false },
  maun: { type: Boolean, default: false },
  insirah: { type: Boolean, default: false },
});
module.exports = mongoose.model("students", StudentsSchema);
