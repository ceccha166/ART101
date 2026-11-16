let affection = 0;

$("#compliment").click(function() {
    $("#dialogue").html("Aww, thank you! You're making me blush.");
    affection++;
    $("#affection").html("Affection: " + affection);
});

$("#joke").click(function() {
    $("#dialogue").html("Haha! You're pretty funny.");
    affection++;
    $("#affection").html("Affection: " + affection);
});

