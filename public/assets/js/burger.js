$(function() {
    $(".devoured").on("click", function(event){
        let id = $(this).data("id");
        let newDevoured = $(this).data("devoured")

        let newDevouredstate = {
            devoured: newDevoured
        };


        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredstate
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        )
    });
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        let newBurger = {
            name: $("#br").val().trim(),
            burger: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger created!!!");
                location.reload();
            }
        )
    });

    $(".delete-burger").on("click", function(event){
        let id = $(this).data("id");

        $.ajax("/api/burgers" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("burger deleted!!!", id);
                location.reload()
            }
        )
    });
});