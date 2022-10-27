let playerSelection = "rock";
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let arrOfChoices = [`rock`, `paper`, `scissors`];
  let randomNum = Math.floor(Math.random() * arrOfChoices.length);
  let computerSelection = arrOfChoices[randomNum];
  return computerSelection;
}
getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === `rock` && computerSelection === `rock`) {
    return `You both played rock, It's a draw`;
  } else if (playerSelection === `rock` && computerSelection === `paper`) {
    computerScore++;
    return `You lost, paper wraps rock`;
  } else if (playerSelection === `rock` && computerSelection === `scissors`) {
    playerScore++;
    return `You win! rock breaks scissors`;
  } else if (playerSelection === `paper` && computerSelection === `rock`) {
    playerScore++;
    return `You win! paper wraps rock!`;
  } else if (playerSelection === `paper` && computerSelection === `paper`) {
    return `You both played paper, It's a draw`;
  } else if (playerSelection === `paper` && computerSelection === `scissors`) {
    computerScore++;
    return `You lost! scissors cut paper`;
  } else if (playerSelection === `scissors` && computerSelection === `rock`) {
    computerScore++;
    return `You lost! rock breaks scissors`;
  } else if (playerSelection === `scissors` && computerSelection === `paper`) {
    playerScore++;
    return `You Win! scissors cut paper`;
  } else if (
    playerSelection === `scissors` &&
    computerSelection === `scissors`
  ) {
    return `You both choose scissors! it's a draw`;
  }
}
const game = function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Please choose "Rock","Paper" or "Scissors".`
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return `===========You win! Congratulations!===========`;
  } else if (computerScore > playerScore) {
    return `===========You lost! try again!===========`;
  } else {
    return `===========It's a draw===========`;
  }
};
console.log(game());
