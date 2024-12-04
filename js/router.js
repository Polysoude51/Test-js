/*
public->sur this
    +page actuelle champs lecture
    +changement de chemin fonction
privés
    +champs de route prive en ecriture
    +moddif url
    +moddif contenu (loadEvants)
    +recuperer du conteu de page depuis le reseau
*/
function Router(rootFolderOfTemplates = "/pages") {
  var currentRoute = location.pathname;
  function changePathName(pathname) {
    history.pushState(null, null, pathName);
    currentRoute = location.pathName;
  }
  function loadContentInPage(eventLoader) {}
  function getContentFromNetwork(contentUrl) {}
  var xhr = new XMLHttpRequest();
  xhr.open("GET", contentUrl);
  xhr.onreadystatechange = function (evt) {
    if (xhr.readyState < XMLHttpRequest.DONE) {
      return;
    }
    if (xhr.status >= 400) {
      console.log("erreur" + xhr.status);
    }
    console.log(xhr.responseText);
  };
  /*declaration public
   *
   *@returns {string}current path Name
   */
  this.getCurrentRoute = getCurrentRoute;
  function getCurrentRoute() {
    return currentRoute;
  }
  this.navigate = navigate;
  function navigate(pathName = "/") {
    changePathName(pathName);
    var url = rootFolderOfTemplates;
    switch (pathName) {
      case "/thumbnail":
        url += "thumbnail/thumbnail.html";
        break;
      case "/editor":
        url += "editor/editor.html";
        break;
      case "/home":
        url += "home/home.html";
        break;
    }
    getContentFromNetwork();
    loadContentInPage();
  }
}
