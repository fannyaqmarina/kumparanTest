const Sequelize = require('sequelize');
require('dotenv').config();
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	dialect: process.env.DB_DIALECT,
	host: process.env.DB_HOST,
	pool: {
		max: 5,
		min: 0,
		idle: 1000,
	}
});

module.exports = db;
