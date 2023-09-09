const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  //request - response
  //news
  app.use(newsRouter);

  //  app.get("/", (req, res) => {
  //    res.render("home");
  //  });
  app.use(siteRouter);
}

module.exports = route;
