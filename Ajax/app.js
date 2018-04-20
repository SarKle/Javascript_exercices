//Charger le fichier "data.json" tip : xmlHttpRequest
let req=new XMLHttpRequest();
  req.open('GET','data.json',false);
  req.send(null);

//variable créée pour le fichier json
let recupdata=req.responseText;
let data=JSON.parse(recupdata)
  console.log(data);

//ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
let score=data.map(function(x){
  let min = 0;
  let max = 1000;
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
   x.result=num;
   return x;
   //console.log(x);
})

//classer l'odre du tableau selon les scores tip : arr.sort()
data.sort(function (a, b) {
  return a.result - b.result;
});

//mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
let cata=[];
let catb=[];
let catc=[];

  for(i= 0; i < data.length; i++) {
    if (data[i].result >750) {
      cata.push(data[i]);
    }
    else if (data[i].result > 500 && data[i].result <= 750) {
      catb.push(data[i]);
    }
    else {
      catc.push(data[i]);
    }
}
console.log(cata)
console.log(catb)
console.log(catb)

//compter combien de personnes viennent du "Bahrain" tip : filter()
let baba=data.filter((pays)=>{
  return pays.country=="Bahrain";
})
console.log(baba)

//afficher le plus grand score dans la console tip : sort()
let higher = data.sort((who) => {
    return Math.max(who.result);
});
console.log(higher[0])

// afficher le plus petit score tip : sort()
let lower = data.sort((who) => {
  return Math.min(who.result);
});
console.log(lower[0]);
