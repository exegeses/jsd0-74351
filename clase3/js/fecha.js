/*
    Mostrar la fecha actual
    formato:  dd/mm/yyyy    (27/11/2024)
*/
// Ubicar elementos dentro del documento
const cajaTexto = document.querySelector('#cajaTexto')

// creamos objeto de fecha
const fecha = new Date()
console.log('fecha:', fecha)

// Obtenemos el número de día de mes
let diaMes = fecha.getDate()
if( diaMes < 10 ){
    diaMes = '0' + diaMes
}
console.log('dia:', diaMes)

// Obtenemos el número de mes actual
let mes = fecha.getMonth() + 1 
if( mes < 10 ){
    mes = '0' + mes
}
console.log('mes:', mes)

// Obtenemos el número de año actual
let anio = fecha.getFullYear();
console.log('año:', anio)

// Escribimos en el span con el id cajaTexto
 //# concatenación
 //cajaTexto.innerText = diaMes +'/'+ mes +'/'+ anio
 //# interpalacioón
cajaTexto.innerText = `${diaMes}/${mes}/${anio}`
