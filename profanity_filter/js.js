let hasTheButtonEverBeenClickedFlag = false;
let theText = document.querySelector("p").textContent;

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (hasTheButtonEverBeenClickedFlag) {
    console.log("knappen er blevet klikket på");
  } else {
    console.log("knappen er IKKE blevet klikket på");
    SFW();
  }
  hasTheButtonEverBeenClickedFlag = true;
}

function SFW() {
  console.log("theText", theText);
  curseWords.forEach((word) => {
    console.log("Bad word", word.bad);
    console.log("Good word", word.good);
    console.log("******");
  });
}
