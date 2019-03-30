$(document).ready(function () {
  //variables
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 11;
    var intervalID;
    var indexQandA = 0; //rotates through quotes
    var answered = false; //stops timer at click
    var correct;
    var simpsonsQuotes = [
    {
        quote: "Just because you're a lesbian, it doesn't make you less of a bein'.",
        answer: ["Lisa","Grandpa","Marge"],
        correct: "2",
        image:("assets/images/marge.png")
    },
    {
        quote: "There's only one thing to do at a moment like this: strut!",
        answer: ["Homer","Bart","Milhouse"],
        correct:"1",
        image:("assets/images/bart.png")
    },
{
    quote: "Your ideas are intriguing to me, and I wish to subscribe to your newsletter!",
    answer: ["Marge","Homer","Grandpa"],
    correct: "1",
    image:("assets/images/homer.png")
},
{
    quote: "I used to be with it, but then they changed what ‘it’ was, and now what I’m with isn’t it. And what’s ‘it’ seems weird and scary to me...it'll happen to YOU!",
    answer: ["Bart","Homer","Grandpa"],
    correct: "2",
    image:("assets/images/grandpa.png")
},
{
    quote: "You don’t win friends with salad.",
    answer: ["Millhouse","Homer","Bart"],
    correct: "1",
    image:("assets/images/homer.png")
},
{
    quote: "What’s the point of going out? We’re just gonna wind up back here anyway. ",
    answer: ["Homer","Marge", "Grandpa"],
    correct: "0",
    image:("assets/images/homer.png")
}];

   //functions
    function startGame() {
        console.log("game on");
        $('.start-button').remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false; 
        timeRemaining = 16;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = simpsonsQuotes[indexQandA].correct;
        var quote = simpsonsQuotes[indexQandA].quote;
        $('.quote').html(quote);
        for (var i = 0; i < 3; i++) {
            var answer = simpsonsQuotes[indexQandA].answer[i];
            $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id === correct) {
                answered = true; // ends timer
                $('.quote').text("Quote by: " + simpsonsQuotes[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true; //ends  timer
                $('.quote').text("You picked  " + simpsonsQuotes[indexQandA].answer[id] + ".  That's Right! " + simpsonsQuotes[indexQandA].answer[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.quote').text("Woo Hoo! The answer is: " + simpsonsQuotes[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('Okily dokily, you have ' + timeRemaining + ' seconds!');
        }
    }

    function correctAnswer() {
        correctAnswers++;
        $('.timeRemaining').text("Cowabunga! Right!").css({
            'color': '#3D414F'
        });
        resetRound();
    }

    function incorrectAnswer() {
        incorrectAnswers++;
        $('.timeRemaining').text("Time's atickin'!").css({
            'color': '#3D414F'
        });
        resetRound();

    }

    function unAnswered() {
        unansweredQuestions++;
        $('.timeRemaining').text("No guess? Booooourrrrnssss.").css({
            'color': '#3D414F'
        });
        resetRound();
    }

    function resetRound() {
        $('.answersAll').remove();
        $('.answers').append('<img class=answerImage width="150" height="150" src="' + simpsonsQuotes[indexQandA].image + ' ">'); //simpsons pic
        indexQandA++; // next quote
        if (indexQandA < simpsonsQuotes.length) {
            setTimeout(function () {
                loadQandA();
                $('.answerImage').remove();
            }, 5000); // clear the old image
        } else {
            setTimeout(function () {
                $('.quote').remove();
                $('.timeRemaining').remove();
                $('.answerImage').remove();
                $('.answers').append('<h4 class= answersAll end>Right: ' + correctAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>Wrong: ' + incorrectAnswers + '</h4>');
                $('.answers').append('<h4 class= answersAll end>Skipped: ' + unansweredQuestions + '</h4>');
                setTimeout(function () {
                    location.reload();
                }, 7000);
            }, 5000);
        }
    };

    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();

    });

});
