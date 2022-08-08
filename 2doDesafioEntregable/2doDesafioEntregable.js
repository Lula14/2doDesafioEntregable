
function creoID() { return parseInt(Math.random() * 100) }

const productos = [
    {nombre: 'Cat Chow',
     id: creoID(),
     precio: "$100"}, 
     {nombre: 'Dogui',
     id: creoID(),
     precio: "$200"},
     {nombre: 'Pro PLan Urinary',
     id: creoID(),
     precio: "$300"},
     {nombre: 'Royal Canin FIT32',
     id: creoID(),
     precio: "$400"},
     {nombre: 'Old Prince',
     id: creoID(),
     precio: "$500"},
     {nombre: 'Pedigree Raza Peq',
     id: creoID(),
     precio: "$600"},
     {nombre: 'Balanced Gato Adulto',
     id: creoID(),
     precio: "$700"},
     {nombre: 'Whiskas Kitten',
     id: creoID(),
     precio: "$800"},
     {nombre: 'Eukanuba Mordida Grande',
     id: creoID(),
     precio: "$900"},
    ]



console.log (productos)
console.log (productos.length)
console.table (productos)

for (let index = 0; index < 9; index++) {
    alert(productos[index].nombre);

}
for (let producto of productos) { //array de objetos
    console.table(producto)}

let buscarProducto = ( prompt('Ingrese un producto de los mostrados anteriormente'))
function encontrarProducto () {
    console.log (productos.includes (buscarProducto))
}
encontrarProducto ()
creoID()
