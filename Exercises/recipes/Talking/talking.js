
// A says
let messaagesA=["How are you doing", "Sorry to hear that", "What color would you like it to be", ];

// B says
let messagesB=["Terrible", "Color of the background sucks", "Not this one", ];


// when A is clicked 
$("#character-a").click( function (){


    $("chat").append("<Baek Hyeon: "+messagesA[counterA]+"</p>");

    counterA=counterA+1;

});

// when B is clicked
$("character-b").click( function(){

    $("#chat").append("<p>Eun Woo: "+messagesB[counterB]+"</p>");

    counterB=counterB+1;



}); 


