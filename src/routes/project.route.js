const express = require("express");

const router = express.Router();

const projectController = require("../controller/project.controller");

router.post( "/project/create", projectController.addProjectController);

router.get( "/project/get/:developerId", projectController.getProjectController);

module.exports = router