"use strict";

window.addEventListener("load", sidenVises);

let computerGuess = Math.floor(Math.random() * 101);
let min = 0;
let max = 100;

document.getElementById("guess").textContent = computerGuess;

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#start_knap").addEventListener("click", startSpil);
  document.querySelector("#igen").classList.add("hide");
}

function startSpil() {
  console.log("starter");

  document.querySelector("#start_knap").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
}

document.getElementById("higher").addEventListener("click", function () {
  min = computerGuess + 1;
  computerGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("guess").textContent = computerGuess;
});

document.getElementById("lower").addEventListener("click", function () {
  max = computerGuess - 1;
  computerGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("guess").textContent = computerGuess;
});

document.getElementById("spotOn").addEventListener("click", function () {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  gameComplete();
});

function gameComplete() {
  console.log("gameComplete");

  document.querySelector("#igen").classList.remove("hide");
  document.querySelector("#start_knap").classList.remove("hide");

  document.querySelector("#start_knap").addEventListener("click", function () {
    window.location.reload();
  });
}
