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
console.log(getHumanChoice());

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
