const cajaTexto = document.querySelector('#cajaTexto')
const btn = document.querySelector('#btn')

/*
    Al pulsar el botón vamos a generar un número aleatorio
    Éste número aleatorio debe ser un entero entre  0 y 10
    Finalmente debemos mostrar el número en el span
*/

function generaNumero()
{
    // Math. Contiene muchos métodos aritméticos
    // Math.random() Genera un número aleatorio entre el 0 y 1
    let numeroAletorio = Math.random()
    console.log(numeroAletorio)
    let numeroMultiplicado = numeroAletorio * 10
    console.log(numeroMultiplicado)
    // Math.round()  Sirve para redondear un número a su entero más cercano
    let numero = Math.round(numeroMultiplicado)
    return numero
}

btn.addEventListener('click', function()
    {
        let numero = generaNumero()
        cajaTexto.innerText = numero
    }
)