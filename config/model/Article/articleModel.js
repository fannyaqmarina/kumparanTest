const Sequelize = require('sequelize');
const db = require('../../database/database');

const table = db.define('article',
	{
		id: { 
            type: Sequelize.INTEGER, 
			autoIncrement: true,
            primaryKey: true },
		author: Sequelize.TEXT,
		title: Sequelize.TEXT,
		body:Sequelize.TEXT,
		created: Sequelize.DATE
	},{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = table;