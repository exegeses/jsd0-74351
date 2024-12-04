const cajaTexto = document.querySelector('#cajaTexto')

let numero = 0

function incrementar()
{
    numero = numero + 1
    cajaTexto.innerText = numero
}

incrementar()
setInterval(incrementar, 500)