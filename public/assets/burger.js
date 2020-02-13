$(function () {
    $("#submitButton").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#inputForm").val().trim(),
            devoured: 0
        };
        console.log(newBurger)
        //POST
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });
    $(".change-devour").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devourState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(function () {
            console.log("Burger devoured")
            location.reload();
        });
    });

    $("#deleteButton").on("click", function(event) {
        event.preventDefault();
        console.log("in delete function")
        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function(){
            location.reload();
        });
    });
});
