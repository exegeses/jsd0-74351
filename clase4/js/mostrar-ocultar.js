// Ubicamos elementos dentro del DOM

const caja = document.querySelector('#caja')

// declaramos funciones de control
function ocultar()
{
    //caja.style.display = 'none'
    caja.style.opacity = '0'
}
function mostrar()
{
    //caja.style.display = 'block'
    caja.style.opacity = '1'
}
