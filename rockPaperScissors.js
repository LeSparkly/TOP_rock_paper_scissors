
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

