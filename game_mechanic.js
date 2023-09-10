function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();

    if (playerSelectionLower === computerSelectionLower) {
        return "It's a tie! Both selected " + capitalizeFirstLetter(playerSelection);
    }

    if ((playerSelectionLower === 'rock' && computerSelectionLower === 'scissors') ||
        (playerSelectionLower === 'scissors' && computerSelectionLower === 'paper') ||
        (playerSelectionLower === 'paper' && computerSelectionLower === 'rock')) {
        return "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection);
    } else {
        return "You lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection);
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        const computerSelection = getComputerChoice();
        console.log("Computer's choice:", capitalizeFirstLetter(computerSelection));
        
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }

    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    
    if (playerScore > computerScore) {
        console.log("Congratulations, you won!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost. Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

// Calling the game function to start the game
game();
