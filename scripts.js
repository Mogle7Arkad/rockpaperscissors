function checkGameResult(){
    if(playerScore > computerScore){
        console.log('You Win.');
        disableButton();
        reset();
    } else{
        console.log('Computer wins.');
        disableButton();
        reset();        
    }
    updateScoreBoard();
}

function updateScoreBoard(){
    const playerScore = document.querySelector('.player');
    const computerScore = document.querySelector('.computer');

    playerScore.textContent =`Player Score: ${playerWins}`;
    computerScore.textContent = `Computer Score: ${computerWins}`;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
}
//naming userbuttons to add event
const rockButton = document.querySelector('.rockbtn');
const paperButton = document.querySelector('.paperbtn');
const scissorsButton = document.querySelector('.scissorsbtn');

//tags to update scoreboard, round and declear winner
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');


//const round = document.querySelector('.round');
//round.textContent = `${jnx}`

//reset button to restart new game
function reset(){
const resetButton = document.querySelector('.resetbtn');
resetButton.addEventListener('click', () => {
    location.reload();
})
}

function disableButton(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

rockButton.addEventListener('click', () => {
    console.log('Rock!');
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(computerSelection, playerSelection);
})

paperButton.addEventListener('click', () => {
    console.log('Paper!');
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(computerSelection, playerSelection);
})

scissorsButton.addEventListener('click', () => {
    console.log('Scissors!');
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(computerSelection, playerSelection);
})