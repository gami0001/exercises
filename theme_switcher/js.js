const selector = document.getElementById("theme");

selector.addEventListener("change", function () {
  localStorage.setItem("theme", evt.target.value);
  document.body.setAttribute("data-theme", this.value);
});
