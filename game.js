var buttonColours= ["red", "blue", "green", "yellow"];
var gamePattern= [];
var userClickedPattern= [];

function nextSecuence(){
    var randomNumber= Math.floor(Math.random()*4);
    var randomChoosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);

    $("#" + randomChoosenColour).fadeOut(100).fadeIn(100);
    
    var audio= new Audio("./sounds/" + randomChoosenColour + ".mp3");
    audio.play();
}

$(".btn").on("click", function(event){

    var userChoosenColor= $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    
    //var audio= new Audio("./sounds/" + tile + ".mp3");

    //$(event.target).fadeOut(100).fadeIn(100);
    //audio.play();    

    console.log(userChoosenColor);
})