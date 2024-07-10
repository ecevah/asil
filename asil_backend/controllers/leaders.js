const Leader = require("../models/leaders");
const upload = require("../config/multer");

exports.createLeader = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      try {
        const {
          name,
          groupId,
          department,
          dateOfBirth,
          classroom,
          datingDate,
          email,
          password,
          about,
        } = req.body;

        const leaderData = {
          name,
          groupId,
          department,
          dateOfBirth,
          classroom,
          datingDate,
          email,
          password,
          about,
          photo: req.file ? `/uploads/${req.file.filename}` : undefined,
        };

        const leader = new Leader(leaderData);
        await leader.save();
        res.status(200).json({ success: true, data: leader });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    }
  });
};

exports.getLeaders = async (req, res) => {
  try {
    const leaders = await Leader.find().populate("groupId");
    res.status(200).json({ success: true, data: leaders });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getLeader = async (req, res) => {
  try {
    const leader = await Leader.findById(req.params.id);
    if (!leader) {
      return res
        .status(404)
        .json({ success: false, error: "Leader not found" });
    }
    res.status(200).json({ success: true, data: leader });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateLeader = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    } else {
      try {
        const updatedLeaderData = { ...req.body };

        if (req.file) {
          updatedLeaderData.photo = `/uploads/${req.file.filename}`;
        }

        const leader = await Leader.findByIdAndUpdate(
          req.params.id,
          updatedLeaderData,
          {
            new: true,
            runValidators: true,
          }
        );

        if (!leader) {
          return res
            .status(404)
            .json({ success: false, error: "Leader not found" });
        }

        res.status(200).json({ success: true, data: leader });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    }
  });
};

exports.deleteLeader = async (req, res) => {
  try {
    const leader = await Leader.findByIdAndDelete(req.params.id);
    if (!leader) {
      return res
        .status(404)
        .json({ success: false, error: "Leader not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
