"use strict";
console.log("Hvilket theme er gemt", localStorage.getItem("theme"));

document.querySelector("#theme_select").addEventListener("change", theChange);
const themeFraLS = localStorage.getItem("theme");

if (themeFraLS) {
  setTheme(themeFraLS);
  document.querySelector("#theme_select").value = themeFraLS;
} else {
  setTheme("dark");
  document.querySelector("#theme_select").value = "dark";
}

function theChange(evt) {
  console.log("change", evt.target.value);
  setTheme(evt.target.value);
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.querySelector("body").dataset.theme = theme;
}
