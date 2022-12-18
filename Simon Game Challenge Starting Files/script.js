var gameseq = [];  
var userseq = [];
var buttons = ["green", "red", "yellow", "blue"];
var level = 0;
var started = false;

$("body").keypress(function () { 
       if(!started) {
        $("#level-title").text("Level " + level);
        nextseq();
        started = true;
    } 
});

$(".btn").click(function() {
    var input = $(this).attr("id");
    userseq.push(input);
    animate(input);
    check(userseq.length - 1);
});

function check(currentnode) {

    if(userseq[currentnode] === gameseq[currentnode]) {
        if(userseq.length === gameseq.length) {
            setTimeout(function () {
                nextseq();
              }, 1000);
        }
    }
    else {
        gameover()
    }

}

function nextseq() {
    userseq = [];
    level++;
    $("#level-title").text("level " + level);

    var rand1 = random(); //give green, blue,...
    gameseq.push(rand1);
    animate(rand1);
}

function random () {
    var rand = Math.floor( (Math.random() * 4));
    return(buttons[rand]);
}

function animate (btn) {
    var sound = new Audio("sounds/" + btn + ".mp3");
    sound.play();
    
    $("#" + btn).addClass("pressed");

    setTimeout( function() {
        $("#" + btn).removeClass("pressed");
    }, 100);
}

function gameover () {
    
    var sound = new Audio("sounds/wrong.mp3");
    sound.play();

    $("body").addClass("game-over");

    setTimeout( function() {
        $("body").removeClass("game-over");
    }, 100);

    $("#level-title").html("Game Over, Press Any Key To Restart.");

    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}





