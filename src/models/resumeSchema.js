const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    developerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Developer",
        required: true
    },
    education: [
        {
            institute: String,
            course: String,
            startYear: String,
            endYear: String,
            description: String
        }
    ],
    experience: [
        {
            title: String,
            startYear: String,
            endYear: String,
            description: String
        }
    ],
    skills: [
        {
            name: String,
            level: Number
        }
    ]
},
{
    timestamps: true
});

module.exports = mongoose.model("Resume",resumeSchema);