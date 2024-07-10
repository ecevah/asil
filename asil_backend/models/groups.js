const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daysOfWeek = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

const accomodationOptions = ["Yatılı", "Gündüzlü"];

const GroupsSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: [true, "Name must be unique."],
  },
  selectedDay: {
    type: String,
    enum: daysOfWeek,
    required: [true, "Day of the week is required"],
  },
  school: {
    type: String,
    required: [true, "School is required"],
  },
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  accomodation: {
    type: String,
    enum: accomodationOptions,
    required: [true, "Accomodation is required"],
  },
  about: {
    type: String,
    default: "",
  },
  photo: {
    type: String,
    default:
      "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1",
  },
});

module.exports = mongoose.model("groups", GroupsSchema);
