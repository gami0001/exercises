"use strict";
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");
let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

function init() {
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}
function rockClick() {
  //   console.log("ROCK");
  userChoice = "rock";
  computerChooses();
}

function paperClick() {
  //   console.log("PAPER");
  userChoice = "paper";
  computerChooses();
}

function scissorsClick() {
  //   console.log("SCISSORS");
  userChoice = "scissors";
  computerChooses();
}

function computerChooses() {
  //   console.log("COMPUTERCHOISE userChoice", userChoice);
  resetText();

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  computerChoice = choices[randomIndex];

  resetHands();
  handShakesStart();
}

function handShakesStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  setTimeout(handShakesEnd, 1800);
}

function handShakesEnd() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  showHands();
  determineWinner();
}

function showHands() {
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);
}
function resetHands() {
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
}

function determineWinner() {
  resetText();

  if (userChoice === computerChoice) {
    draw.classList.remove("hidden");
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    win.classList.remove("hidden");
  } else {
    lose.classList.remove("hidden");
  }
}

function resetText() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
}
