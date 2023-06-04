
function getComputerChoice(){
  const computerChoices = ["paper", "rock", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  console.log("computer picks : " + computerChoices[choice]);
  return computerChoices[choice];
}

//function getPlayerChoice(){
//  const playerChoice = (prompt('Make your selection!')).toLowerCase();
//  if (playerChoice === 'paper') {
//    console.log('You chose Paper');
//    return 'paper';
//  }else if (playerChoice === 'rock') {
//    console.log('You chose Rock');
//    return 'rock';
//  }else if (playerChoice === 'scissors') {
//    console.log('You chose Scissors');
//    return 'scissors';
//  }else {
//    console.log('Wrong input! Enter a valid choice');
//  }
//}

function playRound() {
  let playerSelection = prompt("make your choice").toLowerCase();
  let computerSelection = getComputerChoice();
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;
  console.log("player picks: " + playerSelection);

  for(i = 0; i < 5; i++){

  if (playerSelection === computerSelection){
   
    console.log('Its a tie!')
    round++;
    console.log(round);
    console.log(playerScore);
    console.log(computerScore)

  }

    else if (playerSelection ==='paper') {
      if (computerSelection === 'rock')  {
        
        console.log('Paper Covers Rock');
        playerScore++;
        round++;
        console.log(round);
        console.log(playerScore);
        console.log(computerScore)

      } else {
       
        console.log('Scissors Cuts paper');
        computerScore++;
        round++;
        console.log(round);
        console.log(playerScore);//capture a dom element// 
        console.log(computerScore)

      }
    }else if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        
        console.log('Rock Breaks Scissors');
        playerScore++;
        round++;
        console.log(round);
        console.log(playerScore);
        console.log(computerScore);

      }else {
        
        console.log('Paper Covers Rock');
        computerScore++;
        round++;
        console.log(round);
        console.log(playerScore);
        console.log(computerScore);
      }
    }else if (playerSelection === 'scissors') {
      if (computerSelection === 'paper') {
        
        console.log('Scissors Cuts paper');
        playerScore++;
        round++;
        console.log(round);
        console.log(playerScore);
        console.log(computerScore);

      }else {

        console.log('Rock breaks Scissors');
        computerScore++;
        round++;
        console.log(round);
        console.log(playerScore);
        console.log(computerScore);

      }
    }else {
      console.log('Try Again');
    }
  }
}




playRound();


//game();