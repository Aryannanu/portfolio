const mongoose = require("mongoose");

const contactSchema =
new mongoose.Schema(
{
    developerId: {
        type:
        mongoose.Schema.Types.ObjectId,

        ref: "Developer",

        required: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

    github: {
        type: String,
        trim: true
    },

    linkedin: {
        type: String,
        trim: true
    },

    instagram: {
        type: String,
        trim: true
    },

    location: {
        type: String,
        trim: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Contact",contactSchema);