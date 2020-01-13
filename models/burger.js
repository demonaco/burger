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
    orm.insertOne("burgers", cols, vals, function(res) {
        cb(res)

    });
},
update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res)
    });
},
};

module.exports = burger;
