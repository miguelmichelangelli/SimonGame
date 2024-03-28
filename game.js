var buttonColours= ["red", "blue", "green", "yellow"];
var gamePattern= [];
var userClickedPattern= [];
var level= 0;
var started= false;

$(document).keydown(function(){
    if(!started){
        started= true;
        nextSecuence();
    }
})

function nextSecuence(){
    var randomNumber= Math.floor(Math.random()*4);
    var randomChoosenColour= buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);

    $("h1").text("Level " + level)

    $("#" + randomChoosenColour).fadeOut(100).fadeIn(100);
    
    playSound(randomChoosenColour);

    level++;

    console.log(gamePattern);
    userClickedPattern= [];
}

$(".btn").on("click", function(){
    var userChoosenColor= $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    
    playSound(userChoosenColor);
    animatePress(userChoosenColor);

    var index= userClickedPattern.length;

    checkAnswer(index);
    console.log(index);

})

function playSound(name){
    var audio= new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function startOver(){
    started= false;
    gamePattern= [];
    level= 0;
}

function checkAnswer(index){
    lugar = index-1
    if(gamePattern[lugar] === userClickedPattern[lugar]){
        
        if(index === gamePattern.length){
        setTimeout(function(){
            nextSecuence();
        }, 1000);
        }          
    }
    else{
        $("body").addClass("game-over");
        playSound("wrong");

        $("#level-title").text("Game Over, PressAny Key To Restart.");

        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}
