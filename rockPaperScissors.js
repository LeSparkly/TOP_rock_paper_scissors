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

function getUserChoice() {
  userInput = prompt("Please choose either Rock, Paper, or Scissors: ");
  lowercaseUserInput = userInput.toLowerCase();
  switch (lowercaseUserInput) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      console.log("Please try again... ");
      return getUserChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
      if (computerChoice === "Rock") {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
      } else if (computerChoice === "Paper") {
        console.log("Paper beats rock.... You lose!");
        computerScore++;
      } else {
        console.log("Rock beats scissors. You win!");
        humanScore++;
      }
    }
    if (humanChoice === "Paper") {
      if (computerChoice === "Rock") {
        console.log("Paper beats rock. You win!");
        humanScore++;
      } else if (computerChoice === "Paper") {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
      } else {
        console.log("Scissors beat paper... You lose!");
        computerScore++;
      }
    }
    if (humanChoice === "Scissors") {
      if (computerChoice === "Rock") {
        console.log("Rock beats scissors... You lose!");
        computerScore++;
      } else if (computerChoice === "Paper") {
        console.log("Scissors beats paper. You win!");
        humanScore++;
      } else {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
      }
    }
  }

  let x = 0;
  while (x < 5) {
    playRound(getUserChoice(), getComputerChoice());
    x++;
  }

  if (humanScore > computerScore) {
    console.log(`The score is ${humanScore} to ${computerScore}. YOU WIN!`);
  } else if (humanScore === computerScore) {
    console.log("WOW ITS A TIE!");
  } else {
    console.log(`The score is ${humanScore} to ${computerScore}. YOU LOSE!`);
  }
}

playGame();
