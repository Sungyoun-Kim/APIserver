/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board', {
    board_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    category_cat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'category',
        key: 'cat_id'
      }
    },
    member_member_uid: {
      type: DataTypes.STRING(28),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'member',
        key: 'member_uid'
      }
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    contents_attribute: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    write_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue:sequelize.literal('now()')
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'board',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "board_id" },
          { name: "category_cat_id" },
          { name: "member_member_uid" },
        ]
      },
      {
        name: "fk_board_category_idx",
        using: "BTREE",
        fields: [
          { name: "category_cat_id" },
        ]
      },
      {
        name: "fk_board_member1_idx",
        using: "BTREE",
        fields: [
          { name: "member_member_uid" },
        ]
      },
    ]
  });
};
