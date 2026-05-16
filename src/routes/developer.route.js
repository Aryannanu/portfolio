const express = require("express");
const router = express.Router();
const developerController = require("../controller/developer.controller");
const upload = require("../middlewares/upload");

router.post("/developer/add",upload.fields([{name:"profileImage",maxCount:1},{name:"resume",maxCount:1}]),developerController.addDeveloperController);
router.get("/developer/get/:developerId",developerController.getDeveloperController)


module.exports = router