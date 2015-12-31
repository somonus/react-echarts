"use strict";

exports.__esModule = true;
exports["default"] = filterMap;

function filterMap(filterArray, props) {
  var options = {};
  filterArray.map(function (key) {
    var option = props[key];
    if (option !== undefined) {
      options[key] = option;
    }
  });
  return options;
}

module.exports = exports["default"];