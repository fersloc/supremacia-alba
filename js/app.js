console.log("Colo Colo campeon eterno")

const colocoloRango = document.getElementById('colocoloRango')
const goles = document.getElementById('goles')
const campeonatos = document.getElementById('campeonatos')
const arrayGoles = ['0','853','1683','2526','3326','4076','4913','5722',]

colocoloRango.addEventListener('input', () => {
    console.log('campeeeeeeeeeeooooooooooonnnnnnn')
    console.log(colocoloRango.value)
    campeonatos.textContent = colocoloRango.value
    goles.textContent = arrayGoles [(colocoloRango.value)/7]
})