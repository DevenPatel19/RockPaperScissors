// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Attach event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

// Function to get a random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    let resultMessage = `<strong>You chose:</strong> ${humanChoice}<br><strong>Computer chose:</strong> ${computerChoice}<br>`;

    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage += `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultMessage += `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }

    resultMessage += `<br><br><strong>Score:</strong> Human ${humanScore} - Computer ${computerScore}`;

    // Display result on the webpage
    document.getElementById("result").innerHTML = resultMessage;

    // Check for game over
    if (humanScore === 5 || computerScore === 5) {
        setTimeout(endGame, 100);
    }
}

// Function to handle the end of the game
function endGame() {
    let finalMessage = humanScore === 5 ? "🎉 You win the game!" : "😞 Computer wins the game!";
    finalMessage += `<br><strong>Final Score:</strong> Human ${humanScore} - Computer ${computerScore}`;

    document.getElementById("result").innerHTML = finalMessage;

    // Reset scores
    humanScore = 0;
    computerScore = 0;
}
