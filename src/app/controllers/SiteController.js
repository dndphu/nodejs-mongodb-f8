const Course = require("../models/Course");

async function getCourse() {
  const course = await Course.find({});
  return course;
}
class NewsController {
  //[GET] /
  index(req, res) {
    // await Course.find({}, function (err, courses) {
    //   if (!err) res.json(courses);
    //   res.status(400).json({ error: err });
    // });
    getCourse()
      .then((course) => {
        res.json(course);
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  }

  //[GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new NewsController();
