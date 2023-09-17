module.exports = function sortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };
  if (req.query.hasOwnProperty("_sort")) {
    const { column, type } = req.query;
    Object.assign(res.locals._sort, {
      enabled: true,
      type,
      column,
    });
  }

  next();
};
