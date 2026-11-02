
let kaya = {
    name: "kaya",
    age: 2
};

// Describe Kaya's outfit
function describe(outfit) {
    if (outfit == "witch") {
        return kaya.name + " is casting evil spells on u...";
    }
    else if (outfit == "scarf") {
        return kaya.name + " is comfymaxxing<3";
    }
    else if (outfit == "harness") {
        return kaya.name + " is (pretending to be) ready for a walk!";
    }
    else if (outfit == "cone") {
        return kaya.name + " is in jail.";
    }
}

// Show Kaya's outfit
let currentOutfit = "";

function showKaya(outfit) {
    $("#kaya-photo").attr("src", "images/kaya-" + outfit + ".png");
    $("#status").html(describe(outfit));

    currentOutfit = outfit;
}

// Outfit buttons
$(".outfit").click(function () {
    showKaya(this.id);
});

// Start with the scarf
showKaya("scarf");

// Surprise me button
let outfits = ["witch", "scarf", "harness", "cone"];

$("#surprise").click(function () {
    let randomIndex = Math.floor(Math.random() * outfits.length);

    // Pick a different outfit if it matches the current one
    if (outfits[randomIndex] == currentOutfit) {
        randomIndex = (randomIndex + 1) % outfits.length;
    }

    showKaya(outfits[randomIndex]);
});

