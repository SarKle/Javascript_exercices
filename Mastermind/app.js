// Créer en HTML 3 div (minimum - vous pouvez faire comme vous voulez)
//     une pour l'historique des réponses
//     une pour les réponses actuelles
//     une pour le choix des couleurs (placer 6 ronds de couleurs différentes)
//
// En JS : faire en sorte que quand on clique sur une couleur, elle se place dans la div des réponses.

let historique=document.querySelector('.history')
let reponses=document.querySelector('.answers')
let color=document.querySelector('.choices')

let red=document.querySelector('.red')
let purple=document.querySelector('.purple')
let blue=document.querySelector('.blue')
let green=document.querySelector('.green')
let yellow=document.querySelector('.yellow')
let orange=document.querySelector('.orange')

//let sol1=document.querySelector('.sol1')

//lorsque je clique sur une couleur de la classe choices, elle s'ajoute dans la classe réponse
  red.onclick = () => {
      red.classList.add("reponse1");
    }

let proposition=[red,purple,blue,green,yellow,orange]
  const result = proposition.filter(proposition => proposition.length > 6);
    console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
