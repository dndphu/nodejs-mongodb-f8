const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, default: "title empty", require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: "name", require: true, unique: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", Course);
