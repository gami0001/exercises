import { getRandNum } from "../utils/utils_lib.js";
import { $ } from "../utils/utils_lib.js";
import { $$ } from "../utils/utils_lib.js";

console.log("getRandNum", getRandNum(3));

$(".mitPTag").innerHTML = "MODULES!";

$$(".myListElement").forEach((elm, i) => {
  elm.innerHTML = "hej" + i;
});
