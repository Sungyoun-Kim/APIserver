const path=require('path');
const Sequelize=require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.member=require('./member')(sequelize,Sequelize);
db.category=require('./category')(sequelize,Sequelize);
db.board=require('./board')(sequelize,Sequelize);
db.applicant_table=require('./applicant_table')(sequelize,Sequelize);






module.exports = db;
