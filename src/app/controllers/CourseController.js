const Course = require("../models/Course");
const { mongooseToObject } = require("../../utils/mongoose");

async function createCourse(data) {
  const create = await Course.create(data);
  return create;
}
class CourseController {
  //[GET] /courses/:slug
  show(req, res) {
    const { slug } = req.params;
    Course.findOne({ slug }).then((course) => {
      res.render("courses/show", { course: mongooseToObject(course) });
    });
  }
  //[GET] /courses/create
  create(req, res) {
    res.render("courses/create");
  }
  //[POST] /courses/store
  store(req, res, next) {
    // res.json(req.body)
    const formData = req.body;
    // !formData.slug && delete formData.slug
    createCourse(formData)
      .then(() => res.redirect("/"))
      .catch((err) => res.send({ error: err }));
  }
}

module.exports = new CourseController();
