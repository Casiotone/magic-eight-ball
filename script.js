$(document).ready(function(){

    $("#ballOtherSide").hide();
    $("#answerText").hide();
    var questionButton = document.getElementById("questionButton");

    var magic8Ball = {};

    magic8Ball.listofanswers = ["It is certain.", "It is decidedly so.", "Without a doubt.",
        "Yes, definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.",
        "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
        "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
        "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.",
        "Very doubtful."];

    magic8Ball.getAnswer = function(question){
        var randomNumber = Math.random();
        var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
        var answer = this.listofanswers[randomAnswer];
        $('#answerText').text(answer);
    };


    var askQuestion = function(event) {
        // change to 8 ball side
        $("#8ball").show();
        $("#ballOtherSide").hide();
        $("#answerText").hide();
        var inputQuestion = prompt("What is your question?");
        // change to answer side with delay
        $("#8ball").effect( "shake" );
        setTimeout(
            function() {

                $("#8ball").hide();
                $("#ballOtherSide").show(); //attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        }, 500);
        if (inputQuestion != null) {
            magic8Ball.getAnswer(inputQuestion);
            $("#answerText").fadeIn(4000);
        }
    };

    questionButton.addEventListener("click", askQuestion);
});
