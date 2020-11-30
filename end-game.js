const usernameEl = document.getElementById('username');
const saveScoreBtnEl = document.getElementById('saveScoreBtn');
const finalScoreEl = document.getElementById('finalScore');
const mostRecentScoreEl = localStorage.getItem('mostRecentScore');
finalScoreEl.innerText = `You scored ${mostRecentScoreEl} points`;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);

usernameEl.addEventListener('keyup', () =>{
    saveScoreBtnEl.disabled = !usernameEl.value;
    console.log(usernameEl.value)
});

saveHighScore = e => {
    console.log('clicked')
    e.preventDefault();

    const score = {
        score:mostRecentScoreEl,
        name: usernameEl.value
    };
    
    highScores.push(score);

    highScores.sort( (a,b) => b.score - a.score);

    highScores.splice(10);
    
    console.log(score);
};