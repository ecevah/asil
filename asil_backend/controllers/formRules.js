const FormRule = require("../models/formRules");

exports.createFormRule = async (req, res) => {
  try {
    const formRule = new FormRule(req.body);
    await formRule.save();
    res.status(200).json({ success: true, data: formRule });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getFormRules = async (req, res) => {
  try {
    const formRules = await FormRule.find();
    res.status(200).json({ success: true, data: formRules });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getFormRule = async (req, res) => {
  try {
    const formRule = await FormRule.findById(req.params.id);
    if (!formRule) {
      return res
        .status(404)
        .json({ success: false, error: "Form rule not found" });
    }
    res.status(200).json({ success: true, data: formRule });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateFormRule = async (req, res) => {
  try {
    const formRule = await FormRule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!formRule) {
      return res
        .status(404)
        .json({ success: false, error: "Form rule not found" });
    }
    res.status(200).json({ success: true, data: formRule });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteFormRule = async (req, res) => {
  try {
    const formRule = await FormRule.findByIdAndDelete(req.params.id);
    if (!formRule) {
      return res
        .status(404)
        .json({ success: false, error: "Form rule not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
