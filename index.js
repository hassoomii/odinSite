const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const playerScore = document.getElementById('playerScore');
const compScore = document.getElementById('compScore');
const playerGamesWon = document.getElementById('playerGamesWon');
const compGamesWon = document.getElementById('compGamesWon');
let playerChoice = 0;
let compChoice = 0;

function winnerCheck(){
    if (parseInt(playerScore.textContent) === 5){
        playerGamesWon.textContent ++ ;
        playerScore.textContent = 0;
        compScore.textContent = 0;
    } else if (parseInt(compScore.textContent) === 5){
        compGamesWon.textContent ++ ;
        playerScore.textContent = 0;
        compScore.textContent = 0;
    }
}

function inputCheck(){
    compChoice = Math.floor((Math.random() * 3) + 1)
    if ((playerChoice === 1) && (compChoice === 2)){
        compScore.textContent ++ ;
        winnerCheck();
    } else if ((playerChoice === 1) && (compChoice === 3)){
        playerScore.textContent ++ ;
        winnerCheck();
    } else if ((playerChoice === 2) && (compChoice === 1)){
        playerScore.textContent ++ ;
        winnerCheck();
    } else if ((playerChoice === 2) && (compChoice === 3)){
        compScore.textContent ++ ;
        winnerCheck();
    } else if ((playerChoice === 3) && (compChoice === 1)){
        compScore.textContent ++ ;
        winnerCheck();
    } else if ((playerChoice === 3) && (compChoice === 2)){
        playerScore.textContent ++ ;
        winnerCheck();
    } else if (playerChoice === compChoice){
        playerScore.textContent ++ ;
        compScore.textContent ++ ;
        winnerCheck();
    }
}

rockButton.addEventListener('click', () => {
    playerChoice = 1;
    inputCheck();
});

paperButton.addEventListener('click', () => {
    playerChoice = 2;
    inputCheck();
});

scissorButton.addEventListener('click', () => {
    playerChoice = 3;
    inputCheck();
});
