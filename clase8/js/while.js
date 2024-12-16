/*
    Si nosotros queremos ejecutar un bloque de código de manera repetida
    Ahí podemos utilizar las estructuras de iteración o bucles
    Una estructura de iteración va a repetir un bloque de código 
    mientras una condición sea verdadera
*/

function generarNumero()
{
    // Math. Contiene muchos métodos aritméticos
    // Math.random() Genera un número aleatorio entre el 0 y 1
    let numeroAletorio = Math.random()
    let numeroMultiplicado = numeroAletorio * 9 + 1
    // Math.round()  Sirve para redondear un número a su entero más cercano
    let numero = Math.round(numeroMultiplicado)
    return numero
}
const numMagico = generarNumero()
console.log('Numero mágico:', numMagico)
let check = true
let contador = 0

while( check )
{
    let numUsuario = prompt('ingrese un número entre el 1 y el 10')
    contador ++
    if( numUsuario == numMagico ){
        document.write('<h2>Felicitaciones! Acertaste el número mágico!</h2>')
        document.write('lo lograste en: ', contador, ' intento/s')
        check = false
    }
    else if( numUsuario > numMagico ){
        alert('te pasaste, intenta con un número más bajo')
    }
    //else if( numUsuario < numMagico ){
    else{
        alert('te quedaste corto, intenta con un número más alto')
    }
}
