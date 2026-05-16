const multer = require("multer");
const path = require("path");
const fs = require("fs");

if (!fs.existsSync("images")) {
  fs.mkdirSync("images");
}

if (!fs.existsSync("resumes")) {
  fs.mkdirSync("resumes");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "profileImage") {
      cb(null, "images/");
    } 
    else if (file.fieldname === "resume") {
      cb(null, "resumes/");
    }
  },

  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

module.exports = upload