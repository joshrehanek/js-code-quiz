const usernameEl = document.getElementById('username');
const saveScoreBtnEl = document.getElementById('saveScoreBtn');
const finalScoreEl = document.getElementById('finalScore');
const mostRecentScoreEl = localStorage.getItem('mostRecentScore');
finalScoreEl.innerText = mostRecentScoreEl;

usernameEl.addEventListener('keyup', () =>{
    saveScoreBtnEl.disabled = !usernameEl.value;
    console.log(usernameEl.value)
});

saveHighScore = e => {
    console.log('clicked')
    e.preventDefault();
}