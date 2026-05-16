const Resume = require("../models/resumeSchema");

const addResume = async ({ developerId, education, experience, skills }) => {
    const resume = await Resume.create({developerId,education,experience,skills});
    return resume;
};

const getResume = async (developerId) => {
    const resumes = await Resume.findOne({ developerId });
    return resumes;
};

module.exports = { addResume, getResume };
