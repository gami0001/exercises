"use strict";

// henter html elementer
const todoText = document.querySelector("#task");
const todoBtn = document.querySelector("button");
const todoContainer = document.querySelector("#tasks");
const doneContainer = document.querySelector("#tasks_done");

//henter data fra LS
const modelFromLS = JSON.parse(localStorage.getItem("stupid_array"));

// bruger eksisterende data, og hvis ikke starter med tomt array
const todoArr = modelFromLS ?? [];

init();

// eventlisteners
function init() {
  todoBtn.addEventListener("click", submitToDo);

  todoContainer.addEventListener("click", handleClick);
  doneContainer.addEventListener("click", handleClick);

  todoContainer.addEventListener("pointerover", klikspan);
  todoContainer.addEventListener("pointerout", klikspan);

  updateView();
}

function submitToDo() {
  // fjerner mellemrum før/efter tekst
  const value = todoText.value.trim();
  // stop hvis input er tomt
  if (!value) return;

  // objekt der repræsenterer én task
  const toDoObj = {
    text: value,
    done: false,
    priority: false,
    amount: 1,
    id: self.crypto.randomUUID(),
  };

  // gem task i array
  todoArr.push(toDoObj);
  // ryd inputfelt
  todoText.value = "";
  updateView();
}

function increaseAmount(id) {
  const task = todoArr.find((item) => item.id === id);
  if (task) {
    task.amount++;
    updateView();
  }
}

function decreaseAmount(id) {
  const task = todoArr.find((item) => item.id === id);
  if (task) {
    task.amount--;
    updateView();
  }
}

//her håndteres der alle mine klik

function handleClick(evt) {
  // finder hvilken task der blev klikket på
  const taskSpan = evt.target.closest(".clicktask");
  if (!taskSpan) return;

  const id = taskSpan.dataset.id;

  // prioritet
  if (evt.target.classList.contains("star-priority")) {
    togglePriority(id);
    return;
  }

  // øge antal
  if (evt.target.classList.contains("increase")) {
    increaseAmount(id);
    return;
  }

  // sænke antal
  if (evt.target.classList.contains("decrease")) {
    decreaseAmount(id);
    return;
  }

  // slet task
  if (evt.target.classList.contains("delete")) {
    removeTask(id);
    updateView();
    return;
  }

  // klik på task - done
  markTaskAsDone(id);
  updateView();
}

function markTaskAsDone(id) {
  const index = todoArr.findIndex((item) => item.id === id);

  if (index !== -1) {
    // skifter mellem done og ikke done
    todoArr[index].done = !todoArr[index].done;
  }
}

// hover hygge
function klikspan(evt) {
  console.log(evt);

  // stjerne skal ikke påvirkes
  if (evt.target.classList.contains("star-priority")) return;
  if (evt.target.classList.contains("increase")) return;
  if (evt.target.classList.contains("decrease")) return;
  if (evt.target.classList.contains("delete")) return;
  switch (evt.type) {
    case "click":
      removeTask(evt.target.dataset.id);
      updateView();
      break;
    case "pointerover":
      evt.target.style.color = "green";
      break;

    case "pointerout":
      evt.target.style.color = "white";
      break;
  }
}

function removeTask(id) {
  const index = todoArr.findIndex((item) => item.id === id);
  if (index !== -1) {
    todoArr.splice(index, 1); // fjerner fra array
  }
}

function togglePriority(id) {
  // findIndex leder i todoArr efter den task,
  // som har samme id som den vi klikkede på
  const index = todoArr.findIndex((item) => item.id === id);

  // hvis index IKKE er -1 betyder det,
  // at tasken blev fundet i arrayet
  if (index !== -1) {
    // ! betyder "det modsatte"
    // hvis priority er false → bliver den true
    // hvis priority er true → bliver den false
    // altså: stjernen tændes/slukkes
    todoArr[index].priority = !todoArr[index].priority;

    // opdaterer siden igen:
    // - gemmer i localStorage
    // - tegner tasks på ny
    // - viser korrekt stjernefarve
    updateView();
  }
}

function updateView() {
  const doneHeader = document.querySelector("#done_header");
  // gemmer array i localStorage
  localStorage.setItem("stupid_array", JSON.stringify(todoArr));

  // rydder mine containers
  todoContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  // gennemgår alle tasks
  todoArr.forEach(function (item) {
    // aktive tasks
    if (!item.done) {
      todoContainer.innerHTML += `
  <span class="clicktask" data-id="${item.id}">
    
    <span class="star-priority ${item.priority ? "active" : ""}">★</span>

    <span class="task-text">
      ${item.text} (${item.amount})
    </span>

    <button class="increase">+</button>
      <button class="decrease">-</button>
    <button class="delete">Delete</button>

  </span>
`;
    } else {
      doneContainer.innerHTML += "<span class='clicktask doneTask' data-id='" + item.id + "'>" + item.text + "</span> ";
    }
  });

  if (doneContainer.innerHTML.trim() === "") {
    doneHeader.style.display = "none";
  } else {
    doneHeader.style.display = "block";
  }
}
