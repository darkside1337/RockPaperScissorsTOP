let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("input");
const roundDiv = document.querySelector(".roundScore");
const finalResult = document.querySelector(".Scores");

function getComputerChoice() {
  let arrOfChoices = [`rock`, `paper`, `scissors`];
  let randomNum = Math.floor(Math.random() * arrOfChoices.length);
  let computerSelection = arrOfChoices[randomNum];
  return computerSelection;
}
const checkWinner = function (playerScore, computerScore) {
  if (computerScore === 5) {
    finalResult.textContent = "The computer has won! try again.";
    disableButtons();
  } else if (playerScore === 5) {
    finalResult.textContent = "Congratulations, you won!";
    disableButtons();
  }
};

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  checkWinner(playerScore, computerScore);
  if (playerSelection === `rock` && computerSelection === `rock`) {
    roundDiv.textContent = `You both played rock, It's a draw`;
  } else if (playerSelection === `rock` && computerSelection === `paper`) {
    computerScore++;
    roundDiv.textContent = `You lost, paper wraps rock`;
  } else if (playerSelection === `rock` && computerSelection === `scissors`) {
    playerScore++;
    roundDiv.textContent = `You win! rock breaks scissors`;
  } else if (playerSelection === `paper` && computerSelection === `rock`) {
    playerScore++;
    roundDiv.textContent = `You win! paper wraps rock!`;
  } else if (playerSelection === `paper` && computerSelection === `paper`) {
    roundDiv.textContent = `You both played paper, It's a draw`;
  } else if (playerSelection === `paper` && computerSelection === `scissors`) {
    computerScore++;
    roundDiv.textContent = `You lost! scissors cut paper`;
  } else if (playerSelection === `scissors` && computerSelection === `rock`) {
    computerScore++;
    roundDiv.textContent = `You lost! rock breaks scissors`;
  } else if (playerSelection === `scissors` && computerSelection === `paper`) {
    playerScore++;
    roundDiv.textContent = `You Win! scissors cut paper`;
  } else if (
    playerSelection === `scissors` &&
    computerSelection === `scissors`
  ) {
    roundDiv.textContent = `You both choose scissors! it's a draw`;
  }
}

/* const game = function game() {
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
*/
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(`${playerScore}, ${computerScore}`);
    playRound(button.value);
  });
});
function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}
