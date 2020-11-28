// DOM manipulation elements 
const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName('answer-text'));
const timeEl = document.querySelector(".time")

// Initial variables
let currentQuestion = {};
let acceptAnswers = false; 
let unusedQuestions = [];
const correctPoints = 10;
const wrongPoints = -15;

// Questions & Answers Object
let questions = [
    {
        question: "WHat is the HTML tag used to write Javascript?",
        answer1: "<js>",
        answer2: "<script>",
        answer3: "<java>",
        answer4: "<javascript>",
        answer: 2
    },
    {
        question: "Which of the following is the correct syntax to display 'Yip Yip' in an alert box using JavaScript?",
        answer1: "msg(“Yip Yip”);",
        answer2: "alertbox(“Yip Yip”);",
        answer3: "alert(“Yip Yip”);",
        answer4: "prompt(“Yip Yip”);",
        answer: 3
    }, 
    {
        question: "What is the correct syntax for referring to an external script called 'avatar.js'?",
        answer1: "<script name=”avatar.js”>",
        answer2: "<script href=”avatar.js”>",
        answer3: "<script ref=”avatar.js”>",
        answer4: "<script src=”avatar.js”>",
        answer: 4
    },
    {
        question: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
        answer1: "document.getElement(“avatar”).innerHTML=”I am the last airbender”;",
        answer2: " document.getElementById(“avatar”).innerHTML=”I am a the last airbender”;",
        answer3: "document.getId(“avatar”)=”I am a the last airbender”;",
        answer4: "document.getElementById(“avatar”).innerHTML=I am a the last airbender;",
        answer: 2
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        answer1: "concat()",
        answer2: "append()",
        answer3: "attach()",
        answer4: "toLowerCase",
        answer: 1
    },
];

// start game function using fat arrow syntax
startGame = () => {
    let secondsLeft = 75;
    questionCounter = 0;

        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft + " seconds left";
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
          }
      
        }, 1000);
// uses spread operator to get a full copy questions from the array
    unusedQuestions = [...questions];
    console.log(unusedQuestions);
    newQuestion();
};
// New question function
newQuestion = () => {

    if (unusedQuestions.length === 0) {
        return window.location.assign("./end-game.html");
    }
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * unusedQuestions.length);
    console.log(questionIndex);
    currentQuestion = unusedQuestions[questionIndex];
    question.innerText = currentQuestion.question; 

    answers.forEach((answer) => {
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion["answer" + number];
        console.log(number);
    });

    unusedQuestions.splice(questionIndex, 1);
    acceptAnswers = true;
};

answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        if(!acceptAnswers) return;

        acceptAnswers = false;
        const choiceSelected = e.target;
        const answerSelected = choiceSelected.dataset["number"];
        console.log(answerSelected);
        newQuestion();
    });
});

startGame();