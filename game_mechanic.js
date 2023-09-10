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

// Testing the function
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("Computer's choice:", capitalizeFirstLetter(computerSelection));
console.log(playRound(playerSelection, computerSelection));
