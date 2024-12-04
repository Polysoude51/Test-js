function loadingDOM() {
  var js = document.querySelector("#js-notification");
  js.style.backgroundColor = "green";
  js.innerHTML = "le <span style=font-weight:900;color:blue;>js</span> est OK";
  document
    .querySelector("button.btn-danger")
    .addEventListener("click", function (evt) {
    evt.stopPropagation();
      console.log(evt);
      console.log("boutton du header clické");
    });
  document.querySelector("#header").addEventListener("click", function (evt) {
    console.log("header", evt);
    console.log("header clické");
  });
}

document.addEventListener("DOMContentLoaded", loadingDOM);
