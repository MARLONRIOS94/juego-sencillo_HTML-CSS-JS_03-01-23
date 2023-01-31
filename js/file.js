// llama al div game
const game = document.getElementById('game')

// Variable templateHTML vacio
let templateHTML = '';

// array de frutas vacio
let arrfruit = [];

// array de cards
let arrcard = [];

// varaible boton reinicar juego
const button = document.getElementById('button')

// puntaje
// let score = 0;


// arrays completo con las frutas
let listFruit = ['🍓', '🍌', '🍎', '🍇', '🍎', '🍍', '🍓', '🍉', '🍉', '🍇', '🍌', '🍍']

// funcion para recorrer(bucle for each) el array frutas
// y con el template string agregamos HTML desde JS
// e insertamos icono fruta: ${fruit}
listFruit.forEach(fruit => (
    templateHTML+=`
    <div class="card">
        <div class="part front"></div>
        <div class="part back">${fruit}</div>
    </div>
    `
))

// se igualan game y template
game.innerHTML = templateHTML


//funcion dar Click en tarjetas
game.addEventListener('click', (x) => {
    let value = x.target.classList.contains('front')

    if (value) {
       let elementcard = x.target.parentElement

       let fruit = elementcard.children[1].textContent

       elementcard.classList.add('rotate');

       arrcard = [...arrcard,elementcard];
       arrfruit = [...arrfruit,fruit];

       console.log(arrfruit)

       checkcards();
    }

})

// Funcion verificar card
const checkcards = () => {
    if (arrcard.length>1) {
        // compara 1er y 2do valor
        if(arrfruit[0] === arrfruit [1]){
            arrcard = "";
            arrfruit = "";
        }
        else
        setTimeout(() => {
            arrcard[0].classList.remove('rotate')
            arrcard[1].classList.remove('rotate')
            arrcard = "";
            arrfruit = "";
        }, 700);

    }
}

// funcion boton reiniciar juego
const ramdon = () => {
    for (let index = game.children.length; index >= 0; index--) {
      game.appendChild(game.children[(Math.random() * index) | 0]);
    }
};

const cards = document.querySelectorAll('.card')

button.addEventListener('click', () => {
ramdon();


for(let index of cards) {
    index.classList.remove('rotate')
}
})


// funcion puntaje
function calculateScore(numCorrect, numIncorrect) {
    return numCorrect - (numIncorrect / 2);
}


let correct = 10;
let incorrect = 3;
let score = calculateScore(correct, incorrect);
console.log(score);