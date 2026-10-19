// Count (how many times Leo is clicked)
let count = 0;

// Count how many chocolates Leo receives
let chocolateCount = 0;

// Leo's information
let buttonCreature = {
    name: "Leo",
    species: "Type C Demon",
    favoriteFood: "chocolate",
    moods: ["neutral", "annoyed", "calm", "happy"]
};

// Leo starts neutral
let currentMood = "neutral";

// Click Leo
$("#needy-button").click(function () {

    count = count + 1;

    // Leo gets annoyed after 6 clicks
    if (count >= 3 && currentMood !== "happy") {
        currentMood = "annoyed";
    }

    // Leo's message
    let message = "<p>You clicked Leo " + count + " times.</p>";
    message = message + "<p>My name is " + buttonCreature.name + "!</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    message = message + "<p>Leo is feeling " + currentMood + ".</p>";

    // Show the message
    $("#output").html(message);

    // Show information in the console
    console.log(count);
    console.log(currentMood);

});

// Give Leo chocolate
$("#chocolate-button").click(function () {

    chocolateCount = chocolateCount + 1;

    // Chocolate makes Leo calm
    currentMood = "calm";

    let message = "<p>You gave Leo chocolate! 🍫</p>";
    message = message + "<p>Chocolate bars given: " + chocolateCount + " / 5</p>";
    message = message + "<p>Leo is feeling calm now.</p>";

    // Unlock ice cream after 5 chocolates
    if (chocolateCount >= 5) {
        $("#icecream-button").show();

        message = message + "<p>You unlocked ice cream for Leo! 🍦</p>";
    }

    $("#output").html(message);

    console.log("Chocolate bars: " + chocolateCount);
    console.log(currentMood);

});

// Give Leo ice cream
$("#icecream-button").click(function () {

    // Ice cream makes Leo happy
    currentMood = "happy";

    let message = "<p>You gave Leo ice cream! 🍦</p>";
    message = message + "<p>Leo is feeling happy!</p>";
    message = message + "<p>Leo forgives you for whatever you did today to annoy him!</p>";

    $("#output").html(message);

    console.log(currentMood);

});
