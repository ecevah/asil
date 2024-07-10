const express = require("express");
const router = express.Router();
const GroupsController = require("../controllers/groups");

router.get("/", GroupsController.getGroups);
router.post("/", GroupsController.createGroup);
router.delete("/:id", GroupsController.deleteGroup);
router.put("/:id", GroupsController.updateGroup);
router.get("/:id", GroupsController.getGroup);

module.exports = router;
