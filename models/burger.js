const orm = require("../config/orm.js");

const burger = {
	selectAll: (cb) => {
		orm.selectAll("burgers", (res) => {
			cb(res);
		});
	}, 

	insertOne: (column, value, cb) => {
		orm.insertOne("burgers", column, value, (res) => {
			cb(res);
		})
	},

	updateOne: (objColVal, condition, cb) => {
		orm.updateOne("burgers", objColVal, condition, (res) => {
			cb(res);
		});
	}
}

module.exports = burger;