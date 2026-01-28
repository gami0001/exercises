"use strict";

const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player_start = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);

  player_start.addEventListener("animationend", () => {
    player_start.classList.remove("shake");
    player_start.classList.remove("rock", "paper", "scissors");
    player_start.classList.add(userChoice);
  });

  player2.addEventListener("animationend", () => {
    player2.classList.remove("shake");
    player2.classList.remove("rock", "paper", "scissors");
    player2.classList.add(computerChoice);
  });
}

function rockClick() {
  console.log("Rock");
  userChoice = "rock";
  computerChooses();
}

function paperClick() {
  console.log("Paper");
  userChoice = "paper";
  computerChooses();
}

function scissorsClick() {
  console.log("Scissors");
  userChoice = "scissors";
  computerChooses();
}

function computerChooses() {
  console.log("computerchoice", userChoice);
  let randomChoice = Math.ceil(Math.random() * 3);
  if (randomChoice === 1) computerChoice = "rock";
  else if (randomChoice === 2) computerChoice = "paper";
  else computerChoice = "scissors";
  handShakesStart();
}
function handShakesStart() {
  player_start.classList.add("shake");
  player2.classList.add("shake");
}
