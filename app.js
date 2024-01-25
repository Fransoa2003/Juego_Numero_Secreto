let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarElemento(elemento, texto){
    let parrafo = document.querySelector(elemento);
    parrafo.innerHTML = texto;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    if (numeroUsuario === numeroSecreto){
        asignarElemento('p', `Lo lograste en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto){
            asignarElemento('p','El numero es menor');
        }else{
            asignarElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let nuemroGenerado = Math.floor(Math.random()*numeroMax)+1;
    //Si ya sortiamos todos los numeros
    if (listaNumerosSorteados.length == numeroMax){
        asignarElemento('p', 'Ya se sortearon todos los numeros');
    }else{
        // Si el nuemro generado esta inclido en la lista
        if (listaNumerosSorteados.includes(nuemroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(nuemroGenerado);
            return nuemroGenerado;
        }
    }
}
function condicionales(){
    asignarElemento('h1', 'Juego del numero secreto');
    asignarElemento('p', `Escoge un numero del 1 al ${numeroMax} del numero secreto`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //Primero limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar el numero alt
    //inicializar el numero de intentos
    condicionales();
    //deshabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionales();