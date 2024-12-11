const rotador = document.querySelector('#rotador')
console.log(rotador);

console.log(rotador.children)
const anterior = rotador.children[0]
const siguiente = rotador.children[2]

const span = rotador.children[1]

// array de marcas
const marcas = [
                'Hermès', 'Zara','Boss',
                'Aeropostale','Kingpin','Tomy',
                'Gola','Hollister','Abercrombie',
                'JCrew', 'H&M', 'AMD'
  ]
console.log(marcas)  

// #### estado inicial
let llave = 3
// Mostrar una de las marcas dentro del spam
span.innerText = marcas[llave]

siguiente.addEventListener('click', function()
        {
            llave++ 
            if( llave == marcas.length ){
                llave = 0
            }
            span.innerText = marcas[llave]
        }
)
anterior.addEventListener('click', function()
        {
            llave--
            if( llave < 0 ){
                llave = 9
            }
            span.innerText = marcas[llave]
        }
)