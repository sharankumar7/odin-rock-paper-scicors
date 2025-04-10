// console.log("hiii");

function getHumanChoice() {
  const user_choice = prompt("Enter your choice! ").toLowerCase();
  if (
    user_choice === "rock" ||
    user_choice === "paper" ||
    user_choice == "scissors"
  ) {
    return user_choice;
  } else {
    alert("Enter valid option!");
  }
}
// console.log(getHumanChoice());

function getComputerChoice() {
  let random_number = Math.trunc(Math.random() * 3);
  if (random_number === 0) {
    return "rock";
  } else if (random_number === 1) {
    return "paper";
  } else {
    return "Scissors";
  }
}
// console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerchoice) {
  humanChoice = humanChoice.toLowerCase();
  computerchoice = computerchoice.toLowerCase();

  if (humanChoice === computerchoice) {
    alert("Its a tie!");
  } else if (
    (humanChoice === "rock" && computerchoice === "scissors") ||
    (humanChoice === "paper" && computerchoice === "rock") ||
    (humanChoice === "scissors" && computerchoice === "paper")
  ) {
    alert("You win this round! " + humanChoice + " beats " + computerchoice);
    humanScore++;
    console.log(humanScore);
  } else {
    alert("You lost! " + computerchoice + " beats" + humanChoice);
    computerScore++;
    console.log(computerScore);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
