// A says
let messagesA = ["How are u doing", "Sorry to hear that", "What color would u like  it to be",];
let counterA = 0
// B says
let messagesB = ["Terrible", "Color of the background sucks", "Not this one",];
let counterB = 0

// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click(function () {

    if (counterA == counterB) {
        $("#chat").append("<p>Baek Hyeon: " + messagesA[counterA] + "</p>");

        counterA = counterA + 1;
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>Eun Woo: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }



});

