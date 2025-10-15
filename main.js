/**
 * @author AlbertProfe
 * @version 2.0
 * @since 1.0
 */


const titulo = document.getElementById("titular");

/** funcion que cambia el texto en el DOM
 * esto ese si hubiera params y return:
 * @param {string} textCLiente - el texto que va a sustituir el anterior
 * @return {void} - no retorna nada, cambia el DOM
 */
function cambiarTexto(){
    titulo.innerHTML = "Texto cambiado!";
}

const numeroCliente = document.getElementById("numerito");

const divResultado = document.getElementById("resultadoCuadrado");

/** funcion que calcula el cuadrado de un numero
 * esto ese si hubiera params y return:
 * @param {number} numeroCliente - el cliente entra un numero para calcular el cuadrado
 * @return {number} - retorna el cuadrado
 */
function calcularCuadrado(){
    console.log(numeroCliente.value**2);
    divResultado.innerHTML = numeroCliente.value**2;
    numeroCliente.value=""; //limpia el input
}

