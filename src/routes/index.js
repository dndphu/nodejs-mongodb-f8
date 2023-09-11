const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const meRouter = require("./me");
function route(app) {
  //request - response
  //news
  app.use(newsRouter);
  app.use(siteRouter);
  app.use(coursesRouter);
  app.use(meRouter);
}

module.exports = route;
