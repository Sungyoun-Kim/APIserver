/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member', {
    member_uid: {
      type: DataTypes.STRING(28),
      allowNull: false,
      primaryKey: true
    },
    member_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    member_nickname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    member_point: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'member',
    timestamps: false
    });
};
