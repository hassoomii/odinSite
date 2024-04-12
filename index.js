const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const playerGamesWon = document.getElementById('playerGamesWon');
const compGamesWon = document.getElementById('compGamesWon');
let playerChoice = 0;
let compChoice = 0;

function inputCheck(){
    compChoice = Math.floor((Math.random() * 3) + 1)
    
}
rockButton.addEventListener('click', () => {
    inputCheck();
});

paperButton.addEventListener('click', () => {
    playerScore.textContent ++ ;
});

scissorButton.addEventListener('click', () => {
    playerScore.textContent ++ ;
});
