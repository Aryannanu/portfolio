const resumeService = require("../services/resume.service");

const addResumeController = async (req, res) => {
    try {
        const resume = await resumeService.addResume(req.body);
        return res.send(resume);
    } catch (error) {
        console.log("error in addResumeController", error);
    }
};

const getResumeController = async (req, res) => {
    try {
        const { developerId } = req.params;
        const resumes = await resumeService.getResume(developerId);
        return res.send(resumes);
    } catch (error) {
        console.log("error in getResumeController", error);
    }
};

module.exports = { addResumeController, getResumeController };
