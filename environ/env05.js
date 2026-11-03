// Make each horse draggable
$(".horse").draggable({
    containment: "#horse-scene",
    stop: function () {
        let horseId = $(this).attr("id");

        // Show the line that belongs to the horse being dragged
        $(this).find(".speech").stop(true, true).fadeIn(200);

        if (horseId == "mc-horse") {
            $("#status").text("MC says: Watch the hair!");
        }
        else if (horseId == "leo-horse") {
            $("#status").text("Leo says: What are you doing?");
        }
        else if (horseId == "yuna-horse") {
            $("#status").text("Yuna says: Hehe, that tickles!");
        }
    }
});
