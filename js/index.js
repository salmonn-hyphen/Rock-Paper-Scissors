let playerScore = 0;
let computerScore = 0;

// get the Computer Choice
let getComputerChoice = (num = 3) => {
    let number= Math.floor(Math.random() * num);
    switch (number){
        case 0: return "Rock";break;
        case 1: return "Paper";break;
        case 2: return "Scissors";break;
        default: return "Invalid Choice";break;
    }
};

//get the Player Choice
let getPlayerChoice = () => {
    let choice = prompt("Enter your choice (Rock, Paper, Scissors):");
    if (choice === "" || choice === null) {
        alert("You must enter a choice!");
        return getPlayerChoice();
    }
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
    console.log("Final Score: Player " + playerScore + " - Computer " + computerScore);
    if( playerScore === computerScore) {
        alert("It's a tie!");
    }else if(playerScore > computerScore) {
        alert("Congratulations! You win the game!");
    } else if(playerScore < computerScore) {
        alert("Sorry! You lose the game!");
    }
}
playGame();