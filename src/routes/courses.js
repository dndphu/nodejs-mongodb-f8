const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/courses/create", courseController.create);
router.get("/courses/:slug", courseController.show);

router.post("/courses/store", courseController.store);

module.exports = router;
