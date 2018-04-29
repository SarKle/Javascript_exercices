let score=0
let multiplicateur=1
let prix=50
let autoclic=500
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
    document.querySelector(".affichage").innerHTML=score;
    document.querySelector('.multiplier').value = "Multiplicate "+"x "+multiplicateur + " Next price: " + prix*2 ;
}

function clicker(){
    score-=autoclic;
      if(score<0){
        score=0
      }
      setInterval(add,1000)
        document.querySelector('.affichage').innerHTML+=score
        document.querySelector('.autoclic').style.visibility='hidden';
}

let time=31
let fin=0
let bon=0
let valeur="BONUS 200%"
  function bonusss(){
    bon=1
    time--;
    newscore=(score*2);
    document.querySelector('.affichage').innerHTML=newscore
    if(score<0){
      score=0
    }
    if(time>0){
      setTimeout(bonusss,1000)
    }
    else{
      time=fin
      bon=0
    }
    document.querySelector('.bonus').value=time + " sec left"
    if(time==0){
      score=newscore
      document.querySelector('.affichage').innerHTML="Score: "+newscore
    }
    if (document.querySelector('.bonus').value=="0 sec left"){
      document.querySelector('.bonus')=valeur
    }
}
