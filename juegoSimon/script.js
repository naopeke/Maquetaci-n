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

//! iniciar //
document.getElementById('iniciar').addEventListener('click', function() {
    // let changeNumber = Math.floor(Math.random()*4) +1;

    // for(let i=0; i< changeNumber; i++){
    let maxValue = 0xFFFFFF;
    let randomNumber = Math.floor(Math.random() * maxValue);
    randomNumber = randomNumber.toString(16);
    let randomColor = randomNumber.padStart(6, '0');
    document.querySelector('.box').style.backgroundColor = `#${randomColor.toUpperCase()}`;

//     setTimeout()
// }
});

//↑　sale solo un color. //

//! recetear //
const initialColor = '#FFFFFF';
//... en camino...//

