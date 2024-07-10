const Group = require("../models/groups");
const upload = require("../config/multer");

exports.createGroup = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      try {
        const {
          name,
          selectedDay,
          school,
          type,
          accomodation,
          about,
        } = req.body;

        const groupData = {
          name,
          selectedDay,
          school,
          type,
          accomodation,
          about,
          photo: req.file ? `/uploads/${req.file.filename}` : undefined,
        };

        const group = new Group(groupData);
        await group.save();
        res.status(200).json({ success: true, data: group });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    }
  });
};

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json({ success: true, data: groups });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getGroup = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ success: false, error: "Group not found" });
    }
    res.status(200).json({ success: true, data: group });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateGroup = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      try {
        const updatedGroupData = { ...req.body };

        if (req.file) {
          updatedGroupData.photo = `/uploads/${req.file.filename}`;
        }

        const group = await Group.findByIdAndUpdate(
          req.params.id,
          updatedGroupData,
          {
            new: true,
            runValidators: true,
          }
        );

        if (!group) {
          return res
            .status(404)
            .json({ success: false, error: "Group not found" });
        }

        res.status(200).json({ success: true, data: group });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    }
  });
};

exports.deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (!group) {
      return res.status(404).json({ success: false, error: "Group not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
