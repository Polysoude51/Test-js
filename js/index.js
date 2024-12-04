var js=document.querySelector('#js-notification')
js.style.backgroundColor='green'
js.innerHTML='le <span style=font-weight:900;color:blue;>js</span> est OK'

if(confirm("Le fichier js est chargé")){
    console.log("c\'est ok");
}