$(document).ready(function() {
    // vars
    var wins = 0;
    var losses = 0;
    var score = 0;
    var number;
    var greenNumber;
    var blueNumber;
    var redNumber;
    var purpleNumber;

    // generating numbers for the crystals
    function theNumbers() {
        number = Math.floor(Math.random() * 120) +19;
        greenNumber =  Math.ceil(Math.random() * 12);
        blueNumber =  Math.ceil(Math.random() * 12);
        redNumber =  Math.ceil(Math.random() * 12);
        purpleNumber =  Math.ceil(Math.random() * 12);
    }

    //game reset/startup
    function reset() {
        theNumbers();
        score = 0;
        $("#thenumber").text(number);
        $("#score").text(score);
        $("#green").attr("data-crystalnumber", greenNumber);
        $("#blue").attr("data-crystalnumber", blueNumber);
        $("#red").attr("data-crystalnumber", redNumber);
        $("#purple").attr("data-crystalnumber", purpleNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#gameVerdict").text("");
    }
    //winner function
    function winner() {
        $("#gameVerdict").text("Winner!");
        wins++;
        $("#wins").text(wins);
    }
    //loser function
    function loser() {
        $("#gameVerdict").text("Loser!");
        losses++;
        $("#losses").text(losses);
    }
    reset();
    //adding/winnerdetermination function
    $(".crystalPic").on("click", function() {
        if (score >= number) {
            return;
        }
        var crystalNumber = $(this).attr("data-crystalnumber");
        crystalNumber = parseInt(crystalNumber);
        score  += crystalNumber;
        $("#score").text(score);
        if (score === number) {
            winner();
        } else if (score >  number)  {
            loser();
        }
    })
    //button reset function
    $(".btn").on("click", function() {
        reset();
    })
}) 