const caja = document.querySelector('#caja')
const boton = document.querySelector('#boton')

/*
    Obtener un número aleatorio entero entre 1 y 6
    Mostrar una imagen (dentro del div "caja") 
        cara de dado según el número que hayamos obtenido
    Reproducir el audio
*/

function generarNumero()
{
    let numeroAleatorio = Math.random()
    let numeroMultiplicado = ( numeroAleatorio * 5 ) + 1
    let numero = Math.round(numeroMultiplicado)

    //let numero = Math.round( Math.random()*5  + 1 )
    return numero
}
function cambiarImagen( numero )
{
    caja.innerHTML = `<img src="red/dice-${numero}.png">`
}
function playAudio()
{
    const sonido = new Audio('audio/dice.mp3')
    sonido.play()
}

boton.addEventListener(
        'click',
        function()
        {
            let numero = generarNumero()
            cambiarImagen(numero)
            playAudio()
        }
)