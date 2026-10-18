   // the clicker button program

let count = 0;

$("#needy-button").click( function() {
   count = count + 1;
   $("#needy-button").html("You clicked me " + count + " times");
});
$("#needy-button").click( function() {
   // our actions here
   count = count + 3;
   $("#needy-button").html("You clicked me " + count + " times");
   let color = "light blue";
   $("#needy-button").css("background-color", color);
});
