var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "zwbpifhitzgha5nk",
        password: "e1g8wxd2dwnlkuk1",
        database: "egsxcwa06qfz5xvz"
    })


    connection.connect(function (err) {
        if (err) {
            console.log("An error occured" + err.stack)
            return;
        }
        console.log("connected as " + connection.threadId)
    })
}

    module.exports = connection;