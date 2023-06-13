let computerScore = 0;
let playerScore = 0;
const playScore_span = document.querySelector('#playScore');
const compScore_span = document.querySelector('#compScore');

const scoreBoard = document.querySelector('.score_board');
const resultDom = document.querySelector('p');


const selection = document.getElementById('r')
const rockDom = document.querySelector('.rockbtn');
const paperDom = document.querySelector('.paperbtn');
const scissorsDom = document.querySelector('.scissorsbtn');

function getComputerChoice(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
getComputerChoice();

function wins(playerChoice, computerChoice){
  playerScore++;
  playScore_span.innerHTML = playerScore;
  compScore_span.innerHTML = computerScore;
  resultDom.innerHTML = (playerChoice) +' beats '+ (computerChoice) + '. You win!';
  
}

function lose(playerChoice, computerChoice){
  computerScore++;
  playScore_span.innerHTML = playerScore;
  compScore_span.innerHTML = computerScore;  
  resultDom.innerHTML = (computerChoice) +' beats '+ (playerChoice) + '. You lose!';
}

function draw(playerChoice, computerChoice){
  resultDom.innerHTML = playerChoice +' equals '+ computerChoice + '. A draw!';
  
}


function game(playerChoice){
  const computerChoice = getComputerChoice();
  switch(playerChoice + computerChoice){
    case 'paperrock':
    case 'rockscissors':
    case 'scissorspaper':
      wins(playerChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      lose(playerChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(playerChoice, computerChoice);
      break;
  }
}

function main(){
  rockDom.addEventListener('click', function() {
    game('rock');
  })
  paperDom.addEventListener('click', function() {
    game('paper');
  })
  scissorsDom.addEventListener('click', function() {
    game('scissors');
  })
}
main();