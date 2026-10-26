// This function receives a mode as its parameter
function tuneEnvironment(mode) {

    // Check if the user wants calm mode
    if (mode == "calm") {
        $("body").css("background-color", "#b9cde8");

        $("#environment").css("background-color", "rgba(50, 90, 130, 0.9)");

        $("#mode-title").html("✦ The Calm Abyss ✦");

        $("#environment-message").html(
            "Leo relaxes a little. The stars begin to glow softly, " +
            "and the Abyss feels peaceful for once."
        );
    }

    // Otherwise, check for dangerous mode
    else if (mode == "dangerous") {
        $("body").css("background-color", "#260909");

        $("#environment").css("background-color", "rgba(100, 15, 30, 0.9)");

        $("#mode-title").html("⚠ The Dangerous Abyss ⚠");

        $("#environment-message").html(
            "Leo becomes alert. The stars turn red, strange sounds " +
            "echo through the Abyss, and something is watching you."
        );
    }

    // If the user enters something else
    else {
        $("#mode-title").html("Unknown Energy...");

        $("#environment-message").html(
            "That mode does not exist. Try typing calm or dangerous!"
        );
    }
}

// When the button is clicked, ask the user for a mode
$("#tune-button").click(function () {
    let chosenMode = prompt("Choose a mode: calm or dangerous");

    // Stop if the user presses Cancel
    if (chosenMode == null) {
        return;
    }

    // Make the answer lowercase to accept CALM or Calm too
    chosenMode = chosenMode.toLowerCase().trim();

    // Send the user's answer into our function
    tuneEnvironment(chosenMode);
});

