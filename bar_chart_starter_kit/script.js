const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

function getRandomNumber() {
  return Math.floor(Math.random() * 101); // 0–100
}

const value = getRandomNumber();
li.style.setProperty("--height", value);

function addBar(value) {
  const li = document.createElement("li");
  li.style.setProperty("--height", value);
  list.appendChild(li);
}

const data = [];

setInterval(() => {
  const value = Math.floor(Math.random() * 101);

  data.push(value);
  addBar(value);

  if (data.length > 20) {
    data.shift(); // fjern første værdi i arrayet
    list.removeChild(list.firstElementChild); // fjern ældste søjle
  }
}, 1000);

list.firstElementChild;
