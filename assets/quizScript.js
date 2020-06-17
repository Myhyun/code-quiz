var myQuestions = [
    {
        question: "What does HTML stand for?",
        A: "Hyper Text Markup Language",
        B: "Human Text Master Language",
        C: "Hastey Typeup Mark Language",
        answer: "A"
    },

    {
        question: "What HTML tag must we use in order to write JavaScript Code?",
        A: "<js>",
        B: "<javascript",
        C: "<script>",
        answer: "C"
    },
    {
        question: "Which of the following uses correct syntax when referring to an external fun.js script?",
        A: "<script src=”fun.js”>",
        B: "<script href=”fun.js”>",
        C: "<script ref=”fun.js”>",
        answer: "A"

    },
    {
        question: "Which of the following is used to call a function in JavaScript?",
        A: "call function()",
        B: "function()",
        C: "cfunction function()",
        answer: "B"
    },
    {
        question: "Which of the following is not one of the three main web development languages?",
        A: "HTML",
        B: "CSS",
        C: "Angular",
        answer: "C"
    },
    {
        question: "Which if the following is used to open a message screen when a page is loaded?",
        A: "message()",
        B: "alert()",
        C: "ping()",
        answer: "B"
    }

];



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


setTime();
startQuiz();

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

function startQuiz() {
    quiz = document.getElementById("quizQuestions");
    if(userPos >= myQuestions.length) {
        showEndScreen();
    }

    document.getElementById("quizPos").innerHTML = "Question "+(userPos+1)+" of "+myQuestions.length;

    question = myQuestions[userPos].question;
    ansA = myQuestions[userPos].A;
    ansB = myQuestions[userPos].B;
    ansC = myQuestions[userPos].C;

    quiz.innerHTML += "<h3>" +question+ "</h3>";
    quiz.innerHTML += "<label> <input type ='radio' name='possibleAns' value='A'> " + ansA + "</label><br>";
    quiz.innerHTML += "<label> <input type ='radio' name='possibleAns' value='B'> " + ansB + "</label><br>";
    quiz.innerHTML += "<label> <input type ='radio' name='possibleAns' value='C'> " + ansC + "</label><br>";
    quiz.innerHTML += "<button onclick='checkAns()'>Submit Answer</button>";

}

function checkAns() {
    possibleAns = document.getElementsByName("possibleAns");
    for (var i = 0; i< possibleAns.length; i++) {
        if(possibleAns[i].checked) {
            userAns = possibleAns[i].value;
        }
    }

    if (userAns == myQuestions[userPos].answer) {
        userScore++;
    }
    userPos++;

    startQuiz();
}










function showEndScreen() {
    timeElement.textContent = " ";
}


