const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class MeController {
  //[GET] /me/stored/courses
  show(req, res) {
    Course.find({})
      .then((course) => {
        res.render("me/stored-courses", {
          course: multipleMongooseToObject(course),
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new MeController();
