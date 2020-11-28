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
        question: "Who invented JS?",
        answer1: "Me",
        answer2: "Kels",
        answer3: "Einstein",
        answer4: "Mika",
        answer: 2
    },
    {
        question: "How many leters in the alphabet?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        answer: 3
    }, 
    {
        question: "why do fools fall in love?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        answer: 4
    },
    {
        question: "did godzilla exist?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        answer: 2
    },
    {
        question: "could he beat up harry potter?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
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