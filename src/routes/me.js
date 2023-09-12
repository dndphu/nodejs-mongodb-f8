const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/me/stored/courses", meController.show);
router.get("/me/trash/courses", meController.showDeleted);

module.exports = router;
