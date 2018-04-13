//Php s'execute côté serveur, javascript coté client

// les variables let var const
//var hello="bonjour";
let hello="bonjour";
const hello="bonjour";
//ne plus utiliser "var" et ";" plus clair mais pas obligatoire, passage à la ligne considéré comme ";"
// var définit une variable globale, ce qui peut poser problème. si let est déclarée dans une condition ou boucle, s'appliquera uniquqement dans cette partie
//si boucle dans boucle avec var, n'affichera que la première partie de la boucle, car la valeur de la première var, s'incrémente automaquement à la var suivante

//BOUCLE
for (let i=0; i<10; i++){
    console.log(i);
}

//TABLEAU
let array=["david", "claude"]
//pas de tableau associatif comme en php (clé+valeur) 

//OBJET
let hero={
    name: "Harry",
    xp:89,
    objet:"lunettes",
    crier(){
        console.log("Wooooo")
    }
}
console.log(hero.name)  //affiche son nom
hero.crier();

//CONCATENATION
let hello="bonjour";
 hello + "David"

//PARCOURIR UN TABLEAU     
let classe = ["Claude","Sarah","Geoffrey"];
    classe.forEach(function(eleve){    //callback= fonction dans une fonction
        console.log(eleve);
    })

let noms=['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];  
    