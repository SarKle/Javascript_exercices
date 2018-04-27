let score=0
let multiplicateur=1
let prix=50
let auto=500
let pxbonus=20

function add(){
  score=score+(1*multiplicateur);
    document.querySelector(".affichage").innerHTML=score;
}

function augmenterMultiplicateur(){
  multiplicateur++;
  score-=prix
  score*=2
    if(score<0){
      score=0
    }
    document.querySelector(".affichage").innerHTML=score*2;
    document.querySelector('.multiplier').value = "Multiplicate "+"x "+multiplicateur + " Next price: " + prix*2 ;
}

function clicker(){
    score-=auto;
      if(score<0){
        score=0
      }
      setInterval(add,1000)
        document.querySelector('.affichage').innerHTML+=score
        document.querySelector('.autoclic').style.visibility='hidden';
}

let time=31
let fin=0
let valeur="BONUS 200%"
let newscore=score
  function bonusss(){
    time--;
    newscore+=score*2
    if(score<0){
      score=0
    }
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
