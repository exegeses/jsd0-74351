const cajaTexto = document.querySelector('#cajaTexto')

numero = 0
let intervalo = ''

function darFormato( milisegundos )
{
    const minutes = Math.floor(milisegundos / 60000); // Minutos completos
    const seconds = Math.floor((milisegundos % 60000) / 1000); // Segundos restantes
    const millis = milisegundos % 1000; // Milisegundos restantes

    // Formatear los números con ceros iniciales si es necesario
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMillis = String(millis).padStart(3, '0');

    cajaTexto.innerText = `${formattedMinutes}:${formattedSeconds}:${formattedMillis}`;
}

function incrementar()
{
    numero ++ // numero = numero + 1
    darFormato(numero)
}

function start()
{
    intervalo = setInterval(incrementar)
}
function pause()
{
    clearInterval(intervalo)
}
function reset()
{
    numero = 0
    darFormato(numero)
}