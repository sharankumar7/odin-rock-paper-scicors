// console.log("hiii");
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
console.log(getComputerChoice());
