let playerScore = 0;
let computerScore = 0;
const restart = document.querySelector(".restart"); 
const announcement = document.querySelector(".announcement");
// get the Computer Choice
let getComputerChoice = (num = 3) => {
  let number = Math.floor(Math.random() * num);
  switch (number) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissor";
    default:
      return "Invalid Choice";
  }
};

// determine the winner of the single round
const clickEvent = document.querySelectorAll("img");
clickEvent.forEach(img=>{ 
  let result="";
  img.addEventListener('click',()=>{
    const playerChoice = img.id;
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
      result=`Tie! Both Choose ${playerChoice}`;
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissor") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
      playerScore++;
      result=`Player Win! ${playerChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      result=`Computer Win! ${computerChoice} beats ${playerChoice}`;
    }
    announcement.textContent = result;
    const comScore = document.querySelector(".comScore");
    comScore.textContent = computerScore;
    const plScore = document.querySelector(".score .playerScore");
    plScore.textContent = playerScore;
    finalWinner();
  }); 
});

//determine the final winner and disable the action
const finalWinner = () =>{
  if(playerScore >= 5 && computerScore <=  5){
    announcement.textContent = `Congratulation! You Win The Game!`
    announcement.setAttribute("style","color:green;");
    const imgs = document.querySelectorAll("img");
    imgs.forEach(img => img.setAttribute("style", "pointer-events: none;"));
    showBtn();
  }else if(playerScore <= 5 && computerScore >= 5){
    announcement.textContent = `Sorry! You Lose The Game, Try Again!`
    announcement.setAttribute("style","color:red;");
    clickEvent.forEach(img => img.setAttribute("style", "pointer-events: none;"));
    showBtn(); 
  }
 }

 //show restart button and it's action
 const showBtn = () => {
  //appear button with final result
  const btn = document.createElement("button");
  btn.textContent = "Play Again";
  restart.append(btn);

  //restart game when click button
  btn.addEventListener('click',()=>{
    btn.remove();
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".score .playerScore").textContent = playerScore;
    document.querySelector(".score .comScore").textContent = computerScore;
    document.querySelector(".announcement").textContent="";
    clickEvent.forEach(img => img.setAttribute("style", "pointer-events: auto;"));
    announcement.setAttribute("style", "color:black;")
  });
};
