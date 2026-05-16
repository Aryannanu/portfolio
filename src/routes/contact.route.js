const express = require("express");
const router = express.Router();
const contactController = require("../controller/contact.controller");

router.post("/contact/add", contactController.addContactController);
router.get("/contact/get/:developerId", contactController.getContactController);

module.exports = router;
