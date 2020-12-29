// DOM manipulation elements 
const questionTitle = document.getElementById("question");
const timeEl = document.querySelector(".time")
const answerZoneEl = document.getElementById("answer-zone");
const rightWrongEl = document.querySelector("#right-wrong");

// Initial variables
let currentQuestion = {};
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
        //creates a variable element called tempBtn that is a button
        let tempBtn = document.createElement("button");
        //makes the text content of button an answer from my object array
        tempBtn.textContent = answer;
        //sets tempBtn value to answer
        tempBtn.setAttribute('value', answer);
        //sets tempBtn class to 'button-choice'
        tempBtn.setAttribute('class', 'button-choice');
        //when tempBtn is clicked validateAnswer function is triggered
        tempBtn.onclick = validateAnswer;
        //appends each answer in the form of 'tempBtn' to my answer-zone
        answerZoneEl.appendChild(tempBtn);
    });
};
// function to validate answers
function validateAnswer() {
    //if the value of answer does not match the answer listed in the questions objects...
    if (this.value !== questions[questionIndex].answer) {
        //subtract 10 seconds from secondsLeft
        secondsLeft -= 10;
        //display "WRONG" in right-wrong div
        rightWrongEl.textContent = "WRONG";
        //if the value does match...
    } else {
        //displat "RIGHT" in the right-wrong div
        rightWrongEl.textContent = "RIGHT";
    }
    //add 1 to questionIndex
    questionIndex++;
    //setTimeout for 1 second after each question is answered
    setTimeout(function () {
        //restart newQuestion function
        newQuestion();
    }, 1000)

}
//Call startGame function
startGame();