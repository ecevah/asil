const express = require("express");
const router = express.Router();
const StudentsController = require("../controllers/students");

router.get("/", StudentsController.getStudents);
router.post("/", StudentsController.createStudent);
router.delete("/:id", StudentsController.deleteStudent);
router.put("/:id", StudentsController.updateStudent);
router.get("/:id", StudentsController.getStudent);

module.exports = router;
