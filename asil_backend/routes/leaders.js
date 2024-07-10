const express = require("express");
const router = express.Router();
const LeadersController = require("../controllers/leaders");

router.get("/", LeadersController.getLeaders);
router.post("/", LeadersController.createLeader);
router.delete("/:id", LeadersController.deleteLeader);
router.put("/:id", LeadersController.updateLeader);
router.get("/:id", LeadersController.getLeader);

module.exports = router;
