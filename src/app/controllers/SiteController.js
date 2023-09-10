const Course = require("../models/Course");
const {multipleMongooseToObject} = require("../../utils/mongoose")
async function getCourse() {
  const course = await Course.find({});
  return course;
}


class SiteController {
  //[GET] /
  index(req, res,next) {
    getCourse()
      .then((course) => {
        res.render("home", {
          title: "HOME PAGE",
          course: multipleMongooseToObject(course),
        });
      })
      .catch((err) => {
        // res.status(400).json({ error: err });
        next(err);
      });
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
