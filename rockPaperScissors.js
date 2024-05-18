let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const humanScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
console.log(computerScoreDisplay);

const playButton = document.querySelector(".play-button");
const buttonSpan = document.querySelector(".buttons");

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
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You win");
    humanScore++;
  } else {
    console.log("You lose");
    computerScore++;
  }
  updateScores();
  if (humanScore >= 5) {
    alert("You win!");
  } else if (computerScore >= 5) {
    alert("You lose!");
  }
}
