const express = require("express");
const router = express.Router();
const FormRulesController = require("../controllers/formRules");

router.get("/", FormRulesController.getFormRules);
router.post("/", FormRulesController.createFormRule);
router.delete("/:id", FormRulesController.deleteFormRule);
router.put("/:id", FormRulesController.updateFormRule);
router.get("/:id", FormRulesController.getFormRule);

module.exports = router;
