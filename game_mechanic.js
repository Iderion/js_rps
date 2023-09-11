let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));

function updateScore() {
    document.getElementById("score").textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    let resultDiv = document.getElementById("result");
    if (playerScore > computerScore) {
        resultDiv.textContent = "Congratulations, you won!";
    } else if (playerScore < computerScore) {
        resultDiv.textContent = "Sorry, you lost. Better luck next time!";
    } else {
        resultDiv.textContent = "It's a tie!";
    }
}


function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
    let result;

    if (playerSelectionLower === computerSelectionLower) {
        result = "It's a tie! Both selected " + capitalizeFirstLetter(playerSelection);
    }
    else if ((playerSelectionLower === 'rock' && computerSelectionLower === 'scissors') ||
        (playerSelectionLower === 'scissors' && computerSelectionLower === 'paper') ||
        (playerSelectionLower === 'paper' && computerSelectionLower === 'rock')) {
        result = "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection);
    } 
    else {
        result = "You lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection);
    }
    
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
    
    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    updateScore();
    
    return result;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
