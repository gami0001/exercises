"use strict";

const h2names = document.querySelector("#names");
const inputName = document.querySelector("#name");
const button = document.querySelector("button");

const modelHentetFraLS = JSON.parse(localStorage.getItem("stupid_array"));
console.log("modelHentetFraLS", modelHentetFraLS);
//Model

const model = modelHentetFraLS ?? ["Peter", "Paul", "Mary"];
// controller
init();

function init() {
  button.addEventListener("click", button_click);
  upDateView();
}

function addNameToModel(name) {
  model.push(name);
}
function removeNameFromModel(id) {
  model.splice(id, 1);
}

function upDateView() {
  localStorage.setItem("stupid_array", JSON.stringify(model));
  h2names.innerHTML = "";
  model.forEach((each, i) => {
    h2names.innerHTML += `<span class="clickname" data-id="${i}">${each}</span> `;
  });

  document.querySelectorAll(".clickname").forEach((each) => {
    each.addEventListener("click", klikspan);
    each.addEventListener("pointerover", klikspan);
    each.addEventListener("pointerout", klikspan);
  });
}

// view
function button_click() {
  addNameToModel(inputName.value);
  upDateView();
}
function klikspan(evt) {
  console.log(evt);
  switch (evt.type) {
    case "click":
      removeNameFromModel(evt.target.dataset.id);
      upDateView();
      break;
    case "pointerover":
      evt.target.style.color = "red";
      break;

    case "pointerout":
      evt.target.style.color = "black";
      break;
  }
}
