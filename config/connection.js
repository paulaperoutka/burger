const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} 

else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: null, 
		database: "burger_db"
	});
}

connection.connect(error => {
	if (error) {
		console.error(`Error connecting: ${error.stack}`);
		return;
	}

	console.log("Connected as id " + connection.threadId);
});

module.exports = connection;