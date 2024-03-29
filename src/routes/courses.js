const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/courses/create", courseController.create);
router.get("/courses/:slug", courseController.show);
router.get("/courses/:id/edit", courseController.edit);

router.post("/courses/form-actions", courseController.handleForm);
router.post("/courses/store", courseController.store);
router.put("/courses/:id", courseController.update);

router.patch("/courses/:id/restore", courseController.restore);

router.delete("/courses/:id", courseController.delete);
router.delete("/courses/:id/force", courseController.forceDelete);
module.exports = router;
