function loadingDOM() {
  document.querySelector("#js-notification").remove();
  document.querySelector("#header button").remove();
  document
    .querySelector("#header button")
    .addEventListener("click", function (evt) {
      console.log("header", evt);
      console.log("header clické");
    });
  document.querySelector("#header").innerHTML += "bla bla";
}

document.addEventListener("DOMContentLoaded", loadingDOM);
