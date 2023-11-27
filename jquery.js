function mostrar(){
    document.getElementById("parrafo").style.display ="block";
}

function ocultar(){
    document.getElementById("parrafo").style.display="none";
}

jQuery (() =>{

    $("mostrar").on("click", ()=>{
        $("#parrafo2").show(1000);
    })

    $("#ocultar").on("click", ()=>{
        $("#parrafo2").hide(1000);
    })
})


$("#button").on("click", ()=>{
    ("#parrafo3").prepend('<button id="nuevo> class="btn btn-warning" onclick="nuevo()">Boton nuevo</button> '); 
    
$("#parrafo3").append('<button id="nuevo" class="btn btn-warning onclick="nueva"')    
})

$("para")


function nueva(){
    $
}

// bootstrap;modal
// array de carrito=>push
// suma
// nombre de prenda y suma
// function, prenda1, prenda2, price,=>Push to array
// bucleForyJquery