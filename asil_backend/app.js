var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const students = require("./routes/students");
const leaders = require("./routes/leaders");
const groups = require("./routes/groups");
const studentsReport = require("./routes/studentsReport");
const formRules = require("./routes/formRules");
const report = require("./routes/report");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://mazlum:1973Aysegul@cluster0.4molq.mongodb.net/asil_website?retryWrites=true&w=majority"
);
mongoose.connection.on("open", () => {
  console.log("MongoDB: Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("MongoDB: Error", err);
});

var app = express();

app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});

app.use(
  cors({
    origins: ["*"],
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const API_PREFIX = "/api";

//app.use(`${API_PREFIX}`, noTokenRouter);
//app.use(`${API_PREFIX}`, verifyToken);
app.use(`${API_PREFIX}/student/report`, studentsReport);
app.use(`${API_PREFIX}/student`, students);
app.use(`${API_PREFIX}/leader`, leaders);
app.use(`${API_PREFIX}/formRules`, formRules);
app.use(`${API_PREFIX}/report`, report);

app.use(`${API_PREFIX}/group`, groups);

module.exports = app;
