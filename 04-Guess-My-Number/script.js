"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20; //recommended to hold the data somewhere in the code, so use let score = 20 instead
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); //reading and storing the input value
  console.log(guess, typeof guess);

  //   When no input is entered
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === number) {
    //winner scenario
    document.querySelector(".message").textContent = "🥳 Correct Number";
    document.querySelector(".number").textContent = number;

    //changing bg colour
    document.querySelector("body").style.backgroundColor = "#60b347";

    //changing the width of the box
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > number) {
    //when the guess is more than secret number
    if (score > 1) {
      //to update score and to bring the loser message
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// CODING CHALLENGE 1
// to implement the reset button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});

/* REFACTORED CODE

for the duplicated if statements
if (guess !== number) {
  if (score > 1) {
    document.querySelector(".message").textContent =
      guess > number ? "Too high" : "Too low";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "You lost the game.";
    document.querySelector(".score").textContent = 0;
  }
}

for displaying messages
const displayMessages = function (message) {//call this function with the message as the parameter
  document.querySelector(".message").textContent = message;
}; */
