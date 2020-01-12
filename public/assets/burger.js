$(function) {
    $("#submitButton").on("click", function () {
        var id = $(this).data("id");
        var devourState = $(this).data("devourstate")

        var devourStateChange = {
            devoured: devourState
        };

        //PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourStateChange
        }).then(
            function () {
                console.log("Change devour state to", devourState);
                location.reload();
            }
        );
    });

    $("#inputForm").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#inputForm").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        //POST
        $.ajax("/api/cats", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        );
    });
}