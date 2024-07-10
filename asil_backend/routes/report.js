const express = require("express");
const router = express.Router();
const ReportsController = require("../controllers/report");

router.get("/", ReportsController.getReports);
router.post("/", ReportsController.createReport);
router.delete("/:id", ReportsController.deleteReport);
router.put("/:id", ReportsController.updateReport);
router.get("/:id", ReportsController.getReport);

module.exports = router;
