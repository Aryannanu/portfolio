const express = require("express");
const router = express.Router();
const serviceController = require("../controller/serviceDev.controller");


router.post("/service/add",serviceController.addSerController);
router.get("/service/get/:developerId",serviceController.getSerController)


module.exports = router