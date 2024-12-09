const cajaTexto = document.querySelector('#cajaTexto')
const btn = document.querySelector('#btn')


//obj.addEventListener('evento', acción)
btn.addEventListener('click', function()
    {
        cajaTexto.innerText = 'hiciste click!'
    }
)
btn.addEventListener('mouseover', function()
    {
        cajaTexto.innerText = 'mouse sobre'
    }
)
btn.addEventListener('mouseout', function()
    {
        cajaTexto.innerText = 'reposo'
    }
)