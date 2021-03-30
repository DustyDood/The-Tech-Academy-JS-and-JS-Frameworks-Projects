

$("document").ready(function() {

    //Let's make all p's red when doubleclicked
    $("p").dblclick(function() {
        $(this).css("color", "red");
    });

    //Let's hide a certain ID
    $("#special").hide();

    //Having the mouse enter a p will make the bg change to light blue.
    $(".container").mouseenter(function() {
        $(this).css("background-color", "lightblue");
    });

    //Specific selector for the first child of a ul li.
    $("ul li:first-child").click(function() {
        alert("Hello!");
    });

    //Causing the h1 to change color when hovered
    $("h1").hover(function() {
        $(this).css("color", "brown");
    }, 
    function() {
        $(this).css("color", "grey");
    })

    //Finally, upon exiting the form field, a bunch of stuff happens
    $("input").blur(function() {
        $(this).fadeOut(1000, function() {
            $("#result").show();
        }),
        $("h1").css("background-color", "black");

    });

    //Practicing toggling
    $("#togglefun").click(function() {
        $("#toggleresult").toggle();
    })

    //Practicing sliding
    $("#slideMeDown").click(function() {
        $("#slideResult").slideDown(2500);
    })

    //Stopping the soliding 
    $("#slideMeNot").click(function() {
        $("#slideResult").stop();
    })

    //Practice animating and method chaining
    $("#animationStation").click(function() {
        $(this).animate({
            opacity: '0',
        }).animate({
            opacity: '1',
        });
    });

    //Practicing text()
    $("#repetition").click(function() {
        //Exponential fun!
        $(this).append($(this).text());
    })

    //Practicing attr()
    $("#hiddenCheck").click(function() {
        alert($("#repetition").attr("id"));
    });


})

