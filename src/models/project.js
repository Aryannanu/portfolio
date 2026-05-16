const mongoose = require("mongoose");

const projectSchema =
new mongoose.Schema(
{
    developerId: {
        type:
        mongoose.Schema.Types.ObjectId,

        ref: "Developer",

        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        enum: [
            "REST API",
            "Authentication",
            "Database",
            "Backend"
        ],
        required: true
    },

    techStack: [
        {
            type: String
        }
    ],

    githubLink: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    featured: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Project",projectSchema);