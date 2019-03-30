//Some audio fun
var loseSound =  Audio("assets/audio/whatthehell.mp3"); 
var winSound =  Audio("assets/audio/bigshot.mp3");
var startGameSound =  Audio("assets/audio/letsroll.mp3");

//Variables
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var output;
var answers;
var simpsonsQuotes = [
    {
        quote: "There's only one thing to do at a moment like this: strut!",
        answers: {
            a: "Homer",
            b: "Bart",
            c: "Milhouse"
        },
        correctAnswer: "b"
    },
    {
        quote: "Your ideas are intriguing to me, and I wish to subscribe to your newsletter!",
        answers: {
            a: "Marge",
            b: "Homer",
            c: "Grandpa"
        },
        correctAnswer: "b"
    },
    {
        quote: "I used to be with it, but then they changed what ‘it’ was, and now what I’m with isn’t it. And what’s ‘it’ seems weird and scary to me...it'll happen to YOU!",
        answers: {
            a: "Bart",
            b: "Homer",
            c: "Grandpa"
        },
        correctAnswer: "c"
    },
    {
        quote: "You don’t win friends with salad.",
        answers: {
            a: "Millhouse",
            b: "Homer",
            c: "Bart"
        },
        correctAnswer: "b"
    },
    {
        quote: "What’s the point of going out? We’re just gonna wind up back here anyway. ",
        answers: {
            a: "Homer",
            b: "Marge",
            c: "Grandpa"
        },
        correctAnswer: "a"
    },
    {
        quote: "Shut up, brain! I've got friends now. I don't need you anymore",
        answers: {
            a: "Lisa",
            b: "Milhouse",
            c: "Bart"
        },
        correctAnswer: "a"
    },
    {
        quote: "Stupid bus that can't even go to the stupid place it's supposed to stupid go",
        answers:{
            a: "Grandpa",
            b: "Homer",
            c: "Lisa"
        },
        correctAnswer: "c"
    },
    {
        quote: "It's Lisa...and she looks like Blossom!",
        answers: {
            a: "Bart",
            b: "Homer",
            c: "Milhouse"
        },
        correctAnswer: "c"
    },
    {
        quote: "This is where I go to cry...",
        answers: {
            a: "Lisa",
            b: "Milhouse",
            c: "Marge"
        },
        correctAnswer: "b"
    },
    {
        quote:"'Ore..gano..' what the hell?",
        answers: {
            a: "Marge",
            b: "Homer",
            c: "Grandpa",
        },
        correctAnswer: "a"
    },
    {
        quote: "Just because you're a lesbian, it doesn't make you less of a bein'.",
        answers: {
            a: "Lisa",
            b: "Grandpa",
            c: "Marge"
        },
        correctAnswer: "c"
    }
];

//Functions
function buildQuiz() {
    output = [ ];
    simpsonsQuotes.forEach(
        (currentQuestion, questionNumber) {
            answers = [ ];
            for (letter in currentQuestion.answers){
                answers.push(
                <label>
                    <input type = "radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}</input>
                    </ label>
                );
            } 
    output.push(
    <div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join(' ')}</div>
    );
    }
    );
    quizContainer.innerHTML = output.join(' ');
}

//function showResults(params) {}
buildQuiz (); //load quiz

submitButton.addEventListener('click', showResults); //click submit, show results!



  //pseudocode
  //page loads and score is set to 0, buttons are unclicked
  //one quote + 3 options (buttons that say a, b, c
  //Questions


