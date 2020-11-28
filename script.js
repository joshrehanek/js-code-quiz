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
