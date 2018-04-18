//EXERCICE 1: MANIPULATION DE CLASSES

//selectionner le body
document.getElementsByTagName('body')

//lui retirer la class bg-aqua
//lui ajouter la class bg-olive
document.querySelector('.bg-aqua')
document.querySelector('.bg-aqua').className=('.bg-olive')

//selectionner first paragraph
//lui retirer les classes "bg-lime" et "gray"
//lui ajouter la class "aqua"
let firstpar= document.getElementById('first-paragraph')
firstpar.classList.remove('.gray')
firstpar.classList.add('.aqua')

//sélectionner tous les éléments qui ont la classe 'bg-silver'
//modifier tout ces éléments en leurs ajoutant la classe "bg-teal"
//modifier tout ces éléments en leurs supprimant la classe "bg-silver"
let bgsilver = document.querySelectorAll(".bg-silver")
bgsilver=document.getElementsByTagName('blockquote').classList.add('.bg-teal')
bgsilver = document.getElementsByTagName("blockquote")[0].classList.add('bg-teal');
bgsilver = document.getElementsByTagName("blockquote")[0].classList.remove('bg-silver');

//sélectionne tous les éléments de type 'blockquote'
//modifier tout ces éléments en leurs ajoutant la classe "bg-white"
let blockquotes = document.getElementsByTagName("blockquote")
blockquotes[0].classList.add("bg-white")


//EXERCICE2: SELECTEURS CSS
//avec querySelector sélectioner l'élément 'my-table'
//lui ajouter la classe "bg-purple"
let tabless=document.querySelector('#my-table')
tabless.classList.add('bg-purple')
//avec querySelectorAll sélectioner tous les paragraphes dans 'container'
//modifier tout ces éléments en leurs ajoutant la classe 'shadow'
let containp=document.querySelector('.container').getElementsByTagName('p')
for(let i=0;i<containp.length;i++){
  containp[i].classList.add('shadow')
}


//EXERCICE3
//sélectionne tous les éléments de type 'pre'
let pree=document.querySelectorAll('pre')
//avec la propriété style change la couleur de texte
for(let i=0;i<pree.length;i++){
pree[i].style.color="#3949ab"
//}
//avec la propriété style change la couleur de fond grâce à backgroundColor
//for(let i=0;i<pree.length;i++){
pree[i].style.backgroundColor="#e0e0e0"
//}
//avec la propriété style ajouter un border-top de 3px solid red (n'oublie pas que tu peux acceder au propriété d'un objet grâce comme ceci : ["prop-name"] )
//for(let i=0;i<pree.length;i++){
pree[i].style.borderTop="3px solid red"
//}
//avec la propriété style ajouter un border-bottom de 3px solid red
//for(let i=0;i<pree.length;i++){
pree[i].style.borderBottom="3px solid red"
}
//sélectionne le premier élément de type 'h3'
let htrois=document.querySelector('h3')[0]
//remplacer son contenu HTML en <em>Itelic title ! yeah !</em>
htrois.innerHtml('<em>Italic title! yeah!</em>');
//sélectionne le premier élément de type 'h2'
let titre2=document.querySelector('h2')
//ramplacer son contenu texte par en <strong>HTML doens't work !</strong>
titre2.innerHTML="<strong>HTML doens't work !</strong>"


//EXERCICE4
//sélectioner le premier 'ul'
let undlist=document.querySelector('ul')
//crée un élément de type 'li'
let lilist=document.createElement('li')
//ajouter ce texte Mon meilleur ami est <a href='http://www.google.com'>Google</a> dans le 'li'
let alink=document.createElement('a')
alink.href="http://www.google.com"
alink.appendChild(document.createTextNode("Google"))
lilist.appendChild(document.createTextNode('Mon meilleur ami est'))
lilist.appendChild(alink)
lilist.appendChild(document.createTextNode("."))
//ajouter ce 'li' l'élément dans le ul
let ulli=document.querySelector('ul')
ulli.appendChild(lilist)
//sélectionner le premier lien dans le 'li' précedement crée
let lilia= document.querySelectorAll("li a")
//avec la propriété style change la couleur de texte de ce lien
lilia.style.textDecoration="none"
lilia.style.color="#26a69a"


//EXERCICE5 : Création et suppression de plusieurs éléments
//sélectionner le premier élément 'ol'
//tous les enfants de ce dernier grâce à sa propriété children
// supprimer chaque enfant de 'ol' grâce à removeChild()
let olone = document.querySelector('ol')
for (let i = olone.children.length-1; i >= 0; i--){
    olone.removeChild(olone.children[i])
}
// déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]
// faire une boucle sur tous les enfants du tableau précédement crée
// pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()
// ajouter à chaque 'li' la valeur courrante tableau
// ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné
let tablo=["Silent Teacher","Code Monkey", "CodeCombat"]
tablo.forEach((t) => {
   let addli = document.createElement('li')
   addli.innerText=t
   console.log(addli)
   olone.appendChild(addli)
})
