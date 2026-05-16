const express = require("express");
const router = express.Router();
const resumeController = require("../controller/resume.controller");

router.post("/resume/add", resumeController.addResumeController);
router.get("/resume/get/:developerId", resumeController.getResumeController);

module.exports = router;
