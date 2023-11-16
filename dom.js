let showMyID = document.getElementById("myId");
console.log(showMyId);
//<article id="myId">Hola</article>

let myClassName = document.getElementsByClassName("section2");
//array section2 0:article.section2 1:article.section2

//tagname
//section, section, section  tag name

function isAlert(){
    alert('Hello World');
    console.log('hola leo');
}

//html
<article onlick="isAlert()">Click</article>

//get set単に出力
console.log("Original: ", myId.getAttribute("id")); //original: myId

myId.removeAttribue("id");
console.log("Eliminado :", myId.getArribute("id")); //null

myId.setAttribue("id", "newId"); //propiedad, nombre
console.log("Cambiado: ", myId.getAttribute("id")); //newId


//class
myTagName[0].classList.add("add");
//section primero añadir la class add
myTagName[0].classList.remove("add");

//style
myId.style.cssText="background:red; color:white";

//nuevas etiquetas
let newEelemnt = document.createElement("p");
myTagName[0].appendChild(newElement);
newElement.textContent = "Primer text";
console.log(newElement.textContent);
newElement.textContent += "Segundo text";
console.log(newElement.textContent);

//innerHTML
console.log(myTagName[0].innerHTML);
myTagName[0].innerHTML += `<p class="clor:blue">Agrego un nuevo`

console.log(myTagName[0].innerHTML);
console.log(myTagName[0]);


//eventListenr
const myAlert = () => {
    console.log("Hello World")
    alert("hola que tal");
}

myId.addEventListener("click, myAlert");

//
// html
<input type="text" id="input_name>
<button onclick="getName()">Send</button>
<p id="imprimir"></p>

//js</input>
function getName(){
    let name = document.getElementById('input_name').ariaValueMax;

    //imprimir en pantalla
    document.getElementById('imprimir').innerHTML = name
}