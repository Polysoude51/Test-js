/**
 * chargement de base app
 */
function loadingDOM() {
  document.querySelector("#js-notification").remove();
  document.querySelector("#header button").remove();
  loadNavbarEvents();
}
/**
 * Fonction de chargement des events de navbar
 */
function loadNavbarEvents() {
  var aList = document.querySelectorAll("nav a");
  aList.forEach(function (element) {
    element.addEventListener("click", function (evt) {
      evt.preventDefault();
    });
  });
}
document.addEventListener("DOMContentLoaded", loadingDOM);
