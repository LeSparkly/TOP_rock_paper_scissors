let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const humanScoreDisplay = document.querySelector(".player.score");
const computerScoreDisplay = document.querySelector(".computer.score");
const humanMoveDisplay = document.querySelector(".human.move");
const computerMoveDisplay = document.querySelector(".computer.move");
let roundWinnerDisplay = document.querySelector(".round.winner");

const playButton = document.querySelector(".play.button");

playButton.addEventListener("click", () => {
  playGame();
});

rockButton.addEventListener("click", () => {
  playRound("Rock");
});
scissorsButton.addEventListener("click", () => {
  playRound("Scissors");
});
paperButton.addEventListener("click", () => {
  playRound("Paper");
});

function playGame() {
  humanScore = 0;
  computerScore = 0;
  updateScores();
}

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "Rock";
  } else if (randomNumber >= 0.67) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function updateScores() {
  humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  humanMoveDisplay.textContent = `You chose: ${humanChoice}`;
  computerMoveDisplay.textContent = `Computer chose: ${computerChoice}`;

  if (humanChoice === computerChoice) {
    roundWinnerDisplay.textContent = "This round is a tie!";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundWinnerDisplay = "You win this round!";
    humanScore++;
  } else {
    roundWinnerDisplay.textContent = "You lose this round!";
    computerScore++;
  }
  updateScores();
  if (humanScore >= 5) {
    alert("You win!");
  } else if (computerScore >= 5) {
    alert("You lose!");
  }
}
