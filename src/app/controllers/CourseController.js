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
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) }),
      )
      .catch((err) => next);
  }
  //[POST] /courses/store
  async store(req, res, next) {
    // res.json(req.body)
    const formData = req.body;
    // !formData.slug && delete formData.slug
    await createCourse(formData)
      .then(() => res.redirect("/"))
      .catch((err) => res.send({ error: err }));
  }
  //[PUT] /course/:id
  async update(req, res, next) {
    // res.json(req.body)
    await Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch((err) => next);
  }
  //[DELETE] /course/:id
  async delete(req, res, next) {
    await Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((err) => next);
  }
}

module.exports = new CourseController();
