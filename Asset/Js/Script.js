// Element du DOM
const nomJoueurUn = document.getElementById("champJoueurUn");
const nomJoueurDeux = document.getElementById("champJoueurDeux");
const bouttonValider = document.getElementById("btnValidation");
const validMessage = document.getElementById('messageValidation');
const btnDebutPartie = document.getElementById('btnDebutDePartie');
const joueurSelect = document.getElementById('joueurSelect');
const joueurUn = document.getElementById('nomJoueurUn');
const joueurDeux = document.getElementById('nomJoueurDeux');
const btnLancer = document.getElementById('lancerDeDes');
const desZero = document.getElementById('faceDeDes')
const desUn = document.getElementById('faceDeDesUn');
const desDeux = document.getElementById('faceDeDesDeux');
const desTrois = document.getElementById('faceDeDesTrois');
const desQuatre = document.getElementById('faceDeDesQuatre');
const desCinq = document.getElementById('faceDeDesCinq');
const desSix = document.getElementById('faceDeDesSix');
const messageGameOver = document.getElementById('messageGameOver');

let resultat = "";
let joueurCourant = "";
let userName1 = "";
let userName2 = "";
let compteur = 0 ;


bouttonValider.addEventListener("click", Event => {
    userName1 = nomJoueurUn.value;
    userName2 = nomJoueurDeux.value;
    console.log(userName1 + " " + userName2);

    if (userName1 === "" || userName2 === "") {
        validMessage.textContent = "L'un des deux champ ou les deux ne sont pas correctement remplis!";
        validMessage.style.color = "black";
        validMessage.style.backgroundColor = "red";
    }
    else {
        validMessage.textContent = "Vous pouvez commencer une partie!";
        validMessage.style.color = "black";
        validMessage.style.backgroundColor = "green";
        joueurUn.textContent = userName1;
        joueurDeux.textContent = userName2;
    }
    
});

function aleatoire (chiffreMin, chiffreMax) {
    chiffreMin = Math.ceil(chiffreMin);
    chiffreMax = Math.floor(chiffreMax);
    return Math.floor(Math.random() * (chiffreMax-chiffreMin+1)) + chiffreMin;
}
btnDebutPartie.addEventListener("click", Event => {
    if (userName1 === "" || userName2 === "") {
        joueurSelect.textContent = "Il n y pas de joueur présent";
    }
    else {
        joueurCourant = aleatoire(1, 2);
        console.log("click fonctionne");
        if(joueurCourant === 1){
            joueurSelect.textContent = ("C'est au joueur " + userName1 + " de jouer.");
        }
        else if (joueurCourant === 2) {
            joueurSelect.textContent = ("C'est au joueur " + userName2 + " de jouer.");
        }
    }
});

btnLancer.addEventListener("click",lancer);
//fonction de lancer de dés
function lancer(){
    resultat = aleatoire(1, 6)
    console.log(resultat);
    
    switch (resultat) {
        case 1 :
            messageGameOver.textContent = " Pas de chance ! Ahahaha !";
            messageGameOver.style.backgroundColor = "red";
            messageGameOver.style.color = "black";
            desZero.style.display = "none";
            desUn.style.display = "block";
            desDeux.style.display = "none";
            desTrois.style.display = "none";
            desQuatre.style.display = "none";
            desCinq.style.display = "none";
            desSix.style.display = "none";
            break;
        case 2 :
            desZero.style.display = "none";
            desUn.style.display = "none";
            desDeux.style.display = "block";
            desTrois.style.display = "none";
            desQuatre.style.display = "none";
            desCinq.style.display = "none";
            desSix.style.display = "none";
            break;
        case 3 :
            desZero.style.display = "none";
            desUn.style.display = "none";
            desDeux.style.display = "none";
            desTrois.style.display = "block";
            desQuatre.style.display = "none";
            desCinq.style.display = "none";
            desSix.style.display = "none";
            break;
        case 4 :
            desZero.style.display = "none";
            desUn.style.display = "none";
            desDeux.style.display = "none";
            desTrois.style.display = "none";
            desQuatre.style.display = "block";
            desCinq.style.display = "none";
            desSix.style.display = "none";
            break;
        case 5 :
            desZero.style.display = "none";
            desUn.style.display = "none";
            desDeux.style.display = "none";
            desTrois.style.display = "none";
            desQuatre.style.display = "none";
            desCinq.style.display = "block";
            desSix.style.display = "none";
            break;
        case 6 :
            desZero.style.display = "none";
            desUn.style.display = "none";
            desDeux.style.display = "none";
            desTrois.style.display = "none";
            desQuatre.style.display = "none";
            desCinq.style.display = "none";
            desSix.style.display = "block";
            break;
    }
    if ()
}