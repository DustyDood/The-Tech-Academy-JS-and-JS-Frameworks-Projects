/** The Game Rules **/

$(function() {
    var colors = $("#colors li");
    var mainColor = $("#main");
    var start = $("#start");
    var gameState = "waiting";
    var gameSequence = new Array();
    var level = 1;
    var t;
    var flashNo;
    var clickedNo;
    var setupLightSequence = function() {
        var randomNum = Math.floor(Math.random() * 4);
        gameSequence[level-1] = randomNum;
        showLightSequence();

    };
    var lightOn = function(no) {
        colors.eq(gameSequence[no]).addClass('on');
        let audio = new Audio("./Audio/Note" + gameSequence[no] +".wav");
        audio.volume = 0.25;
        audio.play();

    };

    var lightOff = function() {
        colors.removeClass('on');
    }

    var showLightSequence = function() {
        lightOff();

        if(flashNo < level) {
            var on = setTimeout(function() {
                var off = setTimeout(function() {
                    //Ah here's the problem!!!
                    //showLightSequence was calling itself before incrementing flashNo,
                    //causing it to loop on itself and throw errors. Switched the lines and it's fine.
                    flashNo++;
                    showLightSequence();
                }, 500);
                lightOn(flashNo);
            }, 500);
        }
        else {
            gameState = "playing";
            $("body").addClass("playing");
            start.text("Your turn...");
            clearTimeout(on);
        }
    };

    colors.click(function() {
        if(gameState == "playing") {
            var selectedSquare = $(this).index();
            var selectedColor = $(this).css('background-color');

            $(this).fadeOut();
            $(this).fadeIn();

            if (gameSequence[clickedNo] == selectedSquare) {
                if(clickedNo == level - 1) {
                    gameState = 'waiting';
                    $('body').removeClass("playing");
                    start.text("Well DONE. Go to the next level >");
                    level++;
                }

                lightOn(clickedNo);
                var off = setTimeout(function() {
                    lightOff();
                    clickedNo++;
                }, 200);
            }

            else {
                gameState = "waiting";
                $("body").removeClass("playing");
                start.text("GAME OVER. Try again?");
                $("body").removeClass("playing").addClass("game-over");
                gameSequence = new Array();

                level = 1
            }
        }
    });

    var init = function() {
        $("#level").text("Level " + level);
        flashNo = 0;
        clickedNo = 0;
        $("#colors").animate(
            {opacity: "1"}
            );
        $(this).text("Simon says...");
        $("body").removeClass("game-over");
        setupLightSequence();
    }
    start.click(init);
});