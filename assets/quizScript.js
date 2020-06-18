var myQuestions = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Human Text Master Language",
        c: "Hastey Typeup Mark Language",
        answer: "A"
    },

    {
        question: "What HTML tag must we use in order to write JavaScript Code?",
        a: "js",
        b: "javascript",
        c: "script",
        answer: "C"
    },
    {
        question: "Which of the following uses correct syntax when referring to an external fun.js script?",
        a: "script src=”fun.js”",
        b: "script href=”fun.js”",
        c: "script ref=”fun.js”",
        answer: "A"

    },
    {
        question: "Which of the following is used to call a function in JavaScript?",
        a: "call function()",
        b: "function()",
        c: "cfunction function()",
        answer: "B"
    },
    {
        question: "Which of the following is not one of the three main web development languages?",
        a: "HTML",
        b: "CSS",
        c: "Angular",
        answer: "C"
    },
    {
        question: "Which if the following is used to open a message screen when a page is loaded?",
        a: "message()",
        b: "alert()",
        c: "ping()",
        answer: "B"
    }

];


var question = 0;
var userPos = 0;
var userAns = 0;
var possibleAns = 0;
var ansA = 0;
var ansB = 0;
var ansC = 0;
var quiz = 0;
var userScore = 0

var timeElement = document.querySelector("#time");
var secondsLeft = 120;

//call the setTime and startQuiz function

setTime();
startQuiz();

//Function to start the timer and have it countdown from 2 minutes, if it hits 0 calls the showEndScreen function

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeElement.textContent = secondsLeft + " seconds remaining.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            showEndScreen();
        }


    }, 1000);
}

//Function to start the quiz and display the first question once page loads

function startQuiz() {
    var quiz = document.getElementById("quizQuestions");
    if (userPos >= myQuestions.length) {
        showEndScreen();
    }

    
    document.getElementById("quizPos").innerHTML = "Question " + (userPos + 1) + " of " + myQuestions.length;

    question = myQuestions[userPos].question;
    var ansA = myQuestions[userPos].a;
    var ansB = myQuestions[userPos].b;
    var ansC = myQuestions[userPos].c;

    quiz.innerHTML += "<h3>" + question + "</h3>";
    quiz.innerHTML += "<label> <input type ='radio' name='possibleAns' value='A'> " + ansA + "</label><br>";
    quiz.innerHTML += "<label> <input type ='radio' name='possibleAns' value='B'> " + ansB + "</label><br>";
    quiz.innerHTML += "<label> <input type ='radio' name='possibleAns' value='C'> " + ansC + "</label><br>";
    quiz.innerHTML += "<button onclick='checkAns()'>Submit Answer</button>";
    
}

//Function to check the answer that the user inputs, if correct adds +1 to the user's score and updates the user's position to correctly display what question # they are at

function checkAns() {
    possibleAns = document.getElementsByName("possibleAns");
    for (var i = 0; i < possibleAns.length; i++) {
        if (possibleAns[i].checked) {
            var userAns = possibleAns[i].value;
        }
    }

    if (userAns == myQuestions[userPos].answer) {
        userScore++;

    } else {
        secondsLeft = secondsLeft - 10;
    };

    userPos++;
    
    startQuiz();
}

//Function that brings up the end screen that will hold their score and allow them to enter initials

function showEndScreen() {
    timeElement.textContent = " ";
}


