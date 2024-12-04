/*
    Crear un reloj digital
    formato: hh:mm:ss           i.e.: 10:47:08
*/
// Ubicamos elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

// declaramos funciones de control
function agregarCero( numero )
{
    if( numero < 10 ){
        numero = '0'+ numero
    }
    return numero
}


function mostrarReloj()
{
    // Creamos un objeto de fecha
    const fecha = new Date()
    console.log('fecha:', fecha)

    // Obtenemos el número de las horas
    let horas = fecha.getHours()
    horas = agregarCero(horas)
    console.log('horas:', horas)

    // Obtenemos el número de los minutos
    let minutos = fecha.getMinutes()
    minutos = agregarCero(minutos)
    console.log('minutos:', minutos)

    // Obtenemos el número de los segundos
    let segundos = fecha.getSeconds()
    segundos = agregarCero(segundos)
    console.log('segundos:', segundos)

    // Escribimos dentro del span
    //cajaTexto.innerText = horas +':'+ minutos +':'+ segundos
    cajaTexto.innerText = `${horas}:${minutos}:${segundos}`
}

// invocamos funciones
mostrarReloj()
// actualizar el llamado a mostrarReloj
setInterval(mostrarReloj, 1000)