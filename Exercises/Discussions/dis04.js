
let treats = 0;

// Object that stores info about Kaya
let kaya = {
    name: "Kaya",
    age: 2,
    costume: "witch",
    toys: ["ball"]
};

// Arrays of moods and background colors
// Index 0 = hungry, index 1 = happy, index 2 = hyper
let moods = ["hungry", "happy", "hyper"];
let colors = ["#241b2f", "#3b2f4a", "#5a2e1f"];

let mood = "";

// Update the page when treats change
function updatePage() {

    // TODO 1 & 2: Set mood and background color
    if (treats >= 5) {
        mood = moods[2];
        $("body").css("background-color", colors[2]);
    } else if (treats >= 1) {
        mood = moods[1];
        $("body").css("background-color", colors[1]);
    } else {
        mood = moods[0];
        $("body").css("background-color", colors[0]);
    }

    // Optional: Fix grammar for treat/treats
    let treatWord = "treats";
    if (treats === 1) {
        treatWord = "treat";
    }

    let toyWord = "toys";
    if (kaya.toys.length === 1) {
        toyWord = "toy";
    }

    // TODO 3: Update the header
    $("#treat-count").html(
        kaya.name + " the " + kaya.costume +
        " has " + treats + " " + treatWord +
        " and is feeling " + mood + "!"
    );

    // Show how many toys Kaya has
    $("#toys").html(
        kaya.name + " has " + kaya.toys.length +
        " " + toyWord + "!"
    );
}

// Give Kaya a treat
$("#give-button").click(function() {
    treats = treats + 1;
    updatePage();
});

// Take away a treat, but don't go below 0
$("#take-button").click(function() {
    if (treats > 0) {
        treats = treats - 1;
    }
    updatePage();
});

// Give Kaya a toy
$("#toy-button").click(function() {
    toys = toys + 1;
    updatePage();
});

// Take away a toy, but don't go below 0
$("#take-toy-button").click(function() {
    if (toys > 0) {
        toys = toys - 1;
    }
    updatePage();
});

// Run once when the page loads
updatePage();
