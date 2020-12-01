// DOM manipulation elements 
const questionTitle = document.getElementById("question");
const timeEl = document.querySelector(".time")
const answerZoneEl = document.getElementById("answer-zone");
const rightWrongEl = document.querySelector("#right-wrong");

// Initial variables
let currentQuestion = {};
let unusedQuestions = [];
let questionIndex = 0;
let secondsLeft = 75;

// Questions & Answers Object
let questions = [
    {
        question: "What is the HTML tag used to write Javascript?",
        choices: ["<js>", "<script>", "<java>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "Which of the following is the correct syntax to display 'Yip Yip' in an alert box using JavaScript?",
        choices: ["msg('Yip Yip'); ", "alertbox('Yip Yip'); ", "alert('Yip Yip');", "prompt('Yip Yip');"],
        answer: "alert('Yip Yip');"
    },
    {
        question: "What company invented Javascript?",
        choices: ["Netscape", "Facebook", "Mozilla", "Google"],
        answer: "Netscape"
    },
    {
        question: "Using best practice, how do you create a function in JavaScript?",
        choices: ["function myFunction()", "function = myFunction()", "function myfunction()", "function:myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["if (i == 5)", "if i == 5", "if i = 5", "if i == 5 then"],
        answer: "if (i == 5)"
    },

];
// start game function using fat arrow syntax
const startGame = () => {
// countdown timer 
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `You have ${secondsLeft} seconds left`;

        if (secondsLeft === 0) {
            return window.location.assign("./end-game.html");
        }

    }, 1000);
// triggers newQuestion function
    newQuestion();
};
// New question function
const newQuestion = () => {
// clears innerHTML elements for each new question
    answerZoneEl.innerHTML = '';
    rightWrongEl.innerHTML = '';

    let currentQuestion = questions[questionIndex];
// sends user to end game screen when all questions have been answered
    if (questionIndex === questions.length) {
        localStorage.setItem('mostRecentScore', secondsLeft);
        return window.location.assign("./end-game.html");
    }
// changes text content of questionTitle to currentQuestion
    questionTitle.textContent = currentQuestion.question;
// forEach loop that goes through each answer and sends to validateAnswer fucntion
    currentQuestion.choices.forEach((answer) => {
        let tempBtn = document.createElement("button");
        tempBtn.textContent = answer;
        tempBtn.setAttribute('value', answer);
        tempBtn.setAttribute('class', 'button-choice');
        tempBtn.onclick = validateAnswer;
        answerZoneEl.appendChild(tempBtn);
    });
};
// function to validate answers
function validateAnswer() {
    if (this.value !== questions[questionIndex].answer) {
        secondsLeft -= 10;
        rightWrongEl.textContent = "WRONG";
    } else {
        rightWrongEl.textContent = "RIGHT";
    }
    questionIndex++;
    setTimeout(function () {
        newQuestion();
    }, 1000)

}

startGame();