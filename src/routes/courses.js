const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/courses/create", courseController.create);
router.get("/courses/:slug", courseController.show);
router.get("/courses/:id/edit", courseController.edit);

router.post("/courses/store", courseController.store);
router.put("/courses/:id", courseController.update);

router.delete("/courses/:id", courseController.delete);
module.exports = router;
