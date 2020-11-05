var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _board = require("./board");
var _applicant_table = require("./applicant_table");
var _member = require("./member");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes);
  var applicant_table = _applicant_table(sequelize, DataTypes);
  var member = _member(sequelize, DataTypes);

  return {
    category,
    board,
    applicant_table,
    member,
  };
}
module.exports = { initModels };
