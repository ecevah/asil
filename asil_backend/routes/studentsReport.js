const express = require("express");
const router = express.Router();
const StudentsReportController = require("../controllers/studentsReport");

router.get("/", StudentsReportController.getStudentsReports);
router.get("/month", StudentsReportController.getStudentsMonthReports);
router.post("/", StudentsReportController.createStudentsReport);
router.delete("/:id", StudentsReportController.deleteStudentsReport);
router.put("/:id", StudentsReportController.updateStudentsReport);

module.exports = router;
