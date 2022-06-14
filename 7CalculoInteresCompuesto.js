//boton Simple
var bs = document.getElementById("botonSimple");
bs.addEventListener("click", calcularInteresSimple);

//boton Compuesto
var bc = document.getElementById("botonCompuesto");
bc.addEventListener("click", calcularInteresCompuesto);

//calculo de interes

function calcularInteres(porcentaje){
    return porcentaje / 100;
};

//interes simple 

function calcularInteresSimple(){
    //Capital inicial : k
    var ku = document.getElementById("inputk");
    var k = ku.value;
    // numero de periodos (años) : n
    var nu = document.getElementById("inputn");
    var n = nu.value;
    // Interes anual : i
    var iu = document.getElementById("inputi");
    var i = iu.value;
    // imprimir resultado 
    var resultado = document.getElementById("resultado");
    var is = parseInt(k) + (parseInt((k*(calcularInteres(i))*n)));
    return resultado.innerHTML = "El retorno de su inversión sera: " + is + " basado en un Interés Simple";
};

// interes compuesto 

function calcularInteresCompuesto(){
     //Capital inicial : k
     var ku = document.getElementById("inputk");
     var k = ku.value;
     // numero de periodos (años) : n
     var nu = document.getElementById("inputn");
     var n = nu.value;
     // Interes anual : i
     var iu = document.getElementById("inputi");
     var i = iu.value;
     // imprimir resultado 
     var resultado = document.getElementById("resultado");
     var ic = parseInt(k*(Math.pow((1+(calcularInteres(i))),n)));
     return resultado.innerHTML = "El retorno de su inversión sera: " + ic + " basado en un Interés Compuesto";
};