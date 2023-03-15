// Element du DOM
const nomJoueurUn = document.getElementById("champJoueurUn");
const nomJoueurDeux = document.getElementById("champJoueurDeux");
const bouttonValider = document.getElementById("btnValidation");
const btnLancer = document.getElementById('lancerDeDes')

let joueurUn = document.getElementById('nomJoueurUn')
let resultat = "";

btnLancer.addEventListener("click",lancer);
//fonction de lancer de dés
function lancer(){
    resultat = Math.floor((Math.random() * de.value) + 1);
    console.log(resultat);
    console.log(de.value);
    if (resultat == 1) {
        message.innerHTML = " Pas de chance ! Ahahaha !";
    }
    else {
        message.innerHTML = "";
    }

    listResultats.appendChild(ul);
}