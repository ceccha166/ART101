let draggedHorse = null;

$(".horse").on("dragstart", function (event) {
    draggedHorse = this;

    // Hide the speech bubble while dragging
    $(this).find(".speech").hide();
});

$("#horse-scene").on("dragover", function (event) {
    // Allow a horse to be dropped inside the scene
    event.preventDefault();
});

$("#horse-scene").on("drop", function (event) {
    event.preventDefault();

    if (draggedHorse == null) {
        return;
    }

    let scenePosition = $("#horse-scene").offset();
    let mouseX = event.originalEvent.pageX - scenePosition.left;
    let mouseY = event.originalEvent.pageY - scenePosition.top;

    // Keep the horse inside the scene
    let newLeft = Math.max(0, Math.min(mouseX - 90, $("#horse-scene").width() - 180));
    let newTop = Math.max(0, Math.min(mouseY - 50, $("#horse-scene").height() - 150));

    $(draggedHorse).css({
        left: newLeft + "px",
        top: newTop + "px"
    });

    // Show the correct horse's dialogue
    $(draggedHorse).find(".speech").fadeIn();

    if (draggedHorse.id == "mc-horse") {
        $("#status").text("MC says: Watch the hair!");
    }
    else if (draggedHorse.id == "leo-horse") {
        $("#status").text("Leo says: What are you doing?");
    }
    else if (draggedHorse.id == "yuna-horse") {
        $("#status").text("Yuna says: Hehe, that tickles!");
    }

    draggedHorse = null;
});

