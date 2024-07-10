const Student = require("../models/students");
const upload = require("../config/multer");

const arrayLengthValidator = (val) => {
  return val.length === 3;
};

exports.createStudent = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      try {
        const {
          name,
          groupId,
          dateOfBirth,
          classroom,
          school,
          fathersProfession,
          about,
        } = req.body;

        if (!arrayLengthValidator(req.body.last3Points)) {
          return res
            .status(400)
            .json({
              success: false,
              error: "Last 3 points must be an array of 3 numbers",
            });
        }

        const studentData = {
          name,
          groupId,
          dateOfBirth,
          classroom,
          school,
          fathersProfession,
          about,
          photo: req.file ? `/uploads/${req.file.filename}` : undefined,
        };

        const student = new Student(studentData);
        await student.save();
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    }
  });
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("groupId");
    res.status(200).json({ success: true, data: students });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("groupId");
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateStudent = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      try {
        const {
          name,
          groupId,
          dateOfBirth,
          classroom,
          school,
          fathersProfession,
          about,
        } = req.body;

        const updatedStudentData = {
          name,
          groupId,
          dateOfBirth,
          classroom,
          school,
          fathersProfession,
          about,
        };

        if (req.file) {
          updatedStudentData.photo = `/uploads/${req.file.filename}`;
        }

        const student = await Student.findByIdAndUpdate(
          req.params.id,
          updatedStudentData,
          {
            new: true,
            runValidators: true,
          }
        ).populate("groupId");

        if (!student) {
          return res
            .status(404)
            .json({ success: false, error: "Student not found" });
        }

        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    }
  });
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res
        .status(404)
        .json({ success: false, error: "Student not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
