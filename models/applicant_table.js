/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicant_table', {
    member_uid: {
      type: DataTypes.STRING(28),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'member',
        key: 'member_uid'
      }
    },
    board_board_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'board',
        key: 'board_id'
      }
    }
  }, {
    sequelize,
    tableName: 'applicant_table',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "member_uid" },
          { name: "board_board_id" },
        ]
      },
      {
        name: "fk_applicant_table_board1_idx",
        using: "BTREE",
        fields: [
          { name: "board_board_id" },
        ]
      },
    ]
  });
};
