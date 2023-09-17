const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();

const morgan = require("morgan");
const handlebars = require("express-handlebars");
var methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000;

//setup static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// http logger
app.use(morgan("combined"));
app.use("/assets", express.static("assets"));

app.use(methodOverride("_method"));

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: require("./helpers/handlebars"),
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

const SortMiddleware = require("./app/middlewares/SortMiddleware");
app.use(SortMiddleware);

const route = require("./routes");
route(app);

//connect db
const db = require("./config/db");
db.connect();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
