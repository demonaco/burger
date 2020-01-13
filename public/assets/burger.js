$(function) {
    $(".change-devour").on("click", function () {
        var id = $(this).data("id");
        var devourState = $(this).data("newdevour")

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

    $("#create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#inputForm").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        //POST
        $.ajax("/api/burgers", {
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