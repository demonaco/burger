var orm = require('../config/orm')

var burger = {
all: function(cb) {
    console.log("YOUR IN BUTERS CONFIG------")
    orm.selectAll("burgers", function(res) {
    cb(res)
    });
},

create: function(cols, vals, cb) {
    console.log("inside create")
    orm.insertOne("burgers", cols, vals, function(err,res) {
        console.log("YORU IN THE CREATE FUNCTION$$$$$$$")
        cb(res)

    });
},
updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res)
    });
},
delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
        cb(res);
    });
}
};

module.exports = burger;
