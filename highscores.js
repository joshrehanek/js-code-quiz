// variables
const highScoresListEl = document.getElementById('highScoresList');
const highScoresEl = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScoresEl)

// Map object holds key-value pairs and remembers the original insertion order of the keys.
// returns list of high scores in the HTML's innertext
highScoresListEl.innerHTML =
    highScoresEl.map(score => {
        // uses 'template literal' to return ouput strings with values
        return `<li class='high-score'>${score.name}-${score.score}</li>`;
    }) 
    // joins list info
        .join('');



