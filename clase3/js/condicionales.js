/**
 * Hacer una pregunta al usuario
 * - El usuario va a responder
 * - Vamos a almacenar la respuesta en memoria
 */
let respuesta = prompt('¿que seleccionado ganó la copa del mundo Qatar 2022?')

// Ubicamos un elemento en el documento
const cajaTexto = document.querySelector('#cajaTexto')

if( respuesta == 'argentina' ){
    // bloque a ejecutar si la condición es true
    cajaTexto.innerText = '¡correcto!'
}else{
    // bloque a ejecutar si la condición es false
    cajaTexto.innerText = '¡incorrecto!'
}