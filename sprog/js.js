"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const languageSelect = document.getElementById("language");

function setLanguage(locale) {
  texts[locale].texts.forEach((elm) => {
    const target = document.querySelector(elm.location);
    if (target) {
      target.textContent = elm.text;
    }
  });

  document.documentElement.lang = locale;
}

languageSelect.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});
