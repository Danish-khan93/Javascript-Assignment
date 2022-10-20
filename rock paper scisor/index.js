let choise = ["Rock", "Paper", "Scissors"];
let userInput = prompt("0 for Rock 1 for Paper 2 for scissors");
let choiseOfUser = choise[userInput];
console.log(choiseOfUser);
let comInput = Math.floor(Math.random() * 3);
let choiseOfCom = choise[comInput];
console.log(choiseOfCom);
if (choiseOfUser === choiseOfCom) {
  console.log("draw");
} else if (choiseOfUser === "Paper" && choiseOfCom === "Rock") {
  console.log("player is win");
} else if (choiseOfUser === "Rock" && choiseOfCom === "Scissors") {
  console.log("player is win");
} else if (choiseOfUser === "Scissors" && choiseOfCom === "Paper") {
  console.log("player is win");
} else if (choiseOfUser === "Rock" && choiseOfCom === "Paper") {
  console.log("computer is win");
} else if (choiseOfUser === "Scissors" && choiseOfCom === "Rock") {
  console.log("computer is win");
} else if (choiseOfUser === "Paper" && choiseOfCom === "Scissors") {
  console.log("computer is win");
}
