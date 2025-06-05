let playerScore = 0;
let computerScore = 0;

// get the Computer Choice
let getComputerChoice = (num = 3) => {
    let number= Math.floor(Math.random() * num);
    switch (number){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: return "Invalid Choice";
    }
};

//get the Player Choice
let getPlayerChoice = () => {
    let choice = prompt("Enter your choice (Rock, Paper, Scissors):");
    if (choice.trim === "" || choice === null) {
        alert("You must enter a choice!");
        return getPlayerChoice();
    }
    choice = choice.trim();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
}

// determine the winner of the single round
let playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice){
        alert("It is a tie! Both Chose " + playerChoice);
    }else if((playerChoice === "Rock" && computerChoice === "Scissors") ||
              (playerChoice === "Paper" && computerChoice === "Rock") ||
              (playerChoice === "Scissors" && computerChoice === "Paper")) {
        playerScore++;
        alert("You win! " + playerChoice + " beats " + computerChoice);
    } else {
        computerScore++;
        alert("You lose! " + computerChoice + " beats " + playerChoice);
    }
}

// play the game for 5 rounds and display the final score
let playGame = () =>{
    for (let i= 0 ; i < 5 ; i++){
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
    alert("Final Score: Player " + playerScore + " - Computer " + computerScore);
    if( playerScore === computerScore) {
        alert("The game ends in a tie!");
    }else if(playerScore > computerScore) {
        alert("Congratulations! You win the game!");
    } else if(playerScore < computerScore) {
        alert("Sorry! You lose the game!");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    playGame();
});