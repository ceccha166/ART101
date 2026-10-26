// Environment Title 
let environmentTitle = "Luminary Beneath the Stars";

// Things that exist in the Abyss
let environmentElements = [
    "Suspicious people",
    "Blank white dark skies",
    "Unknown creatures",
    "Forgotten ruins"
];

// Information about the characters
let characters = {
    mc: {
        name: "MC",
        role: "The Main Character",
        mood: "confused",
        secret: "You may have been brought here for a reason."
    },

    leo: {
        name: "Leo",
        role: "A Type C Demon",
        mood: "Annoyed",
        secret: "He might know more about the Abyss than he admits."
    }
};

// A collection of clues
let hiddenSecrets = [
    "The stars above the Abyss never seem to move.",
    "A star marking has appeared on your arm.",
    "Your arrival may have been planned long before you appeared."
];

// Count how many times the player investigates
let investigationCount = 0;


// BUTTON 1: Explore the Abyss
$("#explore-button").click(function () {

    investigationCount = investigationCount + 1;

    let message = "<h3>" + environmentTitle + "</h3>";

    message = message + "<p>The Abyss is filled with:</p>";

    message = message + "<ul>";

    message = message + "<li>" + environmentElements[0] + "</li>";
    message = message + "<li>" + environmentElements[1] + "</li>";
    message = message + "<li>" + environmentElements[2] + "</li>";
    message = message + "<li>" + environmentElements[3] + "</li>";

    message = message + "</ul>";

    $("#environment-output").html(message);

    $("#investigation-count").html(
        "Investigations: " + investigationCount
    );

    console.log(environmentElements);

});


// BUTTON 2: Character Files
$("#character-button").click(function () {

    investigationCount = investigationCount + 1;

    let message = "<h3>Character Files</h3>";

    message = message + "<h4>" + characters.mc.name + "</h4>";
    message = message + "<p>Role: " + characters.mc.role + "</p>";
    message = message + "<p>Mood: " + characters.mc.mood + "</p>";

    message = message + "<hr>";

    message = message + "<h4>" + characters.leo.name + "</h4>";
    message = message + "<p>Role: " + characters.leo.role + "</p>";
    message = message + "<p>Mood: " + characters.leo.mood + "</p>";

    $("#environment-output").html(message);

    $("#investigation-count").html(
        "Investigations: " + investigationCount
    );

    console.log(characters);

});


// BUTTON 3: Reveal a Hidden Secret
$("#secret-button").click(function () {

    investigationCount = investigationCount + 1;

    // Choose a random clue from the options
    let randomPosition = Math.floor(
        Math.random() * hiddenSecrets.length
    );

    let currentSecret = hiddenSecrets[randomPosition];

    let message = "<h3>⚠ Classified Information ⚠</h3>";

    message = message + "<p>" + currentSecret + "</p>";

    message = message + "<p>Perhaps Leo knows the truth...</p>";

    $("#environment-output").html(message);

    $("#investigation-count").html(
        "Investigations: " + investigationCount
    );

    console.log(currentSecret);

});
