/*
    - Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre, 
        almacenamos ese dato en memoria
    - Escribimos el nombre de usuario en el span con el id cajaTexto
*/

let nombre = prompt('Ingrese su nombre')
//document.write(nombre)
//document.write('éste texto se va a escribir al final del contenido')
cajaTexto.innerText = nombre