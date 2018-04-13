//LE PENDU
var tableauMot=["b","o","n","j","o","u","r"];

var lettres=["","","","","","","_"];

var tailleMot= tableauMot.length;

function guessLetter(){

    var stock = window.prompt("Choisissez une lettre");

    var lettre_ok=false;

    for(var i=0; i<tableauMot.length; i++) {

        if (tableauMot[i]==stock){

            lettre_ok=true;

            lettres[i]=stock;

            tailleMot--
        }
    }

    if (!lettre_ok) {
        window.alert ("Non! Pas la bonne lettre.")
    }
    if (lettre_ok){
        window.alert ("Oui! Cette lettre est exacte."+" "+lettres);
    }
}

while (tailleMot>0) {
    guessLetter()
}
if (tailleMot==0){
    window.alert ("Bravo! Tu as gagné!")
}
