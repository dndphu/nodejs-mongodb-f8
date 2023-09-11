const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
function route(app) {
  //request - response
  //news
  app.use(newsRouter);
  app.use(siteRouter);
  app.use(coursesRouter);
}

module.exports = route;
