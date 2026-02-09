export function getRandNum(max) {
  return Math.round(Math.random() * max);
}

export function $(elName) {
  return document.querySelector(elName);
}

export function $$(elName) {
  return document.querySelectorAll(elName);
}
