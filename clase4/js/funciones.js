/* funcion para saludar */

function saludar( nombre )
{
    console.log('Hola', nombre)
}

saludar('Rick')
saludar('Morty')
saludar('Summer')

/*  Función para sumar dos números */
function sumar( numero1, numero2 )
{
        return numero1 + numero2
}

let resultado = sumar( 10, 20 )
console.log(resultado)
console.log( sumar(5, 10) )

/* función de conversión de temperatura */
function convertirTem( grados, unidad )
{
    if( unidad == 'f'  ){
        //convertir a Fahrenheit
        return ( grados * 1.8 ) + 32
    }
    else{
        // convertir a Celsius
        return ( grados - 32 ) / 1.8
    }
}


let celsius = convertirTem( 25, 'f' )
let farenheit = convertirTem( 77, 'c' )
console.log( '25 Fº =', celsius)
console.log( '77 Cº =', farenheit )