/**
 * chargement de base app
 */
function loadingDOM() {
  document.querySelector("#js-notification").remove();
  document.querySelector("#header button").remove();
  loadNavbarEvents();
  //loadEditorEvent();
}
/**
 * Fonction de chargement des events de navbar
 */
console.log(this);
function loadNavbarEvents() {
  var aList = document.querySelectorAll("nav a");
  aList.forEach(function (element) {
    element.addEventListener("click", function (evt) {
      evt.preventDefault();

      history.pushState(null,null,evt.target.href);

    });
  });
}
document.addEventListener("DOMContentLoaded", loadingDOM);
var router=new Router();
