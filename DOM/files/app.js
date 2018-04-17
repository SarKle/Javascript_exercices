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
blockquotes[0].classList="bg-white"


//EXERCICE2: SELECTEURS CSS
//avec querySelector sélectioner l'élément 'my-table'
//lui ajouter la classe "bg-purple"
//avec querySelectorAll sélectioner tous les paragraphes dans 'container'
//modifier tout ces éléments en leurs ajoutant la classe 'shadow'
let table=document.querySelector('#my-table')
