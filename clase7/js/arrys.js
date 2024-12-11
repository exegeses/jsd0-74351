const cajaTexto = document.querySelector('#cajaTexto')


const marcas = [
                'Hermès', 'Zara','Boss',
                'Aeropostale','Kingpin','Tomy',
                'Gola','Hollister','Abercrombie',
                'JCrew'
              ]
console.log(marcas)
console.log(marcas[2])
console.table(marcas)

cajaTexto.innerText = marcas[6]

// Array con los días de la semana
const semana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sabado'
                ]
console.log(semana)

const fecha = new Date()
console.log(fecha)
// Obtenemos el número de día de la semana
const diaSemana = fecha.getDay()
console.log('dia de la semana:', diaSemana)

// combinamos el array copn los días de la semana 
// con el número que nos retorna getDay()
console.log(semana[diaSemana])