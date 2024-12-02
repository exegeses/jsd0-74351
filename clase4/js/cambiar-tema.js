// Ubicamos elementos dentro del DOM
const hoja = document.querySelector('#hoja')

/* Vamos a crear una variable auxiliar */
// tema inicial
let tema = 'dark'

// declaramos funciones de control
function cambiarTema()
{
    if( tema == 'dark' ){
        hoja.href = '../css/light.css'
        tema = 'light'
    }
    else{
        hoja.href = '../css/estilos.css'
        tema = 'dark'
    }
}