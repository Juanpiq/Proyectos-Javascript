window.onload = function (){
    document.getElementById("valor").onkeypress = function(event){
        return numeros(event);
    }
}

//FUNCIONES

function numeros(e){
    let tecla = e.keyCode;
    console.log(tecla)
    let teclado = String.fromCharCode(tecla); //traduce el caracter presionado
    let especiales = new Array();
    especiales["backspace"] = 8;
    especiales["izquierda"] = 37;
    especiales["derecha"] = 39;
    let bandera = false;
    let numeros = "0123456789.";

    bandera = especiales.includes(tecla);

    //para solo permitir que acepte numeros 
    if(numeros.indexOf(teclado) == -1 && bandera == false){
        return false;
    }
}