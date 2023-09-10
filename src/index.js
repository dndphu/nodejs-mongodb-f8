const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

//setup static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// http loger
app.use(morgan("combined"));

// template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

const route = require("./routes");
route(app);

const db = require("./config/db");
db.connect();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
