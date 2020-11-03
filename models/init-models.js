var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _board = require("./board");
var _member = require("./member");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes);
  var member = _member(sequelize, DataTypes);

  return {
    category,
    board,
    member,
  };
}
module.exports = { initModels };
