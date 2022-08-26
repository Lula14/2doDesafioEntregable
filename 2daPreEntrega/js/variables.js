
const productos = document.querySelector("#productos")
const kilos = document.querySelector("#kilos")
const cantidad = document.querySelector("#cantidad")
const btnCalcular = document.querySelector("#button")
const importe = document.querySelector("span")
const btnEnviar = document.querySelector("span.guardar")



const datosProductos = [
{ tipo: 'CatChow Adulto', factor: 350 },
{ tipo: 'Dogui', factor: 250 },
{ tipo: 'Pro Plan', factor: 750 },
{ tipo: 'Royal Canin', factor: 800 },
{ tipo: 'Old Prince', factor: 500 },
{ tipo: 'Pedigree', factor: 300 },
{ tipo: 'Balanced', factor: 650 },
{ tipo: 'Whiskas', factor: 400 },
{ tipo: 'Eukanuba', factor: 700 },
]


const datosKilos = [
{ tipo: '1 KG', factor: 1.05 },
{ tipo: '3 KG', factor: 1.035 },
{ tipo: '7,5 KG', factor: 1.025 },
{ tipo: '15 KG', factor: 1.015 },]

const CostoKilo = 14