var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8000,
    user: "root",
    password: "password",
    database: "burgers__db"
})

connection.connect(function(err) {
 if (err) {
    console.log("An error occured" + err.stack)
    return;
 }
 console.log("connected as " + connection.threadId)
})

module.exports = connection;