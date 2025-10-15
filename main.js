const titulo = document.getElementById("titular");


function cambiarTexto(){
    titulo.innerHTML = "Texto cambiado!";
}

const numeroCliente = document.getElementById("numerito");

const divResultado = document.getElementById("resultadoCuadrado");


function calcularCuadrado(){
    console.log(numeroCliente.value**2);
    divResultado.innerHTML = numeroCliente.value**2;
    numeroCliente.value=""; //limpia el input
}

