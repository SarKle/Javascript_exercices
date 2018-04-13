var x=Math.PI;

x
3.141592653589793
var y=Math.ceil;

y
function ceil()
var a=Math.min(7,5,-12,6,32,18,14,-2);

a
-12
var b=Math.max (-3,9,21,36,27,54,17,35)

b
54
a+b
42

let floatBateau=10.4;
let couleBateau=Math.floor(floatBateau);
couleBateau
10
let voleBateau=Math.ceil(floatBateau);

voleBateau
11

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log(Math.random());
  // expected output: a number between 0 and 1

  Math.floor((Math.random() * 100) + 1); 

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

  let unzero=Math.round(Math.random());



//Nom aléatoire  
  function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

const items = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];
console.log(random_item(items));