const Handlebars = require("handlebars");

module.exports = {
  sum(a, b) {
    return a + b;
  },
  sortable(name, sort) {
    const sortType = name === sort.column ? sort.type : "default";
    const icons = {
      default: "bi bi-chevron-expand",
      asc: "bi bi-chevron-down",
      desc: "bi bi-chevron-up",
    };
    const icon = icons[sortType];
    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };
    const type = types[sortType];

    const address = Handlebars.escapeExpression(
      `?_sort&column=${name}&type=${type}`,
    );
    const output = `<a href="${address}">
            <i class="${icon}"></i>
          </a>`;

    return new Handlebars.SafeString(output);
  },
};
