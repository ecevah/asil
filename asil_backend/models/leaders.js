const mongoose = require("mongoose");
const groupModel = require("./groups");
const Schema = mongoose.Schema;

const emailValidator = function (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const passwordValidator = function (password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
  return passwordRegex.test(password);
};

const LeadersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: groupModel,
  },
  department: {
    type: String,
    require: [true, "Department is required"],
  },
  dateOfBirth: {
    type: Date,
    require: [true, "Birthday is required"],
  },
  classroom: {
    type: Number,
    require: [true, "Classroom is required"],
  },
  datingDate: {
    type: Number,
    required: [true, "Dating Date is required"],
    default: new Date().getFullYear(),
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    validate: [emailValidator, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
    validate: {
      validator: passwordValidator,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one special character",
    },
    select: false,
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
});
module.exports = mongoose.model("leaders", LeadersSchema);
