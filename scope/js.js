const level0var = "level0var";

console.log("level0var", level0var);

level1();

function level1() {
  const level1var = "level1var";

  level2("jeg er text");
  function level2(txt) {
    console.log("level2", txt);
    console.log("level0var", level0var);
    console.log("level1var", level1var);
  }
}
