const StudentsReport = require("../models/studentsReport");

exports.createStudentsReport = async (req, res) => {
  try {
    const studentsReport = new StudentsReport(req.body);
    await studentsReport.save();
    res.status(200).json({ success: true, data: studentsReport });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateStudentsReport = async (req, res) => {
  try {
    const studentsReport = await StudentsReport.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("studentsId");
    if (!studentsReport) {
      return res
        .status(404)
        .json({ success: false, error: "Students report not found" });
    }
    res.status(200).json({ success: true, data: studentsReport });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteStudentsReport = async (req, res) => {
  try {
    const studentsReport = await StudentsReport.findByIdAndDelete(
      req.params.id
    );
    if (!studentsReport) {
      return res
        .status(404)
        .json({ success: false, error: "Students report not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getStudentsReports = async (req, res) => {
  try {
    const studentsReports = await StudentsReport.find().populate("studentsId");
    res.status(200).json({ success: true, data: studentsReports });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getStudentsMonthReports = async (req, res) => {
  const { studentId, month } = req.query;

  const query = {};
  if (studentId) query.studentsId = studentId;
  if (month) {
    query.reportMonth = month;
  }

  try {
    const studentsReports = await StudentsReport.find(query).populate(
      "studentsId"
    );
    res.status(200).json({ success: true, data: studentsReports });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
