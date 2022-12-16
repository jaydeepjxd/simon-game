$("body").keypress(function () { 
        startgame();
    });

function random () {
    var rand = Math.floor( (Math.random() * 4) + 1);
    switch (rand) {
        case 1:
            return "green";
        break;
        case 2:
            return "red";
        break;
        case 3:
            return "yellow";
        break;
        case 4:
            return "blue";
        break;
    }
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

    $("body").keypress(function () { 
        startgame();
    });
}

function startgame () {
    
    let sequence = [];
    
    for(var level = 1; level < 100 ; level++) {

        $("#level-title").html("level " + level);
    
        var rand1 = random(); //give green, blue,...
        animate(rand1);
        sequence[level-1] = rand1;

        for(var i=0; i < sequence.length; i++) {

            $(".btn").click( function() {
                if (this.attr('id') = sequence[i]) {
                    alert($(this).attr('id'));
                    animate($(this).attr('id'));
                    alert("yes");
                }
                else {
                    gameover();
                    
                }
            }); 
    
        } //inner for loop ends

    } //outer for loop ends

}   //startgame function ends

