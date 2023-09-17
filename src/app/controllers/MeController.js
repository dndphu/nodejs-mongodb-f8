const Course = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

class MeController {
  //[GET] /me/stored/courses
  show(req, res, next) {
    let courseQuery = Course.find({});
    Promise.all([courseQuery.sortable(req), Course.countDocumentsDeleted()])
      .then(([course, deleteCount]) => {
        res.render("me/stored-courses", {
          course: multipleMongooseToObject(course),
          deleteCount,
        });
      })
      .catch((err) => next);
  }
  showDeleted(req, res) {
    Course.findDeleted({})
      .then((course) => {
        res.render("me/trash-courses", {
          course: multipleMongooseToObject(course),
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new MeController();
