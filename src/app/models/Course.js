const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
var mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    name: { type: String, default: "title empty", require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: "name", require: true, unique: true },
  },
  { timestamps: true },
);
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
};

mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

module.exports = mongoose.model("Course", CourseSchema);
