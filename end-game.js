// variables
const usernameEl = document.getElementById('username');
const saveScoreBtnEl = document.getElementById('saveScoreBtn');
const finalScoreEl = document.getElementById('finalScore');
const mostRecentScoreEl = localStorage.getItem('mostRecentScore');
finalScoreEl.innerText = `Score: ${mostRecentScoreEl} points`;
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// listener event
usernameEl.addEventListener('keyup', () =>{
    saveScoreBtnEl.disabled = !usernameEl.value;
});

// function to save high score when event is triggered
saveHighScore = e => {
    e.preventDefault();

// score Object
    const score = {
        score:mostRecentScoreEl,
        name: usernameEl.value
    };
// pushes score to high score array
    highScores.push(score);
// sorts highscores
    highScores.sort( (a,b) => b.score - a.score);
// saves top 10 high scores
    highScores.splice(10);
// updates highscores in local storage
    localStorage.setItem('highScores',JSON.stringify(highScores));
// send user to highscores page after save button is clicked
    return window.location.assign("./highscores.html");
};