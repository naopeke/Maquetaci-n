// const button = document.querySelector('button');
// let h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
// const newColor = makeRandColor();

// document.body.style.backgroundColor = newColor;
// h1.innerText = newColor;

// });

// const makeRandColor = () => {

//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b}`
// }


/*----------------*/
//(1)
// let maxValue = 0xFFFFFF;
// let randomNumber = Math.floor(Math.random()* maxValue);
// randomNumber = randomNumber.toString(16);
// let randomColor = randomNumber.padStart(6,0);

//(2)
// function iniciar(){
//     let maxValue = 0xFFFFFF;
//     let randomNumber = Math.floor(Math.random()* maxValue);
// randomNumber = randomNumber.toString(16);
// let randomColor = randomNumber.padStart(6,'0');
// document.querySelector('.box').style.backgroundColor = `#${randomColor().toUpperCase()}`;
// // return `#${randomColor().toUppercase()}`
// }
// console.log(iniciar);

//(3)
// const randomColor = () => {
//     return "#" + Math.floor(Math.random()*16777215 .toString(16) .padStart(6,0));
// }

// (4)
// document.getElementById('iniciar').addEventListener('click', function(){
//     const colors = makeRandColor();
//     displayRandColor(colors);
// });

// function makeRandColor(){
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b}`;
// } 

// function displayRandColor(){
//     const colors = makeRandColor();
//    document.querySelector('.box').style.backgroundColor = colors;
// }



// //! iniciar //

let sequence = [];
let userSequence = [];
let nivel = 1;
let ultimoNivel = 10;
const arrColors = ['red', 'yellow', 'blue', 'green'];


document.querySelector('.level').textContent = `Nivel ${nivel}`;

document.getElementById('iniciar').addEventListener('click', function () {
    iniciar();
});

document.getElementById('procesar').addEventListener('click', function () {
    procesar();
});

document.getElementById('continuar').addEventListener('click', function () {
    continuar();
});

document.getElementById('resetear').addEventListener('click', function () {
    resetear();
});



function iniciar() {
    nivel = 1;
    sequence = [];
    userSequence = [];
    sequence.push(makeRandColor());
    // displaySecuencia();
    document.getElementById('continuar').style.display = 'none';
    document.getElementById('procesar').style.display = 'none';
}

function makeRandColor() {
    const colorIndex = Math.floor(Math.random() * arrColors.length);
    return arrColors[colorIndex];
}

function displayRandColor(color) {
    setTimeout(function () {
        document.querySelector('.colorbox').style.backgroundColor = color;
    }, 300);
}

// function displaySecuencia() {

// }





//! procesar la respuesta //
// document.getElementById('procesar').addEventListener('click', function(){
//     procesar();
// });


function procesar() {
    let userInput = document.getElementById('userInput').value.toLowerCase();
    let correctSequence = sequence[userSequence.length];

    if (userInput === correctSequence) {
        alert('¡Correcto!');
        userSequence.push(userInput);
        displayAnswer(correctSequence);

        if (userSequence.length === sequence.length) {
            document.getElementById('continuar').style.display = 'block'; 
            document.getElementById('procesar').style.display = 'none';
        }

    } else {
        alert('Incorrecto. Hazlo otra vez.');
        document.getElementById('continuar').style.display = 'none';
        continuar();
    }
}



function displayAnswer(correctSequence) {
    let commentBox = document.querySelector('.commentbox');
    commentBox.textContent = `Respuesta correcta: ${correctSequence}`;
}


//!continuar//

// document.getElementById('continuar').addEventListener('click', function(){
//     continuar();
// })

function continuar() {
    if (nivel < ultimoNivel) {
        userSequence = [];
        if (!procesar()) {
         sequence = [];
        } else {
            nivel++;
            for (let i = 0; i < nivel; i++) {
             sequence.push(makeRandColor());
            }
            displayMoreColors();
            document.getElementById('continuar').style.display = 'none';
            document.getElementById('procesar').style.display = 'none';
            document.querySelector('.level').textContent = `Nivel ${nivel}`;
        }
    } else {
        alert('GAME CLEARED');
        resetear();
    }
}

function displayMoreColors() {
    let i = 0;
    let displayCount = nivel;
    let interval = setInterval(function () {
        if (i === sequence.length || displayCount === 0) {
            clearInterval(interval);
            document.getElementById('procesar').style.display = 'block';
        } else {
            displayRandColor sequence[i]);
            i++;
            if (i === sequence.length) {
                displayCount--;
            }
        }
    }, 1000)
}



// //! recetear //

// document.getElementById('resetear').addEventListener('click', function(){
//     resetear();
// });

function resetear() {
    const initialColor = 'rgb(255,255,255)';
    document.querySelector('.box').style.backgroundColor = initialColor;
    document.querySelector('.commentbox').textContent = '';
    document.querySelector('.userInput').value = '';
    document.querySelector('.continuar').style.display = 'none';
    document.querySelector('.level').textContent = '';
 sequence = [];

}


