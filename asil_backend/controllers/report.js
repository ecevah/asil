const Report = require("../models/report");
const FormRules = require("../models/formRules");
const upload = require("../config/multer");

const latitude = 41.0082;
const longitude = 28.9784;
const method = 2;

async function getPrayerTimes(startDate, endDate) {
  let currentDate = new Date(startDate);
  const endDateObject = new Date(endDate);
  const prayerTimesArray = [];

  while (currentDate <= endDateObject) {
    const dateStr = currentDate.toISOString().split("T")[0];
    const url = `http://api.aladhan.com/v1/timings/${dateStr}?latitude=${latitude}&longitude=${longitude}&method=${method}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      prayerTimesArray.push(data.data.timings);
    } catch (error) {
      console.error("API isteğinde hata:", error);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }
  return prayerTimesArray;
}

async function getScoringRules() {
  return await FormRules.findOne();
}

function calculateScores(data, rules) {
  let score = 0;

  if (data.compulsoryActivities >= rules.requiredActivityPoint) {
    score += rules.bestPoint;
  }

  return score;
}

exports.createReport = async (req, res) => {
  try {
    const rules = await getScoringRules();
    console.log(rules);
    const {
      startDate,
      finishedDate,
      groupId,
      compulsoryActivities,
      otherActivities,
      extraPoints,
    } = req.body;

    const prayerTimes = await getPrayerTimes(startDate, finishedDate);

    const reportData = {
      startDate,
      finishedDate,
      groupId,
      compulsoryActivities,
      otherActivities,
      prayerTimes,
      extraPoints,
      photos: ["", ""],
      score: calculateScores(req.body, rules),
    };

    const report = new Report(reportData);
    report.save();
    res.status(200).json({ success: true, data: report });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate("groupId");
    res.status(200).json({ success: true, data: reports });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id).populate("groupId");
    if (!report) {
      return res
        .status(404)
        .json({ success: false, error: "Report not found" });
    }
    res.status(200).json({ success: true, data: report });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const rules = await getScoringRules();
    const reportUpdate = {
      ...req.body,
      score: calculateScores(req.body, rules),
    };

    const report = await Report.findByIdAndUpdate(req.params.id, reportUpdate, {
      new: true,
      runValidators: true,
    }).populate("groupId");

    if (!report) {
      return res
        .status(404)
        .json({ success: false, error: "Report not found" });
    }

    res.status(200).json({ success: true, data: report });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) {
      return res
        .status(404)
        .json({ success: false, error: "Report not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
