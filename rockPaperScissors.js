
function getComputerChoice() {
    let randomNumber = Math.random();
    if(randomNumber <=0.33) {
        return "Rock"
    }
    else if(randomNumber >= 0.67) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function getUserChoice() {
    userInput = prompt("Please choose either Rock, Paper, or Scissors: ");
    lowercaseUserInput = userInput.toLowerCase(); 
    switch(lowercaseUserInput) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            console.log("Please try again... ")
            return getUserChoice();
    }
}
