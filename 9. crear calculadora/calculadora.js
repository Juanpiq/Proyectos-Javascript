window.onload = function (){
    var signos = "+-*/"
    var x = new Array();
    document.getElementById("valor").onkeypress = function(event){
        return numeros(event);
    }

    x = document.querySelectorAll("input[type=button]");
    for(var i = 0; i < x.length; i++){
        x[i].onclick = function(){
            let n = this.value;
            if(n == "C"){
                borrar();
            } else if(n == "<"){
                borrarCaracter();
            } else if(n == "="){
                calcular();
            } else if(signos.indexOf(n) > -1){
                validaSigno(n);
            } else{
                regresar(n);
            }
        }
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

function borrar(){
    console.log("Borrar");
}

function borrarCaracter(){
    console.log("Borrar caracter");
}

function calcular(){
    console.log("Calcular");
}

function validaSigno(n){
    console.log("Validar signo");
}

function regresar(n){
    console.log("Regresar número");
}