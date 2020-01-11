var connection = require('../config/connection')

// Methods to be used
// selectAll()
// insertOne()
// updateOne()


var orm = {
selectAll: function(tableInput, cb) {
    var selectAllQuery = "SELECT * FROM " + tableInput + ";";
    connection.query(selectAllQuery, function(err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
},
insertOne: function(table, cols, vals, cb) {
    var insertOneQuery = "INSERT INTO " + table;

    insertOneQuery += " (";
    insertOneQuery += cols.toString();
    insertOneQuery += ") "
    insertOneQuery += " VALUES (";
    insertOneQuery += printQuestionMarks(vals.length);
    insertOneQuery += ") ";

    console.log(insertOneQuery);

    connection.query(insertOneQuery, vals, function(err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    })

},
updateOne: function(table, objColVals, condition, cb) {
    var updateOneQuery = "UPDATE " + table;

    updateOneQuery += " SET ";
    updateOneQuery +=  objToSql(objColVals);
    updateOneQuery += " WHERE";
    updateOneQuery += condition;

    console.log(updateOneQuery);
    connection.query(updateOneQuery, function(err, res) {
        if (err) {
            throw err
        }
        cb(res);
    })
    
}
};
module.exports = orm;