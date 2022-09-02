
const productos = document.querySelector("#productos")
const kilos = document.querySelector("#kilos")
const cantidad = document.querySelector("#cantidad")
const botonCalcular = document.querySelector("#botonCalcular")
const importe = document.querySelector("span")




const datosProductos = [
{ tipo: 'CatChow Adulto', factor: 1.4 },
{ tipo: 'Dogui', factor: 1.25 },
{ tipo: 'Pro Plan', factor: 1.75 },
{ tipo: 'Royal Canin', factor: 1.8 },
{ tipo: 'Old Prince', factor: 1.5 },
{ tipo: 'Pedigree', factor: 1.3 },
{ tipo: 'Balanced', factor: 1.65 },
{ tipo: 'Whiskas', factor: 1.4 },
{ tipo: 'Eukanuba', factor: 1.7 },
]


const datosKilos = [
{ tipo: 1 , factor: 1 },
{ tipo: 3 , factor: 2.9 },
{ tipo: 7.5 , factor: 6.7 },
{ tipo: 15 , factor: 13.5 },]

const costoKilo = 350


 localStorage.setItem (datosProductos, datosKilos)

