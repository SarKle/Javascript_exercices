let score=0
let multiplicateur=1
let prix=50
let auto=500
let pxbonus=20
//Étape 3 : augmenter le score
//Quand on clique sur le bouton, faire augmenter la variable score de 1, puis afficher ce score dans la div affichage.
// function buttonstatus(){
//   if(score<50){
//     document.querySelector(".multiplier").disabled=true
//   }
//   else{
//     document.querySelector(".multiplier").disabled=false
//   }
// }
// buttonstatus()

function add(){
  score=score+(1*multiplicateur);
    document.querySelector(".affichage").innerHTML=score;
}

function desactiver(){
  let test=document.querySelector('.affichage').getAttribute(score)
  if(test<=10){
    document.querySelector('.multiplier').disable=true
  }
  else{
    document.querySelector('.multiplier').disable=false
  }
}
desactiver();



function augmenterMultiplicateur(){
  multiplicateur++;
  prix*=2
  score-=prix
    if(score<0){
      score=0
  }
      document.querySelector(".affichage").innerHTML = score;
      document.querySelector('.multiplier').value = "Multiplicate "+"x "+multiplicateur + " Next price: " + prix*2 ;
}

function clicker(){
    score-=auto;{
      setInterval(add,1000)
    document.querySelector('.autoclic').style.visibility='hidden';
    }
}

// function bonusss(){
//   score*=2
//     score-=pxbonus;
//       if(score<0){
//         score=0
//       }


let time=31
let fin=0
let valeur="BONUS 200%"
let newscore=score
  function bonusss(){
    time--;
    newscore+=score*2
    document.querySelector('.affichage').innerHTML=newscore
      if(time>0){
        setTimeout(bonusss,1000)
      }
      else{
        time=fin
        clearTimeout(bonusss,30000);
      }
      document.querySelector('.bonus').value=valeur

document.querySelector('.bonus').value=time + " sec left"
}
  // if(time===0){
  //     score=newscore;
  //       document.querySelector('.affichage').innerHTML=score+newscore;
  //       time=31
  //       newscore=(newscore*2)
  //
  // }
  //document.querySelector('.bonus').value="BONUS 200%";

// Étape 13 : achat d'un bonus
// Désormais, on doit pouvoir acheter un bonus qui augmente le score de 200% à chaque clic pendant 30 secondes.
// C'est à dire que si à chaque clic, le score augmente de 3, pendant les 30 secondes de bonus le score augmentera de 6 à chaque clic,
// au bout des 30 secondes le score augmentera à nouveau de 3 par clic. Vous créerez le bouton « BONUS » avec l'id bonus,
// et le bonus coutera 5000. Lorsque le bonus est acheté, le nombre de seconde s'affichera dans le bouton avec le décompte
// et le bouton devra etre désactivé pendant le temps du bonus. Quand le bonus est fini, le bouton est réactivé et retrouve son texte d'origine.
