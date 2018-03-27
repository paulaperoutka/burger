const connection = require("./connection.js");

function printQuestionMarks (num) {
	let arr = [];

	for (let i = 0; i< num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(object) {
	let arr = [];

	for (let key in object) {
		let value = object[key];
		if (Object.hasOqnProperty.call(object, key)) {
			if (typeof value === "string" && value.indexOf(" ") >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + "=" + value);
		}
	}
	return arr.toString();
}

var orm = {

	selectAll: (table, cb) => {
		let queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, (error, result) => {
			if (error) {
				throw error;
			}
			cb(result);
		});
	},

	insertOne: (table, column, value, cb) => {
		let queryString = "INSERT INTO " + table;
			queryString += " (";
			queryString += column.toString();
			queryString += ") VALUES (";
			queryString += printQuestionMarks(value.length);
			queryString += ") ";

		console.log(queryString);

		connection.query(queryString, value, (error, result) => {
			if (error) {
				throw error;
			}
			cb(result);
		});
	},

	updateOne: (table, objColVal, condition, cb) => {
		let queryString = "UPDATE" + table;
			queryString += objToSql(objColVal);
			queryString += " WHERE ";
			queryString += condition;

		console.log(queryString);

		connectiion.query(queryString, (error, result) => {
			if (error) {
				throw error;
			}
			cb(result);
		});
	}
};

module.exports = orm;



















