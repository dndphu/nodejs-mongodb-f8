const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get("/news", newsController.index);
router.get("/news/:slug", newsController.show);

module.exports = router;
