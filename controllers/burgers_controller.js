var express = require('express');

var router = express.Router();

var burger = require("../models/burger")

router.get("/", function(req, res) {
    //alert("hello from router.get")
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("hello1")
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({ id: res.insertID })
        // res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("hello")

    console.log("condition", condition);
   
    burger.update({
        devoured: req.body.devoured
    },condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
